import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Estate Cleanout Meridian Idaho | Compassionate Service',
  description: 'Professional estate cleanout in Meridian, Idaho. Compassionate, respectful service for families. Full-house cleanouts. Call (208) 505-9352.',
  alternates: { canonical: 'https://boisejunkremovalpros.com/cities-served/meridian/estate-cleanout' },
}

export default function MeridianEstateCleanoutPage() {
  return (
    <main className="pt-24 pb-16">
      <section className="relative h-[300px] flex items-center">
        <Image src="/generated/estate-cleanout.webp" alt="Estate Cleanout in Meridian" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70" />
        <div className="relative z-10 container mx-auto px-4">
          <nav className="text-sm text-gray-300 mb-4">
            <Link href="/cities-served" className="hover:text-white">Service Areas</Link>
            <span className="mx-2">/</span>
            <Link href="/cities-served/meridian" className="hover:text-white">Meridian</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Estate Cleanout</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Estate Cleanout in Meridian</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg text-gray-600 mb-12">
            <p>Dealing with an estate cleanout after losing a loved one is tough. We get it. Our team treats your family's belongings with respect and care.</p>

            <p>We've helped families throughout Meridian through this process. We're here to take the burden off your shoulders so you can focus on what matters.</p>

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
            </ul>
          </div>

          <div className="bg-dark-blue rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Need Estate Cleanout Help in Meridian?</h2>
            <p className="text-gray-300 mb-6">We're here to help. Call for a compassionate, professional service.</p>
            <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
              <Phone className="w-5 h-5" /> (208) 505-9352
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
