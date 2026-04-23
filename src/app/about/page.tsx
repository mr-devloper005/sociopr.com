import Link from 'next/link'
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { mockTeamMembers } from '@/data/mock-data'
import { SITE_CONFIG } from '@/lib/site-config'

const highlights = [
  { label: 'Campaigns supported', value: '12k+' },
  { label: 'Stories distributed', value: '180k' },
  { label: 'Media relationships', value: '8.6k' },
]

const values = [
  { title: 'Editorial quality first', description: 'Every submission is reviewed for clarity, structure, and message fit before distribution.' },
  { title: 'Distribution with intent', description: 'We focus on relevant reach, not inflated vanity metrics or random placement.' },
  { title: 'Built for repeat launches', description: 'From one-off announcements to recurring updates, the process scales with your team.' },
]

const process = [
  {
    title: 'Plan and position',
    body: 'We define your release angle, target audience, and timing so the story lands with context.',
  },
  {
    title: 'Craft and optimize',
    body: 'Our team refines headline, structure, and metadata for newsroom readability and search visibility.',
  },
  {
    title: 'Distribute and measure',
    body: 'Once approved, we publish, syndicate, and report on performance with practical insights.',
  },
]

const coverage = [
  'Product launches and feature announcements',
  'Funding rounds and investor updates',
  'Partnership news and brand campaigns',
  'Event announcements and leadership updates',
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f6f3ff] text-[#24174b]">
      <NavbarShell />
      <main>
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <Badge className="rounded-full bg-[#5c24ff]/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-[#5c24ff] hover:bg-[#5c24ff]/10">
                About {SITE_CONFIG.name}
              </Badge>
              <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
                Built to help teams announce important moments with confidence.
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[#5d4f90]">
                {SITE_CONFIG.name} combines editorial support, strategic distribution, and measurable outcomes
                so your stories reach the right audience in the right format.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild className="rounded-full bg-[#5c24ff] text-white hover:bg-[#4a1dd9]">
                  <Link href="/contact">
                    Start a campaign
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild className="rounded-full border-[#d8cffd] bg-white text-[#3f2f79] hover:bg-[#f3efff]">
                  <Link href="/pricing">View pricing</Link>
                </Button>
              </div>
            </div>

            <Card className="border-[#ddd6ff] bg-white shadow-sm">
              <CardContent className="space-y-4 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a69b3]">At a glance</p>
                <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                  {highlights.map((item) => (
                    <div key={item.label} className="rounded-xl border border-[#e8e2ff] bg-[#faf8ff] p-4">
                      <p className="text-2xl font-semibold">{item.value}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.12em] text-[#6a5a9f]">{item.label}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="border-y border-[#e6e0ff] bg-[#faf8ff]">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a69b3]">Our mission</p>
              <h2 className="mt-2 text-3xl font-semibold">Make strategic PR accessible, reliable, and execution-ready.</h2>
              <p className="mt-4 text-base leading-8 text-[#5d4f90]">
                We created this platform for founders, operators, and marketing teams that need more than generic publishing.
                The goal is simple: clearer messaging, smarter distribution, and stronger outcomes.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            {values.map((value) => (
              <Card key={value.title} className="border-[#ddd6ff] bg-white">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold">{value.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#5d4f90]">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-4 sm:px-6 lg:px-8">
          <Card className="border-[#d8cffd] bg-white">
            <CardContent className="p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a69b3]">What we cover</p>
                  <h2 className="mt-2 text-2xl font-semibold">Campaign types we support</h2>
                </div>
                <Sparkles className="h-6 w-6 text-[#5c24ff]" />
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {coverage.map((item) => (
                  <div key={item} className="flex items-start gap-2 rounded-lg border border-[#ebe6ff] bg-[#fbfaff] p-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#5c24ff]" />
                    <p className="text-sm text-[#4f4284]">{item}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a69b3]">How we work</p>
          <h2 className="mt-2 text-3xl font-semibold">Our process from brief to distribution</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {process.map((step, index) => (
              <Card key={step.title} className="border-[#ddd6ff] bg-white">
                <CardContent className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a69b3]">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#5d4f90]">{step.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a69b3]">Our team</p>
              <h2 className="mt-2 text-3xl font-semibold">People behind the platform</h2>
            </div>
            <Button variant="outline" asChild className="hidden rounded-full border-[#d8cffd] bg-white text-[#3f2f79] hover:bg-[#f3efff] md:inline-flex">
              <Link href="/team">Meet all members</Link>
            </Button>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {mockTeamMembers.map((member) => (
              <Card key={member.id} className="border-[#ddd6ff] bg-white transition-transform hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-semibold">{member.name}</p>
                      <p className="text-xs text-[#6a5a9f]">{member.role}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-[#5d4f90]">{member.bio}</p>
                  <p className="mt-3 text-xs text-[#6a5a9f]">{member.location}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8 lg:pb-20">
          <Card className="border-[#d5cbff] bg-gradient-to-r from-[#f5f1ff] to-[#ffffff]">
            <CardContent className="flex flex-col items-start justify-between gap-6 p-8 sm:flex-row sm:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a69b3]">Work with us</p>
                <h2 className="mt-2 text-3xl font-semibold">Ready to amplify your next announcement?</h2>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-[#5d4f90]">
                  Share your goals and timeline. We will recommend the right plan and distribution strategy.
                </p>
              </div>
              <Button asChild className="rounded-full bg-[#5c24ff] text-white hover:bg-[#4a1dd9]">
                <Link href="/contact">
                  Talk to our team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  )
}
