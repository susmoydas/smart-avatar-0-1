import InnerPage from '@/components/InnerPage';
import { DotHero, More } from '@/components/ui';
import { SITE } from '@/content/site';

export const metadata = { title: 'Contact · SmartAvatar', description: 'Book a demo or ask a question. SmartAvatar, Delft, the Netherlands.' };

export default function Contact() {
  return (
    <InnerPage section="contact">
      <DotHero word="Say hi" fill={0.7} crumbs={[['Contact']]} lead="Tell our bot about your machines." actions={<More href="#chat">Start chatting</More>} />
      <section className="sec" id="chat"><div className="wrap term-wrap">
        <div>
          <h2 className="dt" style={{ fontSize: 'clamp(34px,4.4vw,68px)', lineHeight: '.95' }}>One question<br />at a time.</h2>
          <p className="lead">At the end, your own email app opens with the message filled in.</p>
          <div className="carts-row" style={{ marginTop: 24 }}>
            <div className="cartl" style={{ '--c': '#E6DEFF', width: 'auto', aspectRatio: 'auto' }}><span className="lab"><span className="mono">Email</span><b style={{ fontSize: 16 }}>{SITE.email}</b></span></div>
            <div className="cartl" style={{ '--c': '#DCEBFA', width: 'auto', aspectRatio: 'auto' }}><span className="lab"><span className="mono">Delft · HQ</span><b style={{ fontSize: 16 }}><span className="clk" data-tz="Europe/Amsterdam" /> now</b></span></div>
          </div>
        </div>
        <div id="term">
          <div className="tm-head"><canvas className="tm-bot" width="72" height="72" aria-hidden="true" /><div><b>SmartAvatar bot</b><span className="mono" style={{ color: 'var(--grey)' }}>online</span></div></div>
          <div className="tm-log" aria-live="polite" />
          <div className="tm-chips" />
          <form autoComplete="on"><input aria-label="Your answer" placeholder="Type here and press Enter" /><button className="more" type="submit">Send <i>→</i></button></form>
        </div>
      </div></section>
    </InnerPage>
  );
}
