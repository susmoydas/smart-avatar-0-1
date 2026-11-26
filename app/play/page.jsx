import InnerPage from '@/components/InnerPage';
import Handheld from '@/components/Handheld';
import { DotHero, More } from '@/components/ui';

export const metadata = { title: 'Play · SmartAvatar pocket arcade', description: 'Four pixel games on one handheld: race, snake, blocks and shooter. Remote control, made playable.' };

export default function Play() {
  return (
    <InnerPage section="play" arcade>
      <DotHero word="Play" crumbs={[['Play']]} lead="Four small games on one handheld." actions={<More href="#play">Start playing</More>} />
      <section className="app" id="play" style={{ paddingTop: 20 }}><div className="wrap"><Handheld /></div></section>
    </InnerPage>
  );
}
