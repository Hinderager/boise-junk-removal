import { Metadata } from 'next'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'

export const metadata: Metadata = {
  title: 'Decluttering Tips | Top Shelf Junk Removal',
  description: 'Decluttering Tips for junk removal services in Boise and the Treasure Valley.',
  alternates: { canonical: 'https://boise-junk-removal.com/resources/decluttering-tips' },
}

export default function DeclutteringTipsPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-dark-blue mb-6">Decluttering Tips</h1>
      </div>
    </main>
  )
}
