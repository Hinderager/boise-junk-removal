import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What We Take | Top Shelf Junk Removal',
  description: 'What We Take for junk removal services in Boise and the Treasure Valley.',
  alternates: { canonical: 'https://boise-junk-removal.com/resources/what-we-take' },
}

export default function WhatWeTakePage() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-dark-blue mb-6">What We Take</h1>
      </div>
    </main>
  )
}
