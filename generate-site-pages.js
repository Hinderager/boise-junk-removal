const fs = require('fs');
const path = require('path');

// Site configuration
const siteConfig = {
  name: 'Top Shelf Junk Removal',
  phone: '(208) 505-9352',
  phoneRaw: '2085059352',
  email: 'info@topshelfpros.com',
  domain: 'boisejunkremovalpros.com',
  city: 'Boise',
  state: 'Idaho',
  stateAbbr: 'ID',
};

// Locations served
const locations = [
  { slug: 'boise', name: 'Boise', county: 'Ada County', neighborhoods: ['Downtown Boise', 'North End', 'East End', 'West Boise', 'Southeast Boise', 'Bench', 'Vista', 'State Street', 'Cole-Collister', 'Boise Highlands'] },
  { slug: 'meridian', name: 'Meridian', county: 'Ada County', neighborhoods: ['Downtown Meridian', 'North Meridian', 'South Meridian', 'Lochsa Falls', 'Paramount', 'Tuscany', 'Silverstone', 'Ten Mile'] },
  { slug: 'nampa', name: 'Nampa', county: 'Canyon County', neighborhoods: ['Downtown Nampa', 'North Nampa', 'South Nampa', 'Greenhurst', 'Southridge', 'Karcher'] },
  { slug: 'caldwell', name: 'Caldwell', county: 'Canyon County', neighborhoods: ['Downtown Caldwell', 'West Caldwell', 'East Caldwell', 'Cleveland Boulevard', 'Ustick Road'] },
  { slug: 'eagle', name: 'Eagle', county: 'Ada County', neighborhoods: ['Downtown Eagle', 'North Eagle', 'Eagle Foothills', 'Floating Feather', 'Dry Creek', 'Hidden Springs'] },
  { slug: 'garden-city', name: 'Garden City', county: 'Ada County', neighborhoods: ['Riverside', 'Chinden Boulevard', 'Glenwood Street', '36th Street'] },
  { slug: 'kuna', name: 'Kuna', county: 'Ada County', neighborhoods: ['Downtown Kuna', 'Crimson Point', 'Indian Creek'] },
  { slug: 'star', name: 'Star', county: 'Ada County', neighborhoods: ['Downtown Star', 'North Star', 'Lanark'] },
  { slug: 'middleton', name: 'Middleton', county: 'Canyon County', neighborhoods: ['Downtown Middleton', 'Purple Sage'] },
];

// Service categories and individual services
const serviceCategories = [
  {
    slug: 'residential',
    name: 'Residential Junk Removal',
    description: 'Complete junk removal services for homes throughout the Boise area.',
    services: [
      { slug: 'household-junk', name: 'Household Junk Removal', description: 'General household items, clutter, and unwanted belongings removed quickly and efficiently.' },
      { slug: 'garage-cleanout', name: 'Garage Cleanout', description: 'Transform your cluttered garage back into usable space. We handle everything from old tools to forgotten boxes.' },
      { slug: 'basement-cleanout', name: 'Basement Cleanout', description: 'Clear out years of accumulated items from your basement. Fast, thorough, and hassle-free.' },
      { slug: 'attic-cleanout', name: 'Attic Cleanout', description: 'Safe removal of items from attics and crawl spaces. We handle the heavy lifting in tight spaces.' },
      { slug: 'storage-unit-cleanout', name: 'Storage Unit Cleanout', description: 'Empty that storage unit you\'ve been paying for. We remove everything and sweep it clean.' },
    ]
  },
  {
    slug: 'commercial',
    name: 'Commercial Junk Removal',
    description: 'Professional junk removal for businesses, offices, and commercial properties.',
    services: [
      { slug: 'office-cleanout', name: 'Office Cleanout', description: 'Desk, chairs, cubicles, old equipment—we clear out office spaces efficiently with minimal disruption.' },
      { slug: 'retail-cleanout', name: 'Retail Store Cleanout', description: 'Fixtures, displays, inventory, and debris removed from retail locations.' },
      { slug: 'warehouse-cleanout', name: 'Warehouse Cleanout', description: 'Large-scale removal of pallets, equipment, and materials from warehouse and industrial spaces.' },
      { slug: 'restaurant-cleanout', name: 'Restaurant Cleanout', description: 'Kitchen equipment, furniture, and fixtures removed from restaurant and food service locations.' },
    ]
  },
  {
    slug: 'furniture-removal',
    name: 'Furniture Removal',
    description: 'Old furniture hauled away from homes and businesses.',
    services: [
      { slug: 'couch-removal', name: 'Couch & Sofa Removal', description: 'Couches, sectionals, loveseats, and recliners picked up and disposed of responsibly.' },
      { slug: 'mattress-removal', name: 'Mattress Removal', description: 'Mattresses, box springs, and bed frames removed. We can handle any size.' },
      { slug: 'desk-removal', name: 'Desk & Office Furniture', description: 'Desks, filing cabinets, chairs, and conference tables hauled away.' },
      { slug: 'outdoor-furniture', name: 'Outdoor Furniture Removal', description: 'Patio sets, old grills, broken umbrellas, and outdoor items removed.' },
    ]
  },
  {
    slug: 'appliance-removal',
    name: 'Appliance Removal',
    description: 'Safe removal and disposal of old appliances.',
    services: [
      { slug: 'refrigerator-removal', name: 'Refrigerator Removal', description: 'Refrigerators, freezers, and mini-fridges removed with proper refrigerant handling.' },
      { slug: 'washer-dryer-removal', name: 'Washer & Dryer Removal', description: 'Washing machines and dryers disconnected and hauled away.' },
      { slug: 'stove-removal', name: 'Stove & Oven Removal', description: 'Electric and gas stoves, ovens, and ranges safely removed.' },
      { slug: 'dishwasher-removal', name: 'Dishwasher Removal', description: 'Old dishwashers disconnected and removed from your kitchen.' },
      { slug: 'water-heater-removal', name: 'Water Heater Removal', description: 'Tank and tankless water heaters properly disposed of.' },
    ]
  },
  {
    slug: 'yard-waste',
    name: 'Yard Waste Removal',
    description: 'Yard debris, brush, and landscaping waste hauled away.',
    services: [
      { slug: 'brush-removal', name: 'Brush & Branch Removal', description: 'Tree branches, shrub trimmings, and brush piles cleared from your property.' },
      { slug: 'lawn-debris', name: 'Lawn Debris Removal', description: 'Grass clippings, leaves, and general yard waste removed.' },
      { slug: 'dirt-gravel', name: 'Dirt & Gravel Removal', description: 'Excess soil, gravel, rocks, and landscaping materials hauled away.' },
      { slug: 'shed-removal', name: 'Shed & Playhouse Removal', description: 'Old sheds, playhouses, and outdoor structures demolished and removed.' },
    ]
  },
  {
    slug: 'specialty',
    name: 'Specialty Removal',
    description: 'Specialized removal services for unique items.',
    services: [
      { slug: 'hot-tub-removal', name: 'Hot Tub Removal', description: 'Hot tubs and spas disconnected, demolished if needed, and hauled away.' },
      { slug: 'piano-removal', name: 'Piano Removal', description: 'Pianos and organs carefully moved out of your home. Uprights and grands.' },
      { slug: 'treadmill-removal', name: 'Exercise Equipment Removal', description: 'Treadmills, ellipticals, weight sets, and gym equipment removed.' },
      { slug: 'tv-removal', name: 'TV & Electronics Removal', description: 'Old TVs, computers, monitors, and electronics responsibly recycled.' },
      { slug: 'tire-removal', name: 'Tire Removal', description: 'Old tires hauled away and properly disposed of or recycled.' },
    ]
  },
];

// Services to show on location pages
const locationServices = ['household-junk', 'furniture-removal', 'appliance-removal', 'garage-cleanout', 'yard-waste', 'hot-tub-removal', 'commercial', 'estate-cleanout'];

const appDir = path.join(__dirname, 'src', 'app');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Generate services hub page
function generateServicesHub() {
  const dir = path.join(appDir, 'services');
  ensureDir(dir);

  const content = `import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Trash2, Building2, Sofa, Microwave, TreePine, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Junk Removal Services Boise | ${siteConfig.name}',
  description: 'Professional junk removal services in Boise, Idaho. Residential, commercial, furniture, appliance, and yard waste removal. Free estimates. Call ${siteConfig.phone}.',
  alternates: { canonical: 'https://${siteConfig.domain}/services' },
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
`;

  fs.writeFileSync(path.join(dir, 'page.tsx'), content);
  console.log('Created: /services');
}

// Generate service category page
function generateServiceCategory(category) {
  const dir = path.join(appDir, 'services', category.slug);
  ensureDir(dir);

  const content = `import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: '${category.name} ${siteConfig.city} | ${siteConfig.name}',
  description: '${category.description} Serving Boise, Meridian, Nampa, and the Treasure Valley. Free estimates. Call ${siteConfig.phone}.',
  alternates: { canonical: 'https://${siteConfig.domain}/services/${category.slug}' },
}

const services = ${JSON.stringify(category.services, null, 2)}

export default function ${category.slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')}Page() {
  return (
    <main className="pt-24 pb-16">
      <section className="relative h-[300px] md:h-[400px] flex items-center">
        <Image src="/generated/${category.slug}.webp" alt="${category.name} in ${siteConfig.city}" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70" />
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">${category.name}</h1>
          <p className="text-xl text-gray-200 max-w-2xl">${category.description}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link key={service.slug} href={\`/services/${category.slug}/\${service.slug}\`} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100 group">
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
            <a href="tel:${siteConfig.phoneRaw}" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
              <Phone className="w-5 h-5" /> ${siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
`;

  fs.writeFileSync(path.join(dir, 'page.tsx'), content);
  console.log(`Created: /services/${category.slug}`);
}

// Generate individual service page
function generateServicePage(category, service) {
  const dir = path.join(appDir, 'services', category.slug, service.slug);
  ensureDir(dir);

  const content = `import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, CheckCircle, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: '${service.name} ${siteConfig.city} Idaho | ${siteConfig.name}',
  description: '${service.description} Professional junk removal in Boise and the Treasure Valley. Free estimates. Call ${siteConfig.phone}.',
  alternates: { canonical: 'https://${siteConfig.domain}/services/${category.slug}/${service.slug}' },
}

const serviceAreas = ['Boise', 'Meridian', 'Nampa', 'Caldwell', 'Eagle', 'Garden City', 'Kuna', 'Star', 'Middleton']

export default function ${service.slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')}Page() {
  return (
    <main className="pt-24 pb-16">
      <section className="relative h-[300px] md:h-[400px] flex items-center">
        <Image src="/generated/${service.slug}.webp" alt="${service.name} in ${siteConfig.city}" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70" />
        <div className="relative z-10 container mx-auto px-4">
          <nav className="text-sm text-gray-300 mb-4">
            <Link href="/services" className="hover:text-white">Services</Link>
            <span className="mx-2">/</span>
            <Link href="/services/${category.slug}" className="hover:text-white">${category.name}</Link>
            <span className="mx-2">/</span>
            <span className="text-white">${service.name}</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">${service.name}</h1>
          <p className="text-xl text-gray-200 max-w-2xl">${service.description}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>${service.description} We serve the entire Treasure Valley with fast, professional service.</p>

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
              <a href="tel:${siteConfig.phoneRaw}" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" /> ${siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
`;

  fs.writeFileSync(path.join(dir, 'page.tsx'), content);
  console.log(`Created: /services/${category.slug}/${service.slug}`);
}

// Generate cities-served hub
function generateCitiesHub() {
  const dir = path.join(appDir, 'cities-served');
  ensureDir(dir);

  const content = `import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Junk Removal Service Areas | ${siteConfig.name}',
  description: 'Professional junk removal serving Boise, Meridian, Nampa, Caldwell, Eagle, and the Treasure Valley. Same-day service available. Call ${siteConfig.phone}.',
  alternates: { canonical: 'https://${siteConfig.domain}/cities-served' },
}

const cities = ${JSON.stringify(locations.map(l => ({ name: l.name, slug: l.slug, county: l.county })), null, 2)}

export default function CitiesServedPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-dark-blue mb-6">Service Areas</h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl">
          We proudly serve the entire Treasure Valley. From Boise to Caldwell and everywhere in between, we're your local junk removal team.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((city) => (
            <Link key={city.slug} href={\`/cities-served/\${city.slug}\`} className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100">
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
`;

  fs.writeFileSync(path.join(dir, 'page.tsx'), content);
  console.log('Created: /cities-served');
}

// Generate location page
function generateLocationPage(location) {
  const dir = path.join(appDir, 'cities-served', location.slug);
  ensureDir(dir);

  const otherCities = locations.filter(l => l.slug !== location.slug).slice(0, 4);

  const content = `import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, CheckCircle, MapPin } from 'lucide-react'
import { ServicesGrid } from '@/components/ServicesGrid'
import { FAQ } from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'Junk Removal ${location.name} Idaho | ${siteConfig.name}',
  description: 'Professional junk removal in ${location.name}, Idaho. Same-day service, upfront pricing, eco-friendly disposal. Serving ${location.neighborhoods.slice(0, 3).join(', ')} and more. Call ${siteConfig.phone}.',
  alternates: { canonical: 'https://${siteConfig.domain}/cities-served/${location.slug}' },
}

const neighborhoods = ${JSON.stringify(location.neighborhoods)}
const services = [
  { name: 'Household Junk', href: '/cities-served/${location.slug}/household-junk' },
  { name: 'Furniture Removal', href: '/cities-served/${location.slug}/furniture-removal' },
  { name: 'Appliance Removal', href: '/cities-served/${location.slug}/appliance-removal' },
  { name: 'Garage Cleanout', href: '/cities-served/${location.slug}/garage-cleanout' },
  { name: 'Yard Waste', href: '/cities-served/${location.slug}/yard-waste' },
  { name: 'Hot Tub Removal', href: '/cities-served/${location.slug}/hot-tub-removal' },
]

export default function ${location.name.replace(/\s/g, '')}Page() {
  return (
    <main className="pt-24">
      <section className="relative h-[400px] flex items-center">
        <Image src="/generated/${location.slug}-junk.webp" alt="Junk Removal in ${location.name}, Idaho" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70" />
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Junk Removal in ${location.name}, Idaho</h1>
          <p className="text-xl text-gray-200 max-w-2xl">Fast, friendly junk removal for ${location.name} homes and businesses.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-dark-blue mb-6">${location.name} Junk Removal Services</h2>
          <div className="prose prose-lg text-gray-600 mb-8">
            <p>Need junk removed in ${location.name}? We're your local team. Whether it's an old couch, a garage full of stuff, or a whole house cleanout, we handle it all.</p>
            <p>We show up on time, give you a price before we start, and leave your place cleaner than we found it. No surprises, no hassles.</p>
          </div>

          <h3 className="text-2xl font-bold text-dark-blue mb-4">Our ${location.name} Services</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {services.map((service) => (
              <Link key={service.href} href={service.href} className="bg-gray-100 rounded-lg p-4 hover:bg-gray-200 transition-colors">
                <span className="font-semibold text-dark-blue">{service.name}</span>
              </Link>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-dark-blue mb-4">${location.name} Areas We Serve</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-12">
            {neighborhoods.map((n) => (
              <div key={n} className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">
                <MapPin className="w-4 h-4 text-dark-blue" />
                <span className="text-sm text-gray-700">{n}</span>
              </div>
            ))}
          </div>

          <div className="bg-dark-blue rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Get a Free Quote in ${location.name}</h3>
            <p className="text-gray-300 mb-6">Call now for same-day service.</p>
            <a href="tel:${siteConfig.phoneRaw}" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
              <Phone className="w-5 h-5" /> ${siteConfig.phone}
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
            ${otherCities.map(c => `<Link href="/cities-served/${c.slug}" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">${c.name}</Link>`).join('\n            ')}
          </div>
        </div>
      </section>
    </main>
  )
}
`;

  fs.writeFileSync(path.join(dir, 'page.tsx'), content);
  console.log(`Created: /cities-served/${location.slug}`);
}

// Generate location + service page
function generateLocationServicePage(location, serviceSlug, serviceName) {
  const dir = path.join(appDir, 'cities-served', location.slug, serviceSlug);
  ensureDir(dir);

  const content = `import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, CheckCircle, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: '${serviceName} ${location.name} Idaho | ${siteConfig.name}',
  description: 'Professional ${serviceName.toLowerCase()} in ${location.name}, Idaho. Same-day service, upfront pricing. Call ${siteConfig.phone} for a free estimate.',
  alternates: { canonical: 'https://${siteConfig.domain}/cities-served/${location.slug}/${serviceSlug}' },
}

export default function ${location.name.replace(/\s/g, '')}${serviceSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')}Page() {
  return (
    <main className="pt-24 pb-16">
      <section className="relative h-[300px] flex items-center">
        <Image src="/generated/${serviceSlug}.webp" alt="${serviceName} in ${location.name}" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70" />
        <div className="relative z-10 container mx-auto px-4">
          <nav className="text-sm text-gray-300 mb-4">
            <Link href="/cities-served" className="hover:text-white">Service Areas</Link>
            <span className="mx-2">/</span>
            <Link href="/cities-served/${location.slug}" className="hover:text-white">${location.name}</Link>
            <span className="mx-2">/</span>
            <span className="text-white">${serviceName}</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white">${serviceName} in ${location.name}</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg text-gray-600 mb-12">
            <p>Looking for ${serviceName.toLowerCase()} in ${location.name}? We've got you covered. Fast service, fair prices, and a team that actually shows up on time.</p>

            <h2 className="text-2xl font-bold text-dark-blue mt-8 mb-4">What We Offer</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span>Same-day and next-day service available</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span>Upfront pricing—no hidden fees</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span>We handle all the heavy lifting</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span>Eco-friendly disposal and recycling</span>
              </li>
            </ul>
          </div>

          <div className="bg-dark-blue rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Clear Out Your Space?</h2>
            <p className="text-gray-300 mb-6">Call for a free estimate in ${location.name}.</p>
            <a href="tel:${siteConfig.phoneRaw}" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
              <Phone className="w-5 h-5" /> ${siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
`;

  fs.writeFileSync(path.join(dir, 'page.tsx'), content);
  console.log(`Created: /cities-served/${location.slug}/${serviceSlug}`);
}

// Generate about section
function generateAboutPages() {
  // About hub
  const aboutDir = path.join(appDir, 'about-us');
  ensureDir(aboutDir);

  const aboutContent = `import { Metadata } from 'next'
import Link from 'next/link'
import { Users, Award, Shield, Heart, Briefcase } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | ${siteConfig.name}',
  description: 'Learn about ${siteConfig.name}. Locally owned junk removal serving Boise and the Treasure Valley. Licensed, insured, and committed to our community.',
  alternates: { canonical: 'https://${siteConfig.domain}/about-us' },
}

export default function AboutPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-dark-blue mb-6">About ${siteConfig.name}</h1>
        <div className="max-w-4xl">
          <p className="text-xl text-gray-600 mb-8">
            We're a local, family-owned junk removal company serving Boise and the Treasure Valley. We started this business because we saw a need for reliable, honest junk removal that doesn't cost an arm and a leg.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            When you call us, you talk to real people who live and work in this community. We show up when we say we will, we quote you a fair price before we start, and we leave your place cleaner than we found it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <Link href="/about-us/testimonials" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <Users className="w-10 h-10 text-dark-blue mb-4" />
            <h2 className="text-xl font-bold text-dark-blue mb-2">Testimonials</h2>
            <p className="text-gray-600">See what our customers say about us.</p>
          </Link>
          <Link href="/about-us/why-choose-us" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <Award className="w-10 h-10 text-dark-blue mb-4" />
            <h2 className="text-xl font-bold text-dark-blue mb-2">Why Choose Us</h2>
            <p className="text-gray-600">What makes us different from other companies.</p>
          </Link>
          <Link href="/about-us/careers" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <Briefcase className="w-10 h-10 text-dark-blue mb-4" />
            <h2 className="text-xl font-bold text-dark-blue mb-2">Careers</h2>
            <p className="text-gray-600">Join our growing team.</p>
          </Link>
        </div>
      </div>
    </main>
  )
}
`;
  fs.writeFileSync(path.join(aboutDir, 'page.tsx'), aboutContent);
  console.log('Created: /about-us');

  // Create sub-pages
  const subPages = [
    { slug: 'testimonials', title: 'Testimonials', description: 'Read reviews from our satisfied customers.' },
    { slug: 'why-choose-us', title: 'Why Choose Us', description: 'What sets us apart from other junk removal companies.' },
    { slug: 'careers', title: 'Careers', description: 'Join our team and help clean up the Treasure Valley.' },
  ];

  subPages.forEach(page => {
    const dir = path.join(aboutDir, page.slug);
    ensureDir(dir);
    const content = `import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '${page.title} | ${siteConfig.name}',
  description: '${page.description}',
  alternates: { canonical: 'https://${siteConfig.domain}/about-us/${page.slug}' },
}

export default function ${page.slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')}Page() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-dark-blue mb-6">${page.title}</h1>
        <p className="text-xl text-gray-600">${page.description}</p>
      </div>
    </main>
  )
}
`;
    fs.writeFileSync(path.join(dir, 'page.tsx'), content);
    console.log(`Created: /about-us/${page.slug}`);
  });
}

// Generate resources section
function generateResourcesPages() {
  const resourcesDir = path.join(appDir, 'resources');
  ensureDir(resourcesDir);

  const resourcesContent = `import { Metadata } from 'next'
import Link from 'next/link'
import { HelpCircle, DollarSign, Recycle, Lightbulb } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Junk Removal Resources | ${siteConfig.name}',
  description: 'Helpful resources about junk removal, pricing, recycling, and decluttering tips from ${siteConfig.name}.',
  alternates: { canonical: 'https://${siteConfig.domain}/resources' },
}

export default function ResourcesPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-dark-blue mb-6">Resources</h1>
        <p className="text-xl text-gray-600 mb-12">Helpful information about junk removal and decluttering.</p>

        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/resources/faq" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <HelpCircle className="w-10 h-10 text-dark-blue mb-4" />
            <h2 className="text-xl font-bold text-dark-blue mb-2">FAQ</h2>
            <p className="text-gray-600">Common questions about our services.</p>
          </Link>
          <Link href="/resources/pricing" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <DollarSign className="w-10 h-10 text-dark-blue mb-4" />
            <h2 className="text-xl font-bold text-dark-blue mb-2">Pricing Guide</h2>
            <p className="text-gray-600">How our pricing works.</p>
          </Link>
          <Link href="/resources/what-we-take" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <Recycle className="w-10 h-10 text-dark-blue mb-4" />
            <h2 className="text-xl font-bold text-dark-blue mb-2">What We Take</h2>
            <p className="text-gray-600">Items we can and cannot remove.</p>
          </Link>
          <Link href="/resources/decluttering-tips" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <Lightbulb className="w-10 h-10 text-dark-blue mb-4" />
            <h2 className="text-xl font-bold text-dark-blue mb-2">Decluttering Tips</h2>
            <p className="text-gray-600">How to prepare for junk removal.</p>
          </Link>
        </div>
      </div>
    </main>
  )
}
`;
  fs.writeFileSync(path.join(resourcesDir, 'page.tsx'), resourcesContent);
  console.log('Created: /resources');

  const subPages = [
    { slug: 'faq', title: 'Frequently Asked Questions' },
    { slug: 'pricing', title: 'Pricing Guide' },
    { slug: 'what-we-take', title: 'What We Take' },
    { slug: 'decluttering-tips', title: 'Decluttering Tips' },
  ];

  subPages.forEach(page => {
    const dir = path.join(resourcesDir, page.slug);
    ensureDir(dir);
    const content = `import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '${page.title} | ${siteConfig.name}',
  description: '${page.title} for junk removal services in Boise and the Treasure Valley.',
  alternates: { canonical: 'https://${siteConfig.domain}/resources/${page.slug}' },
}

export default function ${page.slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')}Page() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-dark-blue mb-6">${page.title}</h1>
      </div>
    </main>
  )
}
`;
    fs.writeFileSync(path.join(dir, 'page.tsx'), content);
    console.log(`Created: /resources/${page.slug}`);
  });
}

// Generate contact page
function generateContactPage() {
  const dir = path.join(appDir, 'contact');
  ensureDir(dir);

  const content = `import { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us | ${siteConfig.name}',
  description: 'Contact ${siteConfig.name} for junk removal in Boise and the Treasure Valley. Call ${siteConfig.phone} or request a free quote online.',
  alternates: { canonical: 'https://${siteConfig.domain}/contact' },
}

export default function ContactPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-dark-blue mb-6">Contact Us</h1>
        <p className="text-xl text-gray-600 mb-12">Ready to get rid of your junk? Give us a call or send us a message.</p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-dark-blue mb-1">Phone</h3>
                <a href="tel:${siteConfig.phoneRaw}" className="text-[#0b7fb6] text-lg font-semibold">${siteConfig.phone}</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-dark-blue mb-1">Email</h3>
                <a href="mailto:${siteConfig.email}" className="text-[#0b7fb6]">${siteConfig.email}</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-dark-blue mb-1">Service Area</h3>
                <p className="text-gray-600">Boise, Meridian, Nampa, Caldwell, Eagle, and the Treasure Valley</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-dark-blue mb-1">Hours</h3>
                <p className="text-gray-600">Monday - Saturday: 7am - 7pm</p>
                <p className="text-gray-600">Sunday: By appointment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
`;

  fs.writeFileSync(path.join(dir, 'page.tsx'), content);
  console.log('Created: /contact');
}

// Main execution
console.log('Generating site pages for boise-junk-removal...\n');

// Generate all pages
generateServicesHub();

serviceCategories.forEach(category => {
  generateServiceCategory(category);
  category.services.forEach(service => {
    generateServicePage(category, service);
  });
});

generateCitiesHub();

locations.forEach(location => {
  generateLocationPage(location);
  // Generate location + service pages
  const locationServicePairs = [
    { slug: 'household-junk', name: 'Household Junk Removal' },
    { slug: 'furniture-removal', name: 'Furniture Removal' },
    { slug: 'appliance-removal', name: 'Appliance Removal' },
    { slug: 'garage-cleanout', name: 'Garage Cleanout' },
    { slug: 'yard-waste', name: 'Yard Waste Removal' },
    { slug: 'hot-tub-removal', name: 'Hot Tub Removal' },
  ];
  locationServicePairs.forEach(service => {
    generateLocationServicePage(location, service.slug, service.name);
  });
});

generateAboutPages();
generateResourcesPages();
generateContactPage();

console.log('\nDone! Pages generated successfully.');
