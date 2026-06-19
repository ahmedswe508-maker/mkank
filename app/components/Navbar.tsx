'use client'
import { useState, useEffect } from 'react'
import { useLang } from '../context/LangContext'

export default function Navbar() {
  const { t, lang, toggleLang } = useLang()
  const [dark, setDark] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleDark = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
  }

  const links = [
    { id: 'home',     label: t.nav.home },
    { id: 'about',    label: t.nav.about },
    { id: 'services', label: t.nav.services },
    { id: 'projects', label: t.nav.projects },
    { id: 'kpi',      label: t.nav.kpi },
    { id: 'contact',  label: t.nav.contact },
  ]

  const atTop = !scrolled
  const navBg  = scrolled ? 'bg-card/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
  const textCls = scrolled ? 'text-faint hover:text-primary' : 'text-white/80 hover:text-white'
  const logoCls  = scrolled ? 'text-body' : 'text-white'

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 shrink-0">
            <img
              src="/logo/makani-icon.jpeg"
              alt="Makani logo"
              className="w-9 h-9 rounded-md object-cover shadow ring-1 ring-white/15"
            />
            <span className={`font-bold text-sm sm:text-base transition-colors ${logoCls}`}>
              {lang === 'ar' ? 'مكاني للمقاولات' : 'Makani Contracting'}
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-5">
            {links.map(l => (
              <a key={l.id} href={`#${l.id}`} className={`text-sm font-medium transition-colors ${textCls}`}>
                {l.label}
              </a>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            {/* Language toggle */}
            <button
              onClick={toggleLang}
              className={`px-3 py-1 text-xs font-bold rounded-full border transition-colors ${
                atTop
                  ? 'border-white/40 text-white/80 hover:border-white hover:text-white'
                  : 'border-edge text-faint hover:border-primary hover:text-primary'
              }`}
            >
              {lang === 'en' ? 'ع' : 'EN'}
            </button>

            {/* Dark mode toggle */}
            <button
              onClick={toggleDark}
              aria-label="Toggle dark mode"
              className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors ${
                atTop ? 'text-white/80 hover:text-white' : 'text-faint hover:text-primary'
              }`}
            >
              {dark ? (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(o => !o)}
              className={`md:hidden w-8 h-8 flex items-center justify-center rounded transition-colors ${
                atTop ? 'text-white' : 'text-faint'
              }`}
              aria-label="Menu"
            >
              {menuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-card border-t border-edge py-3 space-y-1">
            {links.map(l => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-2.5 text-sm font-medium text-faint hover:text-primary hover:bg-canvas rounded-lg mx-2 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
