import { skills } from '@/data'

const delays = ['','reveal-delay-1','reveal-delay-2','reveal-delay-3','reveal-delay-1','reveal-delay-2']

export function Skills() {
  return (
    <section className="section">
      <div className="pp-container">
        <div className="section-label">Technical Stack</div>
        <h2 className="section-title" style={{ marginBottom:40 }}>
          <span className="hero__title-gradient">Tools</span> I Use
        </h2>
        <div className="stack-grid">
          {skills.map((s, i) => (
            <article className={`stack-card reveal ${delays[i]}`} key={s.title}>
              <h3 className="stack-card__title">{s.title}</h3>
              <p className="stack-card__desc">{s.desc}</p>
              <p className="stack-card__tools">{s.tools}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
