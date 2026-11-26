import InnerPage from '@/components/InnerPage';
import { DotHero, MorphStory, NextBig, More, CartLink, Split } from '@/components/ui';
import { CASES, FEATURES } from '@/content/site';

export function generateStaticParams() { return CASES.map(c => ({ slug: c.slug })); }
export function generateMetadata({ params }) {
  const c = CASES.find(x => x.slug === params.slug);
  return { title: `${c.name} · SmartAvatar`, description: c.lead };
}

export default function Case({ params }) {
  const i = CASES.findIndex(x => x.slug === params.slug), c = CASES[i], next = CASES[(i + 1) % CASES.length];
  const feat = s => FEATURES.find(f => f.slug === s);
  return (
    <InnerPage section="machines">
      <DotHero word={c.name} fill={0.86} crumbs={[['Machines', '/machines'], [c.name]]} lead={c.lead} actions={<More href="/contact">Book a demo</More>} />
      <MorphStory steps={[
        { shape: c.shape, color: c.color, kicker: c.ind, title: 'The problem', text: c.ch },
        { shape: 'avatar', color: c.color, kicker: c.ind, title: 'What SmartAvatar does', text: c.ap },
        { shape: feat(c.feats[0]).icon, color: c.color, kicker: c.ind, title: 'The result', text: c.out },
      ]} />
      <Split alt title="Powers used"><div className="carts-row">{c.feats.map(s => { const f = feat(s); return <CartLink key={s} href={`/platform/${s}`} label={f.name} color={f.color} shape={f.icon} />; })}</div></Split>
      <NextBig word={next.name} href={`/machines/${next.slug}`} label="Next machine" />
    </InnerPage>
  );
}
