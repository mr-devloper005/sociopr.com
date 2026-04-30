import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'

const sections = [
  { title: 'Data We Collect', body: 'Account information, usage analytics, and content you submit.' },
  { title: 'How We Use Data', body: 'To personalize your experience, improve search, and keep the platform secure.' },
  { title: 'Your Choices', body: 'You can manage email preferences and delete your account at any time.' },
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#f5f2ff] text-[#261811]">
      <PageShell
        title="Privacy Policy"
        description="How we collect, use, and protect your information."
      >
        <div className="border border-[#ddcdbd] bg-[#fffaf4] shadow-[0_24px_60px_rgba(91,56,37,0.08)] rounded-[2rem]">
          <div className="p-6 space-y-4">
            <p className="text-xs text-[#71574a]">Last updated: March 16, 2026</p>
            {sections.map((section) => (
              <div key={section.title} className="rounded-lg border border-[#e8dbce] bg-[#f3e8db] p-4">
                <h3 className="text-sm font-semibold text-[#261811]">{section.title}</h3>
                <p className="mt-2 text-sm text-[#71574a]">{section.body}</p>
              </div>
            ))}
          </div>
        </div>
      </PageShell>
    </div>
  )
}
