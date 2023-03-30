import '../styles/global.css'
import "prismjs/themes/prism-tomorrow.css";
import { main_font } from '@/lib/fonts'
import Navbar from "@/components/Navbar"
import Footer from '@/components/Footer'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export const metadata = {
  title: 'Watchtower vision',
  description: 'Watchtower vision landing',
  icons: {
    icon: '/favicon.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={main_font.className}>
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
