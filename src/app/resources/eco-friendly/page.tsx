import { Metadata } from 'next'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'
import { Phone, Recycle, Trees, Heart, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Eco-Friendly Junk Removal Boise | Recycling & Donation',
  description: 'Responsible junk removal in Boise. We recycle, donate, and dispose properly. Keeping items out of landfills. Call (208) 943-5231.',
  alternates: { canonical: 'https://boise-junk-removal.com/resources/eco-friendly' },
}

export default function EcoFriendlyPage() {
  return (
    <main className="pt-24">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <Trees className="w-16 h-16 text-[#FFC845] mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Eco-Friendly Junk Removal</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">We don't just haul stuff to the dump. We recycle, donate, and dispose responsibly.</p>
        </div>
      </section>

      <VisibleBreadcrumb />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg text-gray-600 mb-12">
              <p>Here's the truth: junk removal doesn't have to mean everything goes to the landfill. In fact, most of what we haul can be recycled, donated, or repurposed.</p>

              <p>We take the time to sort through your stuff and figure out what can have a second life. It's the right thing to do, and it keeps Boise cleaner.</p>
            </div>

            <h2 className="text-3xl font-bold text-dark-blue mb-6">How We Handle Your Junk</h2>

            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <Heart className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-dark-blue mb-2">Donation First</h3>
                  <p className="text-gray-600">If something's still usable—furniture, appliances, clothes—we donate it to local charities like Goodwill, Salvation Army, and Idaho Youth Ranch. Someone else can use it.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Recycle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-dark-blue mb-2">Recycling When Possible</h3>
                  <p className="text-gray-600">Metal, electronics, cardboard, and certain plastics get recycled. We work with local recycling centers in Boise to process materials properly.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-dark-blue mb-2">Proper Disposal</h3>
                  <p className="text-gray-600">For stuff that can't be donated or recycled, we dispose of it at licensed facilities following all local regulations. No illegal dumping, ever.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-dark-blue mb-6">What We Recycle</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-dark-blue mb-3">Metals</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Appliances (refrigerators, washers, dryers)</li>
                  <li>• Metal furniture</li>
                  <li>• Scrap metal</li>
                  <li>• Aluminum and steel</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-dark-blue mb-3">Electronics</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Computers and monitors</li>
                  <li>• TVs and stereos</li>
                  <li>• Printers and office equipment</li>
                  <li>• Small electronics</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-dark-blue mb-3">Cardboard & Paper</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Moving boxes</li>
                  <li>• Packaging materials</li>
                  <li>• Office paper</li>
                  <li>• Newspapers and magazines</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-dark-blue mb-3">Yard Waste</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Branches and brush</li>
                  <li>• Lawn debris</li>
                  <li>• Leaves and grass clippings</li>
                  <li>• Composted when possible</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-dark-blue mb-6">Items We Donate</h2>

            <div className="prose prose-lg text-gray-600 mb-12">
              <p>If it's in decent shape and someone could use it, we'll donate it. This includes:</p>

              <ul>
                <li>Furniture (couches, tables, chairs, dressers)</li>
                <li>Working appliances</li>
                <li>Clothing and household goods</li>
                <li>Books and toys</li>
                <li>Kitchen items</li>
                <li>Tools and equipment</li>
              </ul>

              <p>We partner with local Boise charities that pick up donations or accept drop-offs. You get a cleaner space, and someone else gets what they need.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-dark-blue mb-4">Why This Matters</h2>
              <p className="text-gray-600 mb-4">Landfills in Idaho are filling up. The more we can keep out of them, the better for our community and the environment.</p>
              <p className="text-gray-600">Plus, donating usable items helps local families and organizations. It's a win-win.</p>
            </div>

            <div className="bg-dark-blue rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Choose Responsible Junk Removal</h2>
              <p className="text-gray-300 mb-6">We'll handle your junk the right way. Call for a free quote.</p>
              <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 943-5231
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
