import { Metadata } from 'next'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'
import Image from 'next/image'
import Link from 'next/link'
import { Trash2, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'What Will Junk Removal Companies Actually Take? | Junk Removal Pros',
  description: 'Complete list of items junk removal companies in Boise will take — furniture, appliances, electronics, yard waste, and more. Plus what they won\'t accept.',
  alternates: {
    canonical: 'https://boise-junk-removal.com/blogs/what-junk-removal-companies-take',
  },
}

export default function BlogPost() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/items-we-take.webp"
          alt="What Junk Removal Companies Take"
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
            What Will Junk Removal Companies Actually Take?
          </h1>
          <p className="text-white/80 text-lg mt-4 max-w-2xl">
            The short answer: almost everything. Here's the full breakdown.
          </p>
        </div>
      </section>

      <VisibleBreadcrumb />
      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              You're looking around at the stuff you need gone, wondering if a junk removal company will actually take it. The couch is obvious. But what about that old water heater? The broken treadmill? The pile of random stuff in the garage that you're not even sure how to categorize?
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Good news: junk removal companies in Boise take far more than most people expect. We're not limited to the narrow restrictions of curbside pickup or dumpster rental. The whole point is to handle the stuff that's hard to get rid of through normal channels.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Here's a comprehensive list of what junk removal companies will take, what requires special handling, and the few things we typically can't accept.
            </p>
          </div>
        </div>
      </section>

      {/* Furniture Section - Gradient */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <Trash2 className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-dark-blue">Furniture (Yes, All of It)</h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Furniture is the bread and butter of junk removal. We take it all:
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Living room:</strong> Sofas, couches, sectionals, love seats, recliners, armchairs, coffee tables, end tables, entertainment centers, TV stands, bookshelves. Doesn't matter if they're heavy, oversized, or in rough shape.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Bedroom:</strong> Mattresses (all sizes), box springs, bed frames, headboards, dressers, nightstands, armoires, vanities. Mattresses are particularly common because they're hard to dispose of otherwise.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Dining room:</strong> Tables, chairs, hutches, buffets, china cabinets. Yes, even the massive oak dining set your grandmother left you.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              <strong>Office:</strong> Desks, office chairs, filing cabinets, cubicle components, conference tables. We handle both home office and commercial furniture removal in the Boise area.
            </p>
          </div>
        </div>
      </section>

      {/* Appliances Section - White */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">Appliances and Equipment</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Appliances are tricky to dispose of yourself because many contain refrigerants or other components that require proper handling. We deal with this constantly.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Kitchen appliances:</strong> Refrigerators, freezers, stoves, ovens, microwaves, dishwashers, garbage disposals, range hoods. The refrigerator in the garage that hasn't worked since 2015? Yes, we take it.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Laundry:</strong> Washers, dryers, and the old ones that you replaced but never got rid of. We handle disconnecting if needed (just make sure water is shut off first).
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Climate control:</strong> Water heaters, AC units, portable heaters, dehumidifiers, air purifiers. These often have components that need proper disposal — we handle all of that.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              <strong>Outdoor equipment:</strong> Grills, smokers, patio heaters, fire pits, outdoor furniture. Rusted, broken, or just outdated — doesn't matter.
            </p>
          </div>
        </div>
      </section>

      {/* Electronics Section - Gray */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">Electronics and E-Waste</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Electronics can't go in regular trash — they contain materials that need proper recycling. But they also can't go in most dumpsters. Junk removal companies bridge that gap.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>TVs and monitors:</strong> Old CRT televisions, flat screens, computer monitors. The old tube TVs are especially hard to get rid of, and we take them without issue.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Computers:</strong> Desktops, laptops, servers, all components. We recommend wiping your data first, but we handle the physical disposal and ensure proper e-waste recycling.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Office electronics:</strong> Printers, copiers, fax machines, scanners, shredders. The massive office printer from 2008 that no one knows how to move? We'll handle it.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              <strong>Other electronics:</strong> Stereo equipment, speakers, gaming systems, VCRs, DVD players, cable boxes. All the tech that accumulated over the years.
            </p>
          </div>
        </div>
      </section>

      {/* Yard and Outdoor Section - White */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">Yard Waste and Outdoor Items</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Boise homeowners often don't realize junk removal companies handle yard projects too:
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Yard debris:</strong> Branches, brush, leaves, grass clippings (bagged or loose), storm debris. After a big wind storm or tree trimming project, we can clear it out.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Landscaping materials:</strong> Old mulch, dirt (within reason), rocks, pavers, landscape timbers, old fencing, deck boards. The remnants of projects past.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Outdoor structures:</strong> Sheds (disassembled), playsets, swing sets, trampolines, above-ground pool components, gazebo frames. We don't do demolition, but if it's already apart, we'll haul it.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              <strong>Outdoor furniture:</strong> Patio sets, lawn chairs, umbrellas, cushions, planters. The stuff that's been weathering for too many seasons.
            </p>
          </div>
        </div>
      </section>

      {/* Specialty Items - Gradient */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">Specialty and Heavy Items</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              These are the items people often assume they can't get removed easily. They're wrong.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Hot tubs and spas:</strong> We break them down on-site and haul them away. This is one of our most common specialty requests in the Treasure Valley.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Exercise equipment:</strong> Treadmills, ellipticals, weight benches, home gyms, stationary bikes. These are heavy and awkward — exactly why junk removal exists.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Pianos:</strong> Uprights, spinets, organs. These require special handling due to weight, but we do it regularly.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Safes:</strong> Heavy floor safes, gun safes. As long as they're unlocked and empty, we can remove them.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              <strong>Medical equipment:</strong> Hospital beds, wheelchairs, mobility scooters, lift chairs. Common after a family member no longer needs them.
            </p>
          </div>
        </div>
      </section>

      {/* What We DON'T Take - Dark Blue */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">What Junk Removal Companies Won't Take</h2>

            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              There are some things we legally can't take, or that require specialized disposal beyond what junk removal covers:
            </p>

            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              <strong>Hazardous materials.</strong> Chemicals, solvents, pesticides, herbicides, pool chemicals, certain cleaning products. These need to go to Ada County's household hazardous waste facility.
            </p>

            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              <strong>Flammable and explosive items.</strong> Propane tanks (unless empty and valve-open), gasoline, fireworks, ammunition. These are safety issues that require special handling.
            </p>

            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              <strong>Biological waste.</strong> Medical sharps, biohazardous materials. These need proper medical waste disposal.
            </p>

            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              <strong>Asbestos materials.</strong> If you suspect asbestos in old insulation, tiles, or siding, you need an asbestos abatement specialist first.
            </p>

            <p className="text-lg text-blue-100 leading-relaxed">
              <strong>Major construction debris.</strong> We take incidental construction materials, but we're not a substitute for construction dumpsters on active job sites. For large renovation debris, dumpster rental is usually more appropriate.
            </p>
          </div>
        </div>
      </section>

      {/* When In Doubt - White */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">When You're Not Sure, Just Ask</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              If you have something weird that doesn't fit the categories above, call and ask. We've removed things that surprised even us — industrial equipment, theatrical props, vintage arcade machines, you name it.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              The worst that happens is we say "sorry, we can't take that" and point you toward who can. But more often than not, the answer is "yes, we'll handle it."
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              That's the whole point of junk removal — to take the stuff that's hard to get rid of on your own and make it someone else's problem (ours, specifically).
            </p>
          </div>
        </div>
      </section>

      {/* What We Take Summary - Gray */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">The Bottom Line</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Junk removal companies in Boise take almost everything you'd need to get rid of in a normal cleanout. Furniture, appliances, electronics, yard waste, specialty items — if it's taking up space and you want it gone, we can probably help.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              The main exceptions are hazardous materials and things that require specialized disposal for safety or legal reasons. For those, we'll help point you in the right direction.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Don't assume something is "too big" or "too weird" for junk removal. We've seen it all, and we're equipped to handle it.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-dark-blue to-light-blue">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Got Stuff You Need Gone?
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              Call us to find out if we can take it. (The answer is probably yes.)
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:2083611982"
                className="inline-block bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold text-lg px-8 py-4 rounded-lg transition-colors"
              >
                Call (208) 361-1982
              </a>
              <span className="text-blue-100 self-center">Free estimates • We take almost everything</span>
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
