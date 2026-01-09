import { Metadata } from 'next'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'
import Link from 'next/link'
import { Users, Award, Shield, Heart, Briefcase } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | Top Shelf Junk Removal',
  description: 'Learn about Top Shelf Junk Removal. Locally owned junk removal serving Boise and the Treasure Valley. Licensed, insured, and committed to our community.',
  alternates: { canonical: 'https://boise-junk-removal.com/about-us' },
}

export default function AboutPage() {
  return (
    <main className="pt-24 pb-16">
      <VisibleBreadcrumb />
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-dark-blue mb-6">About Top Shelf Junk Removal</h1>
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
