'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

const links = [
  { href: '/#tjanster',   label: 'Tjänster'    },
  { href: '/recensioner', label: 'Recensioner' },
  { href: '/om-oss',      label: 'Om oss'      },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onHero = isHome && !scrolled
  const isBokaActive = pathname === '/boka'

  const isActive = (href: string) => {
    if (href === '/#tjanster') return pathname === '/'
    return pathname === href
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-40"
      style={{
        transition: 'background 0.35s ease, border-color 0.35s ease, backdrop-filter 0.35s ease',
        background: onHero ? 'transparent' : 'rgba(255,255,255,0.94)',
        borderBottom: onHero ? '1px solid transparent' : '1px solid var(--border)',
        backdropFilter: onHero ? 'none' : 'blur(14px)',
        WebkitBackdropFilter: onHero ? 'none' : 'blur(14px)',
      }}
    >
      <div className="navbar-inner max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="no-underline flex items-center shrink-0">
          <Image
            src="/logo.png"
            alt="5Star Bilvård"
            width={440}
            height={220}
            className="navbar-logo object-contain w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="nav-desktop items-center gap-[4.5rem] hidden md:flex">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link${onHero ? ' nav-link-light' : ''}${isActive(l.href) ? ' nav-link-active' : ''}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/boka"
          className={`hidden md:inline-flex ${onHero ? 'btn-primary-light' : 'btn-primary'}`}
          style={isBokaActive ? { textDecoration: 'underline', textDecorationColor: '#ffffff', textUnderlineOffset: '4px' } : {}}
        >
          Boka tid
        </Link>

        {/* Mobile hamburger */}
        <button
          aria-label="Öppna meny"
          onClick={() => setMenuOpen(v => !v)}
          className="md:hidden flex flex-col gap-[5px] p-1 bg-transparent border-none cursor-pointer"
        >
          {[0, 1, 2].map(i => (
            <span
              key={i}
              className="block w-[22px] h-[1.5px]"
              style={{
                background: onHero ? '#ffffff' : 'var(--text)',
                transition: 'all 0.22s var(--ease-out)',
                transform: menuOpen
                  ? i === 0 ? 'translateY(6.5px) rotate(45deg)'
                  : i === 2 ? 'translateY(-6.5px) rotate(-45deg)'
                  : 'scaleX(0)'
                  : 'none',
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="md:hidden border-t border-line"
          style={{ background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}
        >
          <div className="px-6 pt-4 pb-7">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block py-[0.9rem] border-b border-line text-[0.95rem] font-normal tracking-[0.04em] text-ink-muted no-underline"
                style={{ fontFamily: "var(--font-body), 'Jost', sans-serif" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/boka"
              className="btn-primary mt-6 flex justify-center"
              onClick={() => setMenuOpen(false)}
            >
              Boka tid
            </Link>
          </div>
        </div>
      )}

      <style>{`
        .navbar-inner { height: 118px; }
        .navbar-logo  { height: 146px; margin-top: 0.25rem; }
        @media (max-width: 768px) {
          .navbar-inner { height: 68px; }
          .navbar-logo  { height: 56px; margin-top: 0; }
        }
      `}</style>
    </header>
  )
}
