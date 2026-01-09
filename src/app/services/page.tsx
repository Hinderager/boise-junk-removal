import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Trash2, Building2, Sofa, Microwave, TreePine, Sparkles } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'

export const metadata: Metadata = {
  title: 'Junk Removal Services Boise | Top Shelf Junk Removal',
  description: 'Professional junk removal services in Boise, Idaho. Residential, commercial, furniture, appliance, and yard waste removal. Free estimates. Call (208) 943-5231.',
  alternates: { canonical: 'https://boise-junk-removal.com/services' },
}

const serviceCategories = [
  { name: 'Residential Junk Removal', href: '/services/residential', icon: Trash2, description: 'Household junk, garage cleanouts, basement and attic clearing' },
  { name: 'Commercial Junk Removal', href: '/services/commercial', icon: Building2, description: 'Office cleanouts, retail, warehouse, and restaurant removal' },
  { name: 'Furniture Removal', href: '/services/furniture-removal', icon: Sofa, description: 'Couches, mattresses, desks, and outdoor furniture' },
  { name: 'Appliance Removal', href: '/services/appliance-removal', icon: Microwave, description: 'Refrigerators, washers, dryers, stoves, and water heaters' },
  { name: 'Yard Waste Removal', href: '/services/yard-waste', icon: TreePine, description: 'Brush, branches, dirt, gravel, and shed removal' },
  { name: 'Specialty Removal', href: '/services/specialty', icon: Sparkles, description: 'Hot tubs, pianos, exercise equipment, TVs, and tires' },
]

export default function ServicesPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-dark-blue mb-6">Our Junk Removal Services</h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl">
          We haul away just about anything that doesn't require a specialized license. From a single item to a whole house cleanout, we've got you covered.
        </p>

          <VisibleBreadcrumb />


          <QuickQuoteBar />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category) => (
            <Link key={category.href} href={category.href} className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all border border-gray-100">
              <div className="w-14 h-14 bg-dark-blue/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-dark-blue group-hover:text-white transition-colors">
                <category.icon className="w-7 h-7 text-dark-blue group-hover:text-white" />
              </div>
              <h2 className="text-xl font-bold text-dark-blue mb-2">{category.name}</h2>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <span className="inline-flex items-center text-[#0b7fb6] font-semibold group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
