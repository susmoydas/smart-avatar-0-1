import InnerPage from '@/components/InnerPage';
import { DotHero, NextBig, More } from '@/components/ui';
import { PROJECTS } from '@/content/site';

export function generateStaticParams() { return PROJECTS.map(p => ({ slug: p.slug })); }
export function generateMetadata({ params }) {
  const p = PROJECTS.find(x => x.slug === params.slug);
  return { title: `${p.name} · SmartAvatar research`, description: p.desc };
}

export default function Project({ params }) {
  const i = PROJECTS.findIndex(x => x.slug === params.slug), p = PROJECTS[i], next = PROJECTS[(i + 1) % PROJECTS.length];
  return (
    <InnerPage section="research">
      <DotHero word={p.name} fill={0.86} crumbs={[['Research', '/research'], [p.name]]} lead={p.desc} actions={<More href="/research">All projects</More>} />
      <section className="sec"><div className="wrap">
        <div className="sh"><h2 className="dt">{p.start}–{p.end}</h2><p>Horizon Europe · {p.end - p.start + 1} years</p></div>
        <canvas className="ytrack" data-start={p.start} data-end={p.end} data-color={p.color} aria-label={`Project runs ${p.start} to ${p.end}`} />
      </div></section>
      <section className="sec alt"><div className="wrap split">
        <div>
          <h2 className="dt">Our part</h2>
          <p>SmartAvatar is a partner in {p.name}. For details, <a href="/contact" style={{ textDecoration: 'underline' }}>get in touch</a>.</p>
          <p className="mono" style={{ fontSize: '10.5px', color: 'var(--grey)', marginTop: 24 }}>Funded by the European Union under Horizon Europe. Views and opinions expressed are those of the authors only.</p>
        </div>
        <div className="art" style={{ position: 'relative', aspectRatio: '1', background: p.color }}>
          <canvas className="ill" data-shape={p.shape} style={{ position: 'absolute', inset: '6%', width: '88%', height: '88%' }} aria-hidden="true" />
        </div>
      </div></section>
      <NextBig word={next.name} href={`/research/${next.slug}`} label="Next project" />
    </InnerPage>
  );
}
