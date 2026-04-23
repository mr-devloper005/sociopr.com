import type { Metadata } from 'next'
import Link from 'next/link'
import { Check } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'
import { buildPageMetadata } from '@/lib/seo'
import {
  pricingPlans,
  pricingComparisonRows,
  pricingAddons,
  pricingFaqs,
  siteContent,
} from '@/config/site.content'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/pricing',
    title: 'Pricing — distribution plans',
    description:
      'Compare Basic, Pro, and Premium plans for SocioPR.com press distribution, analytics depth, and media reach.',
    keywords: ['SocioPR pricing', 'press distribution plans', 'PR wire pricing'],
  })
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#f6f3ff] text-[#24174b]">
      <NavbarShell />
      <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <header className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#7465a8]">
            {SITE_CONFIG.name}
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
            {siteContent.pricing.headline}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-[#56498a]">{siteContent.pricing.subhead}</p>
        </header>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col rounded-[2rem] border p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
                plan.popular
                  ? 'border-[#5c24ff] bg-white ring-2 ring-[#5c24ff]/25'
                  : 'border-[#ddd6ff] bg-white'
              }`}
            >
              {plan.popular ? (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#5c24ff] px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
                  Popular
                </span>
              ) : null}
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold">{plan.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#56498a]">{plan.description}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight">{plan.price}</span>
                <span className="text-sm text-[#7465a8]">{plan.cadence}</span>
              </div>
              <ul className="mt-8 flex-1 space-y-3 text-sm">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#5c24ff]" aria-hidden />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={plan.cta.href}
                className={`mt-10 inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition ${
                  plan.popular
                    ? 'bg-[#5c24ff] text-white hover:bg-[#4a1dd9]'
                    : 'border border-[#ddd6ff] bg-white hover:bg-[#f3efff]'
                }`}
              >
                {plan.cta.label}
              </Link>
            </div>
          ))}
        </div>

        <section className="mt-20 rounded-[2rem] border border-[#ddd6ff] bg-[#f9f7ff] p-8 sm:p-10">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold">
            {siteContent.pricing.compareIntro}
          </h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[520px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-[#ddd6ff]">
                  <th className="py-3 pr-4 font-semibold">Capability</th>
                  <th className="py-3 pr-4 font-semibold">Basic</th>
                  <th className="py-3 pr-4 font-semibold">Pro</th>
                  <th className="py-3 font-semibold">Premium</th>
                </tr>
              </thead>
              <tbody>
                {pricingComparisonRows.map((row) => (
                  <tr key={row.label} className="border-b border-[#e8e3ff]">
                    <td className="py-4 pr-4 font-medium">{row.label}</td>
                    <td className="py-4 pr-4 text-[#56498a]">{row.basic}</td>
                    <td className="py-4 pr-4 text-[#56498a]">{row.pro}</td>
                    <td className="py-4 text-[#56498a]">{row.premium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold">
            {siteContent.pricing.addonsTitle}
          </h2>
          <p className="mt-2 max-w-2xl text-[#56498a]">{siteContent.pricing.addonsDescription}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {pricingAddons.map((addon) => (
              <div key={addon.title} className="rounded-2xl border border-[#ddd6ff] bg-white p-6 shadow-sm">
                <h3 className="font-semibold">{addon.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#56498a]">{addon.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold">
            {siteContent.pricing.faqTitle}
          </h2>
          <Accordion type="single" collapsible className="mt-6 w-full space-y-2">
            {pricingFaqs.map((item, i) => (
              <AccordionItem key={item.q} value={`item-${i}`} className="rounded-2xl border border-[#ddd6ff] bg-white px-4">
                <AccordionTrigger className="text-left font-medium hover:no-underline">{item.q}</AccordionTrigger>
                <AccordionContent className="pb-4 text-sm leading-relaxed text-[#56498a]">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </main>
      <Footer />
    </div>
  )
}
