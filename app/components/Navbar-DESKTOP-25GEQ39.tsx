'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const links = [
  { href: '#tjanster', label: 'Tjänster' },
  { href: '#galleri',  label: 'Galleri'  },
  { href: '#priser',   label: 'Priser'   },
  { href: '#hitta-oss',label: 'Hitta oss'},
  { href: '#kontakt',  label: 'Kontakt'  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onHero = !scrolled

  return (
    <header style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 40,
      transition: 'background 0.35s ease, border-color 0.35s ease, backdrop-filter 0.35s ease',
      background: onHero ? 'transparent' : 'rgba(255,255,255,0.94)',
      borderBottom: onHero ? '1px solid transparent' : '1px solid var(--border)',
      backdropFilter: onHero ? 'none' : 'blur(14px)',
      WebkitBackdropFilter: onHero ? 'none' : 'blur(14px)',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        padding: '0 2rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 72,
      }}>
        {/* Logo */}
        <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          <Image
            src="/logo.png"
            alt="5Star Bilvård"
            width={110}
            height={55}
            style={{
              objectFit: 'contain',
              height: 87,
              width: 'auto',
              marginTop: '0.75rem',
            }}
            priority
          />
        </a>

        {/* Desktop nav */}
        <nav
          style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}
          className="nav-desktop"
        >
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className={`nav-link${onHero ? ' nav-link-light' : ''}`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA + hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a
            href="#kontakt"
            className={onHero ? 'btn-primary-light nav-desktop' : 'btn-primary nav-desktop'}
          >
            Boka tid
          </a>

          <button
            aria-label="Öppna meny"
            onClick={() => setMenuOpen(v => !v)}
            className="nav-mobile"
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              display: 'flex', flexDirection: 'column', gap: '5px', padding: '4px',
            }}
          >
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: 'block', width: 22, height: 1.5,
                background: onHero ? '#ffffff' : 'var(--text)',
                transition: 'all 0.22s var(--ease-out)',
                transform: menuOpen
                  ? i === 0 ? 'translateY(6.5px) rotate(45deg)'
                  : i === 2 ? 'translateY(-6.5px) rotate(-45deg)'
                  : 'scaleX(0)'
                  : 'none',
              }} />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{
          background: 'rgba(255,255,255,0.97)',
          borderTop: '1px solid var(--border)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
        }}>
          <div style={{ padding: '1rem 2rem 1.75rem' }}>
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: 'block', padding: '0.9rem 0',
                  borderBottom: '1px solid var(--border)',
                  fontFamily: "var(--font-body), 'Jost', sans-serif",
                  fontWeight: 400, fontSize: '0.95rem', letterSpacing: '0.04em',
                  color: 'var(--text-muted)', textDecoration: 'none',
                  transition: 'color 0.18s ease',
                }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#kontakt"
              className="btn-primary"
              onClick={() => setMenuOpen(false)}
              style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center' }}
            >
              Boka tid
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile  { display: flex !important; }
        }
        @media (min-width: 769px) {
          .nav-mobile  { display: none !important; }
        }
      `}</style>
    </header>
  )
}
