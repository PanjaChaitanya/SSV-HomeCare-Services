import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-blue-50 text-center text-sm text-gray-700 py-6 mt-16">
      <div className="space-y-2">
        <p>© 2025 Sri Siddi Vinayaka Home Care Services. All rights reserved.</p>
        <div className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <p className="text-xs text-gray-500">Designed with ❤️ by Chaitanya</p>
      </div>
    </footer>
  )
}
