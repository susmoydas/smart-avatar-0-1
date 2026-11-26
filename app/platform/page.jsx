import InnerPage from '@/components/InnerPage';
import { DotHero, MorphStory, NextBig, More } from '@/components/ui';
import { FEATURES } from '@/content/site';

export const metadata = { title: 'Platform · SmartAvatar', description: 'The SmartAvatar platform gives every machine a live, trusted avatar: live twin, OTA updates, remote control, edge AI and Zero Trust.' };

export default function Platform() {
  return (
    <InnerPage section="platform">
      <DotHero word="Platform" crumbs={[['Platform']]} lead="Our real-time platform gives every machine a live, trusted avatar." actions={<More href="/contact">Book a demo</More>} />
      <MorphStory steps={FEATURES.map(f => ({ shape: f.icon, color: f.color, kicker: 'Power', title: f.name, text: f.lead, href: `/platform/${f.slug}`, cta: `Open ${f.name}` }))} />
      <NextBig word="Machines" href="/machines" />
    </InnerPage>
  );
}
