import { Metadata } from 'next'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'
import Image from 'next/image'
import Link from 'next/link'
import { DollarSign, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Junk Removal Pricing: How It Actually Works | Junk Removal Pros',
  description: 'How much does junk removal cost in Boise? Here\'s the straightforward explanation of junk removal pricing — volume-based rates, what affects your quote, and typical costs in the Treasure Valley.',
  alternates: {
    canonical: 'https://boise-junk-removal.com/blogs/junk-removal-pricing-explained',
  },
}

export default function BlogPost() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/electronics-ewaste.webp"
          alt="Junk Removal Pricing Explained"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/90 via-dark-blue/50 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 pb-12">
          <Link
            href="/blogs"
            className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Junk Removal Pricing: How It Actually Works
          </h1>
          <p className="text-white/80 text-lg mt-4 max-w-2xl">
            No mystery formulas. No surprise fees. Just a straight answer.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              You've got a pile of stuff that needs to go. You call a junk removal company. They give you a number. But where does that number come from?
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Most people searching for junk removal pricing in Boise have no idea how companies calculate their rates. And honestly, the industry hasn't done a great job explaining it. Some companies are deliberately vague because it lets them charge whatever they want once they show up.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              That's frustrating. You deserve to understand what you're paying for before you commit to anything. So here's the actual breakdown of how junk removal costs work in the Treasure Valley — no marketing speak, no hidden catches.
            </p>
          </div>
        </div>
      </section>

      {/* Volume Based Pricing - Gradient Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-dark-blue">Volume-Based Pricing Is the Standard</h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Most reputable junk removal services in Boise price by volume — meaning how much space your stuff takes up in the truck. That's the whole formula. A quarter truck costs less than a half truck. A half truck costs less than a full truck.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Why volume instead of weight? Because a truck full of pillows takes the same space as a truck full of bricks, but one is much heavier. The truck can only hold so much volume regardless of weight, so space is what matters for pricing.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              This is also why you can't get an accurate junk removal quote over the phone. When you say "I have some furniture and boxes," that could mean a small stack in the corner or an entire garage full. The only way to give you a real price is to see what you've got.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Some companies do offer phone estimates, but those are rough guesses at best. The actual price always comes after someone looks at your stuff in person. Any company that locks you into a price over the phone without seeing the job is either padding the estimate heavily or planning to surprise you later.
            </p>
          </div>
        </div>
      </section>

      {/* What Affects Price - White Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">What Actually Affects Your Junk Removal Cost</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Volume is the primary factor, but a few other things can adjust your final junk removal price:
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Location in your home.</strong> A couch sitting in the garage is simpler to remove than a couch on the third floor of a walk-up apartment. Both take the same truck space, but one requires significantly more labor to get out. Most companies factor accessibility into their pricing.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Type of items.</strong> Standard household junk — furniture, boxes, general clutter — is straightforward. But certain items cost more to dispose of properly. Mattresses often have recycling fees. Electronics require special handling. Appliances with refrigerants need certified disposal. These costs get passed along in your quote.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Disposal fees in your area.</strong> Different landfills and recycling centers charge different rates. Junk removal pricing in Boise reflects local disposal costs, which can vary from what you'd pay in other cities. The Treasure Valley has reasonable disposal rates compared to many areas, which helps keep junk removal affordable here.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              <strong>Labor intensity.</strong> If your junk requires significant disassembly, is mixed with hazardous materials, or involves particularly heavy items, that affects the price. A shed full of neatly stacked boxes costs less to remove than a shed full of loose debris that needs to be sorted and bagged.
            </p>
          </div>
        </div>
      </section>

      {/* Typical Costs - Gray Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">Typical Junk Removal Costs in the Boise Area</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Every job is different, but here's a realistic sense of what junk removal costs in the Treasure Valley. These are ballpark figures — your actual price depends on your specific situation.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Single item pickup</strong> runs $75-150 for most items. One couch, one mattress, one appliance — quick jobs where we're in and out. Larger or heavier single items like hot tubs or pianos cost more due to the labor involved.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Quarter truck load</strong> typically costs $150-250. This handles a few pieces of furniture, some boxes, maybe a small room cleanout. It's the most common size for people who've accumulated stuff in a spare room or corner of the garage.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Half truck load</strong> runs $250-400. This is your typical garage cleanout, basement cleanout, or small estate situation. Enough stuff to make a real dent but not a massive project.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Full truck load</strong> costs $400-600 or more depending on complexity. Major cleanouts, whole house situations, large commercial jobs. When you need serious hauling capacity.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              These prices include labor, hauling, and disposal. Reputable junk removal companies in Boise don't nickel-and-dime you with separate fees for each part of the job. If someone quotes you a low price then adds disposal fees, fuel surcharges, and labor charges on top, find someone else.
            </p>
          </div>
        </div>
      </section>

      {/* Red Flags - White Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">Pricing Red Flags to Watch For</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Not all junk removal companies price the same way, and some practices should make you think twice before booking.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Requiring a deposit before the estimate.</strong> Legitimate companies provide free estimates. If someone wants money before they've even looked at your stuff, that's unusual. Deposits for scheduled work are normal — deposits just to show up and give a price are not.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Prices that change after work starts.</strong> Your quote should be locked in before anyone touches your junk. If a company gives you a price, starts loading, then says it's going to cost more — that's a classic bait-and-switch. Once they have your stuff in their truck, you have no leverage.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Vague pricing with no clear breakdown.</strong> You should understand what you're paying for. If someone can't explain their pricing or gets evasive when you ask questions, that's a problem. Straightforward companies have straightforward pricing.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Cash only, no receipt.</strong> Professional junk removal services operate like professional businesses. They take cards, provide receipts, and have proper insurance. Cash-only operations often cut corners elsewhere too.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              <strong>Dramatically lower prices than everyone else.</strong> If one company quotes half what others charge, ask yourself why. They might be planning to add fees later, might not be properly insured, might dump illegally, or might simply not show up. The cheapest quote often becomes the most expensive mistake.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work - Dark Blue Section */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">How We Handle Junk Removal Pricing</h2>

            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              Yes, this is our company's blog, so take this section with that in mind. But transparency is genuinely how we operate, and it's worth explaining.
            </p>

            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              We provide free estimates for junk removal anywhere in the Boise area. We come look at what you've got, give you a price, and that price is locked before we touch anything. If you approve it, we get to work. If not, no hard feelings.
            </p>

            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              The price we quote includes everything — labor, hauling, disposal fees, the whole job. We don't add charges after the fact. We don't have fuel surcharges or environmental fees that mysteriously appear on the invoice.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mt-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">Free on-site estimates</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">Price locked before work begins</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">All fees included in quote</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">Same-day service available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Line */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">The Bottom Line on Junk Removal Pricing</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Junk removal pricing isn't complicated once you understand the basics. Volume determines cost. Accessibility and item type can adjust it. Local disposal fees factor in.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              When comparing junk removal quotes in Boise, make sure you're comparing apples to apples. Ask what's included. Ask about potential additional fees. Ask what happens if there's more stuff than expected. A good company will have clear answers.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              The cheapest company isn't always the best value, and the most expensive isn't necessarily the best service. Look for transparent pricing, clear communication, proper insurance, and people who show up when they say they will. Those factors matter more than saving twenty bucks.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Get a few quotes. Ask questions. And when you're ready to get rid of that pile that's been bothering you for months, pick the company you feel best about working with.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-dark-blue to-light-blue">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Want a Quote for Your Junk Removal Project?
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              We'll come take a look and give you a real number. Free estimate, no obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:2083611982"
                className="inline-block bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold text-lg px-8 py-4 rounded-lg transition-colors"
              >
                Call (208) 361-1982
              </a>
              <span className="text-blue-100 self-center">Serving Boise, Meridian, Nampa & the Treasure Valley</span>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gunmetal mb-8 text-center">
            More Articles
          </h2>
          <div className="text-center">
            <Link
              href="/blogs"
              className="inline-flex items-center text-dark-blue font-semibold hover:text-light-blue transition-colors"
            >
              View All Posts
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
