import { Metadata } from 'next'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Junk Removal Pros Blog | Tips & Guides for Junk removal',
  description: 'Expert tips, guides, and insights about junk removal in Boise and the Treasure Valley. Learn from the pros at Junk Removal Pros.',
  alternates: {
    canonical: 'https://boise-junk-removal.com/blogs',
  },
}

const blogPosts = [
  {
    "slug": "why-your-stuff-is-ruining-your-life",
    "title": "Why Your Stuff Is Ruining Your Life (And What to Do About It)",
    "excerpt": "That pile of junk in your garage isn't just taking up space. It's stealing your time, your energy, and possibly your sanity.",
    "image": "/generated/garage-cleanout.webp"
  },
  {
    "slug": "decluttering-guide-boise",
    "title": "The Boise Homeowner's Guide to Decluttering",
    "excerpt": "Finally tackling that clutter? Here's a practical room-by-room approach that actually works.",
    "image": "/generated/decluttering-guide.webp"
  },
  {
    "slug": "junk-removal-pricing-explained",
    "title": "Junk Removal Pricing: How It Works",
    "excerpt": "Most people have no idea how junk removal is priced. Here's the straightforward explanation.",
    "image": "/generated/electronics-ewaste.webp"
  },
  {
    "slug": "what-junk-removal-companies-take",
    "title": "What Will Junk Removal Companies Actually Take?",
    "excerpt": "The short answer: almost everything. Here's the full list of items we can haul.",
    "image": "/generated/items-we-take.webp"
  },
  {
    "slug": "same-day-junk-removal",
    "title": "Same-Day Junk Removal in Boise: When You Need It Gone Now",
    "excerpt": "Sometimes you can't wait. Here's how same-day junk removal works in the Treasure Valley.",
    "image": "/generated/same-day-service.webp"
  },
  {
    "slug": "junk-removal-vs-dumpster-rental",
    "title": "Junk Removal Service vs Dumpster Rental: Which Is Right for You?",
    "excerpt": "Both options get rid of junk, but they work differently. Here's how to choose.",
    "image": "/generated/junk-vs-dumpster.webp"
  }
]

export default function BlogsPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <Image
          src="/generated/hero.webp"
          alt="Junk Removal Pros Blog"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/80 to-dark-blue/60" />
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Our Blog
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Tips, guides, and insights about junk removal in the Treasure Valley. Real advice from real professionals.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Link href={`/blogs/${post.slug}`}>
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gunmetal mb-2 hover:text-dark-blue transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center text-dark-blue font-semibold">
                      Read More
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today for a free estimate on your junk removal project.
          </p>
          <a
            href="tel:2083611982"
            className="inline-block bg-brand-yellow hover:bg-yellow-400 text-black font-bold text-lg px-8 py-4 rounded-lg transition-colors"
          >
            Call (208) 361-1982
          </a>
        </div>
      </section>
    </main>
  )
}
