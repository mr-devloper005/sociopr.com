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
      shell: 'bg-[#fffaf4] text-[#241711]',
      panel: 'border border-[#dccabc] bg-[#fffdfb]',
      side: 'border border-[#e7d8cc] bg-[#fff6ec]',
      muted: 'text-[#6e5547]',
      action: 'bg-[#8a1d45] text-white hover:bg-[#74183a]',
      icon: Building2,
      title: 'Create a business-ready account',
      body: 'List services, manage locations, and activate trust signals with a proper directory workflow.',
    }
  }
  if (kind === 'editorial') {
    return {
      shell: 'bg-[#fffaf4] text-[#241711]',
      panel: 'border border-[#dccabc] bg-[#fffdfb]',
      side: 'border border-[#e7d8cc] bg-[#fff6ec]',
      muted: 'text-[#6e5547]',
      action: 'bg-[#8a1d45] text-white hover:bg-[#74183a]',
      icon: FileText,
      title: 'Start your contributor workspace',
      body: 'Create a profile for essays, issue drafts, editorial review, and publication scheduling.',
    }
  }
  if (kind === 'visual') {
    return {
      shell: 'bg-[#fffaf4] text-[#241711]',
      panel: 'border border-[#dccabc] bg-[#fffdfb]',
      side: 'border border-[#e7d8cc] bg-[#fff6ec]',
      muted: 'text-[#6e5547]',
      action: 'bg-[#8a1d45] text-white hover:bg-[#74183a]',
      icon: ImageIcon,
      title: 'Set up your creator profile',
      body: 'Launch a visual-first account with gallery publishing, identity surfaces, and profile-led discovery.',
    }
  }
  return {
    shell: 'bg-[#fffaf4] text-[#241711]',
    panel: 'border border-[#dccabc] bg-[#fffdfb]',
    side: 'border border-[#e7d8cc] bg-[#fff6ec]',
    muted: 'text-[#71574a]',
    action: 'bg-[#8a1d45] text-white hover:bg-[#74183a]',
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
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#7c5e4e]">Create account</p>
            <form className="mt-6 grid gap-4">
              <input className="h-12 rounded-xl border border-[#ddcfbf] bg-white px-4 text-sm outline-none ring-0 transition focus:border-[#8a1d45]" placeholder="Full name" />
              <input className="h-12 rounded-xl border border-[#ddcfbf] bg-white px-4 text-sm outline-none ring-0 transition focus:border-[#8a1d45]" placeholder="Email address" />
              <input className="h-12 rounded-xl border border-[#ddcfbf] bg-white px-4 text-sm outline-none ring-0 transition focus:border-[#8a1d45]" placeholder="Password" type="password" />
              <input className="h-12 rounded-xl border border-[#ddcfbf] bg-white px-4 text-sm outline-none ring-0 transition focus:border-[#8a1d45]" placeholder="What are you creating or publishing?" />
              <button type="submit" className={`inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold ${config.action}`}>Create account</button>
            </form>
            <div className={`mt-6 flex items-center justify-between text-sm ${config.muted}`}>
              <span>Already have an account?</span>
              <Link href="/login" className="inline-flex items-center gap-2 font-semibold text-[#8a1d45] hover:underline">
                <Sparkles className="h-4 w-4 text-[#8a1d45]" />
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
