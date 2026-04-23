export const siteTaskDefinitions = [
  {
    key: 'mediaDistribution',
    label: 'Press releases',
    route: '/updates',
    description: 'Official announcements, launches, and wire-ready coverage.',
    contentType: 'mediaDistribution',
    enabled: true,
  },
  {
    key: 'article',
    label: 'Latest news',
    route: '/blog',
    description: 'Analysis, interviews, and desk notes beyond the wire.',
    contentType: 'article',
    enabled: true,
  },
] as const

export const siteTaskViews = {
  mediaDistribution: '/updates',
  article: '/blog',
} as const
