'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <>
      {/* ── CTA STRIP ── */}
      <section className="cta-dark" style={{ padding: '5rem 2rem' }}>
        <div style={{
          maxWidth: 1200, margin: '0 auto',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: '2rem', flexWrap: 'wrap',
        }}>
          <div>
            <p style={{
              fontFamily: "var(--font-body), 'Jost', sans-serif",
              fontWeight: 500, fontSize: '0.68rem',
              letterSpacing: '0.22em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.45)', marginBottom: '0.75rem',
            }}>Redo att boka?</p>
            <h2 className="font-display" style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
              fontWeight: 400, lineHeight: 1.15, color: '#ffffff',
            }}>
              Ge din bil den
              <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.65)' }}> behandling</em>
              <br />den förtjänar
            </h2>
          </div>
          <Link href="/boka" className="btn-primary" style={{ fontSize: '0.76rem', padding: '1.1rem 2.8rem' }}>
            Boka Tid &rarr;
          </Link>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: '#0d0d0d' }}>
        <div style={{
          maxWidth: 1200, margin: '0 auto',
          padding: '3.5rem 2rem',
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: '3rem',
        }} className="footer-cols">
          {/* Brand */}
          <div>
            <Image
              src="/logo.png"
              alt="5Star Bilvård"
              width={100}
              height={50}
              style={{ objectFit: 'contain', height: 44, width: 'auto', filter: 'brightness(0) invert(1)', marginBottom: '1.25rem' }}
            />
            <p style={{ fontWeight: 300, fontSize: '0.84rem', lineHeight: 1.75, color: 'rgba(255,255,255,0.38)', maxWidth: 240 }}>
              Professionell bilrekond och lackskydd i Gävle.
              Vi tar hand om din bil med precision och passion.
            </p>
          </div>

          {/* Tjänster */}
          <div>
            <p style={{ fontSize: '0.66rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '1.25rem' }}>Tjänster</p>
            {['Utvändig Rekond', 'Invändig Rekond', 'Maskinpolering', 'Lackskydd & Folie', 'Däckbyte'].map(t => (
              <Link key={t} href="/#tjanster" style={{ display: 'block', fontWeight: 300, fontSize: '0.84rem', color: 'rgba(255,255,255,0.38)', textDecoration: 'none', marginBottom: '0.6rem', transition: 'color 0.18s ease' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.72)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.38)')}
              >{t}</Link>
            ))}
          </div>

          {/* Navigera */}
          <div>
            <p style={{ fontSize: '0.66rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '1.25rem' }}>Navigera</p>
            {[
              { label: 'Startsidan',  href: '/'            },
              { label: 'Recensioner', href: '/recensioner' },
              { label: 'Om oss',      href: '/om-oss'      },
            ].map(l => (
              <Link key={l.label} href={l.href} style={{ display: 'block', fontWeight: 300, fontSize: '0.84rem', color: 'rgba(255,255,255,0.38)', textDecoration: 'none', marginBottom: '0.6rem', transition: 'color 0.18s ease' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.72)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.38)')}
              >{l.label}</Link>
            ))}
          </div>

          {/* Kontakt */}
          <div>
            <p style={{ fontSize: '0.66rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '1.25rem' }}>Kontakt</p>
            {['Rälsgatan 7C', '802 91 Gävle'].map((t, i) => (
              <p key={i} style={{ fontWeight: 300, fontSize: '0.84rem', color: 'rgba(255,255,255,0.38)', marginBottom: '0.5rem' }}>{t}</p>
            ))}
            <a href="tel:026122332" style={{ display: 'block', fontWeight: 300, fontSize: '0.84rem', color: 'rgba(255,255,255,0.38)', textDecoration: 'none', marginBottom: '0.5rem', transition: 'color 0.18s ease' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.72)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.38)')}
            >026-122332</a>
            <a href="mailto:starbilvard@yahoo.se" style={{ display: 'block', fontWeight: 300, fontSize: '0.84rem', color: 'rgba(255,255,255,0.38)', textDecoration: 'none', marginBottom: '1rem', transition: 'color 0.18s ease' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.72)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.38)')}
            >starbilvard@yahoo.se</a>
            <a
              href="https://maps.google.com/?q=R%C3%A4lsgatan+7C,+G%C3%A4vle"
              target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontFamily: "var(--font-body), 'Jost', sans-serif", fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', textDecoration: 'none', transition: 'color 0.18s ease' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold-hover)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--gold)')}
            >
              Hitta hit →
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '1.25rem 2rem', maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
          <p suppressHydrationWarning style={{ fontWeight: 300, fontSize: '0.74rem', color: 'rgba(255,255,255,0.22)', letterSpacing: '0.04em' }}>
            © {new Date().getFullYear()} 5Star Bilvård. Alla rättigheter förbehållna.
          </p>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {'★★★★★'.split('').map((s, i) => (
              <span key={i} style={{ color: 'var(--gold)', fontSize: '0.85rem' }}>{s}</span>
            ))}
          </div>
        </div>
      </footer>

      <style>{`
        @media (max-width: 520px) { .footer-cols { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 380px) { .footer-cols { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  )
}
