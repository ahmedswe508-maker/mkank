'use client'
import { useLang } from '../context/LangContext'

export default function KPI() {
  const { t } = useLang()

  return (
    <section id="kpi" className="py-20 sm:py-24 bg-primary relative overflow-hidden">

      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'radial-gradient(circle, var(--clr-secondary) 1.5px, transparent 1.5px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-secondary font-semibold text-xs uppercase tracking-widest mb-2">{t.kpi.subtitle}</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white">{t.kpi.title}</h2>
          <div className="mt-4 w-16 h-1 bg-secondary mx-auto rounded-full" />
        </div>

        {/* KPI stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {t.kpi.items.map((item, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 text-center hover:bg-white/10 hover:border-secondary/30 transition-all"
            >
              <div className="text-3xl sm:text-4xl font-black text-secondary mb-2 leading-none">
                {item.value}
              </div>
              <div className="text-white/65 text-xs sm:text-sm font-medium leading-snug">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Delivery flow */}
        <div>
          <h3 className="text-xl font-bold text-white text-center mb-10">{t.kpi.flow_title}</h3>
          <div className="relative">
            {/* Connecting line (hidden on mobile) */}
            <div className="hidden sm:block absolute top-5 start-[10%] end-[10%] h-px bg-white/10" />

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-y-8 gap-x-3">
              {t.kpi.flow.map((step, i) => (
                <div key={i} className="flex flex-col items-center gap-2.5 text-center relative">
                  <div className="w-10 h-10 rounded-full bg-secondary/15 border border-secondary/40 flex items-center justify-center text-secondary font-black text-sm z-10">
                    {i + 1}
                  </div>
                  <span className="text-white/65 text-xs sm:text-sm leading-tight max-w-[90px]">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
