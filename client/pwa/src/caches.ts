/* globals __COMMIT_HASH__ */
declare var __COMMIT_HASH__: string;
export const cacheName = `nukaworks-app-${__COMMIT_HASH__}`;
export const contentCache = "nukaworks-content-v1";

export function openCache(): Promise<Cache> {
  return caches.open(cacheName);
}

export function openContentCache(): Promise<Cache> {
  return caches.open(contentCache);
}
