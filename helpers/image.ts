export const getImageUrl = (path: string, size: 'w200' | 'w400' | 'w700' | 'w1280' = 'w400') => {
  return `https://image.tmdb.org/t/p/${size}${path}`
}