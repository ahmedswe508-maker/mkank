'use client'

import Link from 'next/link'
import { useLang } from '../../context/LangContext'
import { services } from '../../lib/services'

export default function ServiceNotFound() {
  const { lang } = useLang()

  const copy = {
    en: {
      code: '404',
      title: 'Service Not Found',
      body: "The service you're looking for doesn't exist or may have moved. Explore our services below.",
      home: 'Back to Home',
    },
    ar: {
      code: '404',
      title: 'الخدمة غير موجودة',
      body: 'الخدمة التي تبحث عنها غير موجودة أو ربما تم نقلها. استكشف خدماتنا أدناه.',
      home: 'العودة إلى الرئيسية',
    },
  }[lang]

  return (
    <main className="min-h-screen flex items-center justify-center bg-primary px-4 py-24">
      <div className="text-center max-w-lg">
        <p className="text-7xl sm:text-8xl font-black text-secondary mb-4">{copy.code}</p>
        <h1 className="text-2xl sm:text-3xl font-black text-white mb-4">{copy.title}</h1>
        <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-8">{copy.body}</p>

        <div className="flex flex-wrap justify-center gap-2.5 mb-8">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-white/5 border border-white/15 text-white/80 hover:bg-white/10 hover:text-white transition-colors"
            >
              {s[lang].title}
            </Link>
          ))}
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-secondary text-primary font-bold px-7 py-3 rounded-full hover:opacity-90 hover:scale-105 transition-all shadow-lg shadow-secondary/30 text-sm sm:text-base"
        >
          {copy.home}
        </Link>
      </div>
    </main>
  )
}
