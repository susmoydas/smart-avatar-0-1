import InnerPage from '@/components/InnerPage';
import { DotHero, NextBig, More, CaseCard } from '@/components/ui';
import { CASES } from '@/content/site';

export const metadata = { title: 'Machines · SmartAvatar', description: 'How SmartAvatar works on cranes, robots, medical carts, cars, tractors and whole fleets.' };

export default function Machines() {
  return (
    <InnerPage section="machines">
      <DotHero word="Machines" crumbs={[['Machines']]} lead="Six places where the same platform runs." actions={<More href="/contact">Book a demo</More>} />
      <section className="hg">
        <div className="wrap hg-head"><h2 className="dt">Six machines,<br />six stories.</h2></div>
        <div className="hg-track">{CASES.map(c => <CaseCard key={c.slug} c={c} />)}</div>
        <div className="hg-bar"><i /></div>
      </section>
      <NextBig word="Platform" href="/platform" />
    </InnerPage>
  );
}
