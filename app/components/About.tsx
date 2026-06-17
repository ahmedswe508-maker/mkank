'use client'
import { useLang } from '../context/LangContext'

const IconMission = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
)

const IconVision = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
)

const IconCheck = () => (
  <svg className="w-3.5 h-3.5 shrink-0 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
  </svg>
)

export default function About() {
  const { t } = useLang()

  const markets = [
    { flag: '🇪🇬', name: t.about.egypt, desc: t.about.egypt_desc },
    { flag: '🇸🇦', name: t.about.ksa,   desc: t.about.ksa_desc },
    { flag: '🇦🇪', name: t.about.uae,   desc: t.about.uae_desc },
  ]

  const cards = [
    { icon: <IconMission />, title: t.about.mission_title, body: t.about.mission_body },
    { icon: <IconVision />,  title: t.about.vision_title,  body: t.about.vision_body  },
  ]

  return (
    <section id="about" className="py-20 sm:py-24 bg-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-secondary font-semibold text-xs uppercase tracking-widest mb-2">{t.about.subtitle}</p>
          <h2 className="text-3xl sm:text-4xl font-black text-body">{t.about.title}</h2>
          <div className="mt-4 w-16 h-1 bg-secondary mx-auto rounded-full" />
        </div>

        {/* Body copy */}
        <p className="text-center text-faint text-base sm:text-lg max-w-3xl mx-auto mb-14 leading-relaxed">
          {t.about.body}
        </p>

        {/* Mission + Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {cards.map(c => (
            <div key={c.title}
              className="bg-card rounded-2xl p-8 border border-edge shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-5">
                {c.icon}
              </div>
              <h3 className="text-xl font-bold text-body mb-3">{c.title}</h3>
              <p className="text-faint leading-relaxed text-sm sm:text-base">{c.body}</p>
            </div>
          ))}
        </div>

        {/* Market presence */}
        <div className="mb-14">
          <h3 className="text-lg font-bold text-body text-center mb-6">{t.about.markets}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {markets.map(m => (
              <div key={m.name} className="flex items-start gap-4 bg-card rounded-xl p-5 border border-edge">
                <span className="text-4xl leading-none">{m.flag}</span>
                <div>
                  <p className="font-bold text-body">{m.name}</p>
                  <p className="text-sm text-faint mt-1">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Strengths */}
        <div>
          <h3 className="text-lg font-bold text-body text-center mb-6">{t.about.strengths_title}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {t.about.strengths.map((s, i) => (
              <div key={i} className="flex items-center gap-3 bg-card rounded-lg px-4 py-3 border border-edge">
                <IconCheck />
                <span className="text-sm font-medium text-body">{s}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
