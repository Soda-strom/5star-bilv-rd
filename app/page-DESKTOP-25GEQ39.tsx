'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Navbar from './components/Navbar'

const stats = [
  { value: '5+',     label: 'Års erfarenhet'    },
  { value: '2 000+', label: 'Bilar rekondade'   },
  { value: '1 500+', label: 'Nöjda kunder'      },
  { value: '100%',   label: 'Nöjd-kund-garanti' },
]

const featured = [
  {
    n: '01',
    title: 'Maskinpolering',
    body: 'Professionell 1–2-stegs lackpolering som eliminerar repor, virvelmarkeringar och oxideringar. Lacken återfår sin ursprungliga spegel-finish.',
    tag: 'Mest populär',
  },
  {
    n: '02',
    title: 'Komplett Rekond',
    body: 'Vår mest heltäckande tjänst: tvätt, lera, polish och skydd in och ut. Bilen lämnas i showroom-skick — garanterat.',
    tag: '6–8 tim arbete',
  },
  {
    n: '03',
    title: 'Däckbyte',
    body: 'Snabbt och professionellt byte av säsongshjul. Vi hanterar allt från demontering till montering — du behöver bara lämna bilen.',
    tag: 'Snabb service',
  },
]

const services = [
  {
    id: 'exterior',
    title: 'Utvändig Rekond',
    desc: 'Komplett utvändig tvätt, lera, polering och vaxning för maximal glans och skydd.',
    img: '/images/polishing.webp',
  },
  {
    id: 'interior',
    title: 'Invändig Rekond',
    desc: 'Djuprengöring av interiören — klädsel, mattor, tak och alla ytor behandlas noggrant.',
    img: '/images/interior.webp',
  },
  {
    id: 'machine',
    title: 'Maskinpolering',
    desc: 'Professionell maskinpolering eliminerar repor och återger lacken ett nytt, spegelblankt liv.',
    img: '/images/machine.jpg',
  },
  {
    id: 'folie',
    title: 'Lackskydd & Folie',
    desc: 'Skydda lacken med högkvalitativ folie eller keramiskt lackskydd — upp till 5 års skydd.',
    img: '/images/folie.webp',
  },
  {
    id: 'detail',
    title: 'Detaljering',
    desc: 'Minutiös rengöring av alla detaljer, lister, kanter och svåråtkomliga ytor.',
    img: '/images/detail.jpg',
  },
  {
    id: 'tyres',
    title: 'Däckbyte',
    desc: 'Snabbt och professionellt däckbyte. Vi balanserar och monterar — du hämtar en säker bil.',
    img: '/images/tyre.jpg',
  },
]

const processSteps = [
  { step: '01', title: 'Kontakta oss',    body: 'Ring eller skicka ett meddelande. Vi hjälper dig välja rätt tjänst och bokar en tid som passar.' },
  { step: '02', title: 'Lämna in bilen',  body: 'Lämna bilen hos oss på Rälsgatan 7C i Gävle. Vi gör en besiktning och går igenom jobbet.' },
  { step: '03', title: 'Behandling',       body: 'Professionell behandling med certifierade produkter och rätt utrustning — varje gång.' },
  { step: '04', title: 'Hämta bilen',     body: 'Du hämtar en bil som ser ut som ny. Vi garanterar resultatet och din nöjdhet.' },
]

const packages = [
  {
    name: 'Silver',
    subtitle: 'Grundlig vård',
    features: ['Utvändig handtvätt', 'Hjultvätt & rinse', 'Invändig dammsugning', 'Torkning & finish'],
    featured: false,
  },
  {
    name: 'Gold',
    subtitle: 'Komplett paket',
    features: ['Allt i Silver', 'Lackpolering', 'Djuprengöring interiör', 'Fönsterputs', 'Däckglans'],
    featured: true,
  },
  {
    name: 'Platinum',
    subtitle: 'Premium upplevelse',
    features: ['Allt i Gold', 'Maskinpolering', 'Keramiskt lackskydd', 'Motortvätt', 'Doftbehandling', 'Bagagerumstvätt'],
    featured: false,
  },
]

const gallery = [
  { src: '/images/folie.webp',    alt: 'Lackskydd & folie',  span: 'tall' },
  { src: '/images/detail.jpg',    alt: 'Detaljering',        span: '' },
  { src: '/images/interior.webp', alt: 'Invändig rekond',    span: '' },
  { src: '/images/machine.jpg',   alt: 'Maskinpolering',     span: 'wide' },
  { src: '/images/polishing.webp',alt: 'Lackpolering',       span: '' },
  { src: '/images/tyre.jpg',      alt: 'Däckbyte',           span: '' },
]

function useReveal(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll<HTMLElement>('.reveal').forEach(el => el.classList.add('visible'))
        }
      }),
      { threshold: 0.05 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref])
}

export default function Home() {
  const heroRef      = useRef<HTMLDivElement>(null)
  const featuredRef  = useRef<HTMLElement>(null)
  const servicesRef  = useRef<HTMLElement>(null)
  const galleryRef   = useRef<HTMLElement>(null)
  const processRef   = useRef<HTMLElement>(null)
  const pricingRef   = useRef<HTMLElement>(null)
  const locationRef  = useRef<HTMLElement>(null)

  useReveal(featuredRef)
  useReveal(servicesRef)
  useReveal(galleryRef)
  useReveal(processRef)
  useReveal(pricingRef)
  useReveal(locationRef)

  // Hero entrance
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
      <Navbar />

      {/* ── HERO ── */}
      <section className="hero-section" id="hero">
        <div className="hero-bg-img" />

        {/* Grain overlay */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.028'/%3E%3C/svg%3E\")",
        }} />

        <div style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
            <div ref={heroRef} style={{ maxWidth: 680 }}>
              {/* Eyebrow */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                <span style={{ width: 2, height: 22, background: 'var(--gold)', display: 'inline-block', flexShrink: 0 }} />
                <span style={{
                  fontFamily: "var(--font-body), 'Jost', sans-serif",
                  fontSize: '0.68rem', fontWeight: 500,
                  letterSpacing: '0.22em', textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.52)',
                }}>Professionell Bilrekond — Gävle</span>
              </div>

              <h1
                className="font-display"
                style={{
                  fontSize: 'clamp(3.2rem, 8vw, 6.5rem)',
                  fontWeight: 500, lineHeight: 1.03,
                  color: '#ffffff', letterSpacing: '-0.01em',
                  marginBottom: '1.75rem',
                }}
              >
                Vi återställer
                <br />
                <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.58)' }}>
                  din bil till
                </em>
                <br />
                fem-stjärnigt skick
              </h1>

              <p style={{
                fontWeight: 300,
                fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
                lineHeight: 1.75, color: 'rgba(255,255,255,0.52)',
                maxWidth: 440, marginBottom: '2.75rem',
              }}>
                Från snabb utvändig tvätt till komplett lackskydd med keramisk
                coating — vi ger din bil den behandling den förtjänar.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a className="btn-primary-light" href="#kontakt">Boka Tid</a>
                <a className="btn-outline-light" href="#tjanster">Våra Tjänster</a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 2,
          borderTop: '1px solid rgba(255,255,255,0.08)',
          background: 'rgba(0,0,0,0.48)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
        }}>
          <div style={{
            maxWidth: 1200, margin: '0 auto',
            display: 'grid', gridTemplateColumns: 'repeat(4,1fr)',
          }} className="stats-grid">
            {stats.map((s, i) => (
              <div key={i} style={{
                padding: '1.6rem 1rem', textAlign: 'center',
                borderRight: i < 3 ? '1px solid rgba(255,255,255,0.07)' : 'none',
              }}>
                <div className="stat-number" style={{ marginBottom: '0.3rem' }}>{s.value}</div>
                <p style={{
                  fontFamily: "var(--font-body), 'Jost', sans-serif",
                  fontWeight: 300, fontSize: '0.68rem',
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.38)',
                }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED SERVICES ── */}
      <section ref={featuredRef} style={{ padding: '7rem 2rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{
            display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
            marginBottom: '4rem', flexWrap: 'wrap', gap: '1.5rem',
          }}>
            <div>
              <p className="section-label reveal" style={{ marginBottom: '0.9rem' }}>Populärast</p>
              <h2 className="font-display reveal reveal-delay-1" style={{
                fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                fontWeight: 400, lineHeight: 1.1, color: 'var(--text)',
              }}>
                Våra mest valda
                <br />
                <em style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>behandlingar</em>
              </h2>
            </div>
            <a href="#tjanster" className="btn-outline reveal reveal-delay-2">Alla tjänster</a>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3,1fr)',
            gap: '1px',
            background: 'var(--border)',
            border: '1px solid var(--border)',
          }} className="featured-grid">
            {featured.map((f, i) => (
              <div
                key={f.n}
                className={`service-card reveal reveal-delay-${i + 1}`}
                style={{ padding: '2.5rem 2rem 2rem' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.75rem' }}>
                  <span className="font-display" style={{
                    fontSize: '2.6rem', fontWeight: 300,
                    lineHeight: 1, color: 'var(--text-dim)',
                  }}>{f.n}</span>
                  <span style={{
                    fontSize: '0.62rem', fontWeight: 500,
                    letterSpacing: '0.16em', textTransform: 'uppercase',
                    color: 'var(--gold)', border: '1px solid var(--gold-border)',
                    padding: '0.25rem 0.6rem', opacity: 0.9,
                  }}>{f.tag}</span>
                </div>
                <h3 style={{
                  fontWeight: 500, fontSize: '1rem', letterSpacing: '0.03em',
                  color: 'var(--text)', marginBottom: '0.85rem',
                }}>{f.title}</h3>
                <p style={{
                  fontWeight: 300, fontSize: '0.88rem', lineHeight: 1.72,
                  color: 'var(--text-muted)',
                }}>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALL SERVICES ── */}
      <section
        id="tjanster"
        ref={servicesRef}
        style={{
          padding: '7rem 2rem',
          background: 'var(--surface)',
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p className="section-label reveal" style={{ marginBottom: '0.9rem' }}>Alla Tjänster</p>
          <h2 className="font-display reveal reveal-delay-1" style={{
            fontSize: 'clamp(2rem, 4vw, 3.25rem)',
            fontWeight: 400, lineHeight: 1.1, color: 'var(--text)',
            marginBottom: '3.5rem',
          }}>
            Allt din bil
            <br />
            <em style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>behöver — under ett tak</em>
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
          }} className="services-image-grid">
            {services.map((s, i) => (
              <div
                key={s.id}
                className={`service-card reveal reveal-delay-${i + 1}`}
              >
                <div style={{ position: 'relative', height: 220, overflow: 'hidden' }}>
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    style={{ objectFit: 'cover', transition: 'transform 0.55s var(--ease-out)' }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(0deg, rgba(0,0,0,0.25) 0%, transparent 60%)',
                  }} />
                </div>
                <div style={{ padding: '1.5rem 1.5rem 1.75rem' }}>
                  <h3 style={{
                    fontWeight: 500, fontSize: '0.95rem', letterSpacing: '0.03em',
                    color: 'var(--text)', marginBottom: '0.65rem',
                  }}>{s.title}</h3>
                  <p style={{
                    fontWeight: 300, fontSize: '0.85rem', lineHeight: 1.7,
                    color: 'var(--text-muted)', marginBottom: '1rem',
                  }}>{s.desc}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{
                      fontFamily: "var(--font-display), 'Cormorant', serif",
                      fontSize: '1.35rem', fontWeight: 500, color: 'var(--gold)',
                    }}>Från 0 kr</span>
                    <a href="#kontakt" style={{
                      fontFamily: "var(--font-body), 'Jost', sans-serif",
                      fontSize: '0.7rem', fontWeight: 500,
                      letterSpacing: '0.1em', textTransform: 'uppercase',
                      color: 'var(--gold)', textDecoration: 'none',
                      transition: 'color 0.18s ease',
                    }}>Boka →</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section id="galleri" ref={galleryRef} style={{ padding: '7rem 2rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{
            display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
            marginBottom: '3rem', flexWrap: 'wrap', gap: '1.5rem',
          }}>
            <div>
              <p className="section-label reveal" style={{ marginBottom: '0.9rem' }}>Galleri</p>
              <h2 className="font-display reveal reveal-delay-1" style={{
                fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                fontWeight: 400, lineHeight: 1.1, color: 'var(--text)',
              }}>
                Resultaten talar
                <br />
                <em style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>för sig själva</em>
              </h2>
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr',
            gridTemplateRows: '260px 260px',
            gap: '6px',
          }} className="reveal reveal-delay-2">
            {/* folie — spans 2 rows (tall) */}
            <div className="gallery-item" style={{ gridRow: '1 / 3' }}>
              <Image src="/images/folie.webp" alt="Lackskydd & folie" fill style={{ objectFit: 'cover' }} sizes="40vw" />
              <div className="gallery-label">
                <p style={{ color: '#fff', fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.08em' }}>Lackskydd & Folie</p>
              </div>
            </div>
            {/* detail */}
            <div className="gallery-item">
              <Image src="/images/detail.jpg" alt="Detaljering" fill style={{ objectFit: 'cover' }} sizes="25vw" />
              <div className="gallery-label">
                <p style={{ color: '#fff', fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.08em' }}>Detaljering</p>
              </div>
            </div>
            {/* interior */}
            <div className="gallery-item">
              <Image src="/images/interior.webp" alt="Invändig rekond" fill style={{ objectFit: 'cover' }} sizes="25vw" />
              <div className="gallery-label">
                <p style={{ color: '#fff', fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.08em' }}>Invändig Rekond</p>
              </div>
            </div>
            {/* machine — spans 2 cols (wide) */}
            <div className="gallery-item" style={{ gridColumn: '2 / 4' }}>
              <Image src="/images/machine.jpg" alt="Maskinpolering" fill style={{ objectFit: 'cover' }} sizes="50vw" />
              <div className="gallery-label">
                <p style={{ color: '#fff', fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.08em' }}>Maskinpolering</p>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', marginTop: '6px' }} className="reveal reveal-delay-3">
            <div className="gallery-item" style={{ height: 220 }}>
              <Image src="/images/polishing.webp" alt="Lackpolering" fill style={{ objectFit: 'cover' }} sizes="50vw" />
              <div className="gallery-label">
                <p style={{ color: '#fff', fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.08em' }}>Lackpolering</p>
              </div>
            </div>
            <div className="gallery-item" style={{ height: 220 }}>
              <Image src="/images/tyre.jpg" alt="Däckbyte" fill style={{ objectFit: 'cover' }} sizes="50vw" />
              <div className="gallery-label">
                <p style={{ color: '#fff', fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.08em' }}>Däckbyte</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section
        ref={processRef}
        style={{
          padding: '7rem 2rem',
          background: 'var(--surface)',
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p className="section-label reveal" style={{ marginBottom: '0.9rem' }}>Hur det går till</p>
          <h2 className="font-display reveal reveal-delay-1" style={{
            fontSize: 'clamp(2rem, 4vw, 3.25rem)',
            fontWeight: 400, lineHeight: 1.1, color: 'var(--text)',
            marginBottom: '4rem',
          }}>
            Enkelt från start
            <br />
            <em style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>till mål</em>
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4,1fr)',
            gap: 0,
          }} className="process-grid">
            {processSteps.map((p, i) => (
              <div
                key={p.step}
                className={`reveal reveal-delay-${i + 1}`}
                style={{
                  padding: '2rem',
                  paddingLeft: i === 0 ? 0 : '2rem',
                  paddingRight: i === processSteps.length - 1 ? 0 : '2rem',
                  borderRight: i < processSteps.length - 1 ? '1px solid var(--border)' : 'none',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  <div style={{
                    width: 36, height: 36,
                    border: '1.5px solid var(--gold-border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <span style={{
                      fontFamily: "var(--font-body), 'Jost', sans-serif",
                      fontWeight: 500, fontSize: '0.7rem',
                      letterSpacing: '0.06em', color: 'var(--gold)',
                    }}>{p.step}</span>
                  </div>
                  <div style={{ height: 1, flex: 1, background: i < processSteps.length - 1 ? 'var(--border)' : 'transparent' }} />
                </div>
                <h3 style={{
                  fontWeight: 500, fontSize: '0.95rem',
                  color: 'var(--text)', marginBottom: '0.7rem', letterSpacing: '0.02em',
                }}>{p.title}</h3>
                <p style={{
                  fontWeight: 300, fontSize: '0.85rem', lineHeight: 1.7,
                  color: 'var(--text-muted)',
                }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="priser" ref={pricingRef} style={{ padding: '7rem 2rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p className="section-label reveal" style={{ marginBottom: '0.9rem' }}>Priser & Paket</p>
          <h2 className="font-display reveal reveal-delay-1" style={{
            fontSize: 'clamp(2rem, 4vw, 3.25rem)',
            fontWeight: 400, lineHeight: 1.1, color: 'var(--text)',
            marginBottom: '3.5rem',
          }}>
            Välj det paket
            <br />
            <em style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>som passar dig</em>
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
          }} className="packages-grid">
            {packages.map((pkg, i) => (
              <div
                key={pkg.name}
                className={`reveal reveal-delay-${i + 1}${pkg.featured ? ' package-featured' : ''}`}
                style={{
                  padding: '2.5rem 2rem',
                  border: pkg.featured ? '1px solid var(--gold-border)' : '1px solid var(--border)',
                  background: pkg.featured ? '#0d0d0d' : 'var(--bg)',
                  position: 'relative',
                }}
              >
                {pkg.featured && (
                  <div style={{
                    position: 'absolute', top: -1, left: '50%', transform: 'translateX(-50%)',
                    background: 'var(--gold)', color: '#fff',
                    fontFamily: "var(--font-body), 'Jost', sans-serif",
                    fontSize: '0.62rem', fontWeight: 500,
                    letterSpacing: '0.16em', textTransform: 'uppercase',
                    padding: '0.25rem 0.9rem',
                  }}>Populärast</div>
                )}

                <div style={{ marginBottom: '1.5rem' }}>
                  <h3 className="font-display" style={{
                    fontSize: '2rem', fontWeight: 500,
                    color: pkg.featured ? '#fff' : 'var(--text)',
                    marginBottom: '0.25rem',
                  }}>{pkg.name}</h3>
                  <p style={{
                    fontWeight: 300, fontSize: '0.8rem',
                    color: pkg.featured ? 'rgba(255,255,255,0.5)' : 'var(--text-muted)',
                    letterSpacing: '0.06em',
                  }}>{pkg.subtitle}</p>
                </div>

                <div style={{
                  display: 'flex', alignItems: 'baseline', gap: '0.35rem',
                  marginBottom: '2rem',
                  paddingBottom: '1.5rem',
                  borderBottom: pkg.featured ? '1px solid rgba(201,146,42,0.2)' : '1px solid var(--border)',
                }}>
                  <span className="font-display" style={{
                    fontSize: '3.5rem', fontWeight: 600, lineHeight: 1,
                    color: 'var(--gold)',
                  }}>0</span>
                  <span style={{
                    fontFamily: "var(--font-body), 'Jost', sans-serif",
                    fontWeight: 300, fontSize: '1rem',
                    color: pkg.featured ? 'rgba(255,255,255,0.5)' : 'var(--text-muted)',
                  }}>kr</span>
                </div>

                <ul style={{ listStyle: 'none', marginBottom: '2rem' }}>
                  {pkg.features.map(f => (
                    <li key={f} style={{
                      display: 'flex', alignItems: 'center', gap: '0.65rem',
                      fontWeight: 300, fontSize: '0.85rem', lineHeight: 1.5,
                      color: pkg.featured ? 'rgba(255,255,255,0.72)' : 'var(--text-muted)',
                      marginBottom: '0.65rem',
                    }}>
                      <span style={{ color: 'var(--gold)', flexShrink: 0, fontWeight: 500 }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#kontakt"
                  className={pkg.featured ? 'btn-primary' : 'btn-outline'}
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Boka nu
                </a>
              </div>
            ))}
          </div>

          {/* Däckbyte addon */}
          <div className="reveal" style={{
            marginTop: '3rem',
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            border: '1px solid var(--border)',
            overflow: 'hidden',
          }}>
            <div style={{ position: 'relative', minHeight: 240 }}>
              <Image
                src="/images/tyre.jpg"
                alt="Däckbyte"
                fill
                style={{ objectFit: 'cover' }}
                sizes="33vw"
              />
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.22)' }} />
            </div>
            <div style={{
              padding: '2.5rem 2.5rem',
              display: 'flex', flexDirection: 'column', justifyContent: 'center',
              gap: '0.75rem',
            }}>
              <p className="section-label">Tilläggstjänst</p>
              <h3 className="font-display" style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                fontWeight: 400, color: 'var(--text)',
              }}>Däckbyte</h3>
              <p style={{
                fontWeight: 300, fontSize: '0.88rem', lineHeight: 1.7,
                color: 'var(--text-muted)', maxWidth: 400,
              }}>
                Snabbt och professionellt byte av säsongshjul. Passar perfekt som
                tillägg till ett rekondpaket eller som fristående tjänst.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                <span className="font-display" style={{
                  fontSize: '2rem', fontWeight: 500, color: 'var(--gold)',
                }}>Från 0 kr</span>
                <a href="#kontakt" className="btn-primary">Boka däckbyte</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOCATION ── */}
      <section
        id="hitta-oss"
        ref={locationRef}
        style={{
          padding: '7rem 2rem',
          background: 'var(--surface)',
          borderTop: '1px solid var(--border)',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p className="section-label reveal" style={{ marginBottom: '0.9rem' }}>Hitta oss</p>
          <h2 className="font-display reveal reveal-delay-1" style={{
            fontSize: 'clamp(2rem, 4vw, 3.25rem)',
            fontWeight: 400, lineHeight: 1.1, color: 'var(--text)',
            marginBottom: '3.5rem',
          }}>
            Vi finns i
            <br />
            <em style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>hjärtat av Gävle</em>
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '3fr 2fr',
            gap: '4rem',
            alignItems: 'start',
          }} className="location-grid">
            {/* Map */}
            <div className="reveal" style={{
              position: 'relative',
              height: 460,
              border: '1px solid var(--border)',
              overflow: 'hidden',
            }}>
              <iframe
                src="https://maps.google.com/maps?q=R%C3%A4lsgatan+7C%2C+802+91+G%C3%A4vle&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="5Star Bilvård — Rälsgatan 7C, Gävle"
              />
            </div>

            {/* Info */}
            <div className="reveal reveal-delay-2" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              <div>
                <Image
                  src="/logo.png"
                  alt="5Star Bilvård"
                  width={120}
                  height={60}
                  style={{ objectFit: 'contain', height: 50, width: 'auto', marginBottom: '1.5rem' }}
                />
              </div>

              <div>
                <p style={{
                  fontSize: '0.66rem', fontWeight: 500, letterSpacing: '0.2em',
                  textTransform: 'uppercase', color: 'var(--text-dim)', marginBottom: '0.75rem',
                }}>Adress</p>
                <p style={{ fontWeight: 400, fontSize: '1.05rem', lineHeight: 1.6, color: 'var(--text)' }}>
                  Rälsgatan 7C
                  <br />
                  802 91 Gävle
                </p>
              </div>

              <div>
                <p style={{
                  fontSize: '0.66rem', fontWeight: 500, letterSpacing: '0.2em',
                  textTransform: 'uppercase', color: 'var(--text-dim)', marginBottom: '0.75rem',
                }}>Öppettider</p>
                <div className="hours-grid" style={{
                  fontWeight: 300, fontSize: '0.88rem',
                  lineHeight: 1.6, color: 'var(--text-muted)',
                }}>
                  <span>Måndag — Fredag</span><span style={{ color: 'var(--text)' }}>08:00 — 18:00</span>
                  <span>Lördag</span><span style={{ color: 'var(--text)' }}>09:00 — 15:00</span>
                  <span>Söndag</span><span style={{ color: 'var(--text-dim)' }}>Stängt</span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <a
                  href="https://maps.google.com/?q=R%C3%A4lsgatan+7C,+802+91+G%C3%A4vle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ justifyContent: 'center' }}
                >
                  Öppna i Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

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
          <a
            href="#kontakt"
            className="btn-primary"
            style={{
              fontSize: '0.76rem',
              padding: '1.1rem 2.8rem',
            }}
          >
            Boka Tid &rarr;
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer id="kontakt" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: '#0d0d0d' }}>
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
              style={{
                objectFit: 'contain', height: 44, width: 'auto',
                filter: 'brightness(0) invert(1)',
                marginBottom: '1.25rem',
              }}
            />
            <p style={{
              fontWeight: 300, fontSize: '0.84rem', lineHeight: 1.75,
              color: 'rgba(255,255,255,0.38)', maxWidth: 240,
            }}>
              Professionell bilrekond och lackskydd i Gävle.
              Vi tar hand om din bil med precision och passion.
            </p>
          </div>

          {/* Tjänster */}
          <div>
            <p style={{
              fontSize: '0.66rem', fontWeight: 500, letterSpacing: '0.2em',
              textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)',
              marginBottom: '1.25rem',
            }}>Tjänster</p>
            {['Utvändig Rekond', 'Invändig Rekond', 'Maskinpolering', 'Lackskydd & Folie', 'Däckbyte'].map(t => (
              <a key={t} href="#tjanster" style={{
                display: 'block', fontWeight: 300, fontSize: '0.84rem',
                color: 'rgba(255,255,255,0.38)', textDecoration: 'none',
                marginBottom: '0.6rem', transition: 'color 0.18s ease',
              }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.72)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.38)')}
              >{t}</a>
            ))}
          </div>

          {/* Navigera */}
          <div>
            <p style={{
              fontSize: '0.66rem', fontWeight: 500, letterSpacing: '0.2em',
              textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)',
              marginBottom: '1.25rem',
            }}>Navigera</p>
            {[
              { label: 'Galleri',  href: '#galleri' },
              { label: 'Priser',   href: '#priser' },
              { label: 'Hitta oss', href: '#hitta-oss' },
            ].map(l => (
              <a key={l.label} href={l.href} style={{
                display: 'block', fontWeight: 300, fontSize: '0.84rem',
                color: 'rgba(255,255,255,0.38)', textDecoration: 'none',
                marginBottom: '0.6rem', transition: 'color 0.18s ease',
              }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.72)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.38)')}
              >{l.label}</a>
            ))}
          </div>

          {/* Kontakt */}
          <div>
            <p style={{
              fontSize: '0.66rem', fontWeight: 500, letterSpacing: '0.2em',
              textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)',
              marginBottom: '1.25rem',
            }}>Kontakt</p>
            {[
              'Rälsgatan 7C',
              '802 91 Gävle',
            ].map((t, i) => (
              <p key={i} style={{
                fontWeight: 300, fontSize: '0.84rem',
                color: 'rgba(255,255,255,0.38)', marginBottom: '0.5rem',
              }}>{t}</p>
            ))}
            <div style={{ marginTop: '1rem' }}>
              <a href="https://maps.google.com/?q=R%C3%A4lsgatan+7C,+G%C3%A4vle"
                target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                  fontFamily: "var(--font-body), 'Jost', sans-serif",
                  fontSize: '0.72rem', fontWeight: 500,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: 'var(--gold)', textDecoration: 'none',
                  transition: 'color 0.18s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold-hover)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--gold)')}
              >
                Hitta hit →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          padding: '1.25rem 2rem',
          maxWidth: 1200, margin: '0 auto',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '0.75rem',
        }}>
          <p suppressHydrationWarning style={{
            fontWeight: 300, fontSize: '0.74rem',
            color: 'rgba(255,255,255,0.22)', letterSpacing: '0.04em',
          }}>
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
        @media (max-width: 640px) {
          .stats-grid { grid-template-columns: repeat(2,1fr) !important; }
          .featured-grid { grid-template-columns: 1fr !important; }
          [style*="gridTemplateColumns: 3fr 2fr"] { grid-template-columns: 1fr !important; }
          [style*="gridTemplateColumns: 1fr 2fr"] { grid-template-columns: 1fr !important; }
          [style*="gridTemplateColumns: '2fr 1fr 1fr'"] { grid-template-columns: 1fr !important; grid-template-rows: auto !important; }
        }
        @media (max-width: 520px) {
          .footer-cols { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 380px) {
          .footer-cols { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
