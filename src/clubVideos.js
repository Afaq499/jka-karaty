const modules = import.meta.glob('./media/*.{mp4,MP4}', { eager: true });

/** Local club videos from `src/media`, sorted for stable order. */
export const CLUB_VIDEOS = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([path, mod]) => ({
    src: mod.default,
    id: path,
  }));
