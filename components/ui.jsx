// Building blocks shared by the inner pages. Each one renders markup; lib/site-engine.js brings it to life.
export function More({ href, children, ghost }) {
  return <a className={`more${ghost ? ' ghost' : ''}`} href={href}>{children} <i>→</i></a>;
}

export function Crumb({ items }) {
  return (
    <div className="crumb mono">
      <a href="/">Home</a>
      {items.map(([label, href]) => (
        <span key={label}> <span>/</span> {href ? <a href={href}>{label}</a> : <span>{label}</span>}</span>
      ))}
    </div>
  );
}

/** Page opener: the page name drawn in dots you can push; it scatters as you scroll away. */
export function DotHero({ word, crumbs, lead, actions, fill = 0.9 }) {
  return (
    <section className="dwh">
      <div className="wrap"><Crumb items={crumbs} /></div>
      <h1 className="sr">{word}</h1>
      <canvas className="dw" data-word={word} data-fill={fill} data-scroll="" aria-hidden="true" />
      <div className="wrap dwh-b">
        <p className="lead">{lead}</p>
        <div className="acts">{actions}</div>
      </div>
      <div className="kidhint mono"><i />scroll</div>
    </section>
  );
}

/** Pinned scroll story: one halftone shape per step, morphing in a dither pattern. */
export function MorphStory({ steps }) {
  return (
    <section className="ms" data-steps={JSON.stringify(steps)}>
      <div className="ms-pin"><div className="ms-text" /><canvas aria-hidden="true" /></div>
    </section>
  );
}

/** Big dot-word link to the next page. */
export function NextBig({ word, href, label = 'Next' }) {
  return (
    <section className="wrap">
      <a className="nextbig" href={href} data-c="go">
        <span className="mono">{label}</span>
        <canvas className="dw" data-word={word} data-fill="0.8" aria-hidden="true" />
        <span className="sr">{word}</span>
      </a>
    </section>
  );
}

/** Game-cartridge style link. */
export function CartLink({ href, label, color, shape, external }) {
  return (
    <a className="cartl" href={href} style={{ '--c': color }} {...(external ? { target: '_blank', rel: 'noopener' } : {})}>
      <span className="lab"><img alt="" data-dot={shape} data-cell="9" data-size="120" /><b>{label.toUpperCase()}</b></span>
    </a>
  );
}

export function CaseCard({ c }) {
  return (
    <a className="case-card" href={`/machines/${c.slug}`} style={{ background: c.color }} data-tilt="">
      <span className="mono">{c.ind}</span>
      <img alt="" data-dot={c.shape} data-cell="6" data-size="300" />
      <h3>{c.name}</h3><p>{c.lead}</p><span className="go">Read the case →</span>
    </a>
  );
}

export function Split({ title, text, children, alt, id }) {
  return (
    <section className={`sec${alt ? ' alt' : ''}`} id={id}>
      <div className="wrap split"><div><h2 className="dt">{title}</h2>{text}</div>{children}</div>
    </section>
  );
}
