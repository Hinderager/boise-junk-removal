import { Metadata } from 'next'
import Link from 'next/link'
import { HelpCircle, DollarSign, Recycle, Lightbulb } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Junk Removal Resources | Top Shelf Junk Removal',
  description: 'Helpful resources about junk removal, pricing, recycling, and decluttering tips from Top Shelf Junk Removal.',
  alternates: { canonical: 'https://boisejunkremovalpros.com/resources' },
}

export default function ResourcesPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-dark-blue mb-6">Resources</h1>
        <p className="text-xl text-gray-600 mb-12">Helpful information about junk removal and decluttering.</p>

        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/resources/faq" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <HelpCircle className="w-10 h-10 text-dark-blue mb-4" />
            <h2 className="text-xl font-bold text-dark-blue mb-2">FAQ</h2>
            <p className="text-gray-600">Common questions about our services.</p>
          </Link>
          <Link href="/resources/pricing" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <DollarSign className="w-10 h-10 text-dark-blue mb-4" />
            <h2 className="text-xl font-bold text-dark-blue mb-2">Pricing Guide</h2>
            <p className="text-gray-600">How our pricing works.</p>
          </Link>
          <Link href="/resources/what-we-take" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <Recycle className="w-10 h-10 text-dark-blue mb-4" />
            <h2 className="text-xl font-bold text-dark-blue mb-2">What We Take</h2>
            <p className="text-gray-600">Items we can and cannot remove.</p>
          </Link>
          <Link href="/resources/decluttering-tips" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <Lightbulb className="w-10 h-10 text-dark-blue mb-4" />
            <h2 className="text-xl font-bold text-dark-blue mb-2">Decluttering Tips</h2>
            <p className="text-gray-600">How to prepare for junk removal.</p>
          </Link>
        </div>
      </div>
    </main>
  )
}
