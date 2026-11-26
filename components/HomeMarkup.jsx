// Home page markup (converted from the HTML version). Behaviour lives in lib/home-engine.js.
export default function HomeMarkup(){
  return (<>

<a className="skip" href="#machines">Skip to content</a>
<canvas id="pw" aria-hidden="true"></canvas>

<canvas id="txc" aria-hidden="true"></canvas>
<div id="loader"><canvas id="ldc" width="240" height="240"></canvas><span className="mono">SmartAvatar · Delft</span><span className="pc dt" id="pc">0%</span></div>
<a className="mark" href="/" aria-label="SmartAvatar home"><img src="/assets/logo.svg" alt="" width="34" height="34" /></a>
<div className="top"><span></span><span className="mono" id="clock">Delft --:--</span></div>

<section className="hero grid-bg" id="home">
  <div>
    <div className="boot mono" id="boot">warming up…</div>
    <h1 className="dt" id="title" aria-label="SmartAvatar"></h1>
    <p className="sub">We give real machines a <b>live digital twin</b>, so you can watch them, update them and keep them safe from wherever you are. Built in Delft.</p>
    <div className="actions"><a className="more" href="/contact">Book a demo <i>→</i></a><a className="more ghost" href="#play">Play the game <i>→</i></a></div>
  </div>
  <div className="hint"><canvas id="dive" width="168" height="120" aria-label="Scroll down"></canvas></div>
</section>

<div className="tx" data-p="bayer"></div>
{/* 1 · machines morph */}
<section id="machines"><div className="pin" id="morph">
  <canvas id="mc"></canvas>
  <div className="copy">
    <h2 className="dt">Any machine can have an avatar.</h2>
    <div className="mrow"><span className="mono" id="mcount">01 / 04</span></div><div className="who" id="who"></div>
    <div className="steps" id="steps"><i></i><i></i><i></i><i></i></div>
    <a className="more" href="/machines">See all machines <i>→</i></a>
  </div>
</div></section>

<div className="tx" data-p="iris"></div>
{/* 2 · disc through text */}
<section><div className="pin" id="thru">
  <div className="words"><div>A machine</div><div>is <span className="gap" id="gap"></span> not</div><div>just <span className="metal">metal.</span></div><div className="soft" id="live"><span style={{'--wc':"#B9A6F2"}}>It's</span> <span style={{'--wc':"#8FD9C9"}}>live</span> <span style={{'--wc':"#F2A7E6"}}>data.</span></div></div>
  <div id="discw"><div className="disc" id="disc" data-c="swap"></div></div>
  <div className="ticks" id="ticks"></div>
</div></section>

<div className="tx" data-p="rain"></div>
{/* 3 · strips */}
<section id="platform"><div className="pin" id="strips">
  <div className="set" id="set"></div>
  <div className="title"><div><h2 className="dt">One avatar. Five powers.</h2><p>Our real-time platform, split into the five things it does.</p></div><a className="more" href="/platform">Explore the platform <i>→</i></a></div>
</div></section>

{/* 4 · wipe */}
<section><div id="wipe"><div className="bars" id="bars"></div><div className="lbl dt" id="wlbl">Where it works</div></div></section>

{/* 5 · cases 3D */}
<section id="cases-s"><div className="pin" id="cases">
  <div className="hd"><h2 className="dt">Six machines,<br />six stories.</h2></div>
  <div className="space" id="space"></div>
</div></section>

<div className="tx" data-p="diag"></div>
{/* play */}
<section className="app" id="play"><div className="wrap">
  <div className="app-head"><div><h2 className="dt">Pocket arcade</h2></div>
  <p>Four small games on one handheld. Start with the A4 race from Delft to Rotterdam, then swap the cartridge for snake, blocks or a shooter.</p></div>
  <div className="arena" id="arena">
    <div className="side">
      <div className="panel carts"><span className="mono">Cartridges · tap one to insert</span>
        <div className="cartlist" id="carts">
          <button className="cart on" data-cart="race" style={{'--c':"#B9A6F2"}}><span className="lab"><canvas width="16" height="16"></canvas><b>RACE</b></span><i></i></button>
          <button className="cart" data-cart="snake" style={{'--c':"#8FD9C9"}}><span className="lab"><canvas width="16" height="16"></canvas><b>SNAKE</b></span><i></i></button>
          <button className="cart" data-cart="blocks" style={{'--c':"#ABABF5"}}><span className="lab"><canvas width="16" height="16"></canvas><b>BLOCKS</b></span><i></i></button>
          <button className="cart" data-cart="shooter" style={{'--c':"#F2A7E6"}}><span className="lab"><canvas width="16" height="16"></canvas><b>SHOOTER</b></span><i></i></button>
        </div></div>
      <div className="panel score"><span className="mono" id="bestlab">Your best · Race</span><b className="dt" id="best">0</b><small><span id="now">Press start to play</span> · saved on this device</small></div>
    </div>
    <div className="stagewrap"><div className="gb" id="gb">
      <div className="slot" id="slot"><span id="slotlab" style={{'--c':"#B9A6F2"}}>RACE</span></div>
      <div className="bezel"><div className="bz"><span><i></i>LIVE · <span id="lat">18</span> MS</span><span id="bzr">A4 · DELFT → ROTTERDAM</span></div><canvas id="screen" width="240" height="200" aria-label="Handheld game screen"></canvas></div>
      <div className="brand">SmartAvatar</div>
      <div className="ctl">
        <div className="dpad"><button className="u" data-k="up" aria-label="Up"></button><button className="l" data-k="left" aria-label="Left"></button><button className="r" data-k="right" aria-label="Right"></button><button className="d" data-k="down" aria-label="Down"></button></div>
        <div className="ab"><button className="b" data-k="b" aria-label="B">B</button><button className="a" data-k="a" aria-label="A">A</button></div>
      </div>
      <div className="ss"><button data-k="select" aria-label="Restart">SELECT</button><button className="go" data-k="start" aria-label="Start">START</button></div>
      <div className="grille"></div>
    </div></div>
    <div className="side">
      <div className="panel"><span className="mono">How to play</span><h3 id="howh">Reach Rotterdam before the clock runs out.</h3>
        <ul className="rules" id="howr"></ul>
        <ul className="keys" id="howk"></ul>
        <small className="touch">On a phone, use the buttons on the device.</small></div>
      <div className="panel tip"><span className="mono">Real life</span><p>Our operators steer real cranes from kilometres away. Same idea, smaller screen.</p></div>
    </div>
  </div>
</div></section>

<div className="tx" data-p="bayer"></div>
{/* research */}
<section className="app" id="research"><div className="wrap">
  <div className="app-head"><div><h2 className="dt">Six EU programmes.</h2></div>
  <p>We work with partners across Europe on 6G, digital twins and AI you can trust. Taller bars run longer. Tap one.</p></div>
  <div className="chart" id="chart"></div>
  <div className="detail" id="detail"></div>
</div></section>

<div className="tx" data-p="rain"></div>
{/* team */}
<section className="app grid-bg" id="team"><div className="wrap">
  <div className="app-head"><div><h2 className="dt">Who we are</h2><a className="more" href="/team">Meet the team <i>→</i></a></div>
  <p>A small team of engineers and researchers in the Netherlands, Bangladesh and Taiwan.</p></div>
  <div className="team" id="teamg"></div>
</div></section>

<div className="tx" data-p="iris"></div>
{/* footer playground */}
<footer id="foot">
  <canvas id="fc"></canvas>
  <div className="corner tl"><b>Delft · HQ</b><span className="clk" data-tz="Europe/Amsterdam">--:--</span><br /><b style={{marginTop:"10px"}}>Mountain View</b><span className="clk" data-tz="America/Los_Angeles">--:--</span></div>
  <div className="corner tr"><b>Follow us</b><div className="soc" style={{justifyContent:"flex-end",margin:"4px 0 14px"}}><a href="#" data-page="LinkedIn" aria-label="LinkedIn"><canvas data-ico="li" width="20" height="20"></canvas></a><a href="#" data-page="YouTube" aria-label="YouTube"><canvas data-ico="yt" width="20" height="20"></canvas></a><a href="#" data-page="Instagram" aria-label="Instagram"><canvas data-ico="ig" width="20" height="20"></canvas></a><a href="#" data-page="X" aria-label="X"><canvas data-ico="x" width="20" height="20"></canvas></a></div><b>Explore</b><a href="/machines">Machines</a><a href="/platform">Platform</a><a href="/play">Play</a><a href="/research">Research</a></div>
  <div className="corner bl"><b>Company</b><a href="https://tuliptech.nl" target="_blank" rel="noopener">TulipTech ↗</a><a href="/banded">BÅNDED</a><span style={{color:"var(--grey)",fontSize:"12px"}}>© 2026 SmartAvatar B.V.</span></div>
  <div className="corner br"><b>Legal</b><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="/verify">Verify certificate</a></div>
  <div className="mail"><div className="mrow"><span className="addr">info@smartavatar.nl</span><button className="more" id="copy">Copy</button><a className="more ghost" href="mailto:info@smartavatar.nl">Email us</a></div></div>
</footer>

<nav className="dock" id="dock" aria-label="Sections"></nav>
<div id="toast" role="status"></div>
<div id="fade" aria-hidden="true"></div>
<div id="cur" aria-hidden="true"><div id="box"><b className="c1"></b><b className="c2"></b><b className="c3"></b><b className="c4"></b><span></span></div><i id="pt"></i></div>


  </>);
}
