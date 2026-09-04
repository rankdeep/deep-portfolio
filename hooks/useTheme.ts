'use client'
import { createContext, useContext, useEffect, useState, useCallback } from 'react'

export type ThemeName = 'ocean' | 'aurora' | 'emerald' | 'eclipse' | 'crimson' | 'ice' | 'gold'
export type ThemeMode = 'dark' | 'light'

interface ThemeCtx {
  theme: ThemeName
  mode: ThemeMode
  setTheme: (t: ThemeName) => void
  setMode: (m: ThemeMode) => void
}

export const ThemeContext = createContext<ThemeCtx>({
  theme: 'ocean', mode: 'dark',
  setTheme: () => {}, setMode: () => {},
})

export function useTheme() { return useContext(ThemeContext) }

const CK = 'pp12-theme'
const MK = 'pp12-mode'

function get<T extends string>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback
  return (localStorage.getItem(key) as T) || fallback
}

export function useThemeState() {
  const [theme, setThemeState] = useState<ThemeName>('ocean')
  const [mode,  setModeState]  = useState<ThemeMode>('dark')

  // Read localStorage once on mount
  useEffect(() => {
    setThemeState(get<ThemeName>(CK, 'ocean'))
    setModeState(get<ThemeMode>(MK, 'dark'))
  }, [])

  // Apply to <html> whenever theme or mode changes
  useEffect(() => {
    const h = document.documentElement
    const themes: ThemeName[] = ['ocean','aurora','emerald','eclipse','crimson','ice','gold']
    themes.forEach(t => h.classList.remove(t))
    h.classList.remove('dark', 'light')
    h.classList.add(theme, mode)
    localStorage.setItem(CK, theme)
    localStorage.setItem(MK, mode)
  }, [theme, mode])

  const setTheme = useCallback((t: ThemeName) => setThemeState(t), [])
  const setMode  = useCallback((m: ThemeMode) => setModeState(m),  [])

  return { theme, mode, setTheme, setMode }
}
