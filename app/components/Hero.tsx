'use client'
import { useLang } from '../context/LangContext'

export default function Hero() {
  const { t } = useLang()

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Base background */}
      <div className="absolute inset-0 bg-primary" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(var(--clr-secondary) 1px, transparent 1px), linear-gradient(90deg, var(--clr-secondary) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Gradient overlay — darkens edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />

      {/* Decorative blobs */}
      <div className="absolute top-1/4 -start-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -end-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/40 text-secondary px-4 py-1.5 rounded-full text-sm font-semibold mb-8">
          <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse" />
          {t.hero.badge}
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-1">
          {t.hero.line1}
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-secondary leading-tight mb-8">
          {t.hero.line2}
        </h2>

        {/* Description */}
        <p className="text-white/75 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.hero.desc}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-secondary text-primary font-bold px-8 py-3.5 rounded-full hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-secondary/30 text-sm sm:text-base"
          >
            {t.hero.cta}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          <a
            href="https://wa.me/201000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-white/40 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 hover:border-white/60 transition-all text-sm sm:text-base"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            {t.hero.whatsapp}
          </a>

          <a
            href="/pdf/Makani-Portfolio.pdf"
            download
            className="inline-flex items-center gap-2 border-2 border-secondary/60 text-secondary font-semibold px-8 py-3.5 rounded-full hover:bg-secondary/10 hover:border-secondary transition-all text-sm sm:text-base"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
            </svg>
            {t.hero.portfolio}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50 animate-bounce">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
