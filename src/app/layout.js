import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { DefaultSeo } from 'next-seo'
import SEO from '@/seo.config'


export const metadata = {
  title: 'Sri Siddi Vinayaka Home Care Services',
  description: 'Trusted in-home care for elders, children, and bedridden patients. Serving your family with love and dignity.',
  keywords: ['home care services', 'elder care', 'child care', 'bedridden patient care', 'housekeeping', 'Andhra home care', 'Hyderabad home nurse'],
  robots: 'index, follow',
  openGraph: {
    title: 'Sri Siddi Vinayaka Home Care Services',
    description: 'Professional and compassionate in-home care tailored to your family’s needs.',
    url: 'https://yourdomain.com',
    siteName: 'Sri Siddi Vinayaka Home Care Services',
    locale: 'en_IN',
    type: 'website'
  }
}

export default function RootLayout({ children }) {
  return (
     <html lang="en">
      <body>
        <Navbar />
        <main className="mt-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
