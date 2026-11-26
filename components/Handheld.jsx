// Pocket arcade: handheld device, cartridges and panels (games in lib/arcade-engine.js)
export default function Handheld(){
  return (
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

  );
}
