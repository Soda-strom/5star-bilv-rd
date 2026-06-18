'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <>
      {/* ── CTA STRIP ── */}
      <section className="cta-dark py-20 px-8">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-8 flex-wrap">
          <div>
            <p className="font-medium text-[0.68rem] tracking-[0.22em] uppercase mb-3" style={{ color: 'rgba(255,255,255,0.45)', fontFamily: "var(--font-body), 'Jost', sans-serif" }}>
              Redo att boka?
            </p>
            <h2 className="font-display font-normal leading-[1.15] text-white" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}>
              Ge din bil den
              <em className="italic" style={{ color: 'rgba(255,255,255,0.65)' }}> behandling</em>
              <br />den förtjänar
            </h2>
          </div>
          <Link href="/boka" className="btn-primary text-[0.76rem] px-11 py-[1.1rem]">
            Boka Tid &rarr;
          </Link>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: '#0d0d0d' }}>
        <div className="footer-cols max-w-[1200px] mx-auto px-8 py-14 grid gap-12" style={{ gridTemplateColumns: '2fr 1fr 1fr 1fr' }}>
          {/* Brand */}
          <div>
            <Image
              src="/logo.png"
              alt="5Star Bilvård"
              width={100}
              height={50}
              className="object-contain w-auto mb-5"
              style={{ height: 44, filter: 'brightness(0) invert(1)' }}
            />
            <p className="font-light text-[0.84rem] leading-[1.75] max-w-[240px]" style={{ color: 'rgba(255,255,255,0.38)' }}>
              Professionell bilrekond och lackskydd i Gävle.
              Vi tar hand om din bil med precision och passion.
            </p>
          </div>

          {/* Tjänster */}
          <div>
            <p className="text-[0.66rem] font-medium tracking-[0.2em] uppercase mb-5" style={{ color: 'rgba(255,255,255,0.25)', fontFamily: "var(--font-body), 'Jost', sans-serif" }}>Tjänster</p>
            {['Utvändig Rekond', 'Invändig Rekond', 'Maskinpolering', 'Lackskydd & Folie', 'Däckbyte'].map(t => (
              <Link key={t} href="/#tjanster" className="block font-light text-[0.84rem] mb-[0.6rem] no-underline transition-colors duration-200"
                style={{ color: 'rgba(255,255,255,0.38)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.72)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.38)')}
              >{t}</Link>
            ))}
          </div>

          {/* Navigera */}
          <div>
            <p className="text-[0.66rem] font-medium tracking-[0.2em] uppercase mb-5" style={{ color: 'rgba(255,255,255,0.25)', fontFamily: "var(--font-body), 'Jost', sans-serif" }}>Navigera</p>
            {[
              { label: 'Startsidan',  href: '/'            },
              { label: 'Recensioner', href: '/recensioner' },
              { label: 'Om oss',      href: '/om-oss'      },
            ].map(l => (
              <Link key={l.label} href={l.href} className="block font-light text-[0.84rem] mb-[0.6rem] no-underline transition-colors duration-200"
                style={{ color: 'rgba(255,255,255,0.38)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.72)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.38)')}
              >{l.label}</Link>
            ))}
          </div>

          {/* Kontakt */}
          <div>
            <p className="text-[0.66rem] font-medium tracking-[0.2em] uppercase mb-5" style={{ color: 'rgba(255,255,255,0.25)', fontFamily: "var(--font-body), 'Jost', sans-serif" }}>Kontakt</p>
            {['Rälsgatan 7C', '802 91 Gävle'].map((t, i) => (
              <p key={i} className="font-light text-[0.84rem] mb-2" style={{ color: 'rgba(255,255,255,0.38)' }}>{t}</p>
            ))}
            <a href="tel:026122332" className="block font-light text-[0.84rem] mb-2 no-underline transition-colors duration-200"
              style={{ color: 'rgba(255,255,255,0.38)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.72)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.38)')}
            >026-122332</a>
            <a href="mailto:starbilvard@yahoo.se" className="block font-light text-[0.84rem] mb-4 no-underline transition-colors duration-200"
              style={{ color: 'rgba(255,255,255,0.38)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.72)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.38)')}
            >starbilvard@yahoo.se</a>
            <a
              href="https://maps.google.com/?q=R%C3%A4lsgatan+7C,+G%C3%A4vle"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-[0.4rem] text-[0.72rem] font-medium tracking-[0.1em] uppercase text-gold no-underline transition-colors duration-200"
              style={{ fontFamily: "var(--font-body), 'Jost', sans-serif" }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold-hover)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--gold)')}
            >
              Hitta hit →
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="max-w-[1200px] mx-auto px-8 py-5 flex justify-between items-center flex-wrap gap-3" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <p suppressHydrationWarning className="font-light text-[0.74rem] tracking-[0.04em]" style={{ color: 'rgba(255,255,255,0.22)' }}>
            © {new Date().getFullYear()} 5Star Bilvård. Alla rättigheter förbehållna.
          </p>
          <a
            href="https://www.bookd.se/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-light text-[0.74rem] tracking-[0.04em] no-underline transition-colors duration-200"
            style={{ color: 'rgba(255,255,255,0.22)', fontFamily: "var(--font-body), 'Jost', sans-serif" }}
            onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.52)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.22)')}
          >
            Made by Bookd
          </a>
        </div>
      </footer>

      <style>{`
        @media (max-width: 640px) { .footer-cols { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 380px) { .footer-cols { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  )
}
