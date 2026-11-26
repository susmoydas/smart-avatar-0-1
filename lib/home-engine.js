// Home page behaviour: hero, dot morph, scroll scenes, games, footer, dock, cursor, transitions.
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
let started=false;
export function initHome(){
  if(started||typeof window==="undefined")return;started=true;
  gsap.registerPlugin(ScrollTrigger);
(()=>{
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v)), lerp=(a,b,t)=>a+(b-a)*t, ease=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;
gsap.registerPlugin(ScrollTrigger);
/* always start at the hero on reload */
if('scrollRestoration' in history)history.scrollRestoration='manual';
ScrollTrigger.clearScrollMemory&&ScrollTrigger.clearScrollMemory('manual');
if(location.hash)history.replaceState(null,'',location.pathname+location.search);
window.scrollTo(0,0);addEventListener('beforeunload',()=>window.scrollTo(0,0));
let lenis=null;
if(Lenis&&!RM){lenis=new Lenis({lerp:.07,smoothWheel:true,wheelMultiplier:.85,touchMultiplier:1.4});window.lenis=lenis;lenis.on('scroll',ScrollTrigger.update);gsap.ticker.add(t=>lenis.raf(t*1000));gsap.ticker.lagSmoothing(0);ScrollTrigger.addEventListener('refresh',()=>lenis.resize())}
let toastT=null;const toast=m=>{const t=document.getElementById('toast');t.textContent=m;t.classList.add('on');clearTimeout(toastT);toastT=setTimeout(()=>t.classList.remove('on'),2200)};
document.addEventListener('click',e=>{const a=e.target.closest('a');if(!a)return;const pg=a.dataset.page,h=a.getAttribute('href')||'';
  if(pg&&h==='#'){e.preventDefault();e.stopPropagation();toast('Opens '+pg+' · see page overview');return}
  if(h.startsWith('#')&&h.length>1){const el=document.querySelector(h)||(h==='#contact'?document.getElementById('foot'):null);if(el){e.preventDefault();const far=Math.abs(el.getBoundingClientRect().top)>innerHeight*1.2;if(!lenis){el.scrollIntoView({behavior:far?'auto':'smooth'});return}if(!far){lenis.scrollTo(el,{duration:1,easing:t=>1-Math.pow(1-t,3)});return}gsap.timeline().to('#fade',{opacity:1,duration:.22,ease:'power1.in'}).add(()=>{lenis.scrollTo(el,{immediate:true,force:true});ScrollTrigger.update()}).to('#fade',{opacity:0,duration:.4,delay:.08,ease:'power1.out'})}}},true);
const DPR=Math.min(2,devicePixelRatio||1);

/* ================= SHAPES (drawn in a 200×200 box, shaded so the halftone has tone) ================= */
function gr(c,x0,y0,x1,y1,a='#000',b='#9A9A9A'){const g=c.createLinearGradient(x0,y0,x1,y1);g.addColorStop(0,a);g.addColorStop(1,b);return g}
function rr(c,x,y,w,h,r){c.beginPath();c.roundRect(x,y,w,h,r);c.fill()}
function circ(c,x,y,r){c.beginPath();c.arc(x,y,r,0,7);c.fill()}
const W_='#fff';
const SH={
 robot(c){c.fillStyle=gr(c,60,160,140,190);rr(c,55,166,90,24,8);c.fillStyle=gr(c,80,140,120,180,'#111','#777');circ(c,100,158,20);
   c.save();c.translate(100,156);c.rotate(-.55);c.fillStyle=gr(c,-14,-90,14,0,'#222','#888');rr(c,-13,-88,26,92,13);c.fillStyle='#000';circ(c,0,-84,15);c.fillStyle=W_;circ(c,0,-84,5);
   c.translate(0,-84);c.rotate(1.45);c.fillStyle=gr(c,-11,-76,11,0,'#333','#aaa');rr(c,-11,-74,22,78,11);c.translate(0,-72);c.fillStyle='#000';rr(c,-16,-10,32,14,4);rr(c,-16,-30,7,22,3);rr(c,9,-30,7,22,3);c.restore()},
 tractor(c){c.fillStyle=gr(c,70,85,180,135,'#111','#999');rr(c,72,88,112,48,8);c.fillStyle=gr(c,52,36,116,100,'#000','#777');rr(c,52,36,66,66,10);c.fillStyle=W_;rr(c,62,46,46,30,5);
   c.fillStyle='#222';rr(c,152,52,9,38,3);const R=c.createRadialGradient(56,128,6,62,140,44);R.addColorStop(0,'#bbb');R.addColorStop(1,'#000');c.fillStyle=R;circ(c,62,140,44);c.fillStyle=W_;circ(c,62,140,13);
   const R2=c.createRadialGradient(150,148,4,154,154,28);R2.addColorStop(0,'#bbb');R2.addColorStop(1,'#000');c.fillStyle=R2;circ(c,154,154,28);c.fillStyle=W_;circ(c,154,154,8)},
 crane(c){c.fillStyle=gr(c,40,30,58,190);rr(c,40,34,18,156,2);c.strokeStyle=W_;c.lineWidth=3;for(let y=44;y<186;y+=18){c.beginPath();c.moveTo(42,y);c.lineTo(56,y+16);c.stroke()}
   c.fillStyle=gr(c,10,26,195,40,'#000','#888');rr(c,10,26,186,14,2);c.fillStyle='#111';rr(c,12,40,30,16,3);c.fillStyle='#000';c.fillRect(160,40,3,64);
   c.fillStyle=gr(c,130,104,190,146,'#333','#bbb');rr(c,128,104,62,40,4);c.fillStyle=W_;for(let x=138;x<186;x+=10)c.fillRect(x,110,3,28);c.fillStyle='#000';rr(c,20,184,60,8,2)},
 cart(c){c.fillStyle=gr(c,30,60,170,140,'#111','#aaa');rr(c,28,62,144,80,12);c.fillStyle=W_;c.fillRect(91,76,18,52);c.fillRect(74,93,52,18);
   c.fillStyle='#222';c.fillRect(96,36,8,28);c.fillStyle=gr(c,60,14,140,52,'#000','#888');rr(c,58,12,84,44,8);c.fillStyle=W_;rr(c,66,20,68,28,4);c.fillStyle='#000';c.lineWidth=3;c.strokeStyle='#000';c.beginPath();c.moveTo(70,36);c.lineTo(86,36);c.lineTo(92,26);c.lineTo(100,44);c.lineTo(106,34);c.lineTo(130,34);c.stroke();
   c.fillStyle='#000';circ(c,54,162,15);circ(c,146,162,15);c.fillStyle=W_;circ(c,54,162,5);circ(c,146,162,5);c.fillStyle='#111';rr(c,170,70,14,10,3)},
 car(c){c.fillStyle=gr(c,20,90,180,150,'#111','#aaa');rr(c,18,96,164,50,18);c.fillStyle=gr(c,50,56,150,100,'#000','#777');rr(c,48,58,104,48,22);c.fillStyle=W_;rr(c,60,66,36,28,8);rr(c,104,66,36,28,8);
   c.fillStyle='#000';circ(c,56,148,20);circ(c,146,148,20);c.fillStyle=W_;circ(c,56,148,7);circ(c,146,148,7);c.fillStyle=W_;rr(c,22,108,16,8,3)},
 shield(c){c.fillStyle=gr(c,40,20,160,190,'#000','#aaa');c.beginPath();c.moveTo(100,18);c.lineTo(168,42);c.quadraticCurveTo(168,140,100,186);c.quadraticCurveTo(32,140,32,42);c.closePath();c.fill();
   c.fillStyle=W_;rr(c,78,92,44,40,6);c.strokeStyle=W_;c.lineWidth=8;c.beginPath();c.arc(100,90,15,Math.PI,0);c.stroke();c.fillStyle='#000';circ(c,100,108,5)},
 avatar(c){c.fillStyle=gr(c,40,30,160,150,'#000','#a0a0a0');rr(c,38,44,124,108,44);c.fillStyle=W_;rr(c,58,78,84,38,19);c.fillStyle='#000';circ(c,82,97,9);circ(c,118,97,9);c.fillStyle=W_;circ(c,85,94,3);circ(c,121,94,3);
   c.fillStyle='#111';c.fillRect(97,18,6,28);circ(c,100,16,9);c.fillStyle=gr(c,50,150,150,200,'#222','#999');rr(c,52,154,96,46,24)},
 house(c){c.fillStyle='#000';c.beginPath();c.moveTo(100,22);c.lineTo(182,96);c.lineTo(18,96);c.closePath();c.fill();c.fillStyle=gr(c,40,96,160,180,'#111','#888');c.fillRect(40,92,120,88);c.fillStyle=W_;rr(c,86,122,28,58,4)},
 chip(c){c.fillStyle='#000';for(let i=0;i<5;i++){const p=56+i*22;c.fillRect(p-3,24,6,22);c.fillRect(p-3,154,6,22);c.fillRect(24,p-3,22,6);c.fillRect(154,p-3,22,6)}c.fillStyle=gr(c,44,44,156,156,'#000','#888');rr(c,44,44,112,112,12);c.fillStyle=W_;rr(c,74,74,52,52,6)},
 pad(c){c.fillStyle=gr(c,20,60,180,150,'#000','#999');rr(c,18,62,164,84,42);c.fillStyle=W_;c.fillRect(48,96,40,14);c.fillRect(61,83,14,40);circ(c,130,92,9);circ(c,152,110,9)},
 globe(c){const R=c.createRadialGradient(80,70,10,100,100,82);R.addColorStop(0,'#aaa');R.addColorStop(1,'#000');c.fillStyle=R;circ(c,100,100,80);c.strokeStyle=W_;c.lineWidth=5;c.beginPath();c.ellipse(100,100,34,80,0,0,7);c.stroke();c.beginPath();c.moveTo(20,100);c.lineTo(180,100);c.stroke();c.beginPath();c.moveTo(100,20);c.lineTo(100,180);c.stroke()},
 people(c){c.fillStyle='#000';circ(c,70,64,26);circ(c,134,72,22);c.fillStyle=gr(c,20,100,110,180,'#111','#999');rr(c,22,100,96,80,40);c.fillStyle=gr(c,100,104,180,180,'#222','#aaa');rr(c,100,104,80,72,34)},
 mail(c){c.fillStyle=gr(c,20,48,180,152,'#000','#999');rr(c,20,48,160,106,12);c.strokeStyle=W_;c.lineWidth=8;c.beginPath();c.moveTo(30,60);c.lineTo(100,112);c.lineTo(170,60);c.stroke()},
 bolt(c){c.fillStyle=gr(c,60,10,140,190,'#000','#999');c.beginPath();c.moveTo(118,14);c.lineTo(50,112);c.lineTo(96,112);c.lineTo(80,188);c.lineTo(152,82);c.lineTo(106,82);c.closePath();c.fill()}
};
/* halftone sampler: shape → dots [{x,y,r}] in 0..1 space */
const off=document.createElement('canvas');off.width=off.height=200;const oc=off.getContext('2d',{willReadFrequently:true});
function sample(name,cell){oc.setTransform(1,0,0,1,0,0);oc.fillStyle='#fff';oc.fillRect(0,0,200,200);SH[name](oc);const d=oc.getImageData(0,0,200,200).data,out=[];
  for(let y=cell/2;y<200;y+=cell)for(let x=cell/2;x<200;x+=cell){let s=0,n=0;for(let j=-1;j<=1;j++)for(let i=-1;i<=1;i++){const xx=clamp(Math.round(x+i*cell/3),0,199),yy=clamp(Math.round(y+j*cell/3),0,199);s+=d[(yy*200+xx)*4];n++}
    const v=1-s/n/255;if(v>.06)out.push({x:x/200,y:y/200,r:Math.pow(v,.75)})}return out}
const imgCache={};
const PAL=['#B9A6F2','#9CC3EE','#8FD9C9','#F2A7E6','#ABABF5','#C5E86C'];
const tint=(x,y)=>{const h=Math.abs(Math.sin(x*91.7+y*47.3)*43758.5)%1;return h<.075?PAL[Math.floor(h*1000)%PAL.length]:null};
function dotImg(name,cell=7,color='#111',size=200,colorful=size>=140){const k=name+cell+color+size+colorful;if(imgCache[k])return imgCache[k];const c=document.createElement('canvas');c.width=c.height=size;const x=c.getContext('2d');
  const sc=size/200;sample(name,cell).forEach(p=>{const t=colorful&&tint(p.x,p.y);x.fillStyle=t||color;x.beginPath();x.arc(p.x*size,p.y*size,p.r*cell*(t?.62:.5)*sc,0,7);x.fill()});return imgCache[k]=c.toDataURL()}

/* ================= LOADER ================= */
(function(){const c=$('#ldc').getContext('2d');const dots=sample('avatar',10);let p=0;const t0=performance.now();
  function f(now){p=Math.min(1,(now-t0)/1400);const n=Math.floor(p*100);$('#pc').textContent=n+'%';c.clearRect(0,0,240,240);c.fillStyle='#111';
    dots.forEach((d,i)=>{const show=clamp(p*1.3-(d.y*.8),0,1);if(show<=0)return;c.beginPath();c.arc(20+d.x*200,20+d.y*200,d.r*5*show,0,7);c.fill()});
    if(p<1&&!RM)requestAnimationFrame(f);else{gsap.to('#loader',{yPercent:-100,duration:.8,ease:'power4.inOut',delay:.15,onComplete:()=>{$('#loader').style.display='none';playTitle()}})}}
  requestAnimationFrame(f);setTimeout(()=>{const l=$('#loader');if(l.style.display!=='none'){l.style.display='none';playTitle()}},3500)})();

/* ================= DOCK ================= */
const APPS=[['home','Home','#E6E6E0','house'],['machines','Machines','#E3E3FF','robot'],['platform','Platform','#DCEBFA','chip'],['cases-s','Use cases','#DBF5F0','globe'],['play','Play','#E6DEFF','pad'],['research','Research','#E9FAC0','bolt'],['team','Team','#FFE3FB','people'],['foot','Contact','#E6E6E0','mail']];
$('#dock').innerHTML=APPS.map((a,i)=>`${i===APPS.length-1?'<span class="dsep"></span>':''}<a href="#${a[0]}" class="${i===0||i===APPS.length-1?'edge':''}" style="--bg:${a[2]}"><span class="tip">${a[1]}</span><img alt="" src="${dotImg(a[3],12,'#111',96)}"></a>${i===0?'<span class="dsep"></span>':''}`).join('');
const dIcons=$$('#dock a');
if(matchMedia('(hover:hover)').matches&&!RM){$('#dock').addEventListener('mousemove',e=>dIcons.forEach(a=>{const r=a.getBoundingClientRect(),d=Math.abs(e.clientX-(r.left+r.width/2));a.style.transform=`scale(${(1+.55*Math.max(0,1-d/130)).toFixed(3)})`}));$('#dock').addEventListener('mouseleave',()=>dIcons.forEach(a=>a.style.transform=''))}
APPS.forEach(([id],i)=>ScrollTrigger.create({trigger:'#'+id,start:'top 50%',end:'bottom 50%',onToggle:s=>{if(s.isActive)dIcons.forEach((a,j)=>a.classList.toggle('on',j===i))}}));
function clocks(){const f=tz=>new Intl.DateTimeFormat('en-GB',{hour:'2-digit',minute:'2-digit',timeZone:tz}).format(new Date());$('#clock').textContent='Delft '+f('Europe/Amsterdam');$$('.clk').forEach(c=>c.textContent=f(c.dataset.tz))}clocks();setInterval(clocks,20000);

/* ================= HERO: halftone machine glyphs turn into letters (replays) ================= */
const TEXT='SmartAvatar',GLY=['robot','tractor','crane','cart','car','shield','avatar','chip','globe','bolt','pad'],title=$('#title');
const glyImg=GLY.map(g=>dotImg(g,9,'#111',160));
function renderTitle(k){let h='';for(let i=0;i<TEXT.length;i++)h+=i<k?`<span>${TEXT[i]}</span>`:`<span class="ic"><img alt="" src="${glyImg[(i+k)%GLY.length]}"></span>`;title.innerHTML=h}
let tt=null,loopT=null;renderTitle(0);
function playTitle(){clearInterval(tt);if(RM){renderTitle(TEXT.length);return}let k=0;renderTitle(0);$('#boot').textContent='warming up…';
  setTimeout(()=>{clearInterval(tt);tt=setInterval(()=>{k++;renderTitle(k);if(k>=TEXT.length){clearInterval(tt);$('#boot').textContent='ready when you are';clearTimeout(loopT);loopT=setTimeout(()=>{if(heroOn)playTitle()},11000)}},260)},650)}
gsap.to('#title',{letterSpacing:'.32em',opacity:0,filter:'blur(8px)',y:-70,ease:'none',scrollTrigger:{trigger:'#home',start:'top top',end:'bottom top',scrub:true}});
gsap.to('#home .sub,#home .boot,#home .hint',{y:-40,opacity:0,ease:'none',scrollTrigger:{trigger:'#home',start:'top top',end:'60% top',scrub:true}});
title.addEventListener('mouseover',e=>{const sp=e.target.closest('#title > span');if(!sp||sp.classList.contains('ic')||sp._b)return;const i=[...title.children].indexOf(sp),ch=sp.textContent;sp._b=1;sp.className='ic';sp.innerHTML=`<img alt="" src="${glyImg[i%GLY.length]}">`;setTimeout(()=>{if(sp.isConnected){sp.className='';sp.textContent=ch}},650)});
let heroOn=true;ScrollTrigger.create({trigger:'#home',start:'top bottom',end:'bottom 30%',onToggle:s=>{if(s.isActive&&!heroOn&&$('#loader').style.display==='none')playTitle();heroOn=s.isActive}});

/* ===== scroll hint: a pixel kid dives into the water ===== */
(function(){const cv=$('#dive');if(!cv)return;const c=cv.getContext('2d');const P=4,W=42,H=30;
  const KID=["..####..",".#yyyy#.",".#y#y##.",".#yyyy#.","..####..",".#pppp#.","#.#pp#.#","..#..#.."];
  const KC={'#':'#111','y':'#E6DEFF','p':'#F2A7E6'};
  const px=(x,y,col)=>{c.fillStyle=col;c.fillRect(Math.round(x)*P,Math.round(y)*P,P,P)};
  function kid(x,y,flip,rot){KID.forEach((r,j)=>[...r].forEach((ch,i)=>{if(!KC[ch])return;let a=i,b=j;if(rot){a=j;b=7-i}if(flip){b=7-b}px(x+a,y+b,KC[ch])}))}
  let t0=performance.now();
  function f(now){const T=((now-t0)/2600)%1;c.clearRect(0,0,cv.width,cv.height);
    // platform + sign
    for(let x=2;x<12;x++)px(x,15,'#111');px(3,16,'#111');px(10,16,'#111');
    // water
    const wy=22;for(let x=0;x<W;x++){const w=Math.sin(x*.7+now/260)>.3?0:1;px(x,wy+w,'#9CC3EE');for(let y=wy+1+w;y<H;y++)px(x,y,y%3===0&&(x+y)%5===0?'#DCEBFA':'#C6DDF4')}
    let kx=4,ky=7,flip=false,rot=false;
    if(T<.22){ky=7+(Math.floor(T*40)%2)}
    else if(T<.62){const u=(T-.22)/.4;kx=4+u*22;ky=7-Math.sin(u*Math.PI)*7+u*u*12;rot=u>.45;flip=u>.7}
    else{kx=26;ky=40}
    if(T<.62)kid(kx,ky,flip,rot);
    if(T>.6&&T<.85){const u=(T-.6)/.25;for(let i=0;i<6;i++){const a=-Math.PI*(i+.5)/6;px(29+Math.cos(a)*u*7,wy-Math.abs(Math.sin(a))*u*6+u*u*6,i%2?'#FFFFFF':'#9CC3EE')}}
    if(T>.75){const u=(T-.75)/.25;for(let x=-4;x<=4;x++)if(Math.abs(x)>u*4-1)px(29+x*u*1.6,wy-1,'#FFFFFF')}
    // label
    c.fillStyle='#8C8C8C';c.font='8px Silkscreen';c.textAlign='center';c.fillText('SCROLL',cv.width/2,cv.height-4);c.textAlign='left';
    requestAnimationFrame(f)}
  requestAnimationFrame(f)})();

/* ================= SCENE 1: dots morph between machines (scrub) ================= */
const MS=[['robot','Robot arm 3','A factory in Eindhoven. The arm tells us a joint is wearing out about 212 hours before it would fail.',['TEMP 41°C','VIBRATION OK','SERVICE 212H'],'#E3E3FF'],
          ['tractor','Tractor 412','A farm near Groningen. Updates arrive signed and checked, and only the farmer can take the wheel.',['OTA V4.12','FUEL 72%','SECURE'],'#E9FAC0'],
          ['crane','Crane 07','Port of Rotterdam. Someone in an office 40 km away moves it, with about 18 ms of delay.',['LOAD 18T','WIND 6 M/S','LINK 18 MS'],'#DCEBFA'],
          ['cart','Care cart 12','A hospital in Utrecht. Every look at patient data is logged, and none of it leaves GDPR.',['3 ROLES','AUDIT ON','GDPR ✓'],'#FFE3FB']];
const N=1500, mc=$('#mc'), mx=mc.getContext('2d');
const SETS=MS.map(m=>{const d=sample(m[0],5).sort((a,b)=>(a.y*3+a.x)-(b.y*3+b.x));const o=[];
  if(d.length>=N){for(let i=0;i<N;i++)o.push(d[Math.floor(i*d.length/N)])}
  else{const extra=N-d.length;let e=0;d.forEach((q,i)=>{o.push(q);const want=Math.floor((i+1)*extra/d.length);while(e<want){o.push({x:q.x,y:q.y,r:0});e++}})}
  return o});
function wordSet(){const c=document.createElement('canvas');c.width=600;c.height=150;const x=c.getContext('2d');x.fillStyle='#000';x.font='600 100px "Pixelify Sans", monospace';const fs=Math.min(118,100*560/x.measureText('SmartAvatar').width);x.font=`600 ${fs}px "Pixelify Sans", monospace`;x.textAlign='center';x.textBaseline='middle';x.fillText('SmartAvatar',300,78);
  const d=x.getImageData(0,0,600,150).data,o=[];for(let y=3;y<150;y+=6)for(let xx=3;xx<600;xx+=6)if(d[(y*600+xx)*4+3]>110)o.push({x:xx/600,y:.5+(y-75)/600,r:.36,w:1});
  o.sort((a,b)=>(a.y*3+a.x)-(b.y*3+b.x));const out=[];if(o.length>=N){for(let i=0;i<N;i++)out.push(o[Math.floor(i*o.length/N)])}else{const ex=N-o.length;let e=0;o.forEach((q,i)=>{out.push(q);const w=Math.floor((i+1)*ex/o.length);while(e<w){out.push({x:q.x,y:q.y,r:0});e++}})}return out}
SETS.unshift(wordSet());document.fonts.ready.then(()=>{SETS[0]=wordSet()});
const COL=j=>j===0?'#E6DEFF':MS[j-1][4];
const MD=Array.from({length:N},()=>({ox:0,oy:0,vx:0,vy:0}));
let mProgS=0,mW=0,mH=0,mProg=0,mVis=false,mouse={x:-999,y:-999};
function mSize(){const r=mc.getBoundingClientRect();mW=r.width;mH=r.height;mc.width=mW*DPR;mc.height=mH*DPR}
mSize();addEventListener('resize',mSize);
mc.parentElement.addEventListener('pointermove',e=>{const r=mc.getBoundingClientRect();mouse.x=e.clientX-r.left;mouse.y=e.clientY-r.top});
mc.addEventListener('click',e=>{const r=mc.getBoundingClientRect(),px=e.clientX-r.left,py=e.clientY-r.top;const hb=BOTS.find(b=>b.box&&px>b.box.x-30&&px<b.box.x+b.box.w+30&&py>b.box.y-30&&py<b.box.y+b.box.h+30&&!(b.poke>0));if(hb){hb.poke=.7;hb.ax=px;hb.ay=py;MD.forEach(d=>{d.vx+=(Math.random()-.5)*18;d.vy+=(Math.random()-.5)*18});return}MD.forEach(d=>{d.vx+=(Math.random()-.5)*46;d.vy+=(Math.random()-.5)*46})});
mc.parentElement.addEventListener('pointerleave',()=>{mouse.x=mouse.y=-999});
const who=$('#who'),steps=$$('#steps i');let lastIdx=-1;
function setWho(i){if(i===lastIdx)return;lastIdx=i;const m=MS[i];who.innerHTML=`<b>${m[1]}</b><p>${m[2]}</p><div class="chips">${m[3].map(c=>`<span style="background:${m[4]}">${c}</span>`).join('')}</div>`;steps.forEach((s,j)=>s.classList.toggle('on',j<=i));$('#mcount').textContent='0'+(i+1)+' / 04';gsap.fromTo(who,{opacity:0,y:10},{opacity:1,y:0,duration:.4})}
setWho(0);
function mDraw(){mx.setTransform(DPR,0,0,DPR,0,0);mx.clearRect(0,0,mW,mH);
  const mobile=mW<900,S1=mobile?Math.min(mW*.78,mH*.3):Math.min(mW*.5,mH*.82),ox1=mobile?(mW-S1)/2:mW-S1-mW*.06,oy1=mobile?mH*.08:(mH-S1)/2;
  const nS=SETS.length-1,seg=mProgS*nS,i=Math.min(nS-1,Math.floor(seg)),t=ease(clamp(seg-i,0,1));setWho(Math.max(0,Math.round(seg)-1));
  $('#morph .copy').style.opacity=clamp((seg-.45)*2.2,0,1);$('#mc').dataset.c=seg<.6?'poke a robot':'push';
  const S0=mobile?mW*.96:Math.min(mW*.84,mH*1.7),ox0=(mW-S0)/2,oy0=(mH-S0)/2;
  const S=i===0?lerp(S0,S1,t):S1,ox=i===0?lerp(ox0,ox1,t):ox1,oy=i===0?lerp(oy0,oy1,t):oy1;
  const A=SETS[i],B=SETS[i+1],cell=5*S/200,mid=Math.sin(t*Math.PI);
  mx.fillStyle='#111';
  const MB=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5];
  for(let k=0;k<N;k++){const a=A[k],b=B[k],d=MD[k];const bv=MB[(Math.floor(a.y*48)%4)*4+Math.floor(a.x*48)%4]/16+Math.abs(Math.sin(k*91.7))%1*.12;const tk=ease(clamp((t-bv*.6)/.34,0,1));const r=lerp(a.r,b.r,tk);if(r<.04)continue;
    let x=ox+lerp(a.x,b.x,tk)*S,y=oy+lerp(a.y,b.y,tk)*S;
    const lift=Math.sin(tk*Math.PI);y-=lift*S*.012;
    const dx=x+d.ox-mouse.x,dy=y+d.oy-mouse.y,dd=dx*dx+dy*dy;if(dd<6400){const f=(1-Math.sqrt(dd)/80)*2.2;d.vx+=dx/Math.sqrt(dd+1)*f;d.vy+=dy/Math.sqrt(dd+1)*f}
    d.vx+=-d.ox*.08;d.vy+=-d.oy*.08;d.vx*=.82;d.vy*=.82;d.ox+=d.vx;d.oy+=d.vy;
    if(false){mx.fillStyle=COL(i+1);mx.beginPath();mx.arc(x+d.ox,y+d.oy,r*cell*.75,0,7);mx.fill();mx.fillStyle='#111';continue}
    const tc=(i===0&&tk<.5)?null:tint(a.x,a.y);if(tc){mx.fillStyle=tc;mx.beginPath();mx.arc(x+d.ox,y+d.oy,Math.max(.5,Math.min(r,.85))*cell*.6,0,7);mx.fill();mx.fillStyle='#111';continue}
    const rr=Math.min(r,.85)*cell*.48*(1-lift*.55);if(lift>.2){mx.fillRect(x+d.ox-rr,y+d.oy-rr,rr*2,rr*2)}else{mx.beginPath();mx.arc(x+d.ox,y+d.oy,rr,0,7);mx.fill()}}}
/* little pixel avatar that walks over the dot word; poke it and it fights back */
const SPR={w1:["..####..",".#yyyy#.","#y#yy#y#","#yyyyyy#",".######.","..#pp#..",".#pppp#.","#.#pp#.#","..#..#..",".##..##."],
  w2:["..####..",".#yyyy#.","#y#yy#y#","#yyyyyy#",".######.","..#pp#..",".#pppp#.","#.#pp#.#","..#..#..","..#..#.."],
  at:["..####..",".#yyyy#.","#y#yy#y#","#yyyyyy#",".######.","#.#pp#.#","##pppp##","..#pp#..",".#....#.","##....##"],
  hit:["........","..####..",".#yyyy#.","#y####y#","#yyyyyy#",".######.","#.#pp#.#","..#pp#..",".#....#.","##....##"]};
const BOTS=[{u:.02,y:0,dir:1,pal:{'#':'#111','y':'#E6DEFF','p':'#F2A7E6'},box:null,poke:0},{u:.98,y:0,dir:-1,pal:{'#':'#111','y':'#DBF5F0','p':'#ABABF5'},box:null,poke:0}];
const SCN={ph:'enter',t:0,win:0};let botLast=performance.now();
const eOutB=t=>{const n=7.5625,d=2.75;if(t<1/d)return n*t*t;if(t<2/d)return n*(t-=1.5/d)*t+.75;if(t<2.5/d)return n*(t-=2.25/d)*t+.9375;return n*(t-=2.625/d)*t+.984375};
function drawBots(S,ox,oy,alpha){const now=performance.now(),dt=Math.min(.05,(now-botLast)/1000);botLast=now;SCN.t+=dt;const pz=Math.max(3.5,S/170),gy=oy+S*.74,bh=10*pz;const [A,B]=BOTS;
  const ph=SCN.ph,T=SCN.t;let fA='w1',fB='w1',bubA=null,bubB=null;const walkF=c=>Math.floor(T*7+(c===A?0:1))%2?'w1':'w2';
  if(ph==='enter'){const k=Math.min(1,T/1.1);A.u=.02;B.u=.98;A.dir=1;B.dir=-1;A.y=-(gy+bh+40)*(1-eOutB(k));B.y=(mH-gy+bh+40)*(1-eOutB(Math.max(0,k-.1)/.9));fA='at';fB='at';if(T>1.3){SCN.ph='walk';SCN.t=0}}
  else if(ph==='walk'){A.y=B.y=0;A.u=Math.min(.45,A.u+dt*.12);B.u=Math.max(.55,B.u-dt*.12);fA=walkF(A);fB=walkF(B);if(A.u>=.45&&B.u<=.55){SCN.ph='fight';SCN.t=0}}
  else if(ph==='fight'){fA=Math.floor(T*7)%2?'at':'hit';fB=Math.floor(T*7)%2?'hit':'at';A.y=-Math.abs(Math.sin(T*9))*pz*3;B.y=-Math.abs(Math.cos(T*9))*pz*3;if(T>2){SCN.ph='cheer';SCN.t=0;SCN.win=Math.random()<.5?0:1}}
  else if(ph==='cheer'){const w=BOTS[SCN.win],l=BOTS[1-SCN.win];w.y=-Math.abs(Math.sin(T*10))*pz*5;l.y=0;if(SCN.win===0){fA=Math.floor(T*8)%2?'at':'w1';fB='hit';bubA='♪';bubB='…'}else{fB=Math.floor(T*8)%2?'at':'w1';fA='hit';bubB='♪';bubA='…'}if(T>1.3){SCN.ph='exit';SCN.t=0}}
  else if(ph==='exit'){const k=Math.min(1,T/.9);A.y=-(gy+bh+40)*k*k;B.y=(mH-gy+bh+40)*k*k;fA='at';fB='hit';if(T>1.8){SCN.ph='enter';SCN.t=0}}
  mx.save();mx.globalAlpha=alpha;
  [[A,fA,bubA],[B,fB,bubB]].forEach(([c,frame,bub])=>{let cx=ox+S*c.u-4*pz,cy=gy-bh+c.y;const md=Math.hypot(mouse.x-(cx+4*pz),mouse.y-(cy+5*pz));
    if(c.poke>0){c.poke-=dt;const k=1-c.poke/.7;cx=lerp(cx,c.ax-4*pz,Math.sin(k*Math.PI));cy=lerp(cy,c.ay-5*pz,Math.sin(k*Math.PI));frame='at';bub='!';for(let i=0;i<8;i++){const a=i/8*Math.PI*2+k*12;mx.fillStyle=PAL[i%PAL.length];mx.beginPath();mx.arc(cx+4*pz+Math.cos(a)*pz*9*Math.sin(k*Math.PI),cy+5*pz+Math.sin(a)*pz*9*Math.sin(k*Math.PI),pz*.7,0,7);mx.fill()}}
    else if(md<80&&mouse.x>0&&!bub)bub='?';
    SPR[frame].forEach((r,j)=>[...r].forEach((ch,i)=>{const col=c.pal[ch];if(!col)return;const xx=c.dir<0?7-i:i;mx.fillStyle=col;mx.fillRect(Math.round(cx+xx*pz),Math.round(cy+j*pz),Math.ceil(pz),Math.ceil(pz))}));
    if(bub){mx.fillStyle='#111';mx.beginPath();mx.roundRect(cx+1.5*pz,cy-6.5*pz,5*pz,5*pz,pz);mx.fill();mx.fillStyle='#fff';mx.font=`${Math.round(3.6*pz)}px Silkscreen`;mx.textBaseline='top';mx.textAlign='center';mx.fillText(bub,cx+4*pz,cy-5.8*pz);mx.textAlign='left'}
    c.box={x:cx,y:cy,w:8*pz,h:bh}});
  if(ph==='fight'){const mxp=ox+S*.5,myp=gy-6*pz;for(let i=0;i<8;i++){const a=i/8*Math.PI*2+T*6,rr=pz*(4+Math.sin(T*20+i)*3);mx.fillStyle=PAL[i%PAL.length];mx.beginPath();mx.arc(mxp+Math.cos(a)*rr,myp+Math.sin(a)*rr,pz*.6,0,7);mx.fill()}
    if(T%0.5<.32){mx.fillStyle='#111';mx.beginPath();mx.roundRect(mxp-8*pz,gy+2*pz,16*pz,5.5*pz,pz*1.5);mx.fill();mx.fillStyle='#E6DEFF';mx.font=`${Math.round(3.8*pz)}px Silkscreen`;mx.textBaseline='top';mx.textAlign='center';mx.fillText('POW!',mxp,gy+2.8*pz);mx.textAlign='left'}}
  mx.restore()}
function mLoop(){mProgS+=(mProg-mProgS)*.12;if(Math.abs(mProg-mProgS)<.0005)mProgS=mProg;if(mVis){mDraw();const nS=SETS.length-1,seg=mProgS*nS;if(seg<.6){const mobile=mW<900,S=mobile?mW*.96:Math.min(mW*.84,mH*1.7);drawBots(S,(mW-S)/2,(mH-S)/2,1-seg/.6)}else BOTS.forEach(b=>b.box=null)}requestAnimationFrame(mLoop)}mLoop();
ScrollTrigger.create({trigger:'#morph',start:'top top',end:'+=560%',pin:true,onUpdate:s=>{mProg=clamp((s.progress-.07)/.75,0,1)},onToggle:s=>mVis=s.isActive||true});
new IntersectionObserver(e=>{mVis=e[0].isIntersecting},{threshold:0}).observe($('#morph'));

/* ================= SCENE 2: disc travels through the words ================= */
const DISCS=['avatar','robot','tractor','crane','car','cart'];let dI=0;
const discImg=n=>`<img alt="" src="${dotImg(n,8,'#111',240,false)}">`;$('#disc').innerHTML=discImg(DISCS[0]);
$('#disc').addEventListener('click',()=>{dI=(dI+1)%DISCS.length;gsap.timeline().to('#disc img',{scale:0,rotation:90,duration:.18,ease:'power2.in',onComplete:()=>{$('#disc').innerHTML=discImg(DISCS[dI]);gsap.fromTo('#disc img',{scale:0,rotation:-90},{scale:1,rotation:0,duration:.45,ease:'back.out(2)'})}})});
const mt=$('#thru .metal');mt.innerHTML=[...mt.textContent].map(c=>`<span>${c}</span>`).join('');
const gapC=()=>{const g=$('#gap'),row=g.parentElement,t=$('#thru');let x=g.offsetLeft,y=g.offsetTop;if(g.offsetParent===row){x+=row.offsetLeft;y+=row.offsetTop}return{x:x+g.offsetWidth/2-t.clientWidth/2,y:y+g.offsetHeight/2-t.clientHeight/2,d:g.offsetWidth*.92}};
function sizeDisc(){$('#discw').style.setProperty('--d',gapC().d+'px')}sizeDisc();addEventListener('resize',sizeDisc);
const TK=[['Lat','52.0116',4,'#B9A6F2'],['Temp','41.2°C',1,'#F2A7E6'],['RPM','1,820',0,'#9CC3EE'],['OTA','v4.12',-1,'#8FD9C9'],['Access','3 roles',-1,'#ABABF5']];
$('#ticks').innerHTML=TK.map(t=>`<span style="--c:${t[3]}"><i></i>${t[0]} <b>${t[1]}</b></span>`).join('');
setInterval(()=>{const b=$$('#ticks b');b[0].textContent=(52.0116+Math.random()*.0009).toFixed(4);b[1].textContent=(41+Math.random()*.6).toFixed(1)+'°C';b[2].textContent=(1800+Math.round(Math.random()*60)).toLocaleString('en-US')},700);
// letters of "metal." get pulled into the disc
const letterTo=(el,ax)=>{const row=el.parentElement.parentElement,g=gapC(),t=$('#thru');const lx=row.offsetLeft+el.parentElement.offsetLeft+el.offsetLeft+el.offsetWidth/2-t.clientWidth/2,ly=row.offsetTop+el.offsetHeight/2-t.clientHeight/2;return ax==='x'?g.x-lx:g.y-ly};
const dq={x:gsap.quickTo('#disc','x',{duration:.6,ease:'power3.out'}),y:gsap.quickTo('#disc','y',{duration:.6,ease:'power3.out'})};
$('#thru').addEventListener('pointermove',e=>{const r=$('#disc').parentElement.getBoundingClientRect();dq.x(clamp((e.clientX-r.left)*.08,-24,24));dq.y(clamp((e.clientY-r.top)*.08,-24,24))});
$('#thru').addEventListener('pointerleave',()=>{dq.x(0);dq.y(0)});
gsap.timeline({scrollTrigger:{trigger:'#thru',start:'top top',end:'+=340%',pin:true,scrub:.8,invalidateOnRefresh:true,onRefresh:sizeDisc}})
  .fromTo('#thru .words > div',{opacity:.1,x:i=>(i%2?1:-1)*innerWidth*.22},{opacity:1,x:0,stagger:.12,duration:.7,ease:'power2.out'},0)
  .fromTo('#discw',{x:()=>gapC().x+innerWidth*.28,y:()=>-innerHeight*.7},{x:()=>gapC().x,y:()=>gapC().y,ease:'power2.out',duration:1},0)
  .fromTo('#disc img',{rotation:-200,scale:.5},{rotation:0,scale:1,ease:'power2.out',duration:1},0)
  .to('#thru .metal span',{x:function(i,el){return letterTo(el,'x')},y:function(i,el){return letterTo(el,'y')},scale:0,opacity:0,rotation:()=>gsap.utils.random(-90,90),stagger:.08,duration:.6,ease:'power2.in'},1.05)
  .fromTo('#disc',{scale:1},{scale:1.14,duration:.15,yoyo:true,repeat:1},1.55)
  .fromTo('#live span',{'--f':'0%'},{'--f':'100%',stagger:.3,duration:.5,ease:'none'},1.6)
  .to('#ticks',{opacity:1,duration:.3},2.1)
  .to({},{duration:.5})
  .to({},{duration:.6})
  .to('#discw',{y:()=>innerHeight*.85,ease:'power2.in',duration:.8})
  .to('#disc img',{rotation:240,scale:.6,ease:'power2.in',duration:.8},'<');

/* ================= SCENE 3: avatar cut into five strips ================= */
const POW=[['Live twin','Where it is, how it’s doing and what it sends, as it happens.','#DBF5F0'],['OTA updates','New software goes out signed. If it breaks, it rolls back by itself.','#E6DEFF'],['Remote control','Drive or operate it from far away with almost no delay.','#DCEBFA'],['Edge AI','Small models on the machine spot wear before it means downtime.','#E3E3FF'],['Zero Trust','Every command is checked and logged. Access follows your rules.','#FFE3FB']];
const big=dotImg('avatar',6,'#111',900);
const MINI=['globe','chip','pad','bolt','shield'];
const ROWS=innerWidth<600;if(ROWS)$('#set').classList.add('rows');
$('#set').innerHTML=POW.map((p,i)=>`<div class="st" style="${ROWS?`top:${i*20}%`:`left:${i*20}%`};--c:${p[2]}"><div class="slice" style="background-image:url(${big});background-position:${ROWS?`50% ${i*25}%`:`${i*25}% 50%`}"></div><img class="mini" alt="" src="${dotImg(MINI[i],7,'#111',240)}"><div class="lb"><b>${p[0]}</b><small>${p[1]}</small></div></div>`).join('');
const sts=$$('#set .st');sts.forEach(st=>{st.dataset.c='open';st.addEventListener('click',()=>{const o=st.classList.toggle('open');gsap.to(st,{scale:o?1.06:1,zIndex:o?5:1,duration:.4,ease:'back.out(2)'});gsap.fromTo(st.querySelector('.mini'),{rotation:0},{rotation:360,duration:.7,ease:'power3.out'})})});
gsap.set('#set .mini',{xPercent:-50,yPercent:ROWS?-50:0,scale:0});gsap.set('#set',{xPercent:-50});
const stTl=gsap.timeline({scrollTrigger:{trigger:'#strips',start:'top top',end:'+=440%',pin:true,scrub:1.2,invalidateOnRefresh:true}});
stTl.fromTo('#set',{scale:.8},{scale:1,duration:.5})
  .to(sts,{x:i=>ROWS?(i%2?-1:1)*10:(i-2)*14,y:i=>ROWS?(i-2)*8:(i%2?-1:1)*18,rotation:i=>ROWS?(i-2)*1.2:(i-2)*3,duration:.7,ease:'power2.inOut'})
  .to('#set .slice',{opacity:0,duration:.35,stagger:.05})
  .to(sts,{backgroundColor:i=>POW[i][2],duration:.35},'<')
  .to('#set',{width:()=>Math.min(1000,innerWidth*(innerWidth<600?.92:.82)),height:()=>ROWS?Math.max(320,innerHeight-300):Math.max(260,Math.min(540,innerHeight-440)),duration:.8,ease:'power2.inOut'})
  .to(sts,{x:i=>ROWS?0:(i-2)*16,y:i=>ROWS?(i-2)*4:0,rotation:0,duration:.8,ease:'power2.inOut'},'<')
  .to('#set .mini',{scale:1,stagger:.08,duration:.45,ease:'back.out(2)'})
  .to('#set .lb',{opacity:1,stagger:.08,duration:.4},'<.2')
  .fromTo('#strips .title',{opacity:0,y:30},{opacity:1,y:0,duration:.5},.2)
  .to({},{duration:.9});

/* ================= SCENE 4: stair-line wipe ================= */
$('#bars').innerHTML=Array.from({length:12},(_,i)=>`<i style="width:${100-i*7.5}%"></i>`).join('');
gsap.timeline({scrollTrigger:{trigger:'#wipe',start:'top 80%',end:'bottom top',scrub:true}})
  .fromTo('#bars i',{scaleY:0},{scaleY:1,stagger:.05,duration:.4,ease:'none'})
  .to('#bars i',{width:'100%',height:'8.4%',duration:.4,ease:'power2.in'})
  .to('#wlbl',{opacity:1,duration:.2},'-=.1');

/* ================= SCENE 5: use cases fly through 3D ================= */
const IND=['Construction','Manufacturing','Hospitals','Mobility','Farming','Fleets'];
const CS=[['crane','Heavy equipment','Cranes and excavators, run from a safe office instead of the cab.','#DCEBFA','40 km','between operator and crane, 18 ms delay'],['robot','Robotics','The service gets booked before the part actually breaks.','#E3E3FF','212 h','warning before a joint fails'],['cart','Healthcare','Medical data people can trust, with every access written down.','#FFE3FB','100%','of data access logged and verifiable'],['car','Insurance','Clear proof of who drove, when, and how carefully.','#E6DEFF','1 tap','to prove who was driving'],['tractor','Agriculture','Tractors that only take orders they can verify.','#E9FAC0','v4.12','signed update, automatic rollback'],['shield','Security','Spot an intruder anywhere in the fleet, the moment it happens.','#DBF5F0','0','unverified commands executed']];
const POS=[[-.32,-.2],[.3,-.24],[-.22,.22],[.26,.18],[-.04,-.05],[.05,.28]];
$('#space').innerHTML=CS.map((c,i)=>`<div class="card" style="background:${c[3]}"><span class="mono">${IND[i]}</span><div class="fr"><img alt="" src="${dotImg(c[0],6,'#111',300)}"><b>${c[1]}</b><small>${c[2]}</small><a class="rd" href="/machines/${c[1].toLowerCase().replace(/ /g,'-')}">Read the case →</a></div><div class="bk"><span class="dt">${c[4]}</span><small>${c[5]}</small></div></div>`).join('');
const cards=$$('#space .card');cards.forEach(c=>{c.dataset.c='flip';c.addEventListener('click',()=>{gsap.fromTo(c,{rotationY:0},{rotationY:360,duration:.7,ease:'power3.inOut',clearProps:'rotationY'});setTimeout(()=>c.classList.toggle('flip'),300)})});
function placeCards(p){const w=innerWidth,h=innerHeight,cw=cards[0].offsetWidth;cards.forEach((c,i)=>{const start=i*.12,local=clamp((p-start)/.42,0,1);const z=lerp(-2600,900,local);
  const op=local<=0?0:local<.1?local*10:local>.85?Math.max(0,(1-local)/.15):1;
  c.style.transform=`translate(-50%,-50%) translate3d(${POS[i][0]*w*(w<600?.45:1)}px,${POS[i][1]*h}px,${z}px) rotateY(${POS[i][0]*-30}deg)`;c.style.opacity=op;c.style.zIndex=Math.round(z+3000);c.style.pointerEvents=(local>.45&&local<.88)?'auto':'none'})}
placeCards(0);
ScrollTrigger.create({trigger:'#cases',start:'top top',end:'+=460%',pin:true,scrub:true,onUpdate:s=>{placeCards(clamp((s.progress-.08)/.76,0,1));$('#cases .hd').style.opacity=1-clamp(s.progress*6-.3,0,.9)}});

/* ================= RESEARCH: thin-line bars ================= */
const EU=[['MetaCities',2023,2026,'Digital twins of urban life, from traffic to public services.','#E6DEFF'],['6G-ICARUS',2024,2028,'Intelligent 6G networks that adapt to the machines they connect.','#DCEBFA'],['ISAC-NEWTON',2025,2029,'Networks that sense as well as talk, for safer shared spaces.','#DBF5F0'],['REFEREE',2026,2029,'Verification and trust for autonomous systems.','#FFE3FB'],['EcoAgent-6G',2026,2029,'AI agents that cut the energy use of networks and fleets.','#E9FAC0'],['TeraHealth',2027,2029,'Terahertz links and secure data for connected care.','#E3E3FF']];
$('#chart').innerHTML=EU.map((e,i)=>{const yrs=e[2]-e[1]+1;return `<button class="col" data-i="${i}" style="--c:${e[4]};--h:${yrs/5*100}%"><div class="lines">${'<i></i>'.repeat(yrs*2*6)}</div><span class="yr dt">${yrs} yrs</span><span class="nm">${e[0]}</span></button>`}).join('');
function showEU(i){const e=EU[i];$$('#chart .col').forEach((c,j)=>c.classList.toggle('on',j===i));$('#detail').innerHTML=`<b>${e[0]}</b><span class="mono">${e[1]} → ${e[2]}</span><p>${e[3]}</p><a class="more" href="/research/${e[0].toLowerCase()}" style="margin-top:0">View project <i>→</i></a>`}
$$('#chart .col').forEach(c=>{c.addEventListener('click',()=>showEU(+c.dataset.i));c.addEventListener('mouseenter',()=>showEU(+c.dataset.i))});showEU(0);
$$('#chart .lines').forEach(l=>gsap.fromTo(l.children,{scale:0},{scale:1,ease:'none',stagger:{each:.02,from:'end'},scrollTrigger:{trigger:'#chart',start:'top 85%',end:'bottom 55%',scrub:.6}}));

/* ================= TEAM ================= */
const TM=[['Office · HQ','Delft','Registered office.','#E6DEFF','house'],['Office','Amsterdam','By appointment.','#DCEBFA','globe'],['Office','Mountain View','By appointment.','#DBF5F0','bolt'],['Service','Consulting','Help with tech projects, innovation funding and Zero Trust security.','#FFFFFF','chip'],['Programme','BÅNDED','For cities, institutions, universities and NGOs, plus BåndFixIt.','#FFE3FB','people'],['Sister studio','TulipTech','Custom SaaS, AI mobile apps and medical AI.','#E3E3FF','avatar']];
const TL={Consulting:'/consulting','BÅNDED':'/banded',TulipTech:'https://tuliptech.nl'};
$('#teamg').innerHTML=TM.map(t=>`<${TL[t[1]]?'a href="'+TL[t[1]]+'"'+(t[1]==='TulipTech'?' target="_blank" rel="noopener"':''):'div'} class="card2" style="background:${t[3]}"><span class="mono">${t[0]}</span><h3 class="dt">${t[1]}</h3><p>${t[2]}</p><img alt="" src="${dotImg(t[4],10,'#111',144)}"></${TL[t[1]]?'a':'div'}>`).join('');
$$('.card2').forEach((c,i)=>{gsap.fromTo(c,{y:60,opacity:0,rotation:i%2?2:-2},{y:0,opacity:1,rotation:0,duration:.8,ease:'power3.out',scrollTrigger:{trigger:c,start:'top 92%',toggleActions:'play none none reverse'}});
  c.dataset.c='hello';const img=c.querySelector('img');const rx=gsap.quickTo(c,'rotationX',{duration:.4}),ry=gsap.quickTo(c,'rotationY',{duration:.4});gsap.set(c,{transformPerspective:800});
  c.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect();rx(((e.clientY-r.top)/r.height-.5)*-8);ry(((e.clientX-r.left)/r.width-.5)*10)});
  c.addEventListener('pointerleave',()=>{rx(0);ry(0)});
  c.addEventListener('pointerenter',()=>gsap.fromTo(img,{y:0,rotation:0},{y:-14,rotation:i%2?-12:12,duration:.25,yoyo:true,repeat:1,ease:'power2.out'}))});
const TZ={Delft:'Europe/Amsterdam',Amsterdam:'Europe/Amsterdam','Mountain View':'America/Los_Angeles'};
$$('.card2').forEach(c=>{const n=c.querySelector('h3').textContent;if(TZ[n]){const t=document.createElement('div');t.className='tclk dt';c.insertBefore(t,c.querySelector('img'));const f=()=>{const d=new Intl.DateTimeFormat('en-GB',{hour:'2-digit',minute:'2-digit',second:'2-digit',timeZone:TZ[n]}).formatToParts(new Date()),g=k=>d.find(x=>x.type===k).value;t.innerHTML=`${g('hour')}<i>:</i>${g('minute')}<small>${g('second')}</small>`};f();setInterval(f,1000)}});

/* ================= FOOTER: dot playground ================= */
const fc=$('#fc'),fx=fc.getContext('2d');let FD=[],fW=0,fH=0,fVis=false,fm={x:-999,y:-999,down:false};
function fBuild(){const r=fc.getBoundingClientRect();fW=Math.round(r.width);fH=Math.round(r.height);if(!fW||!fH){setTimeout(fBuild,300);return}fc.width=fW*DPR;fc.height=fH*DPR;
  const t=document.createElement('canvas');t.width=fW;t.height=fH;const c=t.getContext('2d');c.fillStyle='#000';c.textAlign='center';c.textBaseline='middle';
  const fs=Math.min(fW<600?fW/3.6:fW/4.6,fH*.36);c.font=`900 ${fs}px Satoshi, sans-serif`;c.fillText('SAY HI',fW/2,fH*.44);
  const d=c.getImageData(0,0,fW,fH).data,step=fW<600?7:10;FD=[];
  for(let y=0;y<fH;y+=step)for(let x=0;x<fW;x+=step){const on=d[(y*fW+x)*4+3]>128;if(on)FD.push({hx:x,hy:y,x:x+(Math.random()-.5)*fW,y:y+(Math.random()-.5)*fH,vx:0,vy:0,r:step*.36,c:Math.random()<.12?['#E6DEFF','#DCEBFA','#DBF5F0','#FFE3FB','#E3E3FF'][Math.random()*5|0]:'#111'})}}
function fDraw(){fx.setTransform(DPR,0,0,DPR,0,0);fx.clearRect(0,0,fW,fH);
  for(const p of FD){const dx=p.x-fm.x,dy=p.y-fm.y,dd=dx*dx+dy*dy;if(dd<14400){const d=Math.sqrt(dd)+1,f=(1-d/120)*3;p.vx+=dx/d*f;p.vy+=dy/d*f}
    p.vx+=(p.hx-p.x)*.03;p.vy+=(p.hy-p.y)*.03;p.vx*=.86;p.vy*=.86;p.x+=p.vx;p.y+=p.vy;fx.fillStyle=p.c;fx.beginPath();fx.arc(p.x,p.y,p.r*(p.c==='#111'?1:1.5),0,7);fx.fill()}}
function fLoop(){if(fVis)fDraw();requestAnimationFrame(fLoop)}
document.fonts.ready.then(()=>{fBuild();fLoop()});addEventListener('resize',()=>fBuild());
new IntersectionObserver(e=>{fVis=e[0].isIntersecting},{threshold:0}).observe(fc);
$('#foot').addEventListener('pointermove',e=>{const r=fc.getBoundingClientRect();fm.x=e.clientX-r.left;fm.y=e.clientY-r.top});
$('#foot').addEventListener('pointerleave',()=>{fm.x=fm.y=-999});
fc.addEventListener('click',e=>{const r=fc.getBoundingClientRect(),cx=e.clientX-r.left,cy=e.clientY-r.top;FD.forEach(p=>{const dx=p.x-cx,dy=p.y-cy,d=Math.sqrt(dx*dx+dy*dy)+1;p.vx+=dx/d*(30+Math.random()*30);p.vy+=dy/d*(30+Math.random()*30)})});
ScrollTrigger.create({trigger:'#foot',start:'top 70%',onEnter:scatterIn,onEnterBack:scatterIn});
function scatterIn(){FD.forEach(p=>{p.x=p.hx+(Math.random()-.5)*fW*1.2;p.y=p.hy+(Math.random()-.5)*fH*1.2})}
(function(){const IC={li:["..........",".##.......",".##.......","..........",".##.##.##.",".##.######",".##.##..##",".##.##..##",".##.##..##",".........."],
  yt:["..........","...#......","...##.....","...###....","...####...","...####...","...###....","...##.....","...#......",".........."],
  ig:["..........",".########.",".#......#.",".#..##.##.",".#.#..#.#.",".#.#..#.#.",".#..##..#.",".#......#.",".########.",".........."],
  x:["..........",".##....##.","..##..##..","...####...","....##....","....##....","...####...","..##..##..",".##....##.",".........."]};
  $$('#foot .soc canvas').forEach(c=>{const g=c.getContext('2d');g.fillStyle='#fff';IC[c.dataset.ico].forEach((r,y)=>[...r].forEach((ch,x)=>{if(ch==='#'){g.beginPath();g.arc(x*2+1,y*2+1,1.05,0,7);g.fill()}}))})})();
$('#copy').addEventListener('click',()=>{try{navigator.clipboard.writeText('info@smartavatar.nl')}catch(e){}$('#copy').textContent='Copied ✓';setTimeout(()=>$('#copy').textContent='Copy',1600)});


/* pixel icons for the cartridges: cells on a 12×12 grid, outlined in ink */
(function(){const rect=(x0,y0,x1,y1)=>{const o=[];for(let y=y0;y<=y1;y++)for(let x=x0;x<=x1;x++)o.push([x,y]);return o};
  const I={race:[[rect(1,5,10,7),'C'],[rect(3,3,8,4),'C'],[rect(4,3,7,4),'#fff'],[[[1,6]],'#F2A7E6'],[[[10,6]],'#fff'],[rect(2,8,3,9).concat(rect(8,8,9,9)),'#111']],
    snake:[[[[2,2],[3,2],[4,2],[5,2],[6,2],[7,2],[7,3],[7,4],[6,4],[5,4],[4,4],[3,4],[2,4],[2,5],[2,6],[3,6],[4,6],[5,6],[6,6],[7,6],[8,6],[8,7],[8,8]],'C'],[[[8,9],[8,10]],'C'],[[[9,10]],'#fff'],[[[10,3],[10,4]],'#F2A7E6']],
    blocks:[[[[2,9],[3,9],[4,9],[3,8]],'C'],[[[6,7],[6,8],[6,9],[7,9]],'#F2A7E6'],[[[8,8],[9,8],[8,9],[9,9]],'#9CC3EE'],[[[4,2],[4,3],[4,4],[4,5]],'C']],
    shooter:[[[[5,7],[6,7]].concat(rect(4,8,7,8),rect(3,9,8,9),[[3,10],[8,10]]),'C'],[[[5,9],[6,9]],'#fff'],[[[5,4],[5,5]],'#fff'],[rect(2,1,3,2).concat(rect(8,1,9,2)),'#F2A7E6']]};
  window.pixIcon=(g,id,ox,oy,s,col)=>{const L=I[id];if(!L)return;g.fillStyle='#111';L.forEach(([cells,c])=>cells.forEach(([x,y])=>g.fillRect(ox+(x-1)*s,oy+(y-1)*s,s*3,s*3)));
    L.forEach(([cells,c])=>{g.fillStyle=c==='C'?col:c;cells.forEach(([x,y])=>g.fillRect(ox+x*s,oy+y*s,s,s))})}})();
/* ===== AVATAR RUN (original retro racer) ===== */
const cv=$('#screen'), x=cv.getContext('2d'); x.imageSmoothingEnabled=false;
const W=240,H=200,HOR=76,ROADB=H-44, gb=$('#gb');
let best=0; try{best=+localStorage.getItem('sa-run-best')||0}catch(e){} $('#best').textContent=best;
const G={state:'title',t:0,pos:0,speed:0,px:0,time:45,score:0,curve:0,curveT:0,target:0,cars:[],orbs:[],flash:0,msg:'',paused:false,crash:0,next:3000};
const keys={left:false,right:false,gas:false}; let engaged=false; const MAX=11;
let focusOn=false;function setFocus(v){if(v===focusOn)return;focusOn=v;document.body.classList.toggle('focus',v)}
function start(){Object.assign(G,{state:'play',pos:0,speed:0,px:0,time:45,score:0,curve:0,curveT:0,target:0,cars:[],orbs:[],flash:0,paused:false,crash:0,next:3000});engaged=true;beep(660,.08)}
let ac=null;function beep(f,d){try{ac=ac||new (window.AudioContext||window.webkitAudioContext)();const o=ac.createOscillator(),g=ac.createGain();o.type='square';o.frequency.value=f;g.gain.value=.03;o.connect(g);g.connect(ac.destination);o.start();o.stop(ac.currentTime+d)}catch(e){}}
let last=performance.now();
function step(now){if(window.ARC&&ARC.active){last=now;requestAnimationFrame(step);return}const dt=Math.min(.05,(now-last)/1000);last=now;G.t++;
  if(G.state==='play'&&!G.paused){
    if(G.crash>0){G.crash-=dt;G.speed*=.9}else if(keys.gas)G.speed=Math.min(MAX,G.speed+dt*6);else G.speed=Math.max(0,G.speed-dt*4);
    if(Math.abs(G.px)>1)G.speed=Math.max(0,G.speed-dt*9);
    const st=(keys.right?1:0)-(keys.left?1:0);G.px+=st*dt*1.9*(G.speed/MAX+.3)-G.curve*dt*G.speed*.06;G.px=clamp(G.px,-1.6,1.6);
    G.pos+=G.speed*dt*60;G.score=Math.floor(G.pos/10);
    G.curveT-=dt;if(G.curveT<=0){G.curveT=2+Math.random()*3;G.target=Math.random()<.35?0:(Math.random()-.5)*3.2}G.curve+=(G.target-G.curve)*dt*.8;
    if(Math.random()<dt*(.5+G.speed/MAX))G.cars.push({x:Math.random()*1.6-.8,z:1,v:.12+Math.random()*.12,c:['#F2A7E6','#9CC3EE','#FFFFFF','#C5E86C'][Math.random()*4|0]});
    if(Math.random()<dt*.6)G.orbs.push({x:Math.random()*1.6-.8,z:1});
    const adv=G.speed/MAX*dt*.9;G.cars.forEach(c=>c.z-=adv-c.v*dt*.5*(G.speed/MAX));G.orbs.forEach(o=>o.z-=adv);
    G.cars=G.cars.filter(c=>c.z>-.05&&c.z<1.1);G.orbs=G.orbs.filter(o=>o.z>-.05&&!o.got);
    G.cars.forEach(c=>{if(c.z<.08&&c.z>0&&Math.abs(c.x-G.px)<.32&&G.crash<=0){G.crash=1;G.time=Math.max(0,G.time-3);G.flash=20;G.msg='CRASH -3s';gb.classList.remove('shake');void gb.offsetWidth;gb.classList.add('shake');beep(120,.25)}});
    G.orbs.forEach(o=>{if(o.z<.08&&Math.abs(o.x-G.px)<.3){o.got=true;G.time+=2;G.flash=14;G.msg='SIGNAL +2s';beep(990,.06)}});
    if(G.pos/10>=G.next){G.next+=3000;G.time+=12;G.flash=24;G.msg='CHECKPOINT +12s';beep(1320,.12)}
    G.time-=dt;if(G.time<=0){G.time=0;G.state='over';if(G.score>best){best=G.score;try{localStorage.setItem('sa-run-best',best)}catch(e){}$('#best').textContent=best}}}
  setFocus(G.state==='play'&&!G.paused&&playVisible());if(G.t%8===0&&G.state==='play')$('#now').textContent='Now '+G.score+' · '+Math.ceil(G.time)+'s left';if(G.state==='over'&&G.t%30===0)$('#now').textContent='Last run '+G.score;
  draw();requestAnimationFrame(step)}
const scrToZ=y=>(y-HOR)/(ROADB-HOR);
const CL=[[14,10,1.2],[96,6,1],[170,14,1.3],[52,30,.9],[130,32,1.1],[206,26,.8]];
function cloud(cx,cy,s){[[0,4,10,4],[4,0,10,4],[10,2,12,6],[18,5,10,4],[2,7,22,3]].forEach(([a,b,w,h])=>{x.fillStyle='#fff';x.fillRect(cx+a*s,cy+b*s,w*s,h*s);x.fillStyle='#C6D8EC';x.fillRect(cx+a*s,cy+(b+h-1)*s,w*s,s)})}
const mids=[];
function draw(){
  x.fillStyle='#DCEBFA';x.fillRect(0,0,W,HOR);const dr=G.pos*.015-G.curve*12;CL.forEach(([cx,cy,s])=>cloud(Math.round((((cx-dr)%(W+40))+W+40)%(W+40)-30),cy,s*2));
  x.fillStyle='#EEF4FA';x.fillRect(0,HOR-8,W,6);x.fillStyle='#C6D8EC';x.fillRect(0,HOR-3,W,3);
  x.fillStyle='#8E9BA8';for(let i=((-G.curve*8)%18+18)%18;i<W;i+=18){x.fillRect(i,HOR-7,1,4);x.fillRect(i-2,HOR-8,5,1)}
  let acc=0;for(let y=HOR;y<ROADB;y++){const p=scrToZ(y),wd=6+p*200,z=1/(p+.035);acc+=G.curve*(1-p)*.9;const m=W/2+acc*(1-p)*3-G.px*wd*.42,b=Math.floor(z*3.5+G.pos*.05)%2;
    x.fillStyle=b?'#C5E86C':'#B4DC55';x.fillRect(0,y,W,1);x.fillStyle=b?'#FFFFFF':'#F2A7E6';x.fillRect(m-wd/2-wd*.07,y,wd*1.14,1);x.fillStyle=b?'#2B2B2F':'#262629';x.fillRect(m-wd/2,y,wd,1);
    if(b){x.fillStyle='#fff';const lw=Math.max(1,wd*.02);x.fillRect(m-wd/6-lw/2,y,lw,1);x.fillRect(m+wd/6-lw/2,y,lw,1)}mids[y]=[m,wd]}
  [...G.orbs.map(o=>({...o,k:'o'})),...G.cars.map(c=>({...c,k:'c'}))].sort((a,b)=>b.z-a.z).forEach(o=>{if(o.z<0||o.z>1)return;const p=1-o.z,y=Math.round(HOR+p*(ROADB-HOR)),m=mids[Math.min(ROADB-1,y)];if(!m)return;const sx=m[0]+o.x*m[1]*.42,s=Math.max(.12,p);
    if(o.k==='c'){const w=30*s,h=14*s;x.fillStyle='#111111';x.fillRect(sx-w/2,y-h,w,h);x.fillStyle=o.c;x.fillRect(sx-w/2+1,y-h+1,w-2,h*.55);x.fillStyle='#FF5A4A';x.fillRect(sx-w/2+1,y-h*.4,w*.18,h*.18);x.fillRect(sx+w/2-1-w*.18,y-h*.4,w*.18,h*.18)}
    else{const r=Math.max(2,6*s);x.fillStyle='#111111';x.fillRect(sx-r-1,y-r*2.6-1,r*2+2,r*2+2);x.fillStyle='#8FD9C9';x.fillRect(sx-r,y-r*2.6,r*2,r*2)}});
  const bob=G.state==='play'&&G.speed>0&&G.t%6<3?1:0,ln=((keys.right?1:0)-(keys.left?1:0))*3,cx=W/2,by=ROADB-4+bob;
  x.fillStyle='rgba(0,0,0,.25)';x.fillRect(cx-34,by,68,3);x.fillStyle='#111111';x.fillRect(cx-33,by-8,12,9);x.fillRect(cx+21,by-8,12,9);x.fillRect(cx-34+ln,by-24,68,18);
  x.fillStyle='#B9A6F2';x.fillRect(cx-32+ln,by-22,64,14);x.fillStyle='#111111';x.fillRect(cx-24+ln,by-34,48,12);x.fillStyle='#B9A6F2';x.fillRect(cx-22+ln,by-32,44,10);
  x.fillStyle='#2B2B2F';x.fillRect(cx-18+ln,by-30,36,6);x.fillStyle='#F2A7E6';x.fillRect(cx-28+ln,by-18,10,4);x.fillRect(cx+18+ln,by-18,10,4);x.fillStyle='#7E6AD1';x.fillRect(cx-10+ln,by-12,20,3);
  x.fillStyle='#111111';x.fillRect(0,ROADB,W,H-ROADB);x.fillStyle='#1B1B1E';x.fillRect(2,ROADB+2,W-4,H-ROADB-4);
  const rev=Math.round(G.speed/MAX*16);for(let i=0;i<16;i++){x.fillStyle=i<rev?(i<9?'#8FD9C9':i<13?'#B9A6F2':'#F2A7E6'):'#333338';x.fillRect(74+i*6,ROADB+5,4,4)}
  const bx=(a,b,w,h)=>{x.fillStyle='#000000';x.fillRect(a,b,w,h)};x.textBaseline='top';x.font='8px Silkscreen';
  bx(20,ROADB+12,40,10);x.fillStyle='#F2F2EE';x.fillText('TIME',27,ROADB+13);bx(176,ROADB+12,48,10);x.fillStyle='#F2F2EE';x.fillText('SCORE',182,ROADB+13);
  bx(72,ROADB+12,96,12);x.fillStyle='#F2F2EE';x.font='10px Silkscreen';x.fillText(String(Math.round(G.speed/MAX*240)).padStart(3,' ')+' KM/H',86,ROADB+13);
  bx(20,ROADB+26,40,13);x.fillStyle='#F2F2EE';x.fillText(String(Math.ceil(G.time)).padStart(3,'0'),27,ROADB+28);bx(176,ROADB+26,48,13);x.fillStyle='#F2F2EE';x.fillText(String(G.score).padStart(5,'0'),180,ROADB+28);
  bx(72,ROADB+28,96,11);x.fillStyle='#F2F2EE';x.font='8px Silkscreen';x.fillText('S',76,ROADB+30);x.fillText('G',160,ROADB+30);const pr=((G.pos/10)%3000)/3000;for(let i=0;i<14;i++){x.fillStyle=i/14<pr?'#ABABF5':'#333338';x.fillRect(86+i*5,ROADB+31,3,5)}
  if(G.flash>0){G.flash--;x.fillStyle='#111111';x.font='12px Silkscreen';x.textAlign='center';x.fillText(G.msg,W/2,HOR+10);x.textAlign='left'}
  if(G.state==='title')panel('AVATAR RUN','PRESS START');if(G.state==='over')panel('TIME UP','SCORE '+G.score+' · START');if(G.paused&&G.state==='play')panel('PAUSED','PRESS B',1)}
function panel(a,b,still){x.fillStyle='rgba(255,255,255,.92)';x.fillRect(30,58,180,62);x.strokeStyle='#111111';x.lineWidth=2;x.strokeRect(30,58,180,62);x.fillStyle='#111111';x.textAlign='center';x.font='16px Silkscreen';x.fillText(a,W/2,70);x.font='10px Silkscreen';if(still||Math.floor(G.t/24)%2===0)x.fillText(b,W/2,96);x.textAlign='left'}
requestAnimationFrame(step);setInterval(()=>{$('#lat').textContent=16+Math.round(Math.random()*5)},1400);
$$('.gb [data-k]').forEach(btn=>{const k=btn.dataset.k;
  btn.addEventListener('pointerdown',e=>{e.preventDefault();engaged=true;btn.classList.add('on');if(window.ARC&&ARC.active){ARC.press(k==='select'?'start':k);return}if(k==='left'||k==='right')keys[k]=true;if(k==='a'){if(G.state!=='play')start();keys.gas=true}if(k==='start'&&G.state!=='play')start();if(k==='select')start();if(k==='b'&&G.state==='play')G.paused=!G.paused});
  const up=()=>{btn.classList.remove('on');if(window.ARC&&ARC.active){ARC.press(k,false);return}if(k==='left'||k==='right')keys[k]=false;if(k==='a')keys.gas=false};btn.addEventListener('pointerup',up);btn.addEventListener('pointerleave',up)});
$('#gb').addEventListener('pointerdown',()=>{window.__dev='run'});
cv.addEventListener('pointerdown',()=>{engaged=true;if(window.ARC&&ARC.active){ARC.press(ARC.playing()?'a':'start');return}if(G.state!=='play')start()});
const playVisible=()=>{const r=$('#gb').getBoundingClientRect();return r.top<innerHeight&&r.bottom>0};
addEventListener('scroll',()=>{if(!playVisible()){engaged=false;keys.gas=keys.left=keys.right=false;if(G.state==='play')G.paused=true}},{passive:true});
addEventListener('keydown',e=>{if(!playVisible()||(window.ARC&&ARC.active))return;const k=e.key;if(k==='Enter'){e.preventDefault();engaged=true;if(G.state!=='play')start();else if(G.paused)G.paused=false;return}if(!engaged)return;
  if(k==='ArrowLeft'){e.preventDefault();keys.left=true}if(k==='ArrowRight'){e.preventDefault();keys.right=true}if(k==='ArrowUp'||k===' '||k==='a'||k==='A'){e.preventDefault();keys.gas=true}if(k==='ArrowDown')e.preventDefault();if(k==='b'||k==='B'||k==='Escape'){if(G.state==='play')G.paused=!G.paused}});
addEventListener('keyup',e=>{if(e.key==='ArrowLeft')keys.left=false;if(e.key==='ArrowRight')keys.right=false;if(['ArrowUp',' ','a','A'].includes(e.key))keys.gas=false});


gsap.fromTo('#gb',{rotationX:28,y:60,scale:.88,transformPerspective:900},{rotationX:0,y:0,scale:1,ease:'none',scrollTrigger:{trigger:'#arena',start:'top 95%',end:'top 35%',scrub:true}});
gsap.fromTo('#arena .panel',{y:40,opacity:0},{y:0,opacity:1,stagger:.08,duration:.7,ease:'power3.out',scrollTrigger:{trigger:'#arena',start:'top 80%',toggleActions:'play none none reverse'}});
if(matchMedia('(hover:hover) and (pointer:fine)').matches&&!RM){const cur=$('#cur'),box=$('#box'),lab=box.querySelector('span'),pt=$('#pt');document.documentElement.classList.add('hascur');cur.style.display='block';
  const snap=v=>Math.round(v/4)*4;let target=null,mxp=0,myp=0;
  $('#mc').dataset.c='push';$('#fc').dataset.c='play';$('#screen').dataset.c='play';$('#title').dataset.c='poke';$$('#chart .col').forEach(c=>c.dataset.c='read');$('#copy').dataset.c='copy';$$('.cart').forEach(c=>c.dataset.c='insert');
  function place(){if(target&&target.isConnected&&target.dataset.c!=='push'&&target.tagName!=='CANVAS'){const r=target.getBoundingClientRect();gsap.to(box,{x:r.left-6,y:r.top-6,width:r.width+12,height:r.height+12,duration:.28,ease:'power3.out',overwrite:true})}
    else gsap.to(box,{x:snap(mxp)-13,y:snap(myp)-13,width:26,height:26,duration:.18,ease:'power3.out',overwrite:true})}
  addEventListener('pointermove',e=>{mxp=e.clientX;myp=e.clientY;gsap.set(pt,{x:snap(mxp),y:snap(myp)});const t=e.target.closest('[data-c],a,button');
    if(t!==target){target=t;if(t){cur.classList.add('big');lab.textContent=t.dataset.c||(t.tagName==='A'?'go':'click')}else cur.classList.remove('big')}
    cur.classList.toggle('dark',!!e.target.closest('#cases,body.focus #play'));place()});
  addEventListener('scroll',()=>{if(target)place()},{passive:true});
  addEventListener('pointerdown',()=>gsap.fromTo(box,{scale:.85},{scale:1,duration:.3,ease:'back.out(3)'}));
  document.addEventListener('pointerleave',()=>gsap.to(cur,{opacity:0}));document.addEventListener('pointerenter',()=>gsap.to(cur,{opacity:1}))}
/* ===== ARCADE CARTRIDGES: snake · blocks · shooter run inside the same handheld ===== */
(function(){const scr=$('#screen');if(!scr)return;const sx=scr.getContext('2d');const cv=document.createElement('canvas');cv.width=256;cv.height=160;const x=cv.getContext('2d');const W=256,H=160;
  const NAMES=['SNAKE','BLOCKS','SHOOTER'],ACC=['#8FD9C9','#ABABF5','#F2A7E6'],BG='#F2F2EE',INK='#111111';
  const GW={g:0,st:'title',paused:false,t:0,k:{left:false,right:false,down:false,a:false}};let best=[0,0,0];try{best=JSON.parse(localStorage.getItem('sa-cart-best'))||[0,0,0]}catch(e){}
  let ac=null;const beep=(f,d)=>{try{ac=ac||new (window.AudioContext||window.webkitAudioContext)();const o=ac.createOscillator(),g=ac.createGain();o.type='square';o.frequency.value=f;g.gain.value=.025;o.connect(g);g.connect(ac.destination);o.start();o.stop(ac.currentTime+d)}catch(e){}};
  const txt=(t,X,Y,c=INK,sz=8,al='left')=>{x.fillStyle=c;x.font=sz+'px Silkscreen';x.textAlign=al;x.textBaseline='top';x.fillText(t,X,Y);x.textAlign='left'};
  const dots=(c='rgba(17,17,17,.08)')=>{x.fillStyle=c;for(let yy=4;yy<H;yy+=8)for(let xx=4;xx<W;xx+=8)x.fillRect(xx,yy,1,1)};
  const showBest=()=>{$('#best').textContent=best[GW.g]};
  function over(score){GW.st='over';GW.score=score;if(score>best[GW.g]){best[GW.g]=score;try{localStorage.setItem('sa-cart-best',JSON.stringify(best))}catch(e){}showBest()}$('#now').textContent='Last run '+score;beep(140,.3)}
  /* snake */
  let SN;const snInit=()=>{SN={b:[[8,10],[7,10],[6,10]],d:[1,0],nd:[1,0],f:[20,10],acc:0,sp:.12,score:0}};
  const snFood=()=>{do{SN.f=[(Math.random()*32)|0,2+((Math.random()*18)|0)]}while(SN.b.some(p=>p[0]===SN.f[0]&&p[1]===SN.f[1]))};
  function snUpd(dt){SN.acc+=dt;while(SN.acc>SN.sp){SN.acc-=SN.sp;SN.d=SN.nd;const h=[SN.b[0][0]+SN.d[0],SN.b[0][1]+SN.d[1]];if(h[0]<0||h[1]<2||h[0]>=32||h[1]>=20||SN.b.some(p=>p[0]===h[0]&&p[1]===h[1])){over(SN.score);return}
    SN.b.unshift(h);if(h[0]===SN.f[0]&&h[1]===SN.f[1]){SN.score+=10;SN.sp=Math.max(.055,SN.sp-.004);snFood();beep(880,.05)}else SN.b.pop()}}
  function scene(night){x.fillStyle=night?'#E3E3FF':'#DCEBFA';x.fillRect(0,0,W,H);x.fillStyle=night?'#ECEBFF':'#E8F2FC';x.fillRect(0,H*.32,W,H*.2);
    [[20,24,1],[120,14,1.3],[200,36,.9]].forEach(([cx,cy,sc],i)=>{const xx=((cx-GW.t*.15*(i+1))%(W+60)+W+60)%(W+60)-40;x.fillStyle='#fff';x.fillRect(xx,cy,26*sc,6*sc);x.fillRect(xx+6*sc,cy-4*sc,14*sc,4*sc)});
    x.fillStyle='#B4DC55';for(let i=0;i<W;i+=4){const h=18+Math.round(Math.sin(i*.035)*8+Math.sin(i*.09)*4);x.fillRect(i,H-h-14,4,h+14)}
    x.fillStyle='#C5E86C';for(let i=0;i<W;i+=4){const h=10+Math.round(Math.sin(i*.05+2)*5);x.fillRect(i,H-h-6,4,h+6)}x.fillStyle='#9CCB45';x.fillRect(0,H-6,W,6)}
  function snDraw(){for(let yy=0;yy<H;yy+=8)for(let xx=0;xx<W;xx+=8){x.fillStyle=((xx+yy)/8)%2?'#D6EFB4':'#CDEBA6';x.fillRect(xx,yy,8,8)}x.fillStyle=INK;x.fillRect(0,15,W,1);
    x.fillStyle='#F2A7E6';x.fillRect(SN.f[0]*8+1,SN.f[1]*8+1,6,6);if(GW.t%20<10){x.fillStyle=INK;x.fillRect(SN.f[0]*8+3,SN.f[1]*8+3,2,2)}
    SN.b.forEach((p,i)=>{x.fillStyle=INK;x.fillRect(p[0]*8,p[1]*8,8,8);x.fillStyle=i===0?'#B9A6F2':'#8FD9C9';x.fillRect(p[0]*8+1,p[1]*8+1,6,6)});
    txt('SCORE '+String(SN.score).padStart(4,'0'),4,4);txt('BEST '+best[0],W-4,4,INK,8,'right')}
  /* blocks */
  const PCS=[[[1,1,1,1]],[[1,1],[1,1]],[[0,1,0],[1,1,1]],[[1,0,0],[1,1,1]],[[0,0,1],[1,1,1]],[[1,1,0],[0,1,1]],[[0,1,1],[1,1,0]]],PC=['#8FD9C9','#B9A6F2','#ABABF5','#9CC3EE','#F2A7E6','#C5E86C','#F2A7E6'];
  let BL;const rot=m=>m[0].map((_,i)=>m.map(r=>r[i]).reverse());
  const fits=(m,px,py)=>m.every((r,j)=>r.every((v,i)=>!v||(px+i>=0&&px+i<10&&py+j<19&&(py+j<0||!BL.g[py+j][px+i]))));
  const blSpawn=()=>{BL.i=BL.n;BL.m=PCS[BL.i];BL.n=(Math.random()*7)|0;BL.x=3;BL.y=0;if(!fits(BL.m,BL.x,BL.y))over(BL.score)};
  const blInit=()=>{BL={g:Array.from({length:19},()=>Array(10).fill(0)),n:(Math.random()*7)|0,acc:0,sp:.6,score:0,lines:0};blSpawn()};
  function blLock(){BL.m.forEach((r,j)=>r.forEach((v,i)=>{if(v&&BL.y+j>=0)BL.g[BL.y+j][BL.x+i]=BL.i+1}));let c=0;for(let j=18;j>=0;j--){if(BL.g[j].every(v=>v)){BL.g.splice(j,1);BL.g.unshift(Array(10).fill(0));c++;j++}}
    if(c){BL.lines+=c;BL.score+=[0,40,100,300,1200][c];BL.sp=Math.max(.12,.6-BL.lines*.02);beep(1200,.08)}else beep(300,.03);blSpawn()}
  function blUpd(dt){BL.acc+=dt;const sp=GW.k.down?.04:BL.sp;if(BL.acc>sp){BL.acc=0;if(fits(BL.m,BL.x,BL.y+1))BL.y++;else blLock()}}
  function blDraw(){scene();const ox=88,oy=4,c=8;x.fillStyle=INK;x.fillRect(ox-2,oy-2,84,156);x.fillStyle='#FBFBF8';x.fillRect(ox,oy,80,152);
    const cell=(i,j,col)=>{x.fillStyle=INK;x.fillRect(ox+i*c,oy+j*c,c,c);x.fillStyle=col;x.fillRect(ox+i*c+1,oy+j*c+1,c-2,c-2);x.fillStyle='rgba(255,255,255,.6)';x.fillRect(ox+i*c+1,oy+j*c+1,c-2,1)};
    BL.g.forEach((r,j)=>r.forEach((v,i)=>{if(v)cell(i,j,PC[v-1])}));if(GW.st==='play'){let gy=BL.y;while(fits(BL.m,BL.x,gy+1))gy++;BL.m.forEach((r,j)=>r.forEach((v,i)=>{if(v){x.fillStyle='rgba(17,17,17,.12)';x.fillRect(ox+(BL.x+i)*c+1,oy+(gy+j)*c+1,c-2,c-2)}}))}
    BL.m.forEach((r,j)=>r.forEach((v,i)=>{if(v&&BL.y+j>=0)cell(BL.x+i,BL.y+j,PC[BL.i])}));
    txt('SCORE',12,12);txt(String(BL.score).padStart(5,'0'),12,24,INK,10);txt('LINES',12,48);txt(String(BL.lines),12,60,INK,10);txt('BEST',12,84);txt(String(best[1]),12,96,INK,10);
    txt('NEXT',184,12);PCS[BL.n].forEach((r,j)=>r.forEach((v,i)=>{if(v){x.fillStyle=INK;x.fillRect(184+i*8,28+j*8,8,8);x.fillStyle=PC[BL.n];x.fillRect(185+i*8,29+j*8,6,6)}}))}
  /* shooter: pastel drones sweep in, you defend the line */
  let SH;const shWave=n=>{const f=[];for(let j=0;j<3;j++)for(let i=0;i<8;i++)f.push({x:28+i*26,y:22+j*16,c:PC[(i+j)%7],on:true});return f};
  const shInit=()=>{SH={px:124,shots:[],es:[],foes:shWave(1),dx:0,dir:1,cool:0,score:0,lives:3,wave:1,inv:0}};
  function shUpd(dt){const k=GW.k;if(k.left)SH.px-=150*dt;if(k.right)SH.px+=150*dt;SH.px=clamp(SH.px,6,W-14);SH.cool-=dt;SH.inv-=dt;
    if(k.a&&SH.cool<=0){SH.shots.push({x:SH.px+3,y:136});SH.cool=.28;beep(1100,.02)}
    SH.shots.forEach(s=>s.y-=200*dt);SH.shots=SH.shots.filter(s=>s.y>10);
    const sp=(14+SH.wave*6)*dt;SH.dx+=SH.dir*sp;const xs=SH.foes.filter(f=>f.on).map(f=>f.x+SH.dx);if(xs.length&&(Math.max(...xs)>W-16||Math.min(...xs)<6)){SH.dir*=-1;SH.foes.forEach(f=>f.y+=6)}
    SH.foes.forEach(f=>{if(!f.on)return;SH.shots.forEach(s=>{if(s.y>0&&s.x>f.x+SH.dx-1&&s.x<f.x+SH.dx+12&&s.y>f.y&&s.y<f.y+9){f.on=false;s.y=-9;SH.score+=10;beep(700,.04)}});if(f.y>124)over(SH.score);if(Math.random()<dt*.08*SH.wave)SH.es.push({x:f.x+SH.dx+5,y:f.y+9})});
    SH.es.forEach(e=>e.y+=90*dt);SH.es=SH.es.filter(e=>{if(e.y>134&&e.y<146&&e.x>SH.px-1&&e.x<SH.px+10&&SH.inv<=0){SH.lives--;SH.inv=1.2;beep(160,.2);if(SH.lives<=0)over(SH.score);return false}return e.y<H});
    if(SH.foes.every(f=>!f.on)){SH.wave++;SH.foes=shWave(SH.wave);SH.dx=0}}
  function shDraw(){scene(true);for(let i=0;i<30;i++){x.fillStyle='rgba(17,17,17,.12)';x.fillRect((i*53+GW.t*.3)%W,(i*37+GW.t*.6)%H,1,1)}x.fillStyle=INK;x.fillRect(0,13,W,1);x.fillRect(0,150,W,1);
    SH.foes.forEach(f=>{if(!f.on)return;const fx=Math.round(f.x+SH.dx),fy=Math.round(f.y),wob=GW.t%30<15?0:1;x.fillStyle=INK;x.fillRect(fx,fy,12,9);x.fillStyle=f.c;x.fillRect(fx+1,fy+1,10,6);x.fillStyle=INK;x.fillRect(fx+3,fy+3,2,2);x.fillRect(fx+7,fy+3,2,2);x.fillRect(fx+1+wob,fy+9,2,2);x.fillRect(fx+9-wob,fy+9,2,2)});
    x.fillStyle=INK;SH.shots.forEach(s=>x.fillRect(s.x,s.y,2,5));x.fillStyle='#F2A7E6';SH.es.forEach(e=>{x.fillRect(e.x,e.y,3,3)});
    if(SH.inv<=0||GW.t%6<3){const p=Math.round(SH.px);x.fillStyle=INK;x.fillRect(p+3,134,4,3);x.fillRect(p,137,10,6);x.fillStyle='#B9A6F2';x.fillRect(p+1,138,8,4);x.fillStyle=INK;x.fillRect(p+4,138,2,2)}
    txt('SCORE '+String(SH.score).padStart(4,'0'),4,3);txt('WAVE '+SH.wave,W/2,3,INK,8,'center');for(let i=0;i<SH.lives;i++){x.fillStyle='#B9A6F2';x.fillRect(W-12-i*10,4,6,6);x.fillStyle=INK;x.fillRect(W-12-i*10,4,6,1)}}
  const INIT=[snInit,blInit,shInit],UPD=[snUpd,blUpd,shUpd],DRAW=[snDraw,blDraw,shDraw];INIT[0]();
  function title(){scene();const a=ACC[GW.g];x.fillStyle=INK;x.fillRect(W/2-46,22,92,46);x.fillStyle=a;x.fillRect(W/2-44,24,88,42);
    window.pixIcon(x,['snake','blocks','shooter'][GW.g],W/2-18,27,3,a);
    txt(NAMES[GW.g],W/2,78,INK,16,'center');if(GW.t%40<26)txt('PRESS START',W/2,108,INK,8,'center');txt('BEST '+best[GW.g],W/2,128,'#666',8,'center')}
  let last=performance.now(),load=0;
  function loop(now){const dt=Math.min(.05,(now-last)/1000);last=now;if(ARC.active){GW.t++;
    if(load>0){load-=dt;x.fillStyle=INK;x.fillRect(0,0,W,H);txt('LOADING',W/2,66,'#F2F2EE',12,'center');const n=Math.floor((1-load/.9)*12);for(let i=0;i<12;i++){x.fillStyle=i<n?ACC[GW.g]:'#333';x.fillRect(W/2-48+i*8,90,6,6)}}
    else if(GW.st==='title')title();else{if(GW.st==='play'&&!GW.paused)UPD[GW.g](dt);DRAW[GW.g]();
      if(GW.paused&&GW.st==='play'){x.fillStyle='rgba(242,242,238,.88)';x.fillRect(60,56,136,40);txt('PAUSED',W/2,70,INK,12,'center')}
      if(GW.st==='over'){x.fillStyle='rgba(242,242,238,.92)';x.fillRect(48,44,160,72);x.fillStyle=INK;x.fillRect(48,44,160,2);x.fillRect(48,114,160,2);txt('GAME OVER',W/2,56,INK,14,'center');txt('SCORE '+GW.score,W/2,80,INK,8,'center');if(GW.t%40<26)txt('START = AGAIN',W/2,96,'#666',8,'center')}
      if(GW.st==='play'&&GW.t%10===0){const sc=[SN,BL,SH][GW.g].score;$('#now').textContent='Now '+sc}}
    sx.fillStyle='#111';sx.fillRect(0,0,240,200);sx.imageSmoothingEnabled=false;sx.drawImage(cv,0,25,240,150);
    sx.fillStyle='#F2F2EE';sx.font='8px Silkscreen';sx.textBaseline='top';sx.fillText('CART · '+NAMES[GW.g],8,9);sx.textAlign='right';sx.fillText('SELECT = RESTART',232,183);sx.textAlign='left';
    sx.fillStyle=ACC[GW.g];sx.fillRect(220,9,12,8)}
    requestAnimationFrame(loop)}
  requestAnimationFrame(loop);
  function press(k,down=true){if(!down){if(k in GW.k)GW.k[k]=false;return}
    if(k==='start'){if(GW.st!=='play'){INIT[GW.g]();GW.st='play';GW.paused=false;beep(990,.06)}else GW.paused=!GW.paused;return}
    if(GW.st==='title'||GW.st==='over'){if(k==='a'){INIT[GW.g]();GW.st='play';beep(990,.06)}return}
    if(k==='b'&&GW.g!==1){GW.paused=!GW.paused;return}
    if(GW.paused)return;if(k in GW.k)GW.k[k]=true;
    if(GW.g===0){const d=SN.d;if(k==='left'&&d[0]!==1)SN.nd=[-1,0];if(k==='right'&&d[0]!==-1)SN.nd=[1,0];if(k==='up'&&d[1]!==1)SN.nd=[0,-1];if(k==='down'&&d[1]!==-1)SN.nd=[0,1]}
    if(GW.g===1){if(k==='left'&&fits(BL.m,BL.x-1,BL.y))BL.x--;if(k==='right'&&fits(BL.m,BL.x+1,BL.y))BL.x++;if(k==='up'||k==='a'){const r=rot(BL.m);if(fits(r,BL.x,BL.y))BL.m=r;else if(fits(r,BL.x-1,BL.y)){BL.m=r;BL.x--}else if(fits(r,BL.x+1,BL.y)){BL.m=r;BL.x++}}if(k==='b'){while(fits(BL.m,BL.x,BL.y+1))BL.y++;blLock()}}}
  window.ARC={active:false,press,playing:()=>GW.st==='play'&&!GW.paused,set(i){GW.g=i;GW.st='title';GW.paused=false;load=.9;showBest()}};
  const vis=()=>{const r=$('#gb').getBoundingClientRect();return r.top<innerHeight&&r.bottom>0};
  const KM={ArrowLeft:'left',ArrowRight:'right',ArrowUp:'up',ArrowDown:'down',' ':'a',a:'a',A:'a',z:'a',b:'b',B:'b',x:'b',Enter:'start',Escape:'b'};
  addEventListener('keydown',e=>{if(!ARC.active||!vis())return;const k=KM[e.key];if(!k)return;e.preventDefault();if(!e.repeat||k==='left'||k==='right'||k==='down'||k==='a')press(k)});
  addEventListener('keyup',e=>{const k=KM[e.key];if(k)press(k,false)});
  addEventListener('scroll',()=>{if(ARC.active&&!vis()&&GW.st==='play')GW.paused=true},{passive:true});
  /* cartridges */
  const pixIcon=window.pixIcon;
  $$('.cart').forEach(c=>{const cv=c.querySelector('canvas');cv.width=cv.height=28;const g=cv.getContext('2d');g.clearRect(0,0,28,28);pixIcon(g,c.dataset.cart,2,2,2,getComputedStyle(c).getPropertyValue('--c').trim())});
  const HOW={race:['Reach Rotterdam before the clock runs out.',[['#E6DEFF','Signal','+2 s'],['#DBF5F0','Checkpoint','+12 s'],['#FFE3FB','Crash','−3 s']],[['Enter','Start'],['← →','Steer'],['↑ A','Hold to drive'],['B','Pause']],'A4 · DELFT → ROTTERDAM'],
    snake:['Eat the signals, grow your avatar, never bite yourself.',[['#FFE3FB','Signal','+10'],['#DBF5F0','Faster each bite',''],['#E3E3FF','Hit a wall','end']],[['Enter','Start'],['← ↑ → ↓','Turn'],['B','Pause']],'GRID · 32 × 18'],
    blocks:['Stack the blocks and clear full lines.',[['#E3E3FF','1 line','+40'],['#E6DEFF','4 lines','+1200'],['#FFE3FB','Top out','end']],[['Enter','Start'],['← →','Move'],['↑ A','Rotate'],['↓','Soft drop'],['B','Hard drop']],'STACK · 10 × 19'],
    shooter:['Defend the network from rogue drones.',[['#FFE3FB','Drone','+10'],['#DCEBFA','New wave','faster'],['#E6DEFF','3 lives','']],[['Enter','Start'],['← →','Move'],['A','Hold to fire'],['B','Pause']],'NETWORK · DEFENCE']};
  function setHow(id){const h=HOW[id];$('#howh').textContent=h[0];$('#howr').innerHTML=h[1].map(r=>`<li><i style="background:${r[0]}"></i><span>${r[1]}</span><b>${r[2]}</b></li>`).join('');$('#howk').innerHTML=h[2].map(k=>`<li><span>${k[0].split(' ').map(t=>`<kbd>${t}</kbd>`).join('')}</span>${k[1]}</li>`).join('');$('#bzr').textContent=h[3]}
  setHow('race');
  const IDX={snake:0,blocks:1,shooter:2};
  function insert(c){const id=c.dataset.cart;if(c.classList.contains('on'))return;$$('.cart').forEach(o=>o.classList.remove('on'));c.classList.add('on');
    const r=c.getBoundingClientRect(),sl=$('#slot').getBoundingClientRect(),gh=c.cloneNode(true);gh.style.cssText+=`;position:fixed;left:${r.left}px;top:${r.top}px;width:${r.width}px;height:${r.height}px;margin:0;z-index:150;pointer-events:none;transform:none;outline:none`;document.body.appendChild(gh);
    gsap.timeline({onComplete:()=>gh.remove()}).to(gh,{x:sl.left+sl.width/2-(r.left+r.width/2),y:sl.top-r.height*.2-r.top,rotation:0,scale:.55,duration:.55,ease:'power3.inOut'}).to(gh,{y:'+='+(r.height*.35),opacity:0,duration:.25,ease:'power2.in'});
    gsap.fromTo('#slot',{y:-14},{y:0,duration:.35,delay:.6,ease:'bounce.out'});
    setTimeout(()=>{const lab=$('#slotlab');lab.textContent=c.querySelector('b').textContent;lab.style.setProperty('--c',getComputedStyle(c).getPropertyValue('--c'));$('#gb').classList.remove('shake');void $('#gb').offsetWidth;$('#gb').classList.add('shake');beep(520,.05);
      setHow(id);$('#bestlab').textContent='Your best · '+c.querySelector('b').textContent[0]+c.querySelector('b').textContent.slice(1).toLowerCase();
      if(id==='race'){ARC.active=false;let b=0;try{b=+localStorage.getItem('sa-run-best')||0}catch(e){}$('#best').textContent=b;$('#now').textContent='Press start to play'}else{ARC.active=true;ARC.set(IDX[id]);$('#now').textContent='Press start to play'}},560)}
  $$('.cart').forEach(c=>c.addEventListener('click',()=>insert(c)));
})();

/* ===== pixel transitions between sections (old-console style) ===== */
(function(){const cv=$('#txc'),c=cv.getContext('2d');let cells=[],cols=0,rows=0,cs=40,cur=null;
  const BAY=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5];
  const rnd=(i)=>Math.abs(Math.sin(i*127.1)*43758.5)%1;
  const PAT={bayer:(x,y)=>(BAY[(y%4)*4+(x%4)]+rnd(x*31+y)*.9)/16.9,
    iris:(x,y)=>{const dx=(x+.5)/cols-.5,dy=((y+.5)/rows-.5)*rows/cols;return Math.min(1,Math.sqrt(dx*dx+dy*dy)*1.55)},
    rain:(x,y)=>Math.min(1,y/rows*.65+rnd(x*7.3)*.35),
    diag:(x,y)=>Math.min(1,(x/cols*.6+y/rows*.4)*.9+rnd(x*13+y*7)*.1)};
  function size(){cs=innerWidth<600?28:44;cv.width=innerWidth;cv.height=innerHeight;cols=Math.ceil(innerWidth/cs);rows=Math.ceil(innerHeight/cs);cells=[];
    for(let y=0;y<rows;y++)for(let x=0;x<cols;x++){const h=rnd(x*91+y*17);cells.push({x,y,col:h<.1?PAL[Math.floor(h*60)%PAL.length]:'#111'})}}
  size();addEventListener('resize',size);
  function draw(p,pat){c.clearRect(0,0,cv.width,cv.height);if(p<=0||p>=1)return;const f=PAT[pat],a=p*2.15,b=p*2.15-1.15;
    for(const k of cells){const r=f(k.x,k.y);if(r<a&&r>b){const e=Math.min(1,(a-r)*6,(r-b)*6);const sz=cs*e;c.fillStyle=k.col;c.fillRect(k.x*cs+(cs-sz)/2,k.y*cs+(cs-sz)/2,sz+.5,sz+.5)}}}
  $$('.tx').forEach(el=>ScrollTrigger.create({trigger:el,start:'top bottom',end:'bottom top',onUpdate:s=>{const q=clamp((s.progress-.25)/.5,0,1);draw(q>.97?0:q,el.dataset.p)},onLeave:()=>draw(0),onLeaveBack:()=>draw(0)}));
})();
['#play','#research','#team'].forEach(id=>ScrollTrigger.create({trigger:id,start:()=>$(id).offsetHeight>innerHeight?'bottom bottom':'top top',end:'+=45%',pin:true,pinSpacing:true}));
ScrollTrigger.sort();
const PW=(function(){const cv=$('#pw');const c=cv.getContext('2d');const BAY=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5];let cs=44,cells=[];const rnd=i=>Math.abs(Math.sin(i*127.1)*43758.5)%1;
  function size(){cs=innerWidth<600?28:44;cv.width=innerWidth;cv.height=innerHeight;const cols=Math.ceil(innerWidth/cs),rows=Math.ceil(innerHeight/cs);cells=[];for(let y=0;y<rows;y++)for(let x=0;x<cols;x++){const h=rnd(x*91+y*17);cells.push({x,y,r:(BAY[(y%4)*4+x%4]+rnd(x*31+y)*.9)/16.9,col:h<.1?PAL[Math.floor(h*60)%PAL.length]:'#111'})}}
  size();addEventListener('resize',size);const draw=v=>{c.clearRect(0,0,cv.width,cv.height);for(const k of cells){if(k.r<v){const e=Math.min(1,(v-k.r)*6),sz=cs*e;c.fillStyle=k.col;c.fillRect(k.x*cs+(cs-sz)/2,k.y*cs+(cs-sz)/2,sz+.5,sz+.5)}}};
  return {draw,cover(done){const o={v:0};gsap.to(o,{v:1.2,duration:.5,ease:'power1.in',onUpdate:()=>draw(o.v),onComplete:done})}}})();
addEventListener('pageshow',e=>{if(e.persisted)PW.draw(0)});
document.addEventListener('click',e=>{const a=e.target.closest('a');if(!a||e.defaultPrevented)return;const h=a.getAttribute('href')||'';if(!h.startsWith('/')||a.target==='_blank'||e.metaKey||e.ctrlKey||RM)return;e.preventDefault();PW.cover(()=>{location.href=h})});
addEventListener('load',()=>{window.scrollTo(0,0);if(lenis)lenis.scrollTo(0,{immediate:true,force:true});ScrollTrigger.refresh()});
})();

}
