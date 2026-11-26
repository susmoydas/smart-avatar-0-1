"""Exports every icon and halftone illustration as a standalone SVG into public/assets/icons.
It renders them in headless Chrome with the same drawing code the site uses.
Usage: python3 scripts/export-svgs.py"""
import os, re, json, subprocess, html
DST=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
eng=open(os.path.join(DST,'lib/site-engine.js')).read()
shapes=eng[eng.index('/* ================= SHAPES'):eng.index('/* ===== shared page behaviour')]
SOC={'linkedin':["..........",".##.......",".##.......","..........",".##.##.##.",".##.######",".##.##..##",".##.##..##",".##.##..##",".........."],
 'youtube':["..........","...#......","...##.....","...###....","...####...","...####...","...###....","...##.....","...#......",".........."],
 'instagram':["..........",".########.",".#......#.",".#..##.##.",".#.#..#.#.",".#.#..#.#.",".#..##..#.",".#......#.",".########.",".........."],
 'x':["..........",".##....##.","..##..##..","...####...","....##....","....##....","...####...","..##..##..",".##....##.",".........."]}
page=f"""<!doctype html><html><body><pre id="out"></pre><script>
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
{shapes}
const out={{}};
// halftone illustrations (circles, ink + a few soft accents)
for(const name of Object.keys(SH)){{const cell=6,S=240;let s=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${{S}} ${{S}}">`;
  sample(name,cell).forEach(p=>{{const t=tint(p.x,p.y);s+=`<circle cx="${{(p.x*S).toFixed(1)}}" cy="${{(p.y*S).toFixed(1)}}" r="${{(p.r*cell*(t?.62:.5)*S/200).toFixed(2)}}" fill="${{t||'#111'}}"/>`}});out['shape-'+name]=s+'</svg>'}}
// social icons (round pixels)
const SOC={json.dumps(SOC)};
for(const k in SOC){{let s='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><rect width="20" height="20" fill="#111"/>';SOC[k].forEach((r,y)=>[...r].forEach((ch,x)=>{{if(ch==='#')s+=`<circle cx="${{x*2+1}}" cy="${{y*2+1}}" r="1.05" fill="#fff"/>`}}));out['social-'+k]=s+'</svg>'}}
document.getElementById('out').textContent=JSON.stringify(out);
</script></body></html>"""
tmp=os.path.join(DST,'scripts/.export.html');open(tmp,'w').write(page)
chrome='/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
dom=subprocess.run([chrome,'--headless=new','--disable-gpu','--virtual-time-budget=3000','--dump-dom','file://'+tmp],capture_output=True,text=True).stdout
os.remove(tmp)
data=json.loads(html.unescape(re.search(r'<pre id="out">(.*?)</pre>',dom,re.S).group(1)))
od=os.path.join(DST,'public/assets/icons');os.makedirs(od,exist_ok=True)
for k,v in data.items():open(os.path.join(od,k+'.svg'),'w').write(v)
# cartridge icons: crisp pixel art with an ink outline (12×12 grid)
def rect(x0,y0,x1,y1):return [(x,y) for y in range(y0,y1+1) for x in range(x0,x1+1)]
CART={'race':[(rect(1,5,10,7),'C'),(rect(3,3,8,4),'C'),(rect(4,3,7,4),'#fff'),([(1,6)],'#F2A7E6'),([(10,6)],'#fff'),(rect(2,8,3,9)+rect(8,8,9,9),'#111')],
 'snake':[([(2,2),(3,2),(4,2),(5,2),(6,2),(7,2),(7,3),(7,4),(6,4),(5,4),(4,4),(3,4),(2,4),(2,5),(2,6),(3,6),(4,6),(5,6),(6,6),(7,6),(8,6),(8,7),(8,8)],'C'),([(8,9),(8,10)],'C'),([(9,10)],'#fff'),([(10,3),(10,4)],'#F2A7E6')],
 'blocks':[([(2,9),(3,9),(4,9),(3,8)],'C'),([(6,7),(6,8),(6,9),(7,9)],'#F2A7E6'),([(8,8),(9,8),(8,9),(9,9)],'#9CC3EE'),([(4,2),(4,3),(4,4),(4,5)],'C')],
 'shooter':[([(5,7),(6,7)]+rect(4,8,7,8)+rect(3,9,8,9)+[(3,10),(8,10)],'C'),([(5,9),(6,9)],'#fff'),([(5,4),(5,5)],'#fff'),(rect(2,1,3,2)+rect(8,1,9,2),'#F2A7E6')]}
COL={'race':'#E6DEFF','snake':'#8FD9C9','blocks':'#ABABF5','shooter':'#F2A7E6'}
for k,layers in CART.items():
    s='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" shape-rendering="crispEdges">'
    for cells,c in layers:
        for x,y in cells:s+=f'<rect x="{2+(x-1)*2}" y="{2+(y-1)*2}" width="6" height="6" fill="#111"/>'
    for cells,c in layers:
        for x,y in cells:s+=f'<rect x="{2+x*2}" y="{2+y*2}" width="2" height="2" fill="{COL[k] if c=="C" else c}"/>'
    open(os.path.join(od,f'cart-{k}.svg'),'w').write(s+'</svg>')
print(len(os.listdir(od)),'icons in public/assets/icons')
