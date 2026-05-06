import { PageShell } from "@/components/shared/page-shell";
import { Card, CardContent } from "@/components/ui/card";
import { SITE_CONFIG } from "@/lib/site-config";

const sections = [
  { title: "Account Usage", body: "Keep your account secure and follow community guidelines." },
  {
    title: "Content Ownership",
    body: "You own the content you publish and grant the platform a license to display it.",
  },
  { title: "Acceptable Use", body: "No spam, harassment, or illegal content." },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <PageShell
        title="Terms of Service"
        description={`The rules and guidelines for using ${SITE_CONFIG.name}.`}
      >
        <div className="rounded border border-neutral-200 bg-white shadow-sm">
          <div className="space-y-4 p-6">
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
  );
}
