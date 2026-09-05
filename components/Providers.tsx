'use client'
import { ThemeContext, useThemeState } from '@/hooks/useTheme'
import { SmoothScroll } from '@/components/SmoothScroll'

export function Providers({ children }: { children: React.ReactNode }) {
  const ctx = useThemeState()
  return (
    <ThemeContext.Provider value={ctx}>
      <SmoothScroll />
      {children}
    </ThemeContext.Provider>
  )
}
