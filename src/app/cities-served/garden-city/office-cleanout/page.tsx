import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, CheckCircle } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'

export const metadata: Metadata = {
  title: 'Office Cleanout Garden City Idaho | Commercial Junk Removal',
  description: 'Professional office cleanout in Garden City, Idaho. Fast commercial junk removal for offices, retail, and warehouses. Call (208) 943-5231.',
  alternates: { canonical: 'https://boise-junk-removal.com/cities-served/garden-city/office-cleanout' },
}

export default function GardenCityOfficeCleanoutPage() {
  return (
    <main className="pt-24 pb-16">
      <section className="relative h-[300px] flex items-center">
        <Image src="/generated/office-cleanout.webp" alt="Office Cleanout in Garden City" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70" />
        <div className="relative z-10 container mx-auto px-4">
          <nav className="text-sm text-gray-300 mb-4">
            <Link href="/cities-served" className="hover:text-white">Service Areas</Link>
            <span className="mx-2">/</span>
            <Link href="/cities-served/garden-city" className="hover:text-white">Garden City</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Office Cleanout</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Office Cleanout in Garden City</h1>
        </div>
      </section>
      <QuickQuoteBar />

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg text-gray-600 mb-12">
            <p>Moving offices? Downsizing? Clearing out old equipment? We handle commercial junk removal in Garden City fast and professionally.</p>

            <p>We work around your schedule—evenings, weekends, whatever works for your business. Minimal disruption, maximum efficiency.</p>

            <h2 className="text-2xl font-bold text-dark-blue mt-8 mb-4">What We Remove</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span>Old office furniture (desks, chairs, filing cabinets)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span>Electronic waste (computers, printers, monitors)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span>Fixtures and shelving</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span>Cardboard and packing materials</span>
              </li>
            </ul>
          </div>

          <div className="bg-dark-blue rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Need Office Cleanout in Garden City?</h2>
            <p className="text-gray-300 mb-6">Get a free commercial quote today.</p>
            <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
              <Phone className="w-5 h-5" /> (208) 943-5231
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
