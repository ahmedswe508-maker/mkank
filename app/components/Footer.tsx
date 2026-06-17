'use client'
import { useLang } from '../context/LangContext'

export default function Footer() {
  const { t, lang } = useLang()

  const links = [
    { href: '#home',     label: t.nav.home },
    { href: '#about',    label: t.nav.about },
    { href: '#services', label: t.nav.services },
    { href: '#projects', label: t.nav.projects },
    { href: '#kpi',      label: t.nav.kpi },
    { href: '#contact',  label: t.nav.contact },
  ]

  return (
    <footer className="bg-primary pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-secondary rounded flex items-center justify-center shadow">
                <span className="text-primary font-black">M</span>
              </div>
              <span className="text-white font-bold text-lg leading-tight">
                {lang === 'ar' ? 'مكاني للمقاولات' : 'Makani Contracting'}
              </span>
            </div>
            <p className="text-white/55 text-sm leading-relaxed max-w-xs">{t.footer.tagline}</p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">{t.footer.links}</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {links.map(l => (
                <li key={l.href}>
                  <a href={l.href} className="text-white/55 text-sm hover:text-secondary transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact summary */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">{t.contact.title}</h4>
            <ul className="space-y-2.5 text-white/55 text-sm">
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:+201000000000" className="hover:text-secondary transition-colors">+20 100 000 0000</a>
              </li>
              <li className="flex items-center gap-2">
                <span>📧</span>
                <a href="mailto:info@makani-contracting.com" className="hover:text-secondary transition-colors break-all">
                  info@makani-contracting.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>📍</span>
                <span>{t.contact.location_val}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider + copyright */}
        <div className="border-t border-white/10 pt-6 text-center text-white/35 text-xs sm:text-sm">
          {t.footer.rights}
        </div>
      </div>
    </footer>
  )
}
