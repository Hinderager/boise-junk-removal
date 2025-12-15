import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Residential Junk Removal Boise | Top Shelf Junk Removal',
  description: 'Complete junk removal services for homes throughout the Boise area. Serving Boise, Meridian, Nampa, and the Treasure Valley. Free estimates. Call (208) 505-9352.',
  alternates: { canonical: 'https://boisejunkremovalpros.com/services/residential' },
}

const services = [
  {
    "slug": "household-junk",
    "name": "Household Junk Removal",
    "description": "General household items, clutter, and unwanted belongings removed quickly and efficiently."
  },
  {
    "slug": "garage-cleanout",
    "name": "Garage Cleanout",
    "description": "Transform your cluttered garage back into usable space. We handle everything from old tools to forgotten boxes."
  },
  {
    "slug": "basement-cleanout",
    "name": "Basement Cleanout",
    "description": "Clear out years of accumulated items from your basement. Fast, thorough, and hassle-free."
  },
  {
    "slug": "attic-cleanout",
    "name": "Attic Cleanout",
    "description": "Safe removal of items from attics and crawl spaces. We handle the heavy lifting in tight spaces."
  },
  {
    "slug": "storage-unit-cleanout",
    "name": "Storage Unit Cleanout",
    "description": "Empty that storage unit you've been paying for. We remove everything and sweep it clean."
  }
]

export default function ResidentialPage() {
  return (
    <main className="pt-24 pb-16">
      <section className="relative h-[300px] md:h-[400px] flex items-center">
        <Image src="/generated/residential.webp" alt="Residential Junk Removal in Boise" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70" />
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Residential Junk Removal</h1>
          <p className="text-xl text-gray-200 max-w-2xl">Complete junk removal services for homes throughout the Boise area.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/residential/${service.slug}`} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100 group">
                <h2 className="text-xl font-bold text-dark-blue mb-3 group-hover:text-[#0b7fb6]">{service.name}</h2>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <span className="inline-flex items-center text-[#0b7fb6] font-semibold">
                  Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12 bg-dark-blue rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Rid of Your Junk?</h2>
            <p className="text-gray-300 mb-6">Call us for a free, no-obligation estimate.</p>
            <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
              <Phone className="w-5 h-5" /> (208) 505-9352
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
