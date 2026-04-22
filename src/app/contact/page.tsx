import { FileText, Mail, Megaphone, Sparkles } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { ContentImage } from '@/components/shared/content-image'
import { SITE_CONFIG } from '@/lib/site-config'
import { getFactoryState } from '@/design/factory/get-factory-state'
import { getProductKind } from '@/design/factory/get-product-kind'
import { CONTACT_PAGE_OVERRIDE_ENABLED, ContactPageOverride } from '@/overrides/contact-page'

function getTone(kind: ReturnType<typeof getProductKind>) {
  if (kind === 'directory') {
    return {
      shell: 'bg-[#f8fbff] text-slate-950',
      panel: 'border border-slate-200 bg-white',
      soft: 'border border-slate-200 bg-slate-50',
      muted: 'text-slate-600',
      action: 'bg-slate-950 text-white hover:bg-slate-800',
    }
  }
  if (kind === 'editorial') {
    return {
      shell: 'bg-background text-foreground',
      panel: 'border border-border bg-card shadow-sm',
      soft: 'border border-border bg-muted/40',
      muted: 'text-muted-foreground',
      action: 'bg-primary text-primary-foreground hover:opacity-95',
    }
  }
  if (kind === 'visual') {
    return {
      shell: 'bg-[#07101f] text-white',
      panel: 'border border-white/10 bg-white/6',
      soft: 'border border-white/10 bg-white/5',
      muted: 'text-slate-300',
      action: 'bg-[#8df0c8] text-[#07111f] hover:bg-[#77dfb8]',
    }
  }
  return {
    shell: 'bg-[#f7f1ea] text-[#261811]',
    panel: 'border border-[#ddcdbd] bg-[#fffaf4]',
    soft: 'border border-[#e8dbce] bg-[#f3e8db]',
    muted: 'text-[#71574a]',
    action: 'bg-[#5b2b3b] text-[#fff0f5] hover:bg-[#74364b]',
  }
}

const CONTACT_SIDE =
  'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=82'

export default function ContactPage() {
  if (CONTACT_PAGE_OVERRIDE_ENABLED) {
    return <ContactPageOverride />
  }

  const { recipe } = getFactoryState()
  const productKind = getProductKind(recipe)
  const tone = getTone(productKind)
  const lanes =
    productKind === 'directory'
      ? [
          { icon: Megaphone, title: 'Listing onboarding', body: 'Bring business profiles online with structured metadata and verification.' },
          { icon: Mail, title: 'Partner desk', body: 'Discuss coverage, categories, and operational questions.' },
          { icon: Sparkles, title: 'Market expansion', body: 'Request new regions or verticals for your directory program.' },
        ]
      : productKind === 'editorial'
        ? [
            { icon: FileText, title: 'Press desk', body: 'Submit releases, coordinate embargoes, and plan syndication windows with our editors.' },
            { icon: Mail, title: 'Partnerships', body: 'Sponsorships, investor calendars, and co-branded announcement programs.' },
            { icon: Sparkles, title: 'Product support', body: 'Formatting, multimedia embeds, and analytics questions for your newsroom stack.' },
          ]
        : productKind === 'visual'
          ? [
              { icon: Sparkles, title: 'Creator desk', body: 'Gallery launches, licensing, and visual feature requests.' },
              { icon: Mail, title: 'Brand collaborations', body: 'Partnerships for campaigns and creator showcases.' },
              { icon: FileText, title: 'Media kits', body: 'Request decks, specs, and usage guidelines.' },
            ]
          : [
              { icon: Mail, title: 'Curation desk', body: 'Suggest collections, boards, and resource hubs.' },
              { icon: Sparkles, title: 'Programs', body: 'Reference libraries and long-term curation projects.' },
              { icon: FileText, title: 'Support', body: 'Help with shelves, tags, and contributor workflows.' },
            ]

  return (
    <div className={`min-h-screen ${tone.shell}`}>
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <section className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Contact {SITE_CONFIG.name}</p>
            <h1 className="mt-4 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
              Tell us what you are announcing next.
            </h1>
            <p className={`mt-5 max-w-2xl text-sm leading-8 ${tone.muted}`}>
              Share timelines, audiences, and assets—our desk routes investor relations, product launches, and crisis updates to the right specialists.
            </p>
            <div className="mt-8 space-y-4">
              {lanes.map((lane) => (
                <div key={lane.title} className={`rounded-[1.6rem] p-5 ${tone.soft}`}>
                  <lane.icon className="h-5 w-5 text-primary" />
                  <h2 className="mt-3 text-xl font-semibold">{lane.title}</h2>
                  <p className={`mt-2 text-sm leading-7 ${tone.muted}`}>{lane.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-border shadow-lg">
              <ContentImage
                src={CONTACT_SIDE}
                alt="Team collaborating at a conference table"
                fill
                className="object-cover"
                intrinsicWidth={1200}
                intrinsicHeight={900}
              />
            </div>
            <div className={`rounded-[2rem] p-7 ${tone.panel}`}>
              <h2 className="text-2xl font-semibold">Send a message</h2>
              <form className="mt-6 grid gap-4">
                <input
                  className="h-12 rounded-xl border border-input bg-background px-4 text-sm"
                  placeholder="Your name"
                  name="name"
                  autoComplete="name"
                />
                <input
                  className="h-12 rounded-xl border border-input bg-background px-4 text-sm"
                  placeholder="Email address"
                  name="email"
                  type="email"
                  autoComplete="email"
                />
                <input
                  className="h-12 rounded-xl border border-input bg-background px-4 text-sm"
                  placeholder="Organization"
                  name="org"
                />
                <textarea
                  className="min-h-[180px] rounded-2xl border border-input bg-background px-4 py-3 text-sm"
                  placeholder="Tell us about your release window, markets, and compliance needs."
                  name="message"
                />
                <button type="submit" className={`inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold ${tone.action}`}>
                  Send message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
