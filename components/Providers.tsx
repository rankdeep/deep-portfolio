'use client'
import { ThemeContext, useThemeState } from '@/hooks/useTheme'

export function Providers({ children }: { children: React.ReactNode }) {
  const ctx = useThemeState()
  return <ThemeContext.Provider value={ctx}>{children}</ThemeContext.Provider>
}
