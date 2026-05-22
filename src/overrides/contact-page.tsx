import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { ContactForm } from '@/overrides/contact-form'

export const CONTACT_PAGE_OVERRIDE_ENABLED = true

export function ContactPageOverride() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <NavbarShell />
      <main className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
        <h1 className="text-center text-4xl font-bold text-neutral-800 mb-10">Contact Us</h1>
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
