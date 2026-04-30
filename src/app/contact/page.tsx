import { Building2, FileText, Mail, Megaphone, Sparkles } from 'lucide-react'
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

  const contactInfo = [
    {
      title: "Email",
      value: "contact@sociopr.com",
      icon: Mail,
    },
    {
      title: "Phone",
      value: "+1 (555) 123-4567",
      icon: FileText,
    },
    {
      title: "Address",
      value: "123 Business Ave, Suite 100, San Francisco, CA 94105",
      icon: FileText,
    },
    {
      title: "Hours",
      value: "Monday - Friday: 9AM - 6PM PST",
      icon: FileText,
    },
  ]

  const services = [
    {
      title: "Business Listings",
      description: "Get your business listed and discovered by local customers",
      icon: Building2,
    },
    {
      title: "Partnerships",
      description: "Explore partnership opportunities and collaborations",
      icon: Sparkles,
    },
    {
      title: "Support",
      description: "Get help with your account and technical issues",
      icon: FileText,
    },
  ]

  return (
    <div className={`min-h-screen ${tone.shell}`}>
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        {/* Header Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold tracking-tight mb-4">Contact us</h1>
          <p className={`text-xl max-w-3xl mx-auto ${tone.muted}`}>
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </section>

        {/* Contact Information Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className={`rounded-2xl p-6 ${tone.panel} text-center`}>
                <info.icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                <p className={`${tone.muted}`}>{info.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form and Services Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className={`rounded-3xl p-8 ${tone.panel}`}>
            <h2 className="text-3xl font-bold mb-6">Send us a message</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  className="h-12 rounded-xl border border-[#ddcdbd] bg-white px-4 text-sm outline-none ring-0 transition focus:border-[#5b2b3b]"
                  placeholder="First Name"
                  name="firstName"
                />
                <input
                  className="h-12 rounded-xl border border-[#ddcdbd] bg-white px-4 text-sm outline-none ring-0 transition focus:border-[#5b2b3b]"
                  placeholder="Last Name"
                  name="lastName"
                />
              </div>
              <input
                className="h-12 rounded-xl border border-[#ddcdbd] bg-white px-4 text-sm outline-none ring-0 transition focus:border-[#5b2b3b]"
                placeholder="Email address"
                name="email"
                type="email"
              />
              <input
                className="h-12 rounded-xl border border-[#ddcdbd] bg-white px-4 text-sm outline-none ring-0 transition focus:border-[#5b2b3b]"
                placeholder="Subject"
                name="subject"
              />
              <textarea
                className="min-h-[150px] rounded-xl border border-[#ddcdbd] bg-white px-4 py-3 text-sm outline-none ring-0 transition focus:border-[#5b2b3b]"
                placeholder="Your message"
                name="message"
                rows={6}
              />
              <button 
                type="submit" 
                className="inline-flex h-12 items-center justify-center rounded-full px-8 text-sm font-semibold bg-[#8B4513] text-white hover:bg-[#6B3410] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Services Section */}
          <div>
            <h2 className="text-3xl font-bold mb-6">How can we help?</h2>
            <div className="space-y-4">
              {services.map((service, index) => (
                <div key={index} className={`rounded-2xl p-6 ${tone.soft}`}>
                  <service.icon className="h-6 w-6 mb-3 text-primary" />
                  <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                  <p className={`${tone.muted}`}>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Information Section */}
        <section className={`rounded-3xl p-8 ${tone.panel} text-center`}>
          <h2 className="text-2xl font-bold mb-4">Need immediate assistance?</h2>
          <p className={`${tone.muted} mb-6`}>
            Our support team is available Monday through Friday, 9AM to 6PM PST. 
            We typically respond to inquiries within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex h-12 items-center justify-center rounded-full px-8 text-sm font-semibold bg-[#8B4513] text-white hover:bg-[#6B3410] transition-colors">
              Call Now
            </button>
            <button className={`inline-flex h-12 items-center justify-center rounded-full px-8 text-sm font-semibold border-2 border-[#8B4513] text-[#8B4513] hover:bg-[#8B4513] hover:text-white transition-colors`}>
              Schedule Call
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
