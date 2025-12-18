import { Metadata } from 'next'
import { Phone, Shield, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Licenses & Insurance | Boise Junk Removal Pros',
  description: 'Fully licensed and insured junk removal services in Boise, Idaho. Professional, bonded team protecting your property. Call (208) 505-9352.',
  alternates: { canonical: 'https://boisejunkremovalpros.com/about-us/licenses-insurance' },
}

export default function LicensesInsurancePage() {
  return (
    <main className="pt-24">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <Shield className="w-16 h-16 text-[#FFC845] mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Licenses & Insurance</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">Protecting your property and giving you peace of mind</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg text-gray-600 mb-12">
              <p>When you hire Top Shelf Junk Removal, you're working with a fully licensed and insured company. That matters more than you might think.</p>

              <p>We're not just some guys with a truck. We're a legitimate business with all the right paperwork, insurance coverage, and legal protection to do the job right. If something goes wrong—though it rarely does—you're covered.</p>
            </div>

            <h2 className="text-3xl font-bold text-dark-blue mb-6">What Does This Mean for You?</h2>

            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-dark-blue mb-2">General Liability Insurance</h3>
                  <p className="text-gray-600">If we accidentally damage your property while removing junk, our insurance covers it. You won't be stuck with the bill.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-dark-blue mb-2">Workers' Compensation</h3>
                  <p className="text-gray-600">If one of our crew members gets hurt on your property, they're covered under our workers' comp policy. You're not liable.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-dark-blue mb-2">Bonded Team</h3>
                  <p className="text-gray-600">We're bonded, which means there's financial protection in place. You can trust us in your home or business.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-dark-blue mb-2">Business License</h3>
                  <p className="text-gray-600">We operate legally in Boise and the Treasure Valley with all required business licenses and permits.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-dark-blue mb-6">Why It Matters</h2>

            <div className="prose prose-lg text-gray-600 mb-12">
              <p>A lot of junk removal companies out there aren't insured. They save money on premiums, which lets them charge less—but it puts you at serious risk.</p>

              <p>If an uninsured crew damages your hardwood floors, breaks a window, or gets hurt on your property, guess who's responsible? You are.</p>

              <p>We charge fair prices, but we don't cut corners on insurance. It's part of being a professional operation.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-dark-blue mb-4">Questions About Our Coverage?</h2>
              <p className="text-gray-600 mb-6">We're happy to provide proof of insurance before we start any job. Just ask.</p>
              <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-dark-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0b7fb6] transition-colors">
                <Phone className="w-5 h-5" />Call (208) 505-9352
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Work with a Licensed, Insured Team?</h2>
          <p className="text-gray-300 mb-6">Get your free quote today.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
