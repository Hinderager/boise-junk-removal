import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, CheckCircle, MapPin } from 'lucide-react'
import { ServicesGrid } from '@/components/ServicesGrid'
import { FAQ } from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'Junk Removal Meridian Idaho | Top Shelf Junk Removal',
  description: 'Professional junk removal in Meridian, Idaho. Same-day service, upfront pricing, eco-friendly disposal. Serving Downtown Meridian, North Meridian, South Meridian and more. Call (208) 505-9352.',
  alternates: { canonical: 'https://boisejunkremovalpros.com/cities-served/meridian' },
}

const neighborhoods = ["Downtown Meridian","North Meridian","South Meridian","Lochsa Falls","Paramount","Tuscany","Silverstone","Ten Mile"]
const services = [
  { name: 'Household Junk', href: '/cities-served/meridian/household-junk' },
  { name: 'Furniture Removal', href: '/cities-served/meridian/furniture-removal' },
  { name: 'Appliance Removal', href: '/cities-served/meridian/appliance-removal' },
  { name: 'Garage Cleanout', href: '/cities-served/meridian/garage-cleanout' },
  { name: 'Yard Waste', href: '/cities-served/meridian/yard-waste' },
  { name: 'Hot Tub Removal', href: '/cities-served/meridian/hot-tub-removal' },
  { name: 'Office Cleanout', href: '/cities-served/meridian/office-cleanout' },
  { name: 'Estate Cleanout', href: '/cities-served/meridian/estate-cleanout' },
]

export default function MeridianPage() {
  return (
    <main className="pt-24">
      <section className="relative h-[400px] flex items-center">
        <Image src="/generated/meridian-junk.webp" alt="Junk Removal in Meridian, Idaho" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70" />
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Junk Removal in Meridian, Idaho</h1>
          <p className="text-xl text-gray-200 max-w-2xl">Fast, friendly junk removal for Meridian homes and businesses.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-dark-blue mb-6">Meridian Junk Removal Services</h2>
          <div className="prose prose-lg text-gray-600 mb-8">
            <p>Need junk removed in Meridian? We're your local team. Whether it's an old couch, a garage full of stuff, or a whole house cleanout, we handle it all.</p>
            <p>We show up on time, give you a price before we start, and leave your place cleaner than we found it. No surprises, no hassles.</p>
          </div>

          <h3 className="text-2xl font-bold text-dark-blue mb-4">Our Meridian Services</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {services.map((service) => (
              <Link key={service.href} href={service.href} className="bg-gray-100 rounded-lg p-4 hover:bg-gray-200 transition-colors">
                <span className="font-semibold text-dark-blue">{service.name}</span>
              </Link>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-dark-blue mb-4">Meridian Areas We Serve</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-12">
            {neighborhoods.map((n) => (
              <div key={n} className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">
                <MapPin className="w-4 h-4 text-dark-blue" />
                <span className="text-sm text-gray-700">{n}</span>
              </div>
            ))}
          </div>

          <div className="bg-dark-blue rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Get a Free Quote in Meridian</h3>
            <p className="text-gray-300 mb-6">Call now for same-day service.</p>
            <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
              <Phone className="w-5 h-5" /> (208) 505-9352
            </a>
          </div>
        </div>
      </section>

      <ServicesGrid />
      <FAQ />

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-dark-blue mb-6 text-center">Also Serving Nearby Cities</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/cities-served/boise" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Boise</Link>
            <Link href="/cities-served/nampa" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Nampa</Link>
            <Link href="/cities-served/caldwell" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Caldwell</Link>
            <Link href="/cities-served/eagle" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Eagle</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
