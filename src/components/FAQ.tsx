'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const faqs = [
  { question: 'What items do you take?', answer: 'We take almost everything! Furniture, appliances, electronics, yard waste, construction debris, mattresses, hot tubs, and more. The only items we can\'t take are hazardous materials like paint, chemicals, or asbestos.' },
  { question: 'How does pricing work?', answer: 'We provide upfront, transparent pricing based on how much space your items take in our truck. You\'ll know the exact cost before we start loading—no hidden fees or surprises.' },
  { question: 'Do you offer same-day service?', answer: 'Yes! We offer same-day and next-day junk removal throughout the Treasure Valley. Call us by noon for same-day pickup in most areas.' },
  { question: 'What happens to the items you remove?', answer: 'We\'re committed to eco-friendly disposal. Usable items are donated to local charities. Recyclables are properly recycled. Only true waste goes to the landfill—typically less than 30% of what we collect.' },
  { question: 'Do I need to be home during pickup?', answer: 'Not necessarily. As long as the items are accessible and payment is arranged, we can complete the job while you\'re away. Many customers leave items in the driveway or garage.' },
  { question: 'How much junk can you take?', answer: 'We can handle any size job—from a single item to full property cleanouts. Our trucks hold about 12 cubic yards, equivalent to 6-8 pickup truck loads. For larger jobs, we\'ll make multiple trips.' },
  { question: 'Do you provide free estimates?', answer: 'Absolutely! We provide free, no-obligation estimates. Just call us or schedule online, and we\'ll give you an exact quote before any work begins.' },
]

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const toggleFAQ = (index: number) => setActiveIndex(activeIndex === index ? null : index)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-center mb-12 uppercase" style={{textShadow: '2px 2px 3px rgba(0,0,0,0.3), 1px 1px 2px rgba(0,0,0,0.2)'}}>
          <span className="text-dark-blue">Frequently Asked Questions</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b-2 border-gray-200 last:border-b-0">
              <button onClick={() => toggleFAQ(index)} className="w-full flex items-center justify-between px-6 py-6 text-left transition-colors hover:bg-gray-50">
                <span className="text-xl md:text-2xl font-bold text-dark-blue pr-4">{faq.question}</span>
                <ChevronDown className={`w-6 h-6 text-dark-blue flex-shrink-0 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`} />
              </button>
              <div className={`grid transition-all duration-300 ease-in-out ${activeIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden"><div className="px-6 pb-6 text-gray-700 text-lg leading-relaxed">{faq.answer}</div></div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-row gap-4 justify-center mt-12">
          <Button asChild size="lg" className="bg-ub-yellow hover:bg-ub-yellow/90 text-black font-bold text-lg px-10 py-6 rounded-lg uppercase border-4 border-ub-yellow">
            <a href="tel:2083611982"><span className="md:hidden">Call Now</span><span className="hidden md:inline">(208) 361-1982</span></a>
          </Button>
        </div>
      </div>
    </section>
  )
}
