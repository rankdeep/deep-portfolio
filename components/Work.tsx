'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { projects, type ProjectType } from '@/data'

export function Work() {
  const [tab, setTab] = useState<ProjectType>('wordpress')
  const filtered = projects.filter(p => p.type === tab)

  return (
    <section className="section" id="work">
      <div className="pp-container">
        <div className="work-heading">
          <div className="section-label">Portfolio</div>
          <h2 className="section-title">Selected <span className="hero__title-gradient">Work</span></h2>
          <div className="work-tabs" role="tablist" aria-label="Project type">
            {(['wordpress','webflow'] as ProjectType[]).map(t => (
              <button
                key={t}
                className="work-tab"
                role="tab"
                aria-selected={tab === t}
                tabIndex={tab === t ? 0 : -1}
                onClick={() => setTab(t)}
              >
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>
        </div>
        <Slider key={tab} slides={filtered} />
      </div>
    </section>
  )
}

// ─── 3D Slider ────────────────────────────────────────────────────────────────
function Slider({ slides }: { slides: typeof projects }) {
  const sceneRef  = useRef<HTMLDivElement>(null)
  const currentRef = useRef(0)
  const busyRef    = useRef(false)
  const autoRef    = useRef<ReturnType<typeof setInterval> | null>(null)
  const dotsRef    = useRef<HTMLDivElement>(null)
  const slidesRef  = useRef<HTMLElement[]>([])
  const total      = slides.length

  function getCFG() {
    const w = window.innerWidth
    if (w <= 600) return { xGap:0,   zDepth:160, rotY:0,  scaleC:1, scaleS:.78, scaleF:.56, opacS:0,   opacF:0   }
    if (w <= 900) return { xGap:180, zDepth:180, rotY:12, scaleC:1, scaleS:.80, scaleF:.62, opacS:.70, opacF:.35 }
    return              { xGap:260, zDepth:220, rotY:18, scaleC:1, scaleS:.82, scaleF:.64, opacS:.78, opacF:.40 }
  }

  function render(animate: boolean) {
    const CFG = getCFG()
    const cur = currentRef.current
    slidesRef.current.forEach((slide, i) => {
      let offset = i - cur
      if (offset >  total / 2) offset -= total
      if (offset < -total / 2) offset += total
      const abs  = Math.abs(offset)
      const sign = offset < 0 ? -1 : offset > 0 ? 1 : 0
      const tx   = sign * Math.min(abs, 2) * CFG.xGap
      const tz   = -abs * CFG.zDepth
      const ry   = -sign * Math.min(abs, 1) * CFG.rotY
      const sc   = abs === 0 ? CFG.scaleC : abs === 1 ? CFG.scaleS : CFG.scaleF
      const op   = abs === 0 ? 1 : abs === 1 ? CFG.opacS : abs === 2 ? CFG.opacF : 0
      const zi   = Math.max(0, total - abs * 2)
      if (animate) slide.classList.add('cs-animated')
      slide.style.transform     = `translateX(${tx}px) translateZ(${tz}px) rotateY(${ry}deg) scale(${sc})`
      slide.style.opacity       = String(op)
      slide.style.zIndex        = String(zi)
      slide.style.pointerEvents = abs === 0 ? 'auto' : 'none'
      slide.setAttribute('data-active', abs === 0 ? 'true' : 'false')
    })
    dotsRef.current?.querySelectorAll<HTMLButtonElement>('.cs-dot').forEach((d, i) =>
      d.classList.toggle('active', i === cur)
    )
  }

  function goTo(idx: number) {
    if (busyRef.current) return
    busyRef.current = true
    currentRef.current = ((idx % total) + total) % total
    render(true)
    setTimeout(() => { busyRef.current = false }, 720)
  }

  function startAuto() {
    stopAuto()
    autoRef.current = setInterval(() => {
      currentRef.current = (currentRef.current + 1) % total
      render(true)
    }, 4000)
  }
  function stopAuto() {
    if (autoRef.current) clearInterval(autoRef.current)
  }

  useEffect(() => {
    const scene = sceneRef.current
    if (!scene) return
    slidesRef.current = Array.from(scene.querySelectorAll<HTMLElement>('.cs-slide'))
    currentRef.current = 0
    requestAnimationFrame(() => render(false))

    // Avoid continuously compositing every slide on touch devices. This keeps
    // Safari's memory use low while preserving swipe and button navigation.
    const canAutoPlay = !window.matchMedia(
      '(max-width: 767px), (prefers-reduced-motion: reduce)'
    ).matches
    if (canAutoPlay) startAuto()

    const onResize = () => render(false)
    window.addEventListener('resize', onResize)

    // Swipe
    let tx0 = 0
    const onTouchStart = (e: TouchEvent) => { tx0 = e.touches[0].clientX }
    const onTouchEnd = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - tx0
      if (Math.abs(dx) > 48) goTo(currentRef.current + (dx < 0 ? 1 : -1))
    }
    scene.addEventListener('touchstart', onTouchStart, { passive:true })
    scene.addEventListener('touchend', onTouchEnd, { passive:true })

    // Keyboard
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft')  goTo(currentRef.current - 1)
      if (e.key === 'ArrowRight') goTo(currentRef.current + 1)
    }
    document.addEventListener('keydown', onKey)

    if (canAutoPlay) {
      scene.addEventListener('mouseenter', stopAuto)
      scene.addEventListener('mouseleave', startAuto)
    }

    return () => {
      stopAuto()
      window.removeEventListener('resize', onResize)
      document.removeEventListener('keydown', onKey)
      scene.removeEventListener('touchstart', onTouchStart)
      scene.removeEventListener('touchend', onTouchEnd)
      if (canAutoPlay) {
        scene.removeEventListener('mouseenter', stopAuto)
        scene.removeEventListener('mouseleave', startAuto)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total])

  return (
    <div className="cs-slider-scene" id="csSliderScene" ref={sceneRef}>
      <div className="cs-slider-track" id="csSliderTrack">
        {slides.map((p, i) => (
          <article
            key={p.title}
            className="case-study-card cs-slide"
            data-index={i}
            onClick={() => { if (i !== currentRef.current) goTo(i) }}
          >
            <Image
              src={p.img}
              alt={p.alt}
              width={380}
              height={200}
              className="case-study-card__img"
              style={{ objectFit:'cover', objectPosition:'top' }}
            />
            <div className="case-study-card__body">
              <div className="case-study-card__category">{p.category}</div>
              <h3 className="case-study-card__title">{p.title}</h3>
              <p className="case-study-card__excerpt">{p.excerpt}</p>
              <div className="case-study-card__tags">
                {p.tags.map(t => <span className="tag" key={t}>{t}</span>)}
              </div>
              <a href={p.url} className="btn btn--ghost" target="_blank" rel="noopener">View Website</a>
            </div>
          </article>
        ))}
      </div>
      <button className="cs-btn cs-btn--prev" aria-label="Previous project" onClick={() => goTo(currentRef.current - 1)}>←</button>
      <button className="cs-btn cs-btn--next" aria-label="Next project"     onClick={() => goTo(currentRef.current + 1)}>→</button>
      <div className="cs-dots" ref={dotsRef}>
        {slides.map((_, i) => (
          <button
            key={i}
            className={`cs-dot${i === 0 ? ' active' : ''}`}
            aria-label={`Go to project ${i + 1}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  )
}
