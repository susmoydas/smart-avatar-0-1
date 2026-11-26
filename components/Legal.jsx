import InnerPage from './InnerPage';
import { Crumb } from './ui';
import { SITE } from '@/content/site';

export default function Legal({ title, parts }) {
  return (
    <InnerPage>
      <div className="rbar" aria-hidden="true"><i /></div>
      <section className="wrap sec" style={{ paddingTop: 140 }}>
        <Crumb items={[[title]]} />
        <h1 className="dt" style={{ fontSize: 'clamp(44px,6vw,90px)' }}>{title}</h1>
        <div className="prose" style={{ marginTop: 20 }}>
          <p>A plain-language summary. For the full legal text, email <a href={`mailto:${SITE.email}`} style={{ textDecoration: 'underline' }}>{SITE.email}</a>.</p>
          {parts.map(([h, p]) => <div key={h}><h2>{h}</h2><p>{p}</p></div>)}
        </div>
      </section>
    </InnerPage>
  );
}
