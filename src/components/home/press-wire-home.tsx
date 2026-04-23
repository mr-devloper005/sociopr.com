import Link from 'next/link'
import { ArrowRight, CheckCircle2, Sparkles, Star } from 'lucide-react'
import { ContentImage } from '@/components/shared/content-image'
import { SITE_CONFIG, type TaskKey } from '@/lib/site-config'
import { buildPostUrl } from '@/lib/task-data'
import type { SitePost } from '@/lib/site-connector'

type EnabledTask = (typeof SITE_CONFIG.tasks)[number]

const HERO_IMAGE = 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=82'
const VIDEO_IMAGE = 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=82'
const DEFAULT_POST_IMAGE =
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=82'

function resolveTaskKey(value: unknown, fallback: TaskKey): TaskKey {
  if (
    value === 'listing' ||
    value === 'classified' ||
    value === 'article' ||
    value === 'image' ||
    value === 'profile' ||
    value === 'sbm' ||
    value === 'mediaDistribution'
  )
    return value
  return fallback
}

function getPostImage(post?: SitePost) {
  if (!post) return DEFAULT_POST_IMAGE
  const media = Array.isArray(post.media) ? post.media : []
  const mediaUrl = media.find((item) => typeof item?.url === 'string' && item.url)?.url
  if (mediaUrl) return mediaUrl
  const content = post.content && typeof post.content === 'object' ? (post.content as Record<string, unknown>) : {}
  const images = Array.isArray(content.images) ? content.images : []
  const contentImage = images.find((img) => typeof img === 'string' && img)
  if (typeof contentImage === 'string') return contentImage
  if (typeof content.logo === 'string' && content.logo) return content.logo
  return DEFAULT_POST_IMAGE
}

function getPostCategory(post: SitePost): string {
  const content =
    post.content && typeof post.content === 'object' ? (post.content as Record<string, unknown>) : {}
  const cat = content.category
  if (typeof cat === 'string' && cat.trim()) return cat.trim()
  const tag = post.tags?.find((t) => typeof t === 'string' && t !== 'mediaDistribution' && t !== 'article')
  if (typeof tag === 'string') return tag
  return 'Press release'
}

export function PressWireHome({
  posts,
  primaryTask,
  supportTasks,
}: {
  posts: SitePost[]
  primaryTask?: EnabledTask
  supportTasks: EnabledTask[]
}) {
  const defaultTask: TaskKey =
    primaryTask?.key === 'mediaDistribution' || primaryTask?.key === 'article'
      ? primaryTask.key
      : 'mediaDistribution'

  const postHref = (post: SitePost) =>
    buildPostUrl(resolveTaskKey((post as { task?: unknown }).task, defaultTask), post.slug)

  const lead = posts[0]
  const featuredCard = posts[1]
  const extensionCards = posts.slice(2, 5)
  const solutionCards = posts.slice(5, 9)
  const insights = posts.slice(9, 12)
  const newsroom = posts.slice(12, 15)
  const testimonials = [
    {
      name: 'Aaryan M.',
      role: 'Founder, B2B SaaS',
      quote: 'We moved from scattered launches to a repeatable PR flow with predictable coverage.',
    },
    {
      name: 'Priya K.',
      role: 'Marketing Lead, D2C',
      quote: 'The distribution quality and editorial checks made our campaigns feel more premium.',
    },
    {
      name: 'Nikhil R.',
      role: 'Growth Manager, Fintech',
      quote: 'Turnaround time is fast and the updates dashboard keeps the whole team aligned.',
    },
    {
      name: 'Rhea S.',
      role: 'Comms Head, Startup Studio',
      quote: 'The newsroom-style publishing format helps us ship announcements with confidence.',
    },
  ]
  const faqs = [
    'How quickly can a release go live?',
    'Can I include images and videos in my release?',
    'Do you support startup launches and funding announcements?',
    'Will my release appear on search engines?',
    'Can I get help with writing and formatting?',
  ]

  return (
    <main className="bg-white text-[#20103f]">
      <section className="bg-[#eef1ff]">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#6a4cff]">PRfire</p>
              <h1 className="mt-3 max-w-2xl text-4xl font-black leading-tight sm:text-5xl">
                UK&apos;s #1 Press Release Distribution Service
              </h1>
              <p className="mt-4 max-w-xl text-base leading-7 text-[#4b3f70]">
                Reach journalists, publishers, and search audiences with high-impact distribution and newsroom-ready content packaging.
              </p>
              <div className="mt-5 flex items-center gap-1 text-[#ffbe1a]">
                {[0, 1, 2, 3, 4].map((item) => (
                  <Star key={item} className="h-4 w-4 fill-current" />
                ))}
                <span className="ml-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#4b3f70]">Trusted by growth teams</span>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href={primaryTask?.route || '/updates'}
                  className="inline-flex items-center gap-2 rounded-full bg-[#5c24ff] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(92,36,255,0.32)] transition hover:bg-[#4b1cdb]"
                >
                  View Pricing
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-[#5c24ff] bg-white px-6 py-3 text-sm font-semibold text-[#5c24ff] transition hover:bg-[#f5f0ff]"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-[#ddd8ff] bg-white p-4 shadow-[0_18px_48px_rgba(32,16,63,0.12)]">
              <div className="relative h-56 overflow-hidden rounded-2xl sm:h-64">
                <ContentImage src={HERO_IMAGE} alt="PR experts collaborating" fill className="object-cover" priority intrinsicWidth={1400} intrinsicHeight={900} />
              </div>
              <div className="mt-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6a4cff]">
                  {featuredCard ? getPostCategory(featuredCard) : 'Featured release'}
                </p>
                <h2 className="mt-2 text-xl font-bold leading-snug">
                  {featuredCard?.title || 'Announcing smarter distribution for product launches and PR campaigns'}
                </h2>
                <Link href={featuredCard ? postHref(featuredCard) : '/updates'} className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#5c24ff]">
                  Read more
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6a4cff]">Scale with confidence</p>
            <h2 className="mt-2 text-3xl font-black">Think of PR Fire as an extension to your team</h2>
          </div>
          <Link href="/updates" className="hidden text-sm font-semibold text-[#5c24ff] sm:inline">View all</Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {extensionCards.map((post, index) => (
            <Link key={post.id} href={postHref(post)} className="overflow-hidden rounded-2xl border border-[#e4ddff] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="relative h-44">
                <ContentImage src={getPostImage(post)} alt={post.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6a4cff]">{index === 0 ? 'Editorial' : index === 1 ? 'Advisory' : 'Distribution'}</p>
                <h3 className="mt-2 line-clamp-2 text-base font-bold leading-snug">{post.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#faf9ff]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6a4cff]">Why choose us</p>
            <h2 className="mt-2 text-3xl font-black">Why choose PR Fire?</h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-[#4b3f70]">
              {[
                'Fast review and publishing process for urgent announcements.',
                'Distribution strategy aligned to your campaign objective.',
                'Editorial quality checks to improve readability and trust.',
                'Dedicated support for launch, funding, and product news.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#5c24ff]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/pricing" className="rounded-full bg-[#5c24ff] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#4b1cdb]">Get Started</Link>
              <Link href="/contact" className="rounded-full border border-[#d9d0ff] bg-white px-5 py-2.5 text-sm font-semibold text-[#5c24ff] hover:bg-[#f5f0ff]">Talk to Team</Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-[#ded8ff] bg-white p-4 shadow-sm">
            <div className="relative h-72 overflow-hidden rounded-2xl">
              <ContentImage src={VIDEO_IMAGE} alt="PR video advisory" fill className="object-cover" intrinsicWidth={1200} intrinsicHeight={800} />
            </div>
            <p className="mt-4 text-sm font-semibold text-[#5c24ff]">Watch: PR strategy explained by experts</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-black">Digital PR solutions tailored to your industry</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {solutionCards.map((post, index) => (
            <Link key={post.id} href={postHref(post)} className="overflow-hidden rounded-2xl border border-[#e4ddff] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="relative h-44">
                <ContentImage src={getPostImage(post)} alt={post.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6a4cff]">Sector {index + 1}</p>
                <h3 className="mt-2 line-clamp-2 text-base font-bold">{post.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#f3efff]">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-[#ddd4ff] bg-white p-7 shadow-sm sm:flex-row sm:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6a4cff]">Tell us</p>
              <h2 className="mt-1 text-2xl font-black">Tell us your story today</h2>
              <p className="mt-2 max-w-2xl text-sm text-[#4b3f70]">Share your draft, goals, and timeline. Our team will help shape your next release and distribution plan.</p>
            </div>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#5c24ff] px-6 py-3 text-sm font-semibold text-white hover:bg-[#4b1cdb]">
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-3">
          <h2 className="text-3xl font-black">Latest Insights</h2>
          <Link href="/blog" className="text-sm font-semibold text-[#5c24ff]">Explore blog</Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {insights.map((post) => (
            <Link key={post.id} href={postHref(post)} className="overflow-hidden rounded-2xl border border-[#e4ddff] bg-white shadow-sm transition hover:-translate-y-1">
              <div className="relative h-44">
                <ContentImage src={getPostImage(post)} alt={post.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6a4cff]">{getPostCategory(post)}</p>
                <h3 className="mt-2 line-clamp-2 text-base font-bold">{post.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#f7f8ff]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black">Frequently Asked Questions</h2>
          <div className="mt-6 space-y-2 rounded-3xl border border-[#e2dcff] bg-white p-6">
            {faqs.map((question) => (
              <div key={question} className="flex items-center justify-between border-b border-[#efeafe] py-3 last:border-b-0">
                <p className="text-sm font-semibold text-[#2c1b57]">{question}</p>
                <Sparkles className="h-4 w-4 text-[#6a4cff]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-3">
          <h2 className="text-3xl font-black">Latest From Our Newsroom</h2>
          <Link href="/updates" className="text-sm font-semibold text-[#5c24ff]">View all updates</Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {newsroom.map((post) => (
            <Link key={post.id} href={postHref(post)} className="overflow-hidden rounded-2xl border border-[#e4ddff] bg-white shadow-sm transition hover:-translate-y-1">
              <div className="relative h-44">
                <ContentImage src={getPostImage(post)} alt={post.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6a4cff]">Newsroom</p>
                <h3 className="mt-2 line-clamp-2 text-base font-bold">{post.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#f4f1ff]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-black">PRFire is here to help your business</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((item) => (
              <article key={item.name} className="rounded-2xl border border-[#dfd8ff] bg-white p-5 shadow-sm">
                <p className="text-sm leading-7 text-[#4b3f70]">&quot;{item.quote}&quot;</p>
                <p className="mt-4 text-sm font-bold text-[#2c1b57]">{item.name}</p>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6a4cff]">{item.role}</p>
              </article>
            ))}
          </div>
          {supportTasks.length ? (
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {supportTasks.slice(0, 3).map((task) => (
                <Link key={task.key} href={task.route} className="rounded-full border border-[#d8d0ff] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#5c24ff] hover:bg-[#f3edff]">
                  {task.label}
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      {!lead ? (
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-dashed border-[#d9d1ff] bg-[#faf8ff] p-8 text-center">
            <p className="text-2xl font-black text-[#2c1b57]">No stories yet on the wire</p>
            <p className="mt-2 text-sm text-[#4b3f70]">
              Publish your first release to populate this page automatically.
            </p>
            <Link href="/contact" className="mt-5 inline-flex rounded-full bg-[#5c24ff] px-5 py-2.5 text-sm font-semibold text-white">
              Start now
            </Link>
          </div>
        </section>
      ) : null}
    </main>
  )
}
