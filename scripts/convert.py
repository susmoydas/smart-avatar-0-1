"""One-time converter: turns the HTML site (smarter-better repo) into this Next.js project.
Usage: python3 scripts/convert.py <path-to-html-repo>
Writes: app/globals.css, lib/*-engine.js, components/HomeMarkup.jsx, components/Footer.jsx,
components/Handheld.jsx, content/site.js and copies public assets."""
import sys, os, re, json, shutil, html as H
SRC=sys.argv[1]; DST=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
rd=lambda p: open(os.path.join(SRC,p)).read()
def wr(p,s):
    p=os.path.join(DST,p);os.makedirs(os.path.dirname(p),exist_ok=True);open(p,'w').write(s);print('wrote',os.path.relpath(p,DST))

# ---------- HTML -> JSX ----------
ATTR={'class':'className','for':'htmlFor','tabindex':'tabIndex','autocomplete':'autoComplete','novalidate':'noValidate','readonly':'readOnly','crossorigin':'crossOrigin','maxlength':'maxLength','colspan':'colSpan','rowspan':'rowSpan','srcset':'srcSet'}
VOID={'img','input','br','hr','meta','link','source','area','col','wbr'}
def camel(k):
    if k.startswith('--'):return repr(k)
    if k.startswith('-webkit-'):k='Webkit-'+k[8:]
    parts=k.split('-');return parts[0]+''.join(x[:1].upper()+x[1:] for x in parts[1:])
def style_obj(v):
    items=[]
    for decl in [d for d in v.split(';') if d.strip()]:
        k,_,val=decl.partition(':');items.append(f'{camel(k.strip())}:{json.dumps(H.unescape(val.strip()))}')
    return '{{'+','.join(items)+'}}'
def conv_tag(m):
    closing,name,attrs,selfc=m.group(1),m.group(2),m.group(3),m.group(4)
    if closing:return f'</{name}>'
    out=[]
    for am in re.finditer(r'([:@\w-]+)(?:\s*=\s*"([^"]*)")?',attrs):
        k,v=am.group(1),am.group(2)
        nk=ATTR.get(k,k)
        if v is None:
            out.append(f'{nk}=""' if k.startswith(('data-','aria-')) else nk)
        elif k=='style':out.append(f'style={style_obj(v)}')
        else:out.append(f'{nk}="{v}"')
    a=(' '+' '.join(out)) if out else ''
    return f'<{name}{a} />' if (name.lower() in VOID or selfc) else f'<{name}{a}>'
def to_jsx(markup):
    markup=re.sub(r'<!--(.*?)-->',lambda m:'{/*'+m.group(1)+'*/}',markup,flags=re.S)
    # escape braces in text (outside tags)
    parts=re.split(r'(<[^>]+>|\{/\*.*?\*/\})',markup,flags=re.S)
    for i,p in enumerate(parts):
        if p and not p.startswith('<') and not p.startswith('{/*'):parts[i]=p.replace('{','{"{"}').replace('}','{"}"}')
    markup=''.join(parts)
    return re.sub(r'<(/?)([a-zA-Z][\w-]*)((?:\s+[:@\w-]+(?:\s*=\s*"[^"]*")?)*)\s*(/?)>',conv_tag,markup)

idx=rd('index.html')
body=idx[idx.index('<body data-page="home">')+len('<body data-page="home">'):idx.index('<script src="https://cdnjs')]
wr('components/HomeMarkup.jsx','// Home page markup (converted from the HTML version). Behaviour lives in lib/home-engine.js.\nexport default function HomeMarkup(){\n  return (<>\n'+to_jsx(body)+'\n  </>);\n}\n')
foot=re.search(r'<footer id="foot">.*?</footer>',body,re.S).group(0)
wr('components/Footer.jsx','// Footer with the "SAY HI" dot playground (behaviour in lib/site-engine.js)\nexport default function Footer(){\n  return (\n'+to_jsx(foot)+'\n  );\n}\n')
arena=re.search(r'<div class="arena" id="arena">.*?\n  </div>\n(?=</div></section>)',body,re.S).group(0)
wr('components/Handheld.jsx','// Pocket arcade: handheld device, cartridges and panels (games in lib/arcade-engine.js)\nexport default function Handheld(){\n  return (\n'+to_jsx(arena)+'\n  );\n}\n')

# ---------- engines: the same scripts, as functions you call once per page ----------
HEAD="import gsap from 'gsap';\nimport { ScrollTrigger } from 'gsap/ScrollTrigger';\nimport Lenis from 'lenis';\n"
def engine(name,fn,code,note):
    code=code.replace('window.Lenis','Lenis')
    wr(f'lib/{name}.js',f'// {note}\n'+HEAD+f'let started=false;\nexport function {fn}(){{\n  if(started||typeof window==="undefined")return;started=true;\n  gsap.registerPlugin(ScrollTrigger);\n'+code+'\n}\n')
home_js=idx[idx.index('<script>\n(()=>{')+len('<script>\n'):idx.index('</script>\n</body>')]
engine('home-engine','initHome',home_js,'Home page behaviour: hero, dot morph, scroll scenes, games, footer, dock, cursor, transitions.')
engine('site-engine','initSite',rd('assets/site.js'),'Inner page behaviour: dock, cursor, smooth scroll, page wipe, dot words, morph stories, gallery, level path, chat, footer.')
engine('arcade-engine','initArcade',rd('assets/arcade.js'),'Pocket arcade: the race plus snake, blocks and shooter cartridges.')

# ---------- styles ----------
css=rd('assets/site.css')
wr('app/globals.css','/* SmartAvatar design system. Colour tokens live in :root at the top. */\n'+css)

# ---------- content ----------
ns={}
src=rd('src/build.py')
start=src.index('FEAT=[');end=src.index('def feat_card')
exec(src[start:end],{'e':H.escape},ns)
FEAT,CASES,PROJ=ns['FEAT'],ns['CASES'],ns['PROJ']
P=[dict(slug=s,name=n,start=a,end=b,color=c,shape=sh,desc=d) for s,n,a,b,c,sh,d in PROJ]
wr('content/site.js','// All page content. Edit text, colours and shapes here.\n'
   +'export const FEATURES = '+json.dumps(FEAT,indent=1,ensure_ascii=False)+';\n'
   +'export const CASES = '+json.dumps(CASES,indent=1,ensure_ascii=False)+';\n'
   +'export const PROJECTS = '+json.dumps(P,indent=1,ensure_ascii=False)+';\n'
   +"export const STEP_SHAPES = {'live-twin':['crane','avatar','globe'],'ota-updates':['chip','bolt','shield'],'remote-control':['shield','pad','car'],'edge-ai':['globe','chip','robot'],'zero-trust':['people','shield','chip']};\n"
   +"export const SITE = { name:'SmartAvatar', url:'https://smartavatar-site.vercel.app', email:'info@smartavatar.nl', description:'SmartAvatar gives real machines a live, trusted avatar. Watch them, update them and keep them safe from anywhere. Deep tech from Delft.' };\n")

# ---------- public assets ----------
for f in ['logo.svg','logo-static.svg','favicon.svg','og.png']:
    shutil.copy(os.path.join(SRC,'assets',f),os.path.join(DST,'public/assets',f));print('copied',f)
for f in ['robots.txt','sitemap.xml']:
    shutil.copy(os.path.join(SRC,f),os.path.join(DST,'public',f))
print('done')
