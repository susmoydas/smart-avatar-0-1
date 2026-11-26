import InnerPage from '@/components/InnerPage';
import { DotHero, MorphStory, NextBig, More } from '@/components/ui';

export const metadata = { title: 'BÅNDED · SmartAvatar', description: 'BÅNDED brings SmartAvatar to cities, institutions, universities and NGOs.' };

export default function Banded() {
  return (
    <InnerPage section="team">
      <DotHero word="BÅNDED" crumbs={[['BÅNDED']]} lead="For institutions, cities, universities and NGOs." actions={<More href="/contact">Get in touch</More>} />
      <MorphStory steps={[
        { shape: 'house', color: '#E6DEFF', kicker: 'BÅNDED', title: 'Institutions & cities', text: 'For institutions and cities.' },
        { shape: 'globe', color: '#DCEBFA', kicker: 'BÅNDED', title: 'Universities & NGOs', text: 'For universities and NGOs.' },
        { shape: 'chip', color: '#DBF5F0', kicker: 'BÅNDED', title: 'BåndFixIt', text: 'Ask us about BåndFixIt.', href: '/contact', cta: 'Ask us' },
      ]} />
      <NextBig word="Say hi" href="/contact" />
    </InnerPage>
  );
}
