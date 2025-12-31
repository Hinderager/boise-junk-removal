import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, CheckCircle, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Refrigerator Removal Boise Idaho | Top Shelf Junk Removal',
  description: 'Refrigerators, freezers, and mini-fridges removed with proper refrigerant handling. Professional junk removal in Boise and the Treasure Valley. Free estimates. Call (208) 943-5231.',
  alternates: { canonical: 'https://boise-junk-removal.com/services/appliance-removal/refrigerator-removal' },
}

const serviceAreas = ['Boise', 'Meridian', 'Nampa', 'Caldwell', 'Eagle', 'Garden City', 'Kuna', 'Star', 'Middleton']

export default function RefrigeratorRemovalPage() {
  return (
    <main className="pt-24 pb-16">
      <section className="relative h-[300px] md:h-[400px] flex items-center">
        <Image src="/generated/refrigerator-removal.webp" alt="Refrigerator Removal in Boise" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70" />
        <div className="relative z-10 container mx-auto px-4">
          <nav className="text-sm text-gray-300 mb-4">
            <Link href="/services" className="hover:text-white">Services</Link>
            <span className="mx-2">/</span>
            <Link href="/services/appliance-removal" className="hover:text-white">Appliance Removal</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Refrigerator Removal</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Refrigerator Removal</h1>
          <p className="text-xl text-gray-200 max-w-2xl">Refrigerators, freezers, and mini-fridges removed with proper refrigerant handling.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Refrigerators, freezers, and mini-fridges removed with proper refrigerant handling. We serve the entire Treasure Valley with fast, professional service.</p>

              <h2 className="text-2xl font-bold text-dark-blue mt-8 mb-4">Why Choose Us?</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Upfront Pricing:</strong> We quote before we load. No surprises.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Same-Day Service:</strong> Call by noon, gone by end of day.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>We Do the Heavy Lifting:</strong> You point, we haul. Simple as that.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Eco-Friendly:</strong> We donate and recycle whenever possible.</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-100 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-dark-blue mb-4">Service Areas</h3>
              <div className="flex flex-wrap gap-3">
                {serviceAreas.map((area) => (
                  <span key={area} className="inline-flex items-center gap-1 bg-white px-3 py-1 rounded-full text-sm">
                    <MapPin className="w-3 h-3 text-dark-blue" /> {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-dark-blue rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Get Your Free Estimate</h2>
              <p className="text-gray-300 mb-6">Call now or book online. We'll give you a price before we start.</p>
              <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" /> (208) 943-5231
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
