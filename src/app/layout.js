import './globals.css'
import { Quintessential, Montserrat,Nunito } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { DefaultSeo } from 'next-seo'
import SEO from '@/seo.config'

export const metadata = {
  title: 'Sri Siddhi Vinayaka Home Care Services',
  description:
    'Trusted in-home care for elders, children, and bedridden patients. Serving your family with love and dignity.',
  keywords: [
    'home care services',
    'best home care services near me',
    'best home care services in bhimavaram',
    'elder care',
    'child care',
    'bedridden patient care',
    'housekeeping',
    'Andhra home care',
    'Hyderabad home nurse',
  ],
  robots: 'index, follow',
  openGraph: {
    title: 'Sri Siddhi Vinayaka Home Care Services',
    description:
      'Professional and compassionate in-home care tailored to your family needs.',
    url: 'https://ssvhomecareservices.vercel.app',
    siteName: 'Sri Siddhi Vinayaka Home Care Services',
    locale: 'en_IN',
    type: 'website',
  },
}

// Font Logo design
const quintessential = Quintessential({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-quintessential',
  display: 'swap',
  preload: true,
})
// Font for headings
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-montserrat', // for specific styles
  preload: true,
})

// Font For body & Buttons
const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-nunito',
  display: 'swap',
  preload: true,
})

export default function RootLayout({ children }) {
  return (
    <html lang="en"
    className={`${nunito.variable} ${montserrat.variable} ${quintessential.variable}`}
    >
      <body className={nunito.className}>
        <Navbar />
        <main className="mt-10">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
