import type { SitePost } from '@/lib/site-connector'

/** Optional placeholder entries for dev only — keep empty in production sites to avoid dummy copy. */
const MOCK_ENTRIES: Array<{ title: string; category: string; summary: string }> = []

function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export function getHomeEditorialMockPosts(): SitePost[] {
  if (!MOCK_ENTRIES.length) return []
  return MOCK_ENTRIES.map((entry, index) => {
    const slug = `${slugify(entry.title)}-mock-${index + 1}`
    return {
      id: `home-editorial-mock-${index + 1}`,
      title: entry.title,
      slug,
      summary: entry.summary,
      content: {
        type: 'mediaDistribution',
        category: entry.category,
        description: entry.summary,
      },
      media: [],
      tags: ['mediaDistribution', entry.category],
      authorName: 'Editorial desk',
      publishedAt: new Date(Date.now() - index * 86400000 * 3).toISOString(),
    }
  })
}

/** Real posts first (capped), then mocks by slug until `maxTotal` — swap mocks out later when the feed is full. */
export function mergeEditorialPostsForHome(real: SitePost[], mocks: SitePost[], maxTotal = 16): SitePost[] {
  const seen = new Set<string>()
  const out: SitePost[] = []
  for (const p of real) {
    if (out.length >= maxTotal) break
    if (!seen.has(p.slug)) {
      seen.add(p.slug)
      out.push(p)
    }
  }
  for (const m of mocks) {
    if (out.length >= maxTotal) break
    if (!seen.has(m.slug)) {
      seen.add(m.slug)
      out.push(m)
    }
  }
  return out
}
