const NAV  = ['Home','Services','Work','About','Process']
const SVCS = ['Custom Theme Development','WooCommerce Customisation','ACF Content Architecture','Custom Plugin Development','Performance Optimisation']

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="pp-container">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="site-logo">DR<span>.</span></div>
            <p>Software Engineer with 4+ years of experience building scalable production WordPress platforms with end-to-end ownership from requirements to deployment.</p>
            <div className="footer-socials">
              <a href="mailto:rankdeep@gmail.com">Email</a>
              <a href="https://linkedin.com/in/rankdeep18" target="_blank" rel="noopener">LinkedIn</a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Navigation</h4>
            <ul>
              {NAV.map(n => (
                <li key={n}><a href={`#${n.toLowerCase()}`}>{n}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              {SVCS.map(s => (
                <li key={s}><a href="#services">{s}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          Built by ©{' '}
          <a href="https://linkedin.com/in/rankdeep18" target="_blank" rel="noopener" style={{ marginLeft:4, color:'var(--A-t)' }}>
            Deep Rank
          </a>
        </div>
      </div>
    </footer>
  )
}
