export function getStrapiMedia(url) {
  if (url.startsWith('/')) {
    return `${process.env.strapiBaseUri}${url}`
  }
  return url
}
