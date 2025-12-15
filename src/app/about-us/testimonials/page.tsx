import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Testimonials | Top Shelf Junk Removal',
  description: 'Read reviews from our satisfied customers.',
  alternates: { canonical: 'https://boisejunkremovalpros.com/about-us/testimonials' },
}

export default function TestimonialsPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-dark-blue mb-6">Testimonials</h1>
        <p className="text-xl text-gray-600">Read reviews from our satisfied customers.</p>
      </div>
    </main>
  )
}
