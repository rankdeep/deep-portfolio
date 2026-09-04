'use client'
import { useEffect, useRef, useState } from 'react'

const NAV = [
  { href: '#hero',     label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#work',     label: 'Work' },
  { href: '#about',    label: 'About' },
  { href: '#process',  label: 'Process' },
  { href: '#contact',  label: 'Contact' },
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
          <a href="#hero" className="site-logo">DR<span>.</span></a>

          <div className="nav-area">
            <div className="nav-glass-pill" />
            <ul className="nav-menu" id="nav-menu" ref={menuRef}>
              {NAV.map(n => (
                <li key={n.href} className={active === n.href ? 'active' : ''}>
                  <a href={n.href} onClick={() => setOpen(false)}>{n.label}</a>
                </li>
              ))}
            </ul>
          </div>

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

      {/* Mobile nav overlay */}
      {open && (
        <ul
          className="nav-menu open"
          style={{ display: 'flex' }}
          onClick={() => setOpen(false)}
        >
          {NAV.map(n => (
            <li key={n.href} style={{ width: '100%' }}>
              <a href={n.href}>{n.label}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
