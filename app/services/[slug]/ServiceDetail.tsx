'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLang } from '../../context/LangContext'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { getService, services, detailUI } from '../../lib/services'

const WHATSAPP = 'https://wa.me/201104825035'

function imgSrc(file: string, dir = 'docs') {
  return `/${dir}/${encodeURIComponent(file)}`
}

export default function ServiceDetail({ slug }: { slug: string }) {
  const { lang, isRTL } = useLang()
  const ui = detailUI[lang]
  const service = getService(slug)

  if (!service) return null
  const c = service[lang]

  const arrow = (
    <svg className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  )
  const backArrow = (
    <svg className={`w-4 h-4 ${isRTL ? '' : 'rotate-180'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  )

  const others = services.filter((s) => s.slug !== slug)

  return (
    <>
      <Navbar />

      <main>
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="relative bg-primary pt-28 pb-16 sm:pt-32 sm:pb-20 overflow-hidden">
          {/* Subtle grid pattern (matches homepage hero) */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                'linear-gradient(var(--clr-secondary) 1px, transparent 1px), linear-gradient(90deg, var(--clr-secondary) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
          <div className="absolute -top-24 -end-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs sm:text-sm text-white/55 mb-8">
              <Link href="/" className="hover:text-secondary transition-colors">{ui.homeCrumb}</Link>
              <span className="opacity-50">/</span>
              <Link href="/#services" className="hover:text-secondary transition-colors">{ui.servicesCrumb}</Link>
              <span className="opacity-50">/</span>
              <span className="text-white/90 font-medium">{c.title}</span>
            </nav>

            <div className="max-w-3xl">
              <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-secondary mb-6">
                {service.icon}
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4">
                {c.title}
              </h1>
              <p className="text-secondary font-semibold text-base sm:text-lg mb-5">{c.tagline}</p>
              <p className="text-white/75 text-base sm:text-lg leading-relaxed">{c.intro}</p>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 bg-secondary text-primary font-bold px-7 py-3 rounded-full hover:opacity-90 hover:scale-105 transition-all shadow-lg shadow-secondary/30 text-sm sm:text-base"
                >
                  {ui.ctaButton}
                  {arrow}
                </Link>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-semibold px-7 py-3 rounded-full hover:bg-white/10 hover:border-white/60 transition-all text-sm sm:text-base"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  {ui.ctaWhatsapp}
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-12 max-w-2xl">
              {c.stats.map((s, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 text-center"
                >
                  <div className="text-xl sm:text-3xl font-black text-secondary leading-none mb-1.5">{s.value}</div>
                  <div className="text-white/65 text-[11px] sm:text-xs font-medium leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Overview ─────────────────────────────────────── */}
        <section className="py-16 sm:py-20 bg-canvas">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-secondary font-semibold text-xs uppercase tracking-widest mb-2">{ui.overview}</p>
            <div className="w-12 h-1 bg-secondary rounded-full mb-6" />
            <p className="text-faint text-base sm:text-lg leading-relaxed">{c.overview}</p>
          </div>
        </section>

        {/* ── What We Deliver ──────────────────────────────── */}
        <section className="py-16 sm:py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-secondary font-semibold text-xs uppercase tracking-widest mb-2">{ui.whatWeDeliverSub}</p>
              <h2 className="text-2xl sm:text-3xl font-black text-body">{ui.whatWeDeliver}</h2>
              <div className="mt-4 w-16 h-1 bg-secondary mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {c.capabilities.map((cap, i) => (
                <div
                  key={i}
                  className="bg-canvas rounded-2xl p-6 border border-edge hover:border-primary/40 hover:shadow-md transition-all"
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 font-black ${service.chipClass}`}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-bold text-body mb-2">{cap.title}</h3>
                  <p className="text-faint text-sm leading-relaxed">{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How We Work (process) ────────────────────────── */}
        <section className="py-16 sm:py-20 bg-primary relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: 'radial-gradient(circle, var(--clr-secondary) 1.5px, transparent 1.5px)',
              backgroundSize: '40px 40px',
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-secondary font-semibold text-xs uppercase tracking-widest mb-2">{ui.howWeWorkSub}</p>
              <h2 className="text-2xl sm:text-3xl font-black text-white">{ui.howWeWork}</h2>
              <div className="mt-4 w-16 h-1 bg-secondary mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {c.process.map((step, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors"
                >
                  <div className="w-9 h-9 shrink-0 rounded-full bg-secondary/15 border border-secondary/40 flex items-center justify-center text-secondary font-black text-sm">
                    {i + 1}
                  </div>
                  <span className="text-white/80 text-sm font-medium leading-snug">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Deliverables & Standards ─────────────────────── */}
        <section className="py-16 sm:py-20 bg-canvas">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-secondary font-semibold text-xs uppercase tracking-widest mb-2">{ui.deliverablesSub}</p>
              <h2 className="text-2xl sm:text-3xl font-black text-body">{ui.deliverables}</h2>
              <div className="mt-4 w-16 h-1 bg-secondary mx-auto rounded-full" />
            </div>

            <ul className="space-y-3">
              {c.deliverables.map((d, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 bg-card rounded-xl px-5 py-4 border border-edge"
                >
                  <svg className="w-5 h-5 shrink-0 text-accent mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-body text-sm sm:text-base font-medium">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Project Gallery ──────────────────────────────── */}
        <section className="py-16 sm:py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-secondary font-semibold text-xs uppercase tracking-widest mb-2">{ui.gallerySub}</p>
              <h2 className="text-2xl sm:text-3xl font-black text-body">{ui.gallery}</h2>
              <div className="mt-4 w-16 h-1 bg-secondary mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {service.gallery.map((g, i) => (
                <div
                  key={`${g.file}-${i}`}
                  className="group relative rounded-xl overflow-hidden aspect-square bg-canvas border border-edge"
                >
                  <Image
                    fill
                    src={imgSrc(g.file, g.dir)}
                    alt={c.title}
                    loading="lazy"
                    sizes="(max-width: 640px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <span className={`absolute top-2.5 start-2.5 text-xs font-bold text-white px-2.5 py-1 rounded-full ${service.badgeClass}`}>
                    {c.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Other Services ───────────────────────────────── */}
        <section className="py-16 sm:py-20 bg-canvas">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-xl sm:text-2xl font-black text-body">{ui.otherServices}</h2>
              <div className="mt-4 w-16 h-1 bg-secondary mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {others.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group flex items-center gap-4 bg-card rounded-xl p-5 border border-edge hover:border-primary/40 hover:shadow-md transition-all"
                >
                  <div className="w-11 h-11 shrink-0 rounded-lg flex items-center justify-center bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    {s.icon}
                  </div>
                  <span className="font-bold text-body text-sm flex-1">{s[lang].title}</span>
                  <span className="text-primary opacity-60 group-hover:opacity-100 transition-opacity">{arrow}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA banner ───────────────────────────────────── */}
        <section className="py-16 sm:py-20 bg-primary relative overflow-hidden">
          <div className="absolute -bottom-24 -start-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">{ui.ctaTitle}</h2>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-8">{ui.ctaBody}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 bg-secondary text-primary font-bold px-8 py-3.5 rounded-full hover:opacity-90 hover:scale-105 transition-all shadow-lg shadow-secondary/30 text-sm sm:text-base"
              >
                {ui.ctaButton}
                {arrow}
              </Link>
              <Link
                href="/#services"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 hover:border-white/60 transition-all text-sm sm:text-base"
              >
                {backArrow}
                {ui.back}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
