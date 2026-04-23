import type { TaskKey } from '@/lib/site-config'

export const siteContent = {
  navbar: {
    tagline: 'Press wire & media desk',
    marketingLinks: [
      { label: 'Home', href: '/' },
      { label: 'Updates', href: '/updates' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Login', href: '/login' },
      { label: 'Register', href: '/register' },
      { label: 'Latest news', href: '/blog' },
      { label: 'Contact', href: '/contact' },
      { label: 'Search', href: '/search' },
    ] as const,
  },
  footer: {
    tagline: 'Distribution built for clarity, speed, and measurable reach.',
  },
  hero: {
    badge: 'Live wire',
    title: ['Ship announcements journalists can scan in seconds.'],
    description:
      'SocioPR.com presents your releases with wire-style hierarchy, strong typography, and distribution cues that feel credible—not like another generic blog template.',
    primaryCta: {
      label: 'Browse press releases',
      href: '/updates',
    },
    secondaryCta: {
      label: 'View plans',
      href: '/pricing',
    },
    searchPlaceholder: 'Search headlines and topics',
    focusLabel: 'New on the wire',
    featureCardBadge: 'Desk note',
    featureCardTitle: 'Structured for the newsroom rhythm.',
    featureCardDescription:
      'Headlines, dekks, and body copy stay readable on every device so your story lands whether it is opened from a phone, inbox, or CMS preview.',
  },
  home: {
    metadata: {
      title: 'SocioPR.com — Press releases & media distribution',
      description:
        'Browse official press releases, company news, and desk coverage from SocioPR.com. Filter by topic, search headlines, and read full releases in a clean wire layout.',
      openGraphTitle: 'SocioPR.com — Press releases & media distribution',
      openGraphDescription:
        'Wire-style press releases, searchable archives, and premium reading layouts for teams that care about clarity and reach.',
      keywords: [
        'press releases',
        'media wire',
        'PR distribution',
        'SocioPR',
        'company news',
        'investor updates',
      ],
    },
    introBadge: 'Why SocioPR',
    introTitle: 'A calmer surface for high-stakes announcements.',
    introParagraphs: [
      'When timing and tone matter, your distribution layer should feel as intentional as the story itself.',
      'SocioPR.com keeps the focus on legibility, source credibility, and fast scanning—without noisy chrome or recycled marketplace layouts.',
      'Use the archive to filter by category, search across headlines, and open any release in a full article view with sharing tools.',
    ],
    sideBadge: 'Built for operators',
    sidePoints: [
      'Wire-first typography with generous whitespace.',
      'Category and date-friendly archive for busy readers.',
      'Detail pages with hero imagery, author line, and related coverage.',
      'Pricing tiers that map to distribution depth and analytics needs.',
    ],
    primaryLink: {
      label: 'Open press room',
      href: '/updates',
    },
    secondaryLink: {
      label: 'Talk with the desk',
      href: '/contact',
    },
  },
  cta: {
    badge: 'Ready when you are',
    title: 'Pick a plan that matches your next announcement cycle.',
    description:
      'From a single launch to always-on investor calendars, SocioPR.com keeps packaging consistent while your team focuses on the narrative.',
    primaryCta: {
      label: 'Compare pricing',
      href: '/pricing',
    },
    secondaryCta: {
      label: 'Browse releases',
      href: '/updates',
    },
  },
  taskSectionHeading: 'Latest on the wire',
  taskSectionDescriptionSuffix: 'Newest desk-approved releases and filings.',
  pricing: {
    headline: 'Plans for every announcement cadence',
    subhead:
      'Transparent tiers with clear distribution depth—upgrade when your calendar gets louder.',
    compareIntro: 'See how analytics depth and syndication scale across plans.',
    addonsTitle: 'Add-ons',
    addonsDescription: 'Mix and match as your comms program grows.',
    faqTitle: 'Questions teams ask before they file',
  },
} as const

export const pricingPlans = [
  {
    id: 'basic',
    name: 'Basic',
    price: '$149',
    cadence: '/month',
    description: 'Ideal for lean teams shipping a handful of releases each quarter.',
    features: ['Regional distribution lane', 'Standard analytics snapshot', 'Email + social share pack', '72-hour desk review'],
    cta: { label: 'Start Basic', href: '/contact' },
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$349',
    cadence: '/month',
    description: 'For brands with steady news flow and cross-functional reviewers.',
    popular: true,
    features: ['National syndication bundle', 'Engagement analytics + referrers', 'Embargo scheduling', 'Priority formatting support'],
    cta: { label: 'Choose Pro', href: '/contact' },
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '$699',
    cadence: '/month',
    description: 'Enterprise-grade reach with dedicated strategists and custom targets.',
    features: ['Global distribution partners', 'Attribution dashboards', 'Dedicated account lead', 'Crisis & IR playbooks'],
    cta: { label: 'Talk to sales', href: '/contact' },
  },
] as const

export const pricingComparisonRows = [
  { label: 'Distribution level', basic: 'Regional', pro: 'National', premium: 'Global' },
  { label: 'Analytics', basic: 'Core opens & clicks', pro: 'Full funnel + referrers', premium: 'Attribution + cohort views' },
  { label: 'Media reach', basic: 'Curated lists', pro: 'Syndicated partners', premium: 'Bespoke targeting' },
] as const

export const pricingAddons = [
  { title: 'Embargo vault', body: 'Secure reviewer links with watermarking and expiry controls.' },
  { title: 'Multimedia bundle', body: 'Inline galleries, pull-quotes, and downloadable media kits.' },
  { title: 'Compliance review', body: 'Legal + IR checkpoints with tracked approvals.' },
] as const

export const pricingFaqs = [
  {
    q: 'Can we switch plans mid-cycle?',
    a: 'Yes. Upgrades take effect immediately; downgrades apply on the next billing date without losing archived releases.',
  },
  {
    q: 'Do you support multi-brand newsrooms?',
    a: 'Pro and Premium include nested desks so subsidiaries can publish with shared governance.',
  },
  {
    q: 'How fast does a release go live?',
    a: 'Most filings publish within minutes after approval. Complex multimedia packages may require additional QA time.',
  },
  {
    q: 'Is there API or CMS integration?',
    a: 'Premium customers can connect via secure feeds. Talk to us about your stack during onboarding.',
  },
] as const

export const taskPageMetadata: Record<Exclude<TaskKey, 'comment' | 'org' | 'social'>, { title: string; description: string }> = {
  article: {
    title: 'Latest news',
    description: 'Analysis, interviews, and follow-up coverage from the SocioPR desk.',
  },
  listing: {
    title: 'Listings',
    description: 'Explore listings and directory-style entries.',
  },
  classified: {
    title: 'Classifieds',
    description: 'Browse classifieds and short-form notices.',
  },
  image: {
    title: 'Images',
    description: 'Browse image-led updates and visual posts.',
  },
  profile: {
    title: 'Profiles',
    description: 'View profile pages and public identities.',
  },
  sbm: {
    title: 'Bookmarks',
    description: 'Browse curated resources and saved links.',
  },
  pdf: {
    title: 'Resources',
    description: 'Open PDFs and downloadable files.',
  },
  mediaDistribution: {
    title: 'Press room',
    description: 'Search and filter official press releases filed on SocioPR.com.',
  },
}

export const taskIntroCopy: Record<
  TaskKey,
  { title: string; paragraphs: string[]; links: { label: string; href: string }[] }
> = {
  listing: {
    title: 'Listings',
    paragraphs: ['Directory entries when this lane is enabled for your workspace.'],
    links: [{ label: 'Home', href: '/' }],
  },
  article: {
    title: 'Latest news',
    paragraphs: [
      'Longer reads, interviews, and explainers that sit alongside the wire.',
      'Use this lane for stories that need more room than a standard filing.',
    ],
    links: [
      { label: 'Press releases', href: '/updates' },
      { label: 'Pricing', href: '/pricing' },
    ],
  },
  classified: {
    title: 'Classifieds',
    paragraphs: ['Short-form posts and notices.'],
    links: [{ label: 'Home', href: '/' }],
  },
  image: {
    title: 'Images',
    paragraphs: ['Image-first posts and galleries.'],
    links: [{ label: 'Home', href: '/' }],
  },
  profile: {
    title: 'Profiles',
    paragraphs: ['Profile pages and identity surfaces.'],
    links: [{ label: 'Home', href: '/' }],
  },
  sbm: {
    title: 'Bookmarks',
    paragraphs: ['Curated saved links and references.'],
    links: [{ label: 'Home', href: '/' }],
  },
  pdf: {
    title: 'Resources',
    paragraphs: ['Downloadable files and documents.'],
    links: [{ label: 'Home', href: '/' }],
  },
  social: {
    title: 'Social',
    paragraphs: ['Short updates and activity.'],
    links: [{ label: 'Home', href: '/' }],
  },
  comment: {
    title: 'Comments',
    paragraphs: ['Commentary and response posts.'],
    links: [{ label: 'Home', href: '/' }],
  },
  org: {
    title: 'Organizations',
    paragraphs: ['Organization pages and entities.'],
    links: [{ label: 'Home', href: '/' }],
  },
  mediaDistribution: {
    title: 'Press room',
    paragraphs: [
      'Search by keyword, narrow with categories, and scan the grid in chronological order.',
      'Every release opens in a full article layout with hero imagery, author line, and related filings.',
    ],
    links: [
      { label: 'Pricing', href: '/pricing' },
      { label: 'Contact desk', href: '/contact' },
    ],
  },
}
