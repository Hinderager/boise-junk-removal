import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers | Top Shelf Junk Removal',
  description: 'Join our team and help clean up the Treasure Valley.',
  alternates: { canonical: 'https://boise-junk-removal.com/about-us/careers' },
}

export default function CareersPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-dark-blue mb-6">Careers</h1>
        <p className="text-xl text-gray-600">Join our team and help clean up the Treasure Valley.</p>
      </div>
    </main>
  )
}
