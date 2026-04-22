export const siteIdentity = {
  code: process.env.NEXT_PUBLIC_SITE_CODE || 'w0ahzm2vmx',
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'SocioPR.com',
  tagline: process.env.NEXT_PUBLIC_SITE_TAGLINE || 'Global press distribution for modern teams',
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    'SocioPR.com is a media desk for distributing press releases, company news, and investor-ready announcements with a clean, wire-style reading experience.',
  domain: process.env.NEXT_PUBLIC_SITE_DOMAIN || 'sociopr.com',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://sociopr.com',
  ogImage: process.env.NEXT_PUBLIC_SITE_OG_IMAGE || '/og-default.png',
  googleMapsEmbedApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY || '',
} as const

export const defaultAuthorProfile = {
  name: siteIdentity.name,
  avatar: '/placeholder.svg?height=80&width=80',
} as const
