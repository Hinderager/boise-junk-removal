import { Metadata } from 'next'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'
import Image from 'next/image'
import Link from 'next/link'
import { Home, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'The Boise Homeowner\'s Guide to Decluttering | Junk Removal Pros',
  description: 'A practical room-by-room decluttering guide for Boise homeowners. Learn how to tackle clutter in your garage, basement, and every room — with tips that actually work.',
  alternates: {
    canonical: 'https://boise-junk-removal.com/blogs/decluttering-guide-boise',
  },
}

export default function BlogPost() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/decluttering-guide.webp"
          alt="Decluttering Guide for Boise Homeowners"
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
            The Boise Homeowner's Guide to Decluttering
          </h1>
          <p className="text-white/80 text-lg mt-4 max-w-2xl">
            A practical room-by-room approach that actually works.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Every Boise homeowner knows the feeling. You open the garage door and immediately feel that wave of guilt. The spare bedroom hasn't been usable in years. The basement is a maze of boxes you haven't opened since you moved in.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Decluttering feels overwhelming because most advice treats it like a weekend project. "Just go through everything and decide what sparks joy!" Sure, that sounds nice. But when you're staring at fifteen years of accumulated stuff, philosophical approaches don't cut it.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              This guide is different. It's built for Treasure Valley homeowners with real homes, real schedules, and real amounts of stuff. Here's how to actually get it done.
            </p>
          </div>
        </div>
      </section>

      {/* Why Decluttering Is Hard - Gradient Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <Home className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-dark-blue">Why Decluttering Feels So Hard</h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Before diving into the how-to, it helps to understand why decluttering is genuinely difficult. It's not just laziness or poor time management.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Decision fatigue is real.</strong> Every item requires a choice: keep, donate, trash, or "maybe." After fifty decisions, your brain is exhausted and defaults to "I'll deal with this later." That's why most decluttering attempts stall out after an hour.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Emotional attachment complicates everything.</strong> That broken lamp isn't just a lamp — it's from your grandmother's house. Those old textbooks represent money you spent and ambitions you had. Getting rid of things can feel like erasing parts of your history.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>The logistics are genuinely complicated.</strong> Even if you decide to get rid of something, then what? Some things can be donated, some need special disposal, some might be worth selling. Figuring this out for each item is exhausting.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Understanding these challenges helps you plan around them instead of just pushing through until you burn out.
            </p>
          </div>
        </div>
      </section>

      {/* The Room-by-Room Approach - White Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">The Room-by-Room Approach</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Trying to declutter your entire house at once is a recipe for failure. Instead, work through one room at a time. Complete it before moving to the next. This gives you visible progress and prevents the "tornado hit my house" phase that makes people give up.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Start with the easiest room.</strong> For most Boise homeowners, this isn't the garage — that's usually the hardest. Start with a guest bathroom, a mudroom, or a small closet. Getting one space completely done builds momentum and proves to yourself that this is actually possible.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Set time limits.</strong> Work in 90-minute sessions maximum. Your decision-making quality drops sharply after that. It's better to do four focused sessions over a week than one exhausting eight-hour day where you end up keeping everything because you're too tired to think.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              <strong>Create sorting zones.</strong> Every session needs four areas: keep, donate, trash, and "deal with later." That last category is important — it lets you move forward on easy decisions without getting stuck on hard ones. You can revisit the "deal with later" pile when you have more energy.
            </p>
          </div>
        </div>
      </section>

      {/* Garage Section - Gray */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">Decluttering Your Garage</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The garage is where good intentions go to die. Exercise equipment that became a clothes rack. Holiday decorations mixed with old paint cans. Tools you bought for projects you never started. Most Boise garages are holding five times more stuff than they should.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Pull everything out.</strong> Yes, everything. This is the only way to actually see what you have. Ideally, do this on a dry Boise day when you can spread things across the driveway. Seeing it all at once is jarring, but that shock is useful — it forces honest assessment.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Apply the "last year" test.</strong> For tools, sports equipment, and hobby supplies, ask: "Have I used this in the last year?" If not, you probably won't. That kayak you paddled once in 2019 is taking up space you could actually use.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Be realistic about repairs.</strong> That lawnmower you've been meaning to fix? Either schedule the repair this week or let it go. "Someday" projects rarely happen, and broken items are clutter dressed up as potential.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              <strong>Watch for hazardous materials.</strong> Old paint, pesticides, motor oil, and solvents need proper disposal. The Ada County Landfill has specific drop-off times for household hazardous waste — don't just throw this stuff in the trash.
            </p>
          </div>
        </div>
      </section>

      {/* Basement/Storage Section - White */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">Tackling the Basement and Storage Areas</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Basements are tricky because things disappear down there. Out of sight, out of mind — until you need to find something or realize you're paying to store boxes of stuff you forgot you owned.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Open every box.</strong> Sealed boxes that haven't been opened in years are prime candidates for removal. If you didn't need anything in that box for five years, you don't need what's in it. The "I might need it someday" box is almost always a "I will never open this again" box.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Consolidate categories.</strong> You probably have Christmas decorations in six different spots. Kids' old school work in four boxes. Holiday dishes mixed with camping gear. Part of decluttering is creating logical groupings so you know what you actually have.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Set limits for sentimental items.</strong> You don't need to keep every piece of your kids' artwork or every card anyone ever gave you. Choose the best examples, photograph the rest if you want a record, and let the physical items go. One box of meaningful keepsakes is valuable; ten boxes of random papers is clutter.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              <strong>Check for water damage.</strong> Boise basements can have moisture issues. Anything with mold, mildew, or water damage should go immediately — it's not worth the health risk to keep.
            </p>
          </div>
        </div>
      </section>

      {/* What Goes Where - Gradient Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">Where Does All This Stuff Go?</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Once you've sorted, you need to actually get things out of your house. This is where many decluttering projects stall — bags sit by the door for weeks, "donate" piles migrate to the garage, and gradually everything creeps back.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Donations in Boise.</strong> Idaho Youth Ranch and Goodwill both accept furniture, clothes, and household items. The Boise Rescue Mission takes many items. For larger furniture in good condition, Habitat for Humanity ReStore is an option. But be honest about condition — donation centers aren't dumping grounds for broken junk.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Selling high-value items.</strong> Facebook Marketplace works well for furniture and electronics in the Boise area. But be realistic — the time spent photographing, posting, messaging, and coordinating pickups adds up fast. For most items, it's not worth it unless they're worth at least $50.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Trash and recycling.</strong> Ada County has specific guidelines about what goes where. Large items often require a trip to the landfill. Electronics need special e-waste recycling. Knowing this in advance prevents bags of trash sitting around while you figure it out.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              <strong>When the pile is too big.</strong> If you're looking at multiple truck loads worth of stuff, doing it yourself becomes a multi-day project involving rentals, dump fees, and a lot of heavy lifting. At that point, junk removal services actually save time and often money.
            </p>
          </div>
        </div>
      </section>

      {/* Junk Removal Service Section - Dark Blue */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">When to Call a Junk Removal Service</h2>

            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              Yes, we're a junk removal company writing this. But there's a reason professional decluttering services exist, and it's not just because people are lazy.
            </p>

            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              Time has value. If you're choosing between spending two weekends hauling stuff to the dump or paying someone to handle it in a few hours, the math often favors the professional option. Especially when you factor in truck rental, dump fees, and the physical toll of moving heavy items.
            </p>

            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              We handle the logistics you don't want to think about. What can be donated versus trashed? Where does the old mattress go? What about that ancient TV? We deal with this daily, so you don't have to figure it out.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mt-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">Same-day service available</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">We donate usable items</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">Proper disposal of everything</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">You don't lift a thing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Staying Decluttered - White Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">Staying Decluttered After You're Done</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The worst feeling is doing all that work only to end up back where you started a few years later. Maintenance is easier than another major decluttering session.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>One in, one out.</strong> For every new item that enters your house, something should leave. This doesn't have to be rigid, but keeping it in mind prevents gradual accumulation.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Schedule regular purges.</strong> A seasonal walk-through of closets, the garage, and storage areas catches accumulation before it becomes overwhelming. Fifteen minutes quarterly is easier than a weekend annually.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              <strong>Be honest about future projects.</strong> That craft you're going to take up, that equipment for a hobby you'll start — if you haven't done it in a year, you probably won't. It's okay to let go of who you thought you'd become.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Line */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">The Bottom Line</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Decluttering your Boise home is absolutely doable. It takes honest assessment, realistic expectations, and breaking the work into manageable pieces. You don't have to do it all at once, and you don't have to do it alone.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Start with one room. Work in focused sessions. Make decisions about the easy stuff first. And when you hit the point where the pile is bigger than your patience, call for backup.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Your home should work for you, not the other way around. Every box you remove is space you get back.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-dark-blue to-light-blue">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Clear Out the Clutter?
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              We'll haul it away so you don't have to. Free estimates, same-day service available.
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
