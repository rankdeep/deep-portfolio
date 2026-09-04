import { experience } from '@/data'

const delays = ['','reveal-delay-1','reveal-delay-2','reveal-delay-3']

export function Experience() {
  return (
    <section className="section section--alt">
      <div className="pp-container" style={{ maxWidth:1080 }}>
        <div className="section-label">Experience</div>
        <h2 className="section-title" style={{ marginBottom:48 }}>
          Work <span className="hero__title-gradient">History</span>
        </h2>
        <div className="experience-timeline">
          {experience.map((e, i) => (
            <article className={`experience-item reveal ${delays[i]}`} key={e.company}>
              <div className="exp-date">{e.date}</div>
              <div>
                <div className="exp-company">{e.company}</div>
                <h3 className="exp-title">{e.title}</h3>
                {e.current && <div className="exp-current">Current Role</div>}
                <div className="exp-skills" aria-label="Skills">
                  {e.skills.map(s => <span className="exp-skill" key={s}>{s}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
