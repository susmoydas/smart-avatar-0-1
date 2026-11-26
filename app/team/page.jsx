import InnerPage from '@/components/InnerPage';
import { DotHero, NextBig, More, CartLink, Split } from '@/components/ui';

export const metadata = { title: 'Team · SmartAvatar', description: 'Engineers and researchers in the Netherlands, Bangladesh and Taiwan, with offices in Delft, Amsterdam and Mountain View.' };

const OFFICES = [
  ['Delft', 'HQ · Registered office', 'Delft, the Netherlands.', '#E6DEFF', 'Europe/Amsterdam'],
  ['Amsterdam', 'By appointment', 'Amsterdam, the Netherlands.', '#DCEBFA', 'Europe/Amsterdam'],
  ['Mountain View', 'By appointment', 'California, United States.', '#DBF5F0', 'America/Los_Angeles'],
];

export default function Team() {
  return (
    <InnerPage section="team">
      <DotHero word="Team" crumbs={[['Team']]} lead="Engineers and researchers in the Netherlands, Bangladesh and Taiwan." actions={<More href="#careers">Work with us</More>} />
      <section className="sec"><div className="wrap">
        <div className="sh"><h2 className="dt">Offices</h2></div>
        <div className="team">{OFFICES.map(([name, kicker, text, color, tz]) => (
          <div key={name} className="card2" style={{ background: color }} data-tilt="">
            <span className="mono">{kicker}</span><h3 className="dt">{name}</h3><p>{text}</p>
            <div className="tclk" data-tz={tz} /><canvas className="osky" data-tz={tz} width="240" height="80" aria-hidden="true" />
          </div>
        ))}</div>
      </div></section>
      <Split id="careers" title="Join us" text={<><p>Want to work with us? Send us a note.</p><a className="more" href="mailto:info@smartavatar.nl?subject=Open%20application">Send a note <i>→</i></a></>}>
        <div className="carts-row">
          <CartLink href="/consulting" label="Consulting" color="#DCEBFA" shape="chip" />
          <CartLink href="/banded" label="BÅNDED" color="#FFE3FB" shape="people" />
          <CartLink href="https://tuliptech.nl" label="TulipTech ↗" color="#E3E3FF" shape="avatar" external />
        </div>
      </Split>
      <NextBig word="Say hi" href="/contact" />
    </InnerPage>
  );
}
