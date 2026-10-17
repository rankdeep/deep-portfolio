'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const NAV = [
  { href: '#hero',     label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#work',     label: 'Work' },
  { href: '#about',    label: 'About' },
  { href: '#process',  label: 'Process' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const [active, setActive]     = useState('#hero')
  const menuRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = document.querySelectorAll<HTMLElement>('section[id]')
      sections.forEach(sec => {
        const top = sec.offsetTop - 110
        if (window.scrollY >= top && window.scrollY < top + sec.offsetHeight)
          setActive('#' + sec.id)
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (open && menuRef.current && !menuRef.current.contains(e.target as Node))
        setOpen(false)
    }
    const esc = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('click', close)
    document.addEventListener('keydown', esc)
    return () => { document.removeEventListener('click', close); document.removeEventListener('keydown', esc) }
  }, [open])

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`} id="site-header">
      <div className="pp-container">
        <div className="header-inner">
          <div className="header-left">
            <a href="#hero" className="site-logo">
              <span className="site-logo__avatar">
                <Image
                  src="/about-character.webp"
                  alt="Deep Rank"
                  width={34}
                  height={34}
                  className="site-logo__img"
                />
              </span>
              <span className="site-logo__text">Deep Rank</span>
            </a>
          </div>

          <nav className="nav-area" aria-label="Main Navigation">
            <div className="nav-glass-pill" />
            <ul className="nav-menu" id="nav-menu" ref={menuRef}>
              {NAV.map(n => (
                <li key={n.href} className={active === n.href ? 'active' : ''}>
                  <a href={n.href} onClick={() => setOpen(false)}>{n.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-right">
            <a href="#contact" className="btn--nav-contact">
              <span>Contact</span>
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            <button
              className="nav-toggle"
              id="nav-toggle"
              aria-expanded={open}
              aria-label="Toggle navigation"
              onClick={() => setOpen(o => !o)}
            >
              <span style={open ? { transform: 'translateY(7px) rotate(45deg)' } : {}} />
              <span style={open ? { opacity: 0 } : {}} />
              <span style={open ? { transform: 'translateY(-7px) rotate(-45deg)' } : {}} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav overlay */}
      {open && (
        <ul
          className="nav-menu open"
          style={{ display: 'flex' }}
          onClick={() => setOpen(false)}
        >
          {NAV.concat([{ href: '#contact', label: 'Contact' }]).map(n => (
            <li key={n.href} style={{ width: '100%' }}>
              <a href={n.href}>{n.label}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
