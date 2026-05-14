// Wikipedia Special:FilePath redirects to the latest revision on
// Commons; stable across renames. Use this instead of hardcoding
// `upload.wikimedia.org/wikipedia/commons/thumb/...` URLs, which break
// when files are re-uploaded.
export function wikiImage(filename: string, width = 400): string {
  return `https://en.wikipedia.org/wiki/Special:FilePath/${encodeURIComponent(filename)}?width=${width}`;
}
