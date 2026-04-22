'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, Search, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'

export const NAVBAR_OVERRIDE_ENABLED = true

const utilityLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Contact Us', href: '/contact' },
]

const primaryLinks = [
  { label: 'Home', href: '/' },
  { label: 'Updates', href: '/updates' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
]

export function NavbarOverride() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`))

  return (
    <header className="sticky top-0 z-50 border-b border-[#d8d2ff] bg-white/95 text-[#24174b] backdrop-blur">
      <div className="border-b border-[#e8e2ff] bg-[#f5f2ff]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-5 gap-y-1 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#5c4f8f] sm:justify-between sm:px-6 lg:px-8">
          <p className="hidden sm:block">PR Distribution Platform</p>
          {utilityLinks.map((item) => (
            <Link key={item.label} href={item.href} className="transition hover:text-[#2e1c63]">
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-[#e7e1ff] bg-white px-4 py-4 shadow-[0_8px_24px_rgba(64,38,140,0.08)]">
          <div className="flex items-center justify-between lg:hidden">
            <Link
              href="/"
              className="text-2xl font-black uppercase tracking-[0.12em] text-[#1c1240]"
              style={{ fontFamily: 'Georgia, Times New Roman, serif' }}
            >
              {SITE_CONFIG.name}
            </Link>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#ddd6ff] text-[#4f4382] transition hover:bg-[#f3efff] hover:text-[#2e1c63]"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {isMobileMenuOpen ? (
            <div className="mt-4 space-y-3 border-t border-[#eee9ff] pt-4 lg:hidden">
              <nav className="grid gap-2 text-sm font-semibold uppercase tracking-[0.1em]">
                {primaryLinks.map((item) => (
                  <Link
                    key={`m-${item.href}`}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={
                      isActive(item.href)
                        ? 'rounded-xl bg-[#5c24ff] px-4 py-3 text-white'
                        : 'rounded-xl border border-[#e6dfff] px-4 py-3 text-[#4f4382] transition hover:bg-[#f5f1ff]'
                    }
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="flex items-center gap-2 pt-1">
                <Link
                  href="/search"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#ddd6ff] text-[#4f4382] transition hover:bg-[#f3efff] hover:text-[#2e1c63]"
                  aria-label="Search"
                >
                  <Search className="h-4 w-4" />
                </Link>
                <Link
                  href="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-full border border-[#ddd6ff] px-4 py-2 text-sm font-semibold text-[#4f4382] transition hover:bg-[#f3efff] hover:text-[#2e1c63]"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-full bg-[#5c24ff] px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(92,36,255,0.28)] transition hover:bg-[#4a1dd9]"
                >
                  Register
                </Link>
              </div>
            </div>
          ) : null}

          <div className="hidden lg:flex lg:items-center lg:justify-between lg:gap-6">
            <Link
              href="/"
              className="text-left text-4xl font-black uppercase tracking-[0.14em] text-[#1c1240]"
              style={{ fontFamily: 'Georgia, Times New Roman, serif' }}
            >
              {SITE_CONFIG.name}
            </Link>

            <nav className="flex flex-wrap items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.12em]">
              {primaryLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    isActive(item.href)
                      ? 'rounded-full bg-[#5c24ff] px-4 py-2 text-white'
                      : 'rounded-full px-4 py-2 text-[#4f4382] transition hover:bg-[#f3efff] hover:text-[#2e1c63]'
                  }
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/search"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#ddd6ff] text-[#4f4382] transition hover:bg-[#f3efff] hover:text-[#2e1c63]"
                aria-label="Search"
              >
                <Search className="h-4 w-4" />
              </Link>
            </nav>

            <div className="flex items-center justify-end gap-2">
              <Link href="/login" className="rounded-full border border-[#ddd6ff] px-4 py-2 text-sm font-semibold text-[#4f4382] transition hover:bg-[#f3efff] hover:text-[#2e1c63]">
                Login
              </Link>
              <Link href="/register" className="rounded-full bg-[#5c24ff] px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(92,36,255,0.28)] transition hover:bg-[#4a1dd9]">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
