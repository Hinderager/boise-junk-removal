import { Metadata } from 'next'
import { Phone } from 'lucide-react'
import { FAQ } from '@/components/FAQ'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Common questions about junk removal in Boise and the Treasure Valley: what we take, how pricing works, same-day service, and where your stuff ends up.',
  alternates: { canonical: 'https://boise-junk-removal.com/resources/faq' },
}

export default function FaqPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Common questions about our junk removal service in Boise.</p>
        </div>
      </section>
      <VisibleBreadcrumb />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Most people calling us have never hired a junk removal crew before, so the same handful of questions come up every time. Here they are, answered straight.</p>
              <p>Don&apos;t see yours? Give us a call and we&apos;ll talk it through — no pressure either way.</p>
            </div>
          </div>
        </div>
      </section>
      <FAQ />
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Still Have a Question?</h2>
          <p className="text-gray-200 mb-6">Call us and we&apos;ll help you out.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
