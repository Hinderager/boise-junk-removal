import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'

export const metadata: Metadata = {
  title: 'Junk Removal Service Areas | Top Shelf Junk Removal',
  description: 'Professional junk removal serving Boise, Meridian, Nampa, Caldwell, Eagle, and the Treasure Valley. Same-day service available. Call (208) 943-5231.',
  alternates: { canonical: 'https://boise-junk-removal.com/cities-served' },
}

const cities = [
  {
    "name": "Boise",
    "slug": "boise",
    "county": "Ada County"
  },
  {
    "name": "Meridian",
    "slug": "meridian",
    "county": "Ada County"
  },
  {
    "name": "Nampa",
    "slug": "nampa",
    "county": "Canyon County"
  },
  {
    "name": "Caldwell",
    "slug": "caldwell",
    "county": "Canyon County"
  },
  {
    "name": "Eagle",
    "slug": "eagle",
    "county": "Ada County"
  },
  {
    "name": "Garden City",
    "slug": "garden-city",
    "county": "Ada County"
  },
  {
    "name": "Kuna",
    "slug": "kuna",
    "county": "Ada County"
  },
  {
    "name": "Star",
    "slug": "star",
    "county": "Ada County"
  },
  {
    "name": "Middleton",
    "slug": "middleton",
    "county": "Canyon County"
  }
]

export default function CitiesServedPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-dark-blue mb-6">Service Areas</h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl">
          We proudly serve the entire Treasure Valley. From Boise to Caldwell and everywhere in between, we're your local junk removal team.
        </p>

          <VisibleBreadcrumb />


          <QuickQuoteBar />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((city) => (
            <Link key={city.slug} href={`/cities-served/${city.slug}`} className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-dark-blue/10 rounded-full flex items-center justify-center group-hover:bg-dark-blue transition-colors">
                  <MapPin className="w-6 h-6 text-dark-blue group-hover:text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-dark-blue group-hover:text-[#0b7fb6]">{city.name}</h2>
                  <p className="text-gray-600">{city.county}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
