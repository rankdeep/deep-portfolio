export function Contact() {
  return (
    <section className="cta-section section--alt" id="contact">
      <div className="pp-container">
        <div className="cta-glass-box glass-prism">
          <div className="section-label" style={{ justifyContent:'center', marginBottom:20 }}>
            Let&apos;s Work Together
          </div>
          <h2 className="section-title" style={{ marginBottom:14 }}>
            Got a <span className="hero__title-gradient">Project</span> in Mind?
          </h2>
          <p className="section-subtitle" style={{ margin:'0 auto 36px' }}>
            Whether you need a custom theme, plugin, or full-stack web platform — let&apos;s build it together.
          </p>
          <div style={{ display:'flex', justifyContent:'center', gap:14, flexWrap:'wrap', position:'relative', zIndex:1 }}>
            <a href="mailto:rankdeep@gmail.com" className="btn btn--primary">Start a Conversation</a>
            <a href="https://linkedin.com/in/rankdeep18" target="_blank" rel="noopener" className="btn btn--glass">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  )
}
