import Image from 'next/image'

export function About() {
  return (
    <section className="section section--alt" id="about">
      <div className="pp-container">
        <div className="about-grid">
          <div className="reveal" style={{ position:'relative', paddingBottom:40 }}>
            <div className="about-photo">
              <Image
                src="/3d-character.webp"
                alt="Deep Rank working as a software engineer"
                width={400}
                height={530}
                className="about-photo__image"
              />
            </div>
            <div className="about-accent-card">
              <div className="about-accent-card__num">4+</div>
              <div className="about-accent-card__label">Years of<br />Experience</div>
            </div>
          </div>

          <div className="about-text reveal reveal-delay-1">
            <div className="section-label">Deep Rank</div>
            <h2 className="section-title"><span className="hero__title-gradient">About</span> Me</h2>
            <p>I&apos;m a Software Engineer with 4+ years of experience designing, delivering, and maintaining scalable production web platforms — with true end-to-end ownership from requirements to deployment.</p>
            <p>My expertise involves WordPress custom theme and plugin development, ACF-based content architectures, WooCommerce customizations, SEO collaboration, and production performance tuning.</p>
            <p>I actively integrate AI-assisted workflows into my development process to accelerate debugging, solution design, and routine engineering tasks — keeping delivery fast without cutting corners on quality.</p>
            <p>I hold a Bachelor of Engineering in Information Technology from A.D. Patel Institute of Technology, Karamsad, graduating with an 8.03 CGPA.</p>
            <div style={{ display:'flex', gap:16, marginTop:32, flexWrap:'wrap' }}>
              <a href="mailto:rankdeep@gmail.com" className="btn btn--primary">Hire Me</a>
              <a href="https://linkedin.com/in/rankdeep18" className="btn btn--glass" target="_blank" rel="noopener">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
