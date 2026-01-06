import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, CheckCircle, MapPin } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'

export const metadata: Metadata = {
  title: 'Estate Cleanout Boise Idaho | Compassionate Service',
  description: 'Professional estate cleanout in Boise, Idaho. Compassionate, respectful service for families. Full-house cleanouts. Call (208) 943-5231.',
  alternates: { canonical: 'https://boise-junk-removal.com/cities-served/boise/estate-cleanout' },
}

export default function BoiseEstateCleanoutPage() {
  return (
    <main className="pt-24 pb-16">
      <section className="relative h-[300px] flex items-center">
        <Image src="/generated/estate-cleanout.webp" alt="Estate Cleanout in Boise" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70" />
        <div className="relative z-10 container mx-auto px-4">
          <nav className="text-sm text-gray-300 mb-4">
            <Link href="/cities-served" className="hover:text-white">Service Areas</Link>
            <span className="mx-2">/</span>
            <Link href="/cities-served/boise" className="hover:text-white">Boise</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Estate Cleanout</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Estate Cleanout in Boise</h1>
        </div>
      </section>
      <VisibleBreadcrumb />
      <QuickQuoteBar />

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg text-gray-600 mb-12">
            <p>Dealing with an estate cleanout after losing a loved one is tough. We get it. Our team treats your family's belongings with respect and care.</p>

            <p>We've helped hundreds of Boise families through this process. We're here to take the burden off your shoulders so you can focus on what matters.</p>

            <h2 className="text-2xl font-bold text-dark-blue mt-8 mb-4">What We Do</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span>Full-house cleanouts from top to bottom</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span>Sort and separate items for donation or disposal</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span>Careful handling of sentimental items</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span>Prepare property for sale or rental</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span>Work with executors and family members</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-dark-blue mt-8 mb-4">Our Approach</h2>
            <p>We know this isn't just junk. It's a lifetime of memories. We take our time, ask questions, and make sure you're comfortable with every decision.</p>

            <p>You can be there during the cleanout, or we can handle it independently. Whatever you need, we're flexible.</p>

            <ul className="space-y-3 mt-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span>Compassionate, respectful team</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span>Transparent pricing with no surprises</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span>Donation to local Boise charities when possible</span>
              </li>
            </ul>
          </div>

          <div className="bg-dark-blue rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Need Estate Cleanout Help in Boise?</h2>
            <p className="text-gray-300 mb-6">We're here to help. Call for a compassionate, professional service.</p>
            <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
              <Phone className="w-5 h-5" /> (208) 943-5231
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
