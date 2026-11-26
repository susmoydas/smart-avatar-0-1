import InnerPage from '@/components/InnerPage';

export const metadata = { title: 'Page not found · SmartAvatar' };

export default function NotFound() {
  return (
    <InnerPage>
      <section className="dwh" style={{ textAlign: 'center' }}>
        <h1 className="sr">Page not found</h1>
        <canvas className="dw" data-word="404" data-fill="0.5" aria-hidden="true" />
        <div className="wrap">
          <p className="lead" style={{ margin: '10px auto 0' }}>This page wandered off. Push the dots around while our robots look for it.</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginTop: 26, flexWrap: 'wrap' }}>
            <a className="more" href="/">Back home <i>→</i></a><a className="more ghost" href="/play">Play a game <i>→</i></a>
          </div>
        </div>
      </section>
    </InnerPage>
  );
}
