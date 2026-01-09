import { Metadata } from 'next'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us | Top Shelf Junk Removal',
  description: 'Contact Top Shelf Junk Removal for junk removal in Boise and the Treasure Valley. Call (208) 943-5231 or request a free quote online.',
  alternates: { canonical: 'https://boise-junk-removal.com/contact' },
}

export default function ContactPage() {
  return (
    <main className="pt-24 pb-16">
      <VisibleBreadcrumb />
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
                <a href="tel:2089435231" className="text-[#0b7fb6] text-lg font-semibold">(208) 943-5231</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-dark-blue mb-1">Email</h3>
                <a href="mailto:info@topshelfpros.com" className="text-[#0b7fb6]">info@topshelfpros.com</a>
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
