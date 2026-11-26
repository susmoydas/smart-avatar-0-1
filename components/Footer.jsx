// Footer with the "SAY HI" dot playground (behaviour in lib/site-engine.js)
export default function Footer(){
  return (
<footer id="foot">
  <canvas id="fc"></canvas>
  <div className="corner tl"><b>Delft · HQ</b><span className="clk" data-tz="Europe/Amsterdam">--:--</span><br /><b style={{marginTop:"10px"}}>Mountain View</b><span className="clk" data-tz="America/Los_Angeles">--:--</span></div>
  <div className="corner tr"><b>Follow us</b><div className="soc" style={{justifyContent:"flex-end",margin:"4px 0 14px"}}><a href="#" data-page="LinkedIn" aria-label="LinkedIn"><canvas data-ico="li" width="20" height="20"></canvas></a><a href="#" data-page="YouTube" aria-label="YouTube"><canvas data-ico="yt" width="20" height="20"></canvas></a><a href="#" data-page="Instagram" aria-label="Instagram"><canvas data-ico="ig" width="20" height="20"></canvas></a><a href="#" data-page="X" aria-label="X"><canvas data-ico="x" width="20" height="20"></canvas></a></div><b>Explore</b><a href="/machines">Machines</a><a href="/platform">Platform</a><a href="/play">Play</a><a href="/research">Research</a></div>
  <div className="corner bl"><b>Company</b><a href="https://tuliptech.nl" target="_blank" rel="noopener">TulipTech ↗</a><a href="/banded">BÅNDED</a><span style={{color:"var(--grey)",fontSize:"12px"}}>© 2026 SmartAvatar B.V.</span></div>
  <div className="corner br"><b>Legal</b><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="/verify">Verify certificate</a></div>
  <div className="mail"><div className="mrow"><span className="addr">info@smartavatar.nl</span><button className="more" id="copy">Copy</button><a className="more ghost" href="mailto:info@smartavatar.nl">Email us</a></div></div>
</footer>
  );
}
