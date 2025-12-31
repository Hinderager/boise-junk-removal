import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Why Choose Us | Top Shelf Junk Removal',
  description: 'What sets us apart from other junk removal companies.',
  alternates: { canonical: 'https://boise-junk-removal.com/about-us/why-choose-us' },
}

export default function WhyChooseUsPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-dark-blue mb-6">Why Choose Us</h1>
        <p className="text-xl text-gray-600">What sets us apart from other junk removal companies.</p>
      </div>
    </main>
  )
}
