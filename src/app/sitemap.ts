import type { MetadataRoute } from 'next'

import { fetchSiteFeed } from '@/lib/site-connector'
import type { SitePost } from '@/lib/site-connector'
import { SITE_CONFIG } from '@/lib/site-config'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_CONFIG.baseUrl.replace(/\/$/, '')
  const now = new Date()
  const feed = await fetchSiteFeed(500, { fresh: true })
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}`, lastModified: now, changeFrequency: 'hourly', priority: 1 },
    { url: `${baseUrl}/updates`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: 'daily', priority: 0.85 },
    { url: `${baseUrl}/pricing`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.4 },
  ]

  const mapPost = (pathPrefix: string, post: SitePost) => ({
    url: `${baseUrl}${pathPrefix}/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.publishedAt || post.createdAt || now),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  })

  const pressPosts = (feed?.posts || []).filter((post) => {
    const content = post.content && typeof post.content === 'object' ? post.content : {}
    const type = typeof (content as { type?: unknown }).type === 'string' ? String((content as { type?: string }).type) : ''
    return type === 'mediaDistribution' && typeof post.slug === 'string' && post.slug.trim()
  }).map((post) => mapPost('/updates', post))

  const articlePosts = (feed?.posts || []).filter((post) => {
    const content = post.content && typeof post.content === 'object' ? post.content : {}
    const type = typeof (content as { type?: unknown }).type === 'string' ? String((content as { type?: string }).type) : ''
    return type === 'article' && typeof post.slug === 'string' && post.slug.trim()
  }).map((post) => mapPost('/blog', post))

  return [...staticRoutes, ...pressPosts, ...articlePosts]
}
