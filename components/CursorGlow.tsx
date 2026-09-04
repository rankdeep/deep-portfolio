'use client'
import { useEffect, useRef } from 'react'

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof window.matchMedia === 'function' && !matchMedia('(pointer:fine)').matches) {
      el.style.display = 'none'
      return
    }
    let mx = -400, my = -400, gx = -400, gy = -400
    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY }
    const tick = () => {
      gx += (mx - gx) * .08; gy += (my - gy) * .08
      el.style.left = gx + 'px'; el.style.top = gy + 'px'
      requestAnimationFrame(tick)
    }
    document.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseleave', () => { el.style.opacity = '0' })
    document.addEventListener('mouseenter', () => { el.style.opacity = '1' })
    tick()
    return () => document.removeEventListener('mousemove', onMove)
  }, [])

  return <div id="cursor-glow" className="cursor-glow" ref={ref} />
}
