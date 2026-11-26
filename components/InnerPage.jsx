import Footer from './Footer';
import SiteScripts from './SiteScripts';

/** Frame for every inner page: logo, clock, page wipe, dock, cursor and footer. */
export default function InnerPage({ section = '', arcade = false, children }) {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <canvas id="pw" aria-hidden="true" />
      <a className="mark" href="/" aria-label="SmartAvatar home"><img src="/assets/logo.svg" alt="" width="40" height="40" /></a>
      <div className="top"><span /><span className="mono" id="clock">Delft --:--</span></div>
      <main id="main">{children}</main>
      <Footer />
      <nav className="dock" id="dock" aria-label="Main" />
      <div id="toast" role="status" />
      <div id="cur" aria-hidden="true">
        <div id="box"><b className="c1" /><b className="c2" /><b className="c3" /><b className="c4" /><span /></div><i id="pt" />
      </div>
      <SiteScripts section={section} arcade={arcade} />
    </>
  );
}
