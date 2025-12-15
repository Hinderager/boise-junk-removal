import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Same-Day Junk Removal in Boise: When You Need It Gone Now | Junk Removal Pros',
  description: 'Need junk removed today in Boise? Here\'s how same-day junk removal works, what it costs, and when it makes sense to call for immediate service.',
  alternates: {
    canonical: 'https://boise-junk-removal.com/blogs/same-day-junk-removal',
  },
}

export default function BlogPost() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/same-day-service.webp"
          alt="Same-Day Junk Removal in Boise"
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
            Same-Day Junk Removal in Boise
          </h1>
          <p className="text-white/80 text-lg mt-4 max-w-2xl">
            When you need it gone now, not next week.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Sometimes you can't wait. The house closes tomorrow and there's still a garage full of junk. The new appliance arrives today and the old one needs to go. You finally snapped looking at that pile and want it gone before you change your mind.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Same-day junk removal exists for exactly these situations. You call in the morning, and by afternoon your stuff is gone. No waiting for a dumpster delivery, no scheduling a pickup for next week, no living with the problem any longer than you have to.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Here's how it actually works in the Boise area, what you can expect to pay, and when same-day service makes sense versus scheduling ahead.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works - Gradient Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-dark-blue">How Same-Day Service Works</h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The process is straightforward. You call us. We ask a few questions about what you need removed and where you're located in the Treasure Valley. If we have availability — which we usually do — we give you a time window for that day.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              A crew shows up with a truck. They look at your stuff and give you a firm price before touching anything. If you approve, they load it up. If you don't like the price, no hard feelings — you don't pay anything and we leave.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Once loaded, the crew sweeps up and takes everything away. You're not responsible for hauling, sorting, or disposal. The whole process typically takes 30 minutes to a couple hours depending on how much stuff you have.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              That's it. No multi-day process, no waiting around. You call, we come, your junk is gone.
            </p>
          </div>
        </div>
      </section>

      {/* When You Need Same-Day - White Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">When Same-Day Junk Removal Makes Sense</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Not every junk removal job needs same-day service. But certain situations call for immediate action:
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Real estate deadlines.</strong> You're closing on a house and it needs to be empty. Or you're a realtor getting a property market-ready. Or tenants just moved out and left behind more than they should have. When there's a deadline tied to money, waiting isn't an option.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>New furniture or appliances arriving.</strong> The delivery truck is coming this afternoon with your new refrigerator. The old one can't stay in the middle of the kitchen. Same-day removal makes the swap seamless.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Safety hazards.</strong> A broken hot tub is a drowning risk. A collapsing shed is a danger. Old equipment with sharp edges or chemicals needs to go before someone gets hurt. These situations don't wait for convenient scheduling.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>The motivation window.</strong> You know how it works. You finally get fed up with the clutter, decide it's time to deal with it, and have about four hours of motivation before it fades. Same-day service lets you act on that impulse before "I'll do it later" kicks in.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              <strong>Unexpected needs.</strong> A water heater bursts. A tree falls. A relative's situation suddenly requires cleaning out their home. Life doesn't always give advance notice that junk removal will be needed.
            </p>
          </div>
        </div>
      </section>

      {/* Availability - Gray Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">Same-Day Availability in the Boise Area</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We offer same-day junk removal throughout the Treasure Valley — Boise, Meridian, Nampa, Caldwell, Eagle, and surrounding areas. But availability does depend on a few factors.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Time of day matters.</strong> If you call at 8 AM, same-day service is almost always available. If you call at 4 PM, it might be too late to fit you in. Earlier calls mean more scheduling flexibility.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Day of week affects availability.</strong> Weekends are busier than weekdays. Monday mornings often have more availability than Saturday afternoons. If your situation allows any flexibility, weekdays usually work better for same-day requests.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Season matters too.</strong> Spring cleaning season and end-of-year are busier periods. Summer moving season keeps trucks running. If you're calling during a busy time, there might be a waitlist — but it's usually hours, not days.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              <strong>Your location in the Treasure Valley.</strong> If you're in central Boise or Meridian, getting a crew to you quickly is easy. If you're in a more remote area of Ada or Canyon County, travel time factors in. We'll always tell you upfront what's realistic.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing - White Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">Does Same-Day Service Cost More?</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              This is the question everyone asks. The honest answer: it depends on the company, but with us — no, same-day doesn't cost extra.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Our pricing is based on volume — how much space your stuff takes in our truck. A half-truck load costs the same whether we schedule it three weeks out or show up this afternoon. We don't add "rush fees" or "emergency surcharges."
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Some companies do charge premium pricing for same-day service. If you're getting quotes, ask directly: "Is there an additional fee for today versus scheduling later this week?" Legitimate companies will give you a straight answer.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              For typical same-day jobs in the Boise area, expect pricing similar to standard junk removal: single items run $75-150, quarter truck loads $150-250, half trucks $250-400, and full trucks $400-600+. These are the same rates regardless of timing.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              The only time urgency might affect pricing is if you need service outside normal business hours — weekend evenings or very early mornings. Even then, many companies (including us) try to accommodate without crazy upcharges.
            </p>
          </div>
        </div>
      </section>

      {/* What We Can Take - Gradient Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">What Can Be Removed Same-Day?</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Almost everything. The same items we'd take on a scheduled pickup, we can take same-day:
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Furniture.</strong> Couches, mattresses, recliners, dining sets, desks, dressers — basically anything you'd find in a house. Doesn't matter if it's heavy, awkward, or up three flights of stairs.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Appliances.</strong> Refrigerators, washers, dryers, dishwashers, water heaters, AC units. We handle disconnecting if needed (though you'll want water shut off beforehand for water heaters and washing machines).
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Electronics.</strong> TVs, computers, monitors, printers — all the e-waste that can't go in regular trash. We ensure proper recycling.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Yard debris.</strong> Branches, brush, old fencing, landscaping waste. If it fits in the truck, we take it.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              <strong>General junk.</strong> The miscellaneous stuff that accumulates — boxes, storage containers, broken equipment, exercise machines, random garage contents. You don't need to sort or categorize. Just point at what goes.
            </p>
          </div>
        </div>
      </section>

      {/* Our Same-Day Service - Dark Blue Section */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Same-Day Promise</h2>

            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              We built our business around being available when people need us — not just when it's convenient for our schedule. Same-day service isn't a premium add-on; it's how we operate.
            </p>

            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              When you call, we'll tell you honestly whether same-day is possible. If it is, we'll give you a time window and stick to it. If it's not, we'll offer the earliest available slot — usually next day at the latest.
            </p>

            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              We serve the entire Treasure Valley with same-day availability: Boise, Meridian, Nampa, Caldwell, Eagle, Garden City, Kuna, Star, and surrounding communities.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mt-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">Same-day service, no extra fee</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">Price quoted before we start</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">Full-service: we do all lifting</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">Responsible disposal included</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Line */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">The Bottom Line</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Same-day junk removal in Boise is available, affordable, and straightforward. You don't need to live with clutter because you're waiting for a convenient time. When you're ready for it to be gone, it can be gone today.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Call early in the day for the best chance at same-day service. Be ready with a rough idea of what needs to go and where it's located. And expect the whole process to take a couple hours at most.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Whether it's a deadline forcing your hand or just the right moment to finally deal with that pile, same-day service means you don't have to wait to take action.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-dark-blue to-light-blue">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Need It Gone Today?
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              Call now for same-day junk removal in the Treasure Valley. No rush fees, no surprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:2083611982"
                className="inline-block bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold text-lg px-8 py-4 rounded-lg transition-colors"
              >
                Call (208) 361-1982
              </a>
              <span className="text-blue-100 self-center">Free estimates • Same-day available</span>
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
