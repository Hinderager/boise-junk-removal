import { Metadata } from 'next'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'
import Image from 'next/image'
import Link from 'next/link'
import { AlertTriangle, Brain, Clock, CheckCircle, Lightbulb, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Why Your Stuff Is Ruining Your Life (And What to Do About It) | Junk Removal Pros',
  description: 'That pile of junk in your garage isn\'t just taking up space. It\'s stealing your time, your energy, and possibly your sanity. Here\'s the honest truth about clutter.',
  alternates: {
    canonical: 'https://boise-junk-removal.com/blogs/why-your-stuff-is-ruining-your-life',
  },
}

export default function BlogPost() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/hero.webp"
          alt="Why Your Stuff Is Ruining Your Life"
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
            Why Your Stuff Is Ruining Your Life
          </h1>
          <p className="text-white/80 text-lg mt-4 max-w-2xl">
            And what to do about it (hint: it's easier than you think)
          </p>
        </div>
      </section>

      <VisibleBreadcrumb />
      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Nobody plans to fill their garage with broken exercise equipment. It just sort of... happens.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              You buy a treadmill because this is your year. You keep the old crib because maybe there's another kid in the future. You hang onto that lawnmower because you'll definitely fix it. Eventually.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Then five years pass. The treadmill's a clothes rack now. The crib's buried under Christmas decorations. And that lawnmower? Still broken. Still there. Still silently judging you every time you squeeze past it.
            </p>
          </div>
        </div>
      </section>

      {/* The Hidden Cost - Highlighted Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-dark-blue">The Hidden Cost of Clutter</h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Here's what nobody tells you: that junk isn't just taking up space in your garage. <strong>It's taking up space in your head.</strong>
            </p>

            {/* Callout Box */}
            <div className="bg-white border-l-4 border-amber-400 p-6 rounded-r-lg shadow-sm mb-6">
              <p className="text-gray-700 italic">
                Every time you walk past that pile, part of your brain says "I really should do something about that." And then another part goes "Not today." Those two parts argue while you're just trying to find the holiday lights.
              </p>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Researchers have actually studied this. <span className="bg-yellow-100 px-1">Clutter raises cortisol levels</span> — that's your stress hormone. Your stuff is literally stressing you out, even when you're not thinking about it.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              You know that vague anxiety you can't put your finger on? That nagging sense something's off? Part of it might just be those 47 boxes in your basement screaming at you.
            </p>
          </div>
        </div>
      </section>

      {/* Why You Haven't Dealt With It */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gunmetal">Why You Haven't Dealt With It</h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              If getting rid of stuff was simple, you'd have done it already. Obviously.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              The problem is that junk isn't just junk. That broken guitar in the corner represents your brief dream of learning music. Those old toys are your kids' childhood in cardboard boxes. That exercise bike proves you once had good intentions.
            </p>

            {/* Quote Block */}
            <div className="relative py-8 px-6 mb-8">
              <div className="absolute top-0 left-0 text-8xl text-dark-blue/10 font-serif leading-none">"</div>
              <p className="text-2xl text-dark-blue font-medium text-center relative z-10">
                Getting rid of things feels like closing doors. Like admitting defeat.
              </p>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              But here's the thing — those doors are already closed. You're not picking up guitar at 47. Your kids moved on from those toys years ago. The bike hasn't moved since the Bush administration.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              The stuff isn't preserving possibilities. It's just reminding you of what could have been. And that reminder isn't helping anyone.
            </p>
          </div>
        </div>
      </section>

      {/* The Excuses Section */}
      <section className="py-12 md:py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-gray-900" />
              </div>
              <h2 className="text-3xl font-bold">The Excuses (You've Used Them Too)</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur">
                <p className="text-xl font-bold text-amber-400 mb-2">"I might need it someday."</p>
                <p className="text-gray-300">You haven't needed it in seven years. If you suddenly need a VCR, you can find one. Trust me.</p>
              </div>

              <div className="bg-white/10 rounded-lg p-6 backdrop-blur">
                <p className="text-xl font-bold text-amber-400 mb-2">"It's still perfectly good."</p>
                <p className="text-gray-300">Good for what exactly? For sitting in your garage? If it's so useful, why isn't anyone using it?</p>
              </div>

              <div className="bg-white/10 rounded-lg p-6 backdrop-blur">
                <p className="text-xl font-bold text-amber-400 mb-2">"I paid good money for that."</p>
                <p className="text-gray-300">That money's gone whether you keep it or not. Right now you're paying again — with space, with mental energy, with low-grade stress every single day.</p>
              </div>

              <div className="bg-white/10 rounded-lg p-6 backdrop-blur">
                <p className="text-xl font-bold text-amber-400 mb-2">"I'll deal with it later."</p>
                <p className="text-gray-300">How long has "later" been the plan? A year? Five? Ten?</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Actually Works */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gunmetal">What Actually Works</h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Most decluttering advice falls into two camps:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-800 font-medium">❌ Minimalist fantasy</p>
                <p className="text-red-600 text-sm mt-1">Reduce your life to 100 items and sleep on a floor mattress</p>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-800 font-medium">❌ "Spark joy" tips</p>
                <p className="text-red-600 text-sm mt-1">Sounds nice but doesn't help at 10 PM staring at a broken space heater</p>
              </div>
            </div>

            <div className="bg-green-50 border-2 border-green-400 rounded-lg p-6 mb-8">
              <p className="text-green-800 font-bold text-lg mb-2">✓ Here's what actually works:</p>
              <p className="text-green-700 text-xl font-medium">Remove the barriers.</p>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              You haven't dealt with your junk because dealing with it is hard. Think about what it would take:
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-600">Sort everything</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-600">Figure out disposal</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-600">Rent a truck</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-600">Multiple dump trips</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-600">Take time off work</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-600">Find help lifting</span>
                </div>
              </div>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              By the time your brain processes all that, it says "nope" and you end up watching Netflix instead. Completely reasonable, honestly. The solution isn't more willpower. <strong>The solution is to make the whole thing easier.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* The Shortcut */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">The Shortcut</h2>

            <p className="text-lg text-blue-100 leading-relaxed mb-8 text-center">
              Yes, this is a junk removal company's blog. But hear me out.
            </p>

            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur mb-8">
              <p className="text-xl text-center mb-8">
                The magic of professional junk removal isn't bigger trucks or stronger guys. It's that we compress what would be a <span className="text-amber-400 font-bold">month-long project</span> into <span className="text-amber-400 font-bold">one afternoon</span>.
              </p>

              <div className="flex items-center justify-center gap-4 text-2xl font-bold">
                <span className="text-white/60">You point</span>
                <span className="text-amber-400">→</span>
                <span className="text-white/60">We take</span>
                <span className="text-amber-400">→</span>
                <span className="text-green-400">Done</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">No figuring out mattress disposal</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">No loading heavy furniture</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">No three trips to the dump</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">No EPA refrigerator research</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens After */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-8 text-center">What Happens After</h2>

            <div className="space-y-4 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-green-500">
                <p className="text-lg text-gray-700">
                  <strong className="text-green-600">They sleep better.</strong> Not because their bedroom is cleaner (though sometimes it is). Because that nagging feeling is gone. That constant background noise of "I should deal with all that stuff" just... stops.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-blue-500">
                <p className="text-lg text-gray-700">
                  <strong className="text-blue-600">They feel lighter.</strong> Sounds like hippie talk until you experience it yourself. Turns out, the weight of your stuff isn't just physical.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-purple-500">
                <p className="text-lg text-gray-700">
                  <strong className="text-purple-600">They wish they'd done it sooner.</strong> Every single one of them says this. Nobody has ever called back and said "I really miss that broken treadmill."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Line */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">The Bottom Line</h2>

            <div className="text-xl text-gray-700 space-y-4 mb-8">
              <p>Your stuff is not who you are.</p>
              <p>Your memories don't live in objects.</p>
              <p>Your potential isn't stored in boxes.</p>
            </div>

            <p className="text-lg text-gray-600 mb-8">
              The things you own are supposed to serve you. When they stop serving you, they start draining you.
            </p>

            <div className="bg-gray-100 rounded-2xl p-8">
              <p className="text-lg text-gray-700 mb-4">
                That garage full of junk? That basement you haven't seen the floor of? That spare room that became a dumping ground?
              </p>
              <p className="text-xl font-bold text-dark-blue">
                Those aren't permanent. They're just problems waiting for solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-dark-blue to-light-blue">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Get Your Space Back?
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              We show up, take your stuff, and leave. It really is that simple.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:2083611982"
                className="inline-block bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold text-lg px-8 py-4 rounded-lg transition-colors"
              >
                Call (208) 361-1982
              </a>
              <span className="text-blue-100 self-center">Free estimates • Same-day service</span>
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
