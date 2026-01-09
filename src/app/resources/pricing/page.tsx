import { Metadata } from 'next'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'

export const metadata: Metadata = {
  title: 'Pricing Guide | Top Shelf Junk Removal',
  description: 'Pricing Guide for junk removal services in Boise and the Treasure Valley.',
  alternates: { canonical: 'https://boise-junk-removal.com/resources/pricing' },
}

export default function PricingPage() {
  return (
    <main className="pt-24 pb-16">
      <VisibleBreadcrumb />
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-dark-blue mb-6">Pricing Guide</h1>
      </div>
    </main>
  )
}
