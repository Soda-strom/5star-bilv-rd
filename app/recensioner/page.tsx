'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

const reviews = [
  {
    name: 'Anders Lindström',
    rating: 5,
    date: 'mars 2025',
    text: 'Fantastisk service! Bilen ser ut som ny efter maskinpoleringen. Professionellt bemötande och resultatet överträffade alla förväntningar. Rekommenderar starkt!',
    initials: 'AL',
  },
  {
    name: 'Maria Eriksson',
    rating: 5,
    date: 'februari 2025',
    text: 'Supersnabb och noggrann. Lämnade bilen på morgonen och fick den perfekt rekondad tillbaka på eftermiddagen. Invändigt och utvändigt skinande rent.',
    initials: 'ME',
  },
  {
    name: 'Johan Petersson',
    rating: 5,
    date: 'januari 2025',
    text: 'Maskinpoleringen på min BMW var helt makalös. Alla repor borta och lacken glänser som dag ett. Vet inte hur de gör det men det funkar!',
    initials: 'JP',
  },
  {
    name: 'Sara Nilsson',
    rating: 5,
    date: 'december 2024',
    text: 'Mycket nöjd med däckbytet och invändig rekond. Bra priser, trevlig och kunnig personal. Kommer definitivt tillbaka nästa säsong.',
    initials: 'SN',
  },
  {
    name: 'Erik Bergström',
    rating: 5,
    date: 'november 2024',
    text: 'Keramisk coating på min Tesla — resultatet är fantastiskt. Vattnet rullar av som på en lotus-blomma. Proffsigt jobb från start till slut.',
    initials: 'EB',
  },
  {
    name: 'Lisa Holmgren',
    rating: 5,
    date: 'oktober 2024',
    text: 'Bästa bilrekond-firman i Gävle utan tvekan. Detaljarbetet är imponerande noggrant och priset är väldigt rimligt för den kvalitet man får.',
    initials: 'LH',
  },
]

const gallery = [
  { src: '/images/folie.webp',     alt: 'Lackskydd & folie', col: '1 / 3', row: '1 / 3' },
  { src: '/images/motortvatt.jpg',  alt: 'Motortvätt',        col: '',       row: '' },
  { src: '/images/interior.webp',  alt: 'Invändig rekond',   col: '',       row: '' },
  { src: '/images/machine.png',    alt: 'Maskinpolering',    col: '2 / 4',  row: '' },
  { src: '/images/polishing.jpg', alt: 'Lackpolering',      col: '',       row: '' },
  { src: '/images/tyre.jpg',       alt: 'Däckbyte',          col: '',       row: '' },
]

function Stars({ n }: { n: number }) {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i < n ? '#F4B400' : '#e0e0e0'}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function RecensionerPage() {
  const reviewsRef = useRef<HTMLElement>(null)
  const galleryRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const sections = [reviewsRef.current, galleryRef.current].filter(Boolean)
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
      {/* ── RECENSIONER ── */}
      <section ref={reviewsRef} style={{ padding: '9rem 2rem 7rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '4rem', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <p className="section-label reveal" style={{ marginBottom: '0.9rem' }}>Vad kunderna säger</p>
              <h1 className="font-display reveal reveal-delay-1" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 400, lineHeight: 1.1, color: 'var(--text)' }}>
                Över 1 500 nöjda
                <br />
                <em style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>kunder berättar</em>
              </h1>
            </div>

            {/* Google rating badge */}
            <div className="reveal reveal-delay-2" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 1.5rem', border: '1px solid var(--border)', background: 'var(--surface)' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Stars n={5} />
                  <span style={{ fontFamily: "var(--font-display), 'Cormorant', serif", fontSize: '1.4rem', fontWeight: 600, color: 'var(--text)', lineHeight: 1 }}>5.0</span>
                </div>
                <p style={{ fontFamily: "var(--font-body), 'Jost', sans-serif", fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>Google-betyg</p>
              </div>
            </div>
          </div>

          {/* Review cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }} className="reviews-grid">
            {reviews.map((r, i) => (
              <div key={r.name} className={`reveal reveal-delay-${(i % 3) + 1}`} style={{ padding: '1.75rem', border: '1px solid var(--border)', background: 'var(--surface)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {/* Top row */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ fontFamily: "var(--font-body), 'Jost', sans-serif", fontSize: '0.75rem', fontWeight: 600, color: '#fff', letterSpacing: '0.04em' }}>{r.initials}</span>
                  </div>
                  <div>
                    <p style={{ fontWeight: 500, fontSize: '0.88rem', color: 'var(--text)', marginBottom: '0.1rem' }}>{r.name}</p>
                    <p style={{ fontWeight: 300, fontSize: '0.75rem', color: 'var(--text-muted)' }}>{r.date}</p>
                  </div>
                  <svg style={{ marginLeft: 'auto', flexShrink: 0 }} width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
                <Stars n={r.rating} />
                <p style={{ fontWeight: 300, fontSize: '0.88rem', lineHeight: 1.72, color: 'var(--text-muted)' }}>{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERI ── */}
      <section ref={galleryRef} style={{ padding: '7rem 2rem', background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p className="section-label reveal" style={{ marginBottom: '0.9rem' }}>Galleri</p>
          <h2 className="font-display reveal reveal-delay-1" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 400, lineHeight: 1.1, color: 'var(--text)', marginBottom: '3rem' }}>
            Resultaten talar
            <br />
            <em style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>för sig själva</em>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gridTemplateRows: '260px 260px', gap: '6px' }} className="reveal reveal-delay-2">
            <div className="gallery-item" style={{ gridRow: '1 / 3' }}>
              <Image src="/images/ny8.webp" alt="Lackskydd & folie" fill style={{ objectFit: 'cover' }} sizes="40vw" />
            </div>
            <div className="gallery-item">
              <Image src="/images/ny2.webp" alt="Motortvätt" fill style={{ objectFit: 'cover' }} sizes="25vw" />
            </div>
            <div className="gallery-item">
              <Image src="/images/ny3.jpg" alt="Invändig rekond" fill style={{ objectFit: 'cover' }} sizes="25vw" />
            </div>
            <div className="gallery-item" style={{ gridColumn: '2 / 4' }}>
              <Image src="/images/ny4.jpg" alt="Maskinpolering" fill style={{ objectFit: 'cover' }} sizes="50vw" />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', marginTop: '6px' }} className="reveal reveal-delay-3">
            <div className="gallery-item" style={{ height: 220 }}>
              <Image src="/images/ny9.webp" alt="Lackpolering" fill style={{ objectFit: 'cover' }} sizes="50vw" />
            </div>
            <div className="gallery-item" style={{ height: 220 }}>
              <Image src="/images/ny6.webp" alt="Däckbyte" fill style={{ objectFit: 'cover' }} sizes="50vw" />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) { .reviews-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 520px) { .reviews-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  )
}
