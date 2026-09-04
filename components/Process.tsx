'use client'
import { useEffect, useRef } from 'react'
import { processSteps } from '@/data'

export function Process() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const svgRef  = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const wrap = wrapRef.current
    const svg  = svgRef.current
    if (!wrap || !svg) return

    let trackEl: SVGPathElement | null = null
    let fillEl:  SVGPathElement | null = null

    function buildPath() {
      const nodes = wrap!.querySelectorAll<HTMLElement>('.snek-node')
      if (!nodes.length) return null
      const wr = wrap!.getBoundingClientRect()
      if (wr.width < 681) return null
      const pts: {x:number;y:number}[] = []
      nodes.forEach(n => {
        const r = n.getBoundingClientRect()
        pts.push({ x: r.left - wr.left + r.width / 2, y: r.top - wr.top + r.height / 2 })
      })
      let d = `M${pts[0].x},${pts[0].y}`
      for (let i = 1; i < pts.length; i++) {
        const p0 = pts[i-1], p1 = pts[i], cx = (p0.x + p1.x) / 2
        d += ` C${cx},${p0.y} ${cx},${p1.y} ${p1.x},${p1.y}`
      }
      svg!.setAttribute('viewBox', `0 0 ${Math.round(wr.width)} ${Math.round(wr.height)}`)
      const ns = 'http://www.w3.org/2000/svg'
      if (!trackEl) { trackEl = document.createElementNS(ns,'path'); trackEl.setAttribute('class','snek-path-track'); svg!.appendChild(trackEl) }
      if (!fillEl)  { fillEl  = document.createElementNS(ns,'path'); fillEl.setAttribute('class','snek-path-fill');  svg!.appendChild(fillEl) }
      trackEl.setAttribute('d', d)
      fillEl.setAttribute('d', d)
      const len = fillEl.getTotalLength ? Math.ceil(fillEl.getTotalLength()) : 1200
      fillEl.style.strokeDasharray  = String(len)
      fillEl.style.strokeDashoffset = String(len)
      fillEl.style.transition = 'none'
      return { fill: fillEl, len }
    }

    function animate() {
      const result = buildPath()
      if (!result) return
      wrap!.querySelectorAll<HTMLElement>('.snek-node').forEach((n, i) => {
        n.style.opacity = '0'; n.style.transform = 'scale(.7)'
        setTimeout(() => {
          n.style.transition = 'opacity .4s ease, transform .4s cubic-bezier(.34,1.56,.64,1)'
          n.style.opacity = '1'; n.style.transform = ''
        }, 180 + i * 340)
      })
      requestAnimationFrame(() => {
        result.fill.style.transition = 'stroke-dashoffset 2s cubic-bezier(.4,0,.2,1)'
        result.fill.style.strokeDashoffset = '0'
      })
    }

    let triggered = false
    const io = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !triggered) { triggered = true; animate(); io.disconnect() }
    }, { threshold: 0.15 })
    io.observe(wrap)

    let rt: ReturnType<typeof setTimeout>
    const onResize = () => { clearTimeout(rt); rt = setTimeout(() => { triggered = false; buildPath() }, 200) }
    window.addEventListener('resize', onResize)
    return () => { io.disconnect(); window.removeEventListener('resize', onResize) }
  }, [])

  return (
    <section className="section" id="process">
      <div className="pp-container">
        <div className="text-center" style={{ marginBottom:72 }}>
          <div className="section-label">How I Work</div>
          <h2 className="section-title">Brief to <span className="hero__title-gradient">Production</span></h2>
          <p className="section-subtitle" style={{ margin:'0 auto' }}>
            Five deliberate steps. No surprises, no shortcuts — just clean delivery from first call to live site.
          </p>
        </div>

        <div className="snek-wrap" ref={wrapRef} id="snekWrap">
          <svg className="snek-svg" ref={svgRef} id="snekSvg" aria-hidden="true">
            <defs>
              <linearGradient id="snekGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="#80b8ff" />
                <stop offset="50%"  stopColor="#a898ff" />
                <stop offset="100%" stopColor="#60ddb0" />
              </linearGradient>
            </defs>
          </svg>

          <div className="snek-track">
            {processSteps.map((step) => (
              <div key={step.num} className={`snek-col snek-col--${step.position}`}>
                <div className={`snek-node${step.final ? ' snek-node--final' : ''}`} data-n={step.num}>
                  <span className="snek-node__num">{step.num}</span>
                  <span className="snek-node__icon">{step.icon}</span>
                  <div className="snek-node__ring" />
                </div>
                <div className={`snek-card glass glass-prism glass-glow${step.final ? ' snek-card--final' : ''}`}>
                  <h3 className="snek-card__title">{step.title}</h3>
                  <p className="snek-card__tagline">{step.tagline}</p>
                  <ul className="snek-card__outcomes">
                    {step.outcomes.map(o => <li key={o}>{o}</li>)}
                  </ul>
                  <div className="snek-card__tags">
                    {step.tags.map(t => <span className="tag" key={t}>{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="process-footer reveal">
          <div className="process-footer__inner glass">
            {[
              { icon:'⚡', text:'AI-accelerated delivery — faster without cutting corners' },
              { icon:'📋', text:'Written handover docs on every project' },
              { icon:'🔁', text:'Rollback-safe production releases' },
            ].map((item, i) => (
              <div key={item.icon} style={{ display:'contents' }}>
                {i > 0 && <div className="process-footer__divider" />}
                <div className="process-footer__item">
                  <span className="process-footer__icon">{item.icon}</span>
                  <span className="process-footer__text">{item.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
