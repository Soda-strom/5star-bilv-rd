'use client'

import { useState } from 'react'

const services = [
  'Utvändig Rekond',
  'Invändig Rekond',
  'Maskinpolering',
  'Helrekond',
  'Motortvätt',
  'Däckbyte',
  'Lackskydd & Folie',
  'Annat',
]

export default function BokaPage() {
  const [selected, setSelected] = useState('')

  const mailtoLink = `mailto:starbilvard@yahoo.se?subject=Bokningsförfrågan — ${selected || 'Tjänst ej vald'}&body=Hej!%0A%0AJag skulle vilja boka: ${selected || ''}%0A%0AMitt namn:%0ATelefonnummer:%0AÖnskat datum:%0A%0AMeddelande:`

  return (
    <section style={{ padding: '9rem 2rem 7rem', minHeight: '80vh' }}>
      <div style={{ maxWidth: 680, margin: '0 auto' }}>

        <p className="section-label" style={{ marginBottom: '0.9rem' }}>Kontakta oss</p>
        <h1 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 400, lineHeight: 1.1, color: 'var(--text)', marginBottom: '1rem' }}>
          Boka din
          <br />
          <em style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>behandling</em>
        </h1>
        <p style={{ fontWeight: 300, fontSize: '0.95rem', lineHeight: 1.75, color: 'var(--text-muted)', marginBottom: '3.5rem' }}>
          Ring oss för snabbast möjliga svar — vi bokar oftast in dig samma dag. Föredrar du mejl går det lika bra.
        </p>

        {/* Ring oss — prominent */}
        <a
          href="tel:026122332"
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '2rem 2.5rem',
            background: 'var(--gold)', color: '#fff',
            textDecoration: 'none',
            marginBottom: '1.5rem',
            transition: 'background 0.18s ease',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = 'var(--gold-hover)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'var(--gold)')}
        >
          <div>
            <p style={{ fontFamily: "var(--font-body), 'Jost', sans-serif", fontSize: '0.66rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '0.4rem' }}>
              Snabbaste sättet — ring oss
            </p>
            <p className="font-display" style={{ fontSize: '2rem', fontWeight: 500, lineHeight: 1 }}>026-122332</p>
          </div>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
          </svg>
        </a>

        {/* Skiljelinje */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '2rem 0' }}>
          <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
          <span style={{ fontFamily: "var(--font-body), 'Jost', sans-serif", fontSize: '0.72rem', fontWeight: 400, letterSpacing: '0.1em', color: 'var(--text-dim)', textTransform: 'uppercase' }}>eller mejla oss</span>
          <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
        </div>

        {/* Välj tjänst */}
        <div style={{ marginBottom: '1.5rem' }}>
          <p style={{ fontFamily: "var(--font-body), 'Jost', sans-serif", fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-dim)', marginBottom: '1rem' }}>
            Välj tjänst
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
            {services.map(s => (
              <button
                key={s}
                onClick={() => setSelected(s)}
                style={{
                  padding: '0.85rem 1rem',
                  border: selected === s ? '1px solid var(--gold)' : '1px solid var(--border)',
                  background: selected === s ? 'var(--gold-dim)' : 'var(--surface)',
                  color: selected === s ? 'var(--gold)' : 'var(--text-muted)',
                  fontFamily: "var(--font-body), 'Jost', sans-serif",
                  fontSize: '0.82rem', fontWeight: selected === s ? 500 : 300,
                  letterSpacing: '0.04em',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.15s ease',
                }}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Mejl-knapp */}
        <a
          href={mailtoLink}
          className="btn-primary"
          style={{
            width: '100%', justifyContent: 'center',
            opacity: selected ? 1 : 0.5,
            pointerEvents: selected ? 'auto' : 'none',
          }}
        >
          Skicka mejl till oss →
        </a>

        {selected && (
          <p style={{ fontFamily: "var(--font-body), 'Jost', sans-serif", fontSize: '0.78rem', fontWeight: 300, color: 'var(--text-dim)', textAlign: 'center', marginTop: '0.75rem' }}>
            Öppnar din mejlapp med {selected} ifyllt
          </p>
        )}

        {/* Adress-info */}
        <div style={{ marginTop: '3.5rem', paddingTop: '2.5rem', borderTop: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <p style={{ fontFamily: "var(--font-body), 'Jost', sans-serif", fontSize: '0.66rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-dim)', marginBottom: '0.5rem' }}>Hitta oss</p>
          <p style={{ fontWeight: 300, fontSize: '0.9rem', color: 'var(--text-muted)' }}>Rälsgatan 7C, 802 91 Gävle</p>
          <p style={{ fontWeight: 300, fontSize: '0.9rem', color: 'var(--text-muted)' }}>Mån–Fre 08:00–18:00 &nbsp;·&nbsp; Lör 09:00–15:00</p>
        </div>

      </div>
    </section>
  )
}
