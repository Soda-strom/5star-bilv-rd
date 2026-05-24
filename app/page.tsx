'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

const stats = [
  { value: '5+',     label: 'Års erfarenhet'    },
  { value: '2 000+', label: 'Bilar rekondade'   },
  { value: '1 500+', label: 'Nöjda kunder'      },
  { value: '100%',   label: 'Nöjd-kund-garanti' },
]

const services = [
  { id: 'exterior', title: 'Utvändig Rekond',   desc: 'Komplett utvändig tvätt, lera, polering och vaxning för maximal glans och skydd.', img: '/images/polishing.jpg' },
  { id: 'interior', title: 'Invändig Rekond',   desc: 'Djuprengöring av interiören — klädsel, mattor, tak och alla ytor behandlas noggrant.', img: '/images/interior.webp' },
  { id: 'machine',  title: 'Maskinpolering',    desc: 'Professionell maskinpolering eliminerar repor och återger lacken ett nytt, spegelblankt liv.', img: '/images/machine.png' },
  { id: 'folie',    title: 'Helrekond',          desc: 'Vår mest kompletta behandling — tvätt, lera, polish och skydd in och ut. Bilen lämnas i showroom-skick.', img: '/images/folie.webp' },
  { id: 'detail',   title: 'Motortvätt',         desc: 'Professionell rengöring av motorrummet — fett, smuts och gammalt grus avlägsnas för ett fräscht och välskött intryck.', img: '/images/motortvatt.jpg' },
  { id: 'tyres',    title: 'Däckbyte',          desc: 'Snabbt och professionellt däckbyte. Vi balanserar och monterar — du hämtar en säker bil.', img: '/images/tyre.jpg' },
]

const featured = [
  { n: '01', title: 'Maskinpolering',  body: 'Professionell 1–2-stegs lackpolering som eliminerar repor, virvelmarkeringar och oxideringar. Lacken återfår sin ursprungliga spegel-finish.', tag: 'Mest populär' },
  { n: '02', title: 'Helrekond',        body: 'Vår mest heltäckande tjänst: tvätt, lera, polish och skydd in och ut. Bilen lämnas i showroom-skick — garanterat.', tag: '6–8 tim arbete' },
  { n: '03', title: 'Däckbyte',        body: 'Snabbt och professionellt byte av säsongshjul. Vi hanterar allt från demontering till montering — du behöver bara lämna bilen.', tag: 'Snabb service' },
]

function useReveal(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting)
          e.target.querySelectorAll<HTMLElement>('.reveal').forEach(el => el.classList.add('visible'))
      }),
      { threshold: 0.05 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref])
}

export default function Home() {
  const heroRef     = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLElement>(null)
  const featuredRef = useRef<HTMLElement>(null)

  useReveal(servicesRef)
  useReveal(featuredRef)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(18px)'
    const id = setTimeout(() => {
      el.style.transition = 'opacity 0.9s cubic-bezier(0.23,1,0.32,1), transform 0.9s cubic-bezier(0.23,1,0.32,1)'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    }, 80)
    return () => clearTimeout(id)
  }, [])

  return (
    <>
      {/* ── HERO ── */}
      <section className="hero-section" id="hero">
        <div className="hero-bg-img" />
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.028'/%3E%3C/svg%3E\")",
        }} />

        <div style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem', paddingTop: '148px' }}>
            <div ref={heroRef} style={{ maxWidth: 680 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                <span style={{ width: 2, height: 22, background: 'var(--gold)', display: 'inline-block', flexShrink: 0 }} />
                <span style={{ fontFamily: "var(--font-body), 'Jost', sans-serif", fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.52)' }}>
                  Professionell Bilrekond — Gävle
                </span>
              </div>
              <h1 className="font-display" style={{ fontSize: 'clamp(3.2rem, 8vw, 6.5rem)', fontWeight: 500, lineHeight: 1.03, color: '#ffffff', letterSpacing: '-0.01em', marginBottom: '1.75rem' }}>
                Vi återställer
                <br />
                <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.58)' }}>din bil till</em>
                <br />
                fem-stjärnigt skick
              </h1>
              <p style={{ fontWeight: 300, fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)', lineHeight: 1.75, color: 'rgba(255,255,255,0.52)', maxWidth: 440, marginBottom: '2.75rem' }}>
                Från snabb utvändig tvätt till komplett lackskydd med keramisk coating — vi ger din bil den behandling den förtjänar.
              </p>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 2, borderTop: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.48)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }} className="stats-grid">
            {stats.map((s, i) => (
              <div key={i} style={{ padding: '1.6rem 1rem', textAlign: 'center', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
                <div className="stat-number" style={{ marginBottom: '0.3rem' }}>{s.value}</div>
                <p style={{ fontFamily: "var(--font-body), 'Jost', sans-serif", fontWeight: 300, fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.38)' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TJÄNSTER ── */}
      <section id="tjanster" ref={servicesRef} style={{ padding: '7rem 2rem', background: 'var(--surface)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p className="section-label reveal" style={{ marginBottom: '0.9rem' }}>Våra Tjänster</p>
          <h2 className="font-display reveal reveal-delay-1" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 400, lineHeight: 1.1, color: 'var(--text)', marginBottom: '3.5rem' }}>
            Allt din bil
            <br />
            <em style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>behöver — under ett tak</em>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }} className="services-image-grid">
            {services.map((s, i) => (
              <div key={s.id} className={`service-card reveal reveal-delay-${i + 1}`}>
                <div style={{ position: 'relative', height: 200, overflow: 'hidden' }}>
                  <Image src={s.img} alt={s.title} fill style={{ objectFit: 'cover', transition: 'transform 0.55s var(--ease-out)' }} sizes="(max-width: 768px) 100vw, 33vw" />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(0,0,0,0.25) 0%, transparent 60%)' }} />
                </div>
                <div style={{ padding: '1.25rem 1.5rem 1.5rem' }}>
                  <h3 style={{ fontWeight: 500, fontSize: '0.95rem', letterSpacing: '0.03em', color: 'var(--text)', marginBottom: '0.5rem' }}>{s.title}</h3>
                  <p style={{ fontWeight: 300, fontSize: '0.85rem', lineHeight: 1.7, color: 'var(--text-muted)' }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POPULÄRA TJÄNSTER ── */}
      <section ref={featuredRef} style={{ padding: '7rem 2rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p className="section-label reveal" style={{ marginBottom: '0.9rem' }}>Populärast</p>
          <h2 className="font-display reveal reveal-delay-1" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 400, lineHeight: 1.1, color: 'var(--text)', marginBottom: '3.5rem' }}>
            Våra mest valda
            <br />
            <em style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>behandlingar</em>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1px', background: 'var(--border)', border: '1px solid var(--border)' }} className="featured-grid">
            {featured.map((f, i) => (
              <a key={f.n} href="/boka" className={`service-card reveal reveal-delay-${i + 1}`} style={{ padding: '2.5rem 2rem 2rem', textDecoration: 'none', display: 'block', cursor: 'pointer' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.75rem' }}>
                  <span className="font-display" style={{ fontSize: '2.6rem', fontWeight: 300, lineHeight: 1, color: 'var(--text-dim)' }}>{f.n}</span>
                  <span style={{ fontSize: '0.62rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold)', border: '1px solid var(--gold-border)', padding: '0.25rem 0.6rem' }}>{f.tag}</span>
                </div>
                <h3 style={{ fontWeight: 500, fontSize: '1rem', letterSpacing: '0.03em', color: 'var(--text)', marginBottom: '0.85rem' }}>{f.title}</h3>
                <p style={{ fontWeight: 300, fontSize: '0.88rem', lineHeight: 1.72, color: 'var(--text-muted)' }}>{f.body}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .stats-grid          { grid-template-columns: repeat(2,1fr) !important; }
          .featured-grid       { grid-template-columns: 1fr !important; }
          .services-image-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 900px) {
          .services-image-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </>
  )
}
