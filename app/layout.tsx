import type { Metadata } from 'next'
import { Orbitron, Exo_2, Rajdhani } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/Providers'

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  variable: '--font-orbitron',
  display: 'swap',
})
const exo2 = Exo_2({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-exo2',
  display: 'swap',
})
const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-rajdhani',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Deep Rank - Software Engineer | Building Scalable & Reliable Solutions',
  description: 'Software Engineer with 4+ years of experience building and maintaining scalable WordPress & Webflow based web platforms with end-to-end ownership',
  openGraph: {
    title: 'Deep Rank - Software Engineer',
    description: '4+ years of experience building scalable web platforms',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="ocean dark" suppressHydrationWarning>
      <head>
        {/* Share Tech Mono not in next/font — load via link */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap"
          rel="stylesheet"
        />
        {/* Anti-FOUC: apply saved theme before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('pp12-theme')||'ocean';var m=localStorage.getItem('pp12-mode')||'dark';var h=document.documentElement;['ocean','aurora','emerald','eclipse','crimson','ice','gold'].forEach(function(x){h.classList.remove(x)});h.classList.remove('dark','light');h.classList.add(t,m);}catch(e){}})();`,
          }}
        />
      </head>
      <body className={`${orbitron.variable} ${exo2.variable} ${rajdhani.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
