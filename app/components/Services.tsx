'use client'
import Link from 'next/link'
import { useLang } from '../context/LangContext'
import { services, detailUI } from '../lib/services'

export default function Services() {
  const { t, lang, isRTL } = useLang()
  const ui = detailUI[lang]

  return (
    <section id="services" className="py-20 sm:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-secondary font-semibold text-xs uppercase tracking-widest mb-2">{t.services.subtitle}</p>
          <h2 className="text-3xl sm:text-4xl font-black text-body">{t.services.title}</h2>
          <div className="mt-4 w-16 h-1 bg-secondary mx-auto rounded-full" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((item, i) => {
            const svc = services[i]
            return (
              <Link
                key={i}
                href={`/services/${svc.slug}`}
                className="group flex flex-col bg-canvas rounded-2xl p-8 border border-edge hover:border-primary/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white">
                  {svc.icon}
                </div>
                <h3 className="font-bold text-body text-lg mb-3">{item.title}</h3>
                <p className="text-faint text-sm leading-relaxed">{item.desc}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary opacity-80 group-hover:opacity-100 group-hover:gap-2.5 transition-all">
                  {ui.learnMore}
                  <svg
                    className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            )
          })}
        </div>

      </div>
    </section>
  )
}
