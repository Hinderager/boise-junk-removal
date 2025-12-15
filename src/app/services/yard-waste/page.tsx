import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Yard Waste Removal Boise | Top Shelf Junk Removal',
  description: 'Yard debris, brush, and landscaping waste hauled away. Serving Boise, Meridian, Nampa, and the Treasure Valley. Free estimates. Call (208) 505-9352.',
  alternates: { canonical: 'https://boisejunkremovalpros.com/services/yard-waste' },
}

const services = [
  {
    "slug": "brush-removal",
    "name": "Brush & Branch Removal",
    "description": "Tree branches, shrub trimmings, and brush piles cleared from your property."
  },
  {
    "slug": "lawn-debris",
    "name": "Lawn Debris Removal",
    "description": "Grass clippings, leaves, and general yard waste removed."
  },
  {
    "slug": "dirt-gravel",
    "name": "Dirt & Gravel Removal",
    "description": "Excess soil, gravel, rocks, and landscaping materials hauled away."
  },
  {
    "slug": "shed-removal",
    "name": "Shed & Playhouse Removal",
    "description": "Old sheds, playhouses, and outdoor structures demolished and removed."
  }
]

export default function YardWastePage() {
  return (
    <main className="pt-24 pb-16">
      <section className="relative h-[300px] md:h-[400px] flex items-center">
        <Image src="/generated/yard-waste.webp" alt="Yard Waste Removal in Boise" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70" />
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Yard Waste Removal</h1>
          <p className="text-xl text-gray-200 max-w-2xl">Yard debris, brush, and landscaping waste hauled away.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/yard-waste/${service.slug}`} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100 group">
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
