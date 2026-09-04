import Image from 'next/image'
import { stackTags } from '@/data'

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
              Software<br />Engineer<br />
              <span className="hero__title-gradient">Deep Rank</span>
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
              {[
                { num: '4', plus: true,  label: 'Years Exp.' },
                { num: '4', plus: false, label: 'Companies'  },
                { num: '10', plus: true,  label: 'Tech Skills' },
              ].map(s => (
                <div className="stat" key={s.label}>
                  <div className="stat__num">{s.num}{s.plus && <span>+</span>}</div>
                  <div className="stat__label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — glass card */}
          <div className="hero__visual">
            <div className="hero__glass-card glass-prism">
              <div style={{ display:'flex', alignItems:'center', gap:14, marginBottom:22 }}>
                <div className="hero__card-avatar">
                  <Image src="/3d-character.webp" alt="Deep Rank, software engineer" width={54} height={54} />
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
