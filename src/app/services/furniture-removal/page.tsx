import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Furniture Removal Boise | Top Shelf Junk Removal',
  description: 'Old furniture hauled away from homes and businesses. Serving Boise, Meridian, Nampa, and the Treasure Valley. Free estimates. Call (208) 943-5231.',
  alternates: { canonical: 'https://boise-junk-removal.com/services/furniture-removal' },
}

const services = [
  {
    "slug": "couch-removal",
    "name": "Couch & Sofa Removal",
    "description": "Couches, sectionals, loveseats, and recliners picked up and disposed of responsibly."
  },
  {
    "slug": "mattress-removal",
    "name": "Mattress Removal",
    "description": "Mattresses, box springs, and bed frames removed. We can handle any size."
  },
  {
    "slug": "desk-removal",
    "name": "Desk & Office Furniture",
    "description": "Desks, filing cabinets, chairs, and conference tables hauled away."
  },
  {
    "slug": "outdoor-furniture",
    "name": "Outdoor Furniture Removal",
    "description": "Patio sets, old grills, broken umbrellas, and outdoor items removed."
  }
]

export default function FurnitureRemovalPage() {
  return (
    <main className="pt-24 pb-16">
      <section className="relative h-[300px] md:h-[400px] flex items-center">
        <Image src="/generated/furniture-removal.webp" alt="Furniture Removal in Boise" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70" />
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Furniture Removal</h1>
          <p className="text-xl text-gray-200 max-w-2xl">Old furniture hauled away from homes and businesses.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/furniture-removal/${service.slug}`} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100 group">
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
            <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
              <Phone className="w-5 h-5" /> (208) 943-5231
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
