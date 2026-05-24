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
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          <Image
            src="/logo.png"
            alt="5Star Bilvård"
            width={440}
            height={220}
            style={{ objectFit: 'contain', height: 146, width: 'auto', marginTop: '2.5rem' }}
            priority
          />
        </Link>

        {/* Nav links — alltid synliga */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
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

        {/* Boka tid */}
        <Link
          href="/boka"
          className={onHero ? 'btn-primary-light' : 'btn-primary'}
          style={isBokaActive ? { textDecoration: 'underline', textDecorationColor: '#ffffff', textUnderlineOffset: '4px' } : {}}
        >
          Boka tid
        </Link>
      </div>
    </header>
  )
}
