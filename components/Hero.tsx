'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { stackTags } from '@/data'

function RollCounter({ value, plus }: { value: number; plus?: boolean }) {
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setStarted(true)
    }, 350)
    return () => clearTimeout(timer)
  }, [])

  const digits = String(value).split('')
  const reelItems = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <div className="stat__num roll-counter" aria-label={`${value}${plus ? '+' : ''}`}>
      <span className="roll-counter__digits">
        {digits.map((digit, i) => {
          const target = Number(digit)
          const targetIndex = 10 + target
          const offsetPercent = (targetIndex / reelItems.length) * 100

          return (
            <span key={i} className="roll-counter__col">
              <span
                className="roll-counter__track"
                style={{
                  transform: started ? `translateY(-${offsetPercent}%)` : 'translateY(0%)',
                  transition: `transform ${1.3 + i * 0.25}s cubic-bezier(0.16, 1, 0.3, 1)`,
                }}
              >
                {reelItems.map((n, idx) => (
                  <span key={idx} className="roll-counter__digit">
                    {n}
                  </span>
                ))}
              </span>
            </span>
          )
        })}
      </span>
      {plus && <span className="stat__plus">+</span>}
    </div>
  )
}

export function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="pp-container">
        <div className="hero__content">
          {/* Left */}
          <div>
            <div className="hero__badge">
              <span className="hero__badge-dot" />
              Available for new projects
            </div>
            <h1 className="hero__title">
              Software<br />
              <span className="hero__title-gradient">Engineer</span>
            </h1>
            <p className="hero__desc">
              4+ years building scalable production WordPress platforms — custom themes, plugins,
              WooCommerce &amp; performance, with end-to-end ownership from requirements to deployment.
            </p>
            <div className="hero__actions">
              <a href="#work" className="btn btn--primary">View Portfolio</a>
              <a href="mailto:rankdeep@gmail.com" className="btn btn--glass">Get in Touch</a>
            </div>
            <div className="hero__stats">
              <div className="stat">
                <RollCounter value={4} plus={true} />
                <div className="stat__label">Years Experience</div>
              </div>
              <div className="stat">
                <RollCounter value={12} plus={true} />
                <div className="stat__label">Tech Skills</div>
              </div>
            </div>
          </div>

          {/* Right — glass card */}
          <div className="hero__visual">
            <div className="hero__glass-card glass-prism">
              <div style={{ display:'flex', alignItems:'center', gap:14, marginBottom:22 }}>
                <div className="hero__card-avatar">
                  <Image src="/about-character.webp" alt="Deep Rank, software engineer" width={54} height={54} />
                </div>
                <div>
                  <div className="hero__card-name">Deep Rank</div>
                  <div className="hero__card-sub">Software Engineer · Ahmedabad</div>
                </div>
              </div>
              <div className="hero__stack-label">// Tech Stack</div>
              <div className="hero__skill-tags">
                {stackTags.map(t => <span className="glass-tag" key={t}>{t}</span>)}
              </div>
              <div style={{ marginTop:24, paddingTop:18, borderTop:'1px solid var(--bd)' }}>
                <div className="hero__stack-label" style={{ marginBottom:8 }}>// AI-Assisted Development</div>
                <p style={{ fontSize:'0.84rem', color:'var(--p3)' }}>
                  Leveraging AI across debugging, solution design &amp; deployment to deliver faster and smarter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
