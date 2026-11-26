import InnerPage from '@/components/InnerPage';
import { DotHero, NextBig, More, CartLink, Split } from '@/components/ui';
import { PROJECTS } from '@/content/site';

export const metadata = { title: 'Research · SmartAvatar', description: 'SmartAvatar is a partner in six Horizon Europe programmes on 6G, digital twins and trustworthy AI.' };

export default function Research() {
  const level = PROJECTS.map(({ slug, name, start, end, color }) => ({ slug, name, start, end, color }));
  return (
    <InnerPage section="research">
      <DotHero word="Research" crumbs={[['Research']]} lead="SmartAvatar is a partner in six Horizon Europe projects." actions={<More href="/contact">Work with us</More>} />
      <section className="level" data-projects={JSON.stringify(level)}>
        <div className="lv-pin"><canvas aria-hidden="true" /><div className="lv-ui"><div className="lv-year">2023</div><div className="lv-list" aria-live="polite" /></div></div>
      </section>
      <Split title="All six"><div className="carts-row">{PROJECTS.map(p => <CartLink key={p.slug} href={`/research/${p.slug}`} label={p.name} color={p.color} shape={p.shape} />)}</div></Split>
      <NextBig word="Team" href="/team" />
    </InnerPage>
  );
}
