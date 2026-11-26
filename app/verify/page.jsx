import InnerPage from '@/components/InnerPage';
import { DotHero } from '@/components/ui';

export const metadata = { title: 'Verify a certificate · SmartAvatar', description: 'Check a SmartAvatar certificate ID.' };

export default function Verify() {
  return (
    <InnerPage>
      <DotHero word="Verify" fill={0.7} crumbs={[['Verify certificate']]} lead="Enter a SmartAvatar certificate ID to check it." />
      <section className="sec"><div className="wrap split">
        <div>
          <form className="form" id="vform" style={{ gridTemplateColumns: '1fr' }}>
            <label>Certificate ID<input name="cid" placeholder="SA-1234-ABCD" autoComplete="off" /></label>
            <button className="more" type="submit">Check <i>→</i></button>
          </form>
          <div id="vout" className="vout" aria-live="polite">IDs look like SA-1234-ABCD.</div>
        </div>
        <div className="art" style={{ position: 'relative', aspectRatio: '1', background: '#DBF5F0' }}>
          <canvas className="ill" data-shape="shield" style={{ position: 'absolute', inset: '6%', width: '88%', height: '88%' }} aria-hidden="true" />
        </div>
      </div></section>
    </InnerPage>
  );
}
