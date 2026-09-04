import { Header }       from '@/components/Header'
import { Hero }         from '@/components/Hero'
import { Services }     from '@/components/Services'
import { Work }         from '@/components/Work'
import { About }        from '@/components/About'
import { Skills }       from '@/components/Skills'
import { Experience }   from '@/components/Experience'
import { Process }      from '@/components/Process'
import { Contact }      from '@/components/Contact'
import { Footer }       from '@/components/Footer'
import { BgCanvas }     from '@/components/BgCanvas'
import { CursorGlow }   from '@/components/CursorGlow'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { ScrollReveal } from '@/components/ScrollReveal'

export default function Home() {
  return (
    <>
      <CursorGlow />
      <BgCanvas />
      <div className="grid3d">
        <div className="grid3d__floor" />
        <div className="grid3d__vignette" />
      </div>
      <Header />
      <main>
        <Hero />
        <Services />
        <Work />
        <About />
        <Skills />
        <Experience />
        <Process />
        <Contact />
      </main>
      <Footer />
      <ThemeSwitcher />
      <ScrollReveal />
    </>
  )
}
