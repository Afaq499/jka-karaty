const modules = import.meta.glob('./media/*.{jpeg,jpg,JPEG,JPG}', { eager: true });

/** Local club photos from `src/media`, sorted for a stable slideshow order. */
export const CLUB_SLIDES = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([path, mod]) => ({
    src: mod.default,
    alt: 'Jamal Karate Club',
    id: path,
  }));
