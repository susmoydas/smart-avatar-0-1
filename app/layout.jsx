import './globals.css';
import { SITE } from '@/content/site';

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: 'SmartAvatar · Live digital twins for real machines',
  description: SITE.description,
  icons: { icon: '/assets/favicon.svg', apple: '/assets/logo-static.svg' },
  openGraph: { type: 'website', siteName: 'SmartAvatar', images: ['/assets/og.png'] },
  twitter: { card: 'summary_large_image' },
};
export const viewport = { themeColor: '#F2F2EE' };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@500;600;700&family=Silkscreen&display=swap" rel="stylesheet" />
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
