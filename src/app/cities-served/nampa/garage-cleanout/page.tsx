import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, CheckCircle, MapPin } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'

export const metadata: Metadata = {
  title: 'Garage Cleanout Nampa Idaho | Top Shelf Junk Removal',
  description: 'Professional garage cleanout in Nampa, Idaho. Same-day service, upfront pricing. Call (208) 943-5231 for a free estimate.',
  alternates: { canonical: 'https://boise-junk-removal.com/cities-served/nampa/garage-cleanout' },
}

export default function NampaGarageCleanoutPage() {
  return (
    <main className="pt-24 pb-16">
      <section className="relative h-[300px] flex items-center">
        <Image src="/generated/garage-cleanout.webp" alt="Garage Cleanout in Nampa" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70" />
        <div className="relative z-10 container mx-auto px-4">
          <nav className="text-sm text-gray-300 mb-4">
            <Link href="/cities-served" className="hover:text-white">Service Areas</Link>
            <span className="mx-2">/</span>
            <Link href="/cities-served/nampa" className="hover:text-white">Nampa</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Garage Cleanout</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Garage Cleanout in Nampa</h1>
        </div>
      </section>
      <QuickQuoteBar />

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg text-gray-600 mb-12">
            <p>Looking for garage cleanout in Nampa? We've got you covered. Fast service, fair prices, and a team that actually shows up on time.</p>

            <h2 className="text-2xl font-bold text-dark-blue mt-8 mb-4">What We Offer</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span>Same-day and next-day service available</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span>Upfront pricing—no hidden fees</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span>We handle all the heavy lifting</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span>Eco-friendly disposal and recycling</span>
              </li>
            </ul>
          </div>

          <div className="bg-dark-blue rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Clear Out Your Space?</h2>
            <p className="text-gray-300 mb-6">Call for a free estimate in Nampa.</p>
            <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
              <Phone className="w-5 h-5" /> (208) 943-5231
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
