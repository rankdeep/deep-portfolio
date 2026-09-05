'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

export function SmoothScroll() {
  useEffect(() => {
    const supportsPrecisionPointer = window.matchMedia(
      '(hover: hover) and (pointer: fine)'
    ).matches
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    // Keep native touch scrolling on phones, especially iOS Safari.
    if (!supportsPrecisionPointer || prefersReducedMotion) return

    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.09,
      smoothWheel: true,
      anchors: { offset: -90, duration: 1.1 },
    })

    return () => lenis.destroy()
  }, [])

  return null
}
