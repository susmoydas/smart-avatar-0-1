import InnerPage from '@/components/InnerPage';
import { DotHero, MorphStory, NextBig, More, CartLink, Split } from '@/components/ui';
import { FEATURES, CASES, STEP_SHAPES } from '@/content/site';

export function generateStaticParams() { return FEATURES.map(f => ({ slug: f.slug })); }
export function generateMetadata({ params }) {
  const f = FEATURES.find(x => x.slug === params.slug);
  return { title: `${f.name} · SmartAvatar platform`, description: f.lead };
}

export default function Feature({ params }) {
  const i = FEATURES.findIndex(x => x.slug === params.slug), f = FEATURES[i], next = FEATURES[(i + 1) % FEATURES.length];
  const used = CASES.filter(c => c.feats.includes(f.slug)).slice(0, 4);
  return (
    <InnerPage section="platform">
      <DotHero word={f.name} fill={0.86} crumbs={[['Platform', '/platform'], [f.name]]} lead={f.lead} actions={<More href="#demo">Try it</More>} />
      <MorphStory steps={f.steps.map(([title, text], k) => ({ shape: STEP_SHAPES[f.slug][k], color: f.color, kicker: 'How it works', title, text }))} />
      <section className="sec" id="demo"><div className="wrap">
        <div className="sh"><h2 className="dt">Try it</h2></div>
        <div className="demo" data-demo={f.demo}>
          <div className="screen"><canvas width="320" height="200" aria-label={`${f.name} demo`} /></div>
          <div className="side">
            <span className="mono">Demo</span><h3>{f.dtitle}</h3><p>{f.dtext}</p>
            {f.demo === 'edge-ai' && <label className="mono" style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>Vibration<input type="range" min="0" max="100" defaultValue="20" /></label>}
            <div className="dbtns">{f.btns.map(([act, label]) => <button key={act} className="more" data-act={act}>{label} <i>→</i></button>)}</div>
            <div className="dout" aria-live="polite" />
          </div>
        </div>
      </div></section>
      <Split alt title="Used on"><div className="carts-row">{used.map(c => <CartLink key={c.slug} href={`/machines/${c.slug}`} label={c.name} color={c.color} shape={c.shape} />)}</div></Split>
      <NextBig word={next.name} href={`/platform/${next.slug}`} label="Next power" />
    </InnerPage>
  );
}
