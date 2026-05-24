'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function OmOssPage() {
  const aboutRef   = useRef<HTMLElement>(null)
  const locationRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const sections = [aboutRef.current, locationRef.current].filter(Boolean)
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting)
          e.target.querySelectorAll<HTMLElement>('.reveal').forEach(el => el.classList.add('visible'))
      }),
      { threshold: 0.05 }
    )
    sections.forEach(s => s && observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* ── OM OSS ── */}
      <section ref={aboutRef} style={{ padding: '9rem 2rem 7rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p className="section-label reveal" style={{ marginBottom: '0.9rem' }}>Om oss</p>
          <h1 className="font-display reveal reveal-delay-1" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 400, lineHeight: 1.1, color: 'var(--text)', marginBottom: '3.5rem' }}>
            Passion för bilar
            <br />
            <em style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>sedan dag ett</em>
          </h1>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }} className="about-grid">
            {/* Text */}
            <div className="reveal reveal-delay-1" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p style={{ fontWeight: 300, fontSize: '1.05rem', lineHeight: 1.85, color: 'var(--text-muted)' }}>
                5Star Bilvård grundades med en enkel men stark vision: att erbjuda professionell bilrekond av högsta kvalitet i Gävle. Vi kombinerar äkta passion för bilar med certifierade produkter och beprövade metoder.
              </p>
              <p style={{ fontWeight: 300, fontSize: '1.05rem', lineHeight: 1.85, color: 'var(--text-muted)' }}>
                Med över 2 000 rekondade bilar och mer än 1 500 nöjda kunder är vi stolta över att vara en av Gävles mest betrodda aktörer inom lackskydd, maskinpolering och invändig rekond.
              </p>
              <p style={{ fontWeight: 300, fontSize: '1.05rem', lineHeight: 1.85, color: 'var(--text-muted)' }}>
                Vi tar hand om varje bil som om den vore vår egen — med noggrannhet, respekt och ett öga för detaljer som få kan matcha. Varje jobb avslutas först när vi är helt nöjda med resultatet.
              </p>

              {/* Values */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginTop: '1rem' }}>
                {[
                  { label: 'Certifierade produkter',  desc: 'Vi använder enbart produkter av högsta kvalitet från ledande varumärken.' },
                  { label: 'Fri offert',               desc: 'Kontakta oss för en kostnadsfri bedömning — utan förpliktelser.' },
                  { label: 'Snabb leverans',           desc: 'De flesta jobb är klara samma dag — vi respekterar din tid.' },
                  { label: 'Erfaret team',             desc: 'Över 5 års samlad erfarenhet av professionell bilrekond.' },
                ].map(v => (
                  <div key={v.label} style={{ padding: '1.25rem', border: '1px solid var(--border)', background: 'var(--surface)' }}>
                    <div style={{ width: 6, height: 6, background: 'var(--gold)', borderRadius: '50%', marginBottom: '0.75rem' }} />
                    <p style={{ fontWeight: 500, fontSize: '0.85rem', color: 'var(--text)', marginBottom: '0.4rem' }}>{v.label}</p>
                    <p style={{ fontWeight: 300, fontSize: '0.8rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="reveal reveal-delay-2" style={{ position: 'relative', height: 520, overflow: 'hidden', border: '1px solid var(--border)' }}>
              <Image src="/images/ny7.webp" alt="5Star Bilvård" fill style={{ objectFit: 'cover' }} sizes="50vw" />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.3) 100%)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── HITTA HIT ── */}
      <section ref={locationRef} style={{ padding: '7rem 2rem', background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p className="section-label reveal" style={{ marginBottom: '0.9rem' }}>Hitta hit</p>
          <h2 className="font-display reveal reveal-delay-1" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 400, lineHeight: 1.1, color: 'var(--text)', marginBottom: '3.5rem' }}>
            Vi finns i
            <br />
            <em style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>hjärtat av Gävle</em>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '4rem', alignItems: 'start' }} className="location-grid">
            {/* Karta */}
            <div className="reveal" style={{ position: 'relative', height: 460, border: '1px solid var(--border)', overflow: 'hidden' }}>
              <iframe
                src="https://maps.google.com/maps?q=R%C3%A4lsgatan+7C%2C+802+91+G%C3%A4vle&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%" height="100%"
                style={{ border: 0, display: 'block' }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="5Star Bilvård — Rälsgatan 7C, Gävle"
              />
            </div>

            {/* Info */}
            <div className="reveal reveal-delay-2" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              <Image src="/logo.png" alt="5Star Bilvård" width={120} height={60} style={{ objectFit: 'contain', height: 50, width: 'auto' }} />

              <div>
                <p style={{ fontSize: '0.66rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-dim)', marginBottom: '0.75rem' }}>Adress</p>
                <p style={{ fontWeight: 400, fontSize: '1.05rem', lineHeight: 1.6, color: 'var(--text)' }}>
                  Rälsgatan 7C<br />802 91 Gävle
                </p>
              </div>

              <div>
                <p style={{ fontSize: '0.66rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-dim)', marginBottom: '0.75rem' }}>Öppettider</p>
                <div className="hours-grid" style={{ fontWeight: 300, fontSize: '0.88rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                  <span>Måndag — Fredag</span><span style={{ color: 'var(--text)' }}>08:00 — 18:00</span>
                  <span>Lördag</span><span style={{ color: 'var(--text)' }}>09:00 — 15:00</span>
                  <span>Söndag</span><span style={{ color: 'var(--text-dim)' }}>Stängt</span>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=R%C3%A4lsgatan+7C,+802+91+G%C3%A4vle"
                target="_blank" rel="noopener noreferrer"
                className="btn-primary"
                style={{ justifyContent: 'center' }}
              >
                Öppna i Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .about-grid    { grid-template-columns: 1fr !important; }
          .location-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
