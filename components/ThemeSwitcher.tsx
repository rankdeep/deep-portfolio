'use client'
import { useState } from 'react'
import { useTheme, type ThemeName, type ThemeMode } from '@/hooks/useTheme'

const THEMES: { id: ThemeName; label: string }[] = [
  { id: 'ocean',   label: 'Midnight Ocean'    },
  { id: 'aurora',  label: 'Aurora Dusk'       },
  { id: 'emerald', label: 'Obsidian Emerald'  },
  { id: 'eclipse', label: 'Solar Eclipse'     },
  { id: 'crimson', label: 'Neon Crimson'      },
  { id: 'ice',     label: 'Ice Matrix'        },
  { id: 'gold',    label: 'Quantum Gold'      },
]

export function ThemeSwitcher() {
  const { theme, mode, setTheme, setMode } = useTheme()
  const [open, setOpen] = useState(false)
  const cur = THEMES.find(t => t.id === theme)

  return (
    <div className="pp-wrap">
      {open && (
        <div className="pp-panel open" id="ppPanel">
          <div className="pp-header">
            <span className="pp-header-title">Theme</span>
            <button className="pp-close" onClick={() => setOpen(false)}>✕</button>
          </div>
          <div className="pp-section">
            <div className="pp-section-label">Mode</div>
            <div className="pp-mode-row">
              {(['dark','light'] as ThemeMode[]).map(m => (
                <button
                  key={m}
                  className={`pp-mode-btn${mode === m ? ' on' : ''}`}
                  onClick={(e) => { e.stopPropagation(); setMode(m) }}
                >
                  {m === 'dark' ? '🌙\u00a0 Dark' : '☀️\u00a0 Light'}
                </button>
              ))}
            </div>
            <div className="pp-section-label">Palette</div>
          </div>
          <div className="pp-themes">
            {THEMES.map(t => (
              <button
                key={t.id}
                className={`pp-theme-row${theme === t.id ? ' on' : ''}`}
                onClick={(e) => { e.stopPropagation(); setTheme(t.id) }}
              >
                <span className={`pp-swatch sw-${t.id}`} />
                <span className="pp-theme-name">{t.label}</span>
                <span className="pp-check">✓</span>
              </button>
            ))}
          </div>
        </div>
      )}

      <button
        className="pp-trigger"
        id="ppTrigger"
        onClick={(e) => { e.stopPropagation(); setOpen(o => !o) }}
      >
        <span className={`pp-trigger-dot sw-${theme}`} />
        <span id="pp-cur-name">{cur?.label}</span>
      </button>
    </div>
  )
}
