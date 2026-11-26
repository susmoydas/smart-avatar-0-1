import InnerPage from '@/components/InnerPage';
import { DotHero, MorphStory, NextBig, More } from '@/components/ui';

export const metadata = { title: 'Consulting · SmartAvatar', description: 'Tech project consulting, secure innovation funding and Zero Trust security for connected machines.' };

export default function Consulting() {
  return (
    <InnerPage section="team">
      <DotHero word="Consulting" fill={0.86} crumbs={[['Consulting']]} lead="Tech project consulting, innovation funding and Zero Trust security." actions={<More href="/contact">Book a call</More>} />
      <MorphStory steps={[
        { shape: 'robot', color: '#DCEBFA', kicker: 'Service', title: 'Tech project consulting', text: 'Help with planning and delivering technology projects.' },
        { shape: 'globe', color: '#E9FAC0', kicker: 'Service', title: 'Secure innovation funding', text: 'Help with finding and applying for innovation funding.' },
        { shape: 'shield', color: '#FFE3FB', kicker: 'Service', title: 'Zero Trust security', text: 'Help with Zero Trust security for connected equipment.', href: '/contact', cta: 'Book a call' },
      ]} />
      <NextBig word="Say hi" href="/contact" />
    </InnerPage>
  );
}
