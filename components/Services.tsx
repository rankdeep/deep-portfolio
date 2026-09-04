import { services } from '@/data'

const delays = ['reveal-delay-1','reveal-delay-2','reveal-delay-3','reveal-delay-1','reveal-delay-2','reveal-delay-3']

export function Services() {
  return (
    <section className="section section--alt" id="services">
      <div className="pp-container">
        <div className="text-center" style={{ marginBottom:60 }}>
          <div className="section-label">What I Do</div>
          <h2 className="section-title">
            End-to-End <span className="hero__title-gradient">WordPress</span><br />Development
          </h2>
          <p className="section-subtitle" style={{ margin:'0 auto' }}>
            From pixel-perfect Figma builds to complex custom plugins and WooCommerce stores.
          </p>
        </div>
        <div className="grid-3">
          {services.map((s, i) => (
            <div className={`service-card reveal ${delays[i]}`} key={s.title}>
              <span className="service-card__icon">{s.icon}</span>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
