/**
 * GitHub Pages = static files only.
 *  - output: 'export'        -> no server, no API routes, no ISR, no middleware
 *  - trailingSlash: true     -> /trip exports as /trip/index.html
 *  - images.unoptimized      -> next/image optimisation needs a server
 *  - basePath/assetPrefix    -> ONLY needed for username.github.io/<repo>.
 *                               Leave NEXT_PUBLIC_BASE_PATH empty for a custom domain.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
};

export default nextConfig;
