/** Static export: `npm run build` writes a plain website to /out (works on Vercel, Netlify or any host). */
const nextConfig = {
  output: 'export',
  reactStrictMode: false, // the canvas scenes start once per page load
  images: { unoptimized: true },
  trailingSlash: false,
};
export default nextConfig;
