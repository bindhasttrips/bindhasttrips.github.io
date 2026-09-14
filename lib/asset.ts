/**
 * Prefixes /public paths with basePath so images and PDFs still resolve when
 * the site is served from username.github.io/<repo> instead of a custom domain.
 * next/link handles basePath on its own; plain <img src> and <a href> do not.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function asset(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${basePath}${path.startsWith('/') ? path : `/${path}`}`;
}
