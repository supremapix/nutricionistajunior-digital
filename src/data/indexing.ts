import { LOCAL_GUIDES } from './localGuides';

/**
 * Near-duplicate urban locality guides stay published, but out of the index.
 * Indexed set: core pages, Curitiba (official neighborhoods, popular names and
 * priority landings), municipality pages (online care by city) and articles.
 */
const NOINDEX_ROUTES = new Set(
  LOCAL_GUIDES.filter((guide) => guide.kind === 'urban_locality').map((guide) => guide.route)
);

export function isIndexablePath(pathname: string) {
  const path = (pathname.split(/[?#]/)[0] || '/').toLowerCase().replace(/\/+$/, '') || '/';
  return !NOINDEX_ROUTES.has(path);
}
