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
    <div className="min-h-screen bg-[#f5f2ff] text-[#261811]">
      <PageShell
        title="Terms of Service"
        description={`The rules and guidelines for using ${SITE_CONFIG.name}.`}
      >
        <div className="border border-[#ddcdbd] bg-[#fffaf4] shadow-[0_24px_60px_rgba(91,56,37,0.08)] rounded-[2rem]">
          <div className="space-y-4 p-6">
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
  );
}
