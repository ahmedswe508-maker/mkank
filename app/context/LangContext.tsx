'use client'
import { createContext, useContext, useState, ReactNode } from 'react'
import { translations, Lang, Translations } from '../lib/translations'

interface LangCtx {
  lang: Lang
  t: Translations
  isRTL: boolean
  toggleLang: () => void
}

const LangContext = createContext<LangCtx>({
  lang: 'en',
  t: translations.en,
  isRTL: false,
  toggleLang: () => {},
})

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')

  const toggleLang = () => {
    const next: Lang = lang === 'en' ? 'ar' : 'en'
    setLang(next)
    document.documentElement.lang = next
    document.documentElement.dir = next === 'ar' ? 'rtl' : 'ltr'
  }

  return (
    <LangContext.Provider value={{ lang, t: translations[lang], isRTL: lang === 'ar', toggleLang }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
