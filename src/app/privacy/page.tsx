import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'

const sections = [
  { title: 'Data We Collect', body: 'Account information, usage analytics, and content you submit.' },
  { title: 'How We Use Data', body: 'To personalize your experience, improve search, and keep the platform secure.' },
  { title: 'Your Choices', body: 'You can manage email preferences and delete your account at any time.' },
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <PageShell
        title="Privacy Policy"
        description="How we collect, use, and protect your information."
      >
        <div className="rounded border border-neutral-200 bg-white shadow-sm">
          <div className="p-6 space-y-4">
            <p className="text-xs text-neutral-500">Last updated: March 16, 2026</p>
            {sections.map((section) => (
              <div key={section.title} className="rounded border border-neutral-200 bg-neutral-50 p-4">
                <h3 className="text-sm font-semibold text-neutral-900">{section.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{section.body}</p>
              </div>
            ))}
          </div>
        </div>
      </PageShell>
    </div>
  )
}
