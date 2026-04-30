import Link from 'next/link'
import { Bookmark, Building2, FileText, Image as ImageIcon, Sparkles } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { getFactoryState } from '@/design/factory/get-factory-state'
import { getProductKind } from '@/design/factory/get-product-kind'
import { REGISTER_PAGE_OVERRIDE_ENABLED, RegisterPageOverride } from '@/overrides/register-page'

function getRegisterConfig(kind: ReturnType<typeof getProductKind>) {
  if (kind === 'directory') {
    return {
      shell: 'bg-[rgb(245,242,255)] text-[#261811]',
      panel: 'border border-[#ddcdbd] bg-[#fffaf4] shadow-[0_24px_60px_rgba(91,56,37,0.08)]',
      side: 'border border-[#e8dbce] bg-[#f3e8db]',
      muted: 'text-[#71574a]',
      action: 'bg-[#5b2b3b] text-[#fff0f5] hover:bg-[#74364b]',
      icon: Building2,
      title: 'Create a business-ready account',
      body: 'List services, manage locations, and activate trust signals with a proper directory workflow.',
    }
  }
  if (kind === 'editorial') {
    return {
      shell: 'bg-[rgb(245,242,255)] text-[#261811]',
      panel: 'border border-[#ddcdbd] bg-[#fffaf4] shadow-[0_24px_60px_rgba(91,56,37,0.08)]',
      side: 'border border-[#e8dbce] bg-[#f3e8db]',
      muted: 'text-[#71574a]',
      action: 'bg-[#5b2b3b] text-[#fff0f5] hover:bg-[#74364b]',
      icon: FileText,
      title: 'Start your contributor workspace',
      body: 'Create a profile for essays, issue drafts, editorial review, and publication scheduling.',
    }
  }
  if (kind === 'visual') {
    return {
      shell: 'bg-[rgb(245,242,255)] text-[#261811]',
      panel: 'border border-[#ddcdbd] bg-[#fffaf4] shadow-[0_24px_60px_rgba(91,56,37,0.08)]',
      side: 'border border-[#e8dbce] bg-[#f3e8db]',
      muted: 'text-[#71574a]',
      action: 'bg-[#5b2b3b] text-[#fff0f5] hover:bg-[#74364b]',
      icon: ImageIcon,
      title: 'Set up your creator profile',
      body: 'Launch a visual-first account with gallery publishing, identity surfaces, and profile-led discovery.',
    }
  }
  return {
    shell: 'bg-[rgb(245,242,255)] text-[#261811]',
    panel: 'border border-[#ddcdbd] bg-[#fffaf4] shadow-[0_24px_60px_rgba(91,56,37,0.08)]',
    side: 'border border-[#e8dbce] bg-[#f3e8db]',
    muted: 'text-[#71574a]',
    action: 'bg-[#5b2b3b] text-[#fff0f5] hover:bg-[#74364b]',
    icon: Bookmark,
    title: 'Create a curator account',
    body: 'Build shelves, save references, and connect collections to your profile without a generic feed setup.',
  }
}

export default function RegisterPage() {
  if (REGISTER_PAGE_OVERRIDE_ENABLED) {
    return <RegisterPageOverride />
  }

  const { recipe } = getFactoryState()
  const productKind = getProductKind(recipe)
  const config = getRegisterConfig(productKind)
  const Icon = config.icon

  return (
    <div className={`min-h-screen ${config.shell}`}>
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <div className={`rounded-[2rem] p-8 ${config.side}`}>
            <Icon className="h-8 w-8 text-[#8a1d45]" />
            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em]">{config.title}</h1>
            <p className={`mt-5 text-sm leading-8 ${config.muted}`}>{config.body}</p>
            <div className="mt-8 grid gap-4">
              {['Different onboarding per product family', 'No repeated one-size-fits-all shell', 'Profile, publishing, and discovery aligned'].map((item) => (
                <div key={item} className="rounded-[1.5rem] border border-current/10 px-4 py-4 text-sm">{item}</div>
              ))}
            </div>
          </div>

          <div className={`rounded-[2rem] p-8 ${config.panel}`}>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#71574a]">Create account</p>
            <form className="mt-6 grid gap-4">
              <input className="h-12 rounded-xl border border-[#ddcdbd] bg-white px-4 text-sm outline-none ring-0 transition focus:border-[#5b2b3b]" placeholder="Full name" />
              <input className="h-12 rounded-xl border border-[#ddcdbd] bg-white px-4 text-sm outline-none ring-0 transition focus:border-[#5b2b3b]" placeholder="Email address" />
              <input className="h-12 rounded-xl border border-[#ddcdbd] bg-white px-4 text-sm outline-none ring-0 transition focus:border-[#5b2b3b]" placeholder="Password" type="password" />
              <input className="h-12 rounded-xl border border-[#ddcdbd] bg-white px-4 text-sm outline-none ring-0 transition focus:border-[#5b2b3b]" placeholder="What are you creating or publishing?" />
              <button type="submit" className="inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold bg-[#5c24ff] text-white hover:bg-[#4a1fe6] transition-colors">Create account</button>
            </form>
            <div className={`mt-6 flex items-center justify-between text-sm ${config.muted}`}>
              <span>Already have an account?</span>
              <Link href="/login" className="inline-flex items-center gap-2 font-semibold text-[#5b2b3b] hover:underline">
                <Sparkles className="h-4 w-4 text-[#5b2b3b]" />
                Sign in
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
