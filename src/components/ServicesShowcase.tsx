import Image from 'next/image'
import { Button } from '@/components/ui/button'

const services = [
  { title: 'Electronics & E-Waste', description: 'Old TVs, computers, monitors, printers, and electronics piling up? We haul it all away responsibly. E-waste requires special handling, and we make sure everything gets recycled or disposed of properly. No more letting outdated tech collect dust in your closet.', image: '/generated/electronics-ewaste.webp', link: 'tel:2083611982', buttonText: 'Call Now' },
  { title: 'Basement & Attic Cleanout', description: 'Those spaces where stuff goes to be forgotten? We clear them out. Old boxes, holiday decorations you\'ll never use again, that exercise equipment from 2015—we haul it all away so you can finally reclaim that storage space.', image: '/generated/basement-cleanout.webp', link: 'tel:2083611982', buttonText: 'Call Now' },
  { title: 'Yard Waste Removal', description: 'Tree branches, leaves, dirt, sod, bushes, landscaping debris—we\'ll clear it all out. Perfect for post-storm cleanup, landscaping projects, or general yard maintenance. We haul it away so you don\'t have to make multiple dump runs.', image: '/generated/yard-waste.webp', link: 'tel:2083611982', buttonText: 'Call Now' },
  { title: 'Garage Cleanout', description: 'Years of accumulated stuff in your garage? We\'ll clear it all out—old tools, boxes, holiday decorations, broken equipment, whatever you\'ve got. We sort, haul, and dispose of everything so you can actually park in your garage again.', image: '/generated/garage-cleanout.webp', link: 'tel:2083611982', buttonText: 'Call Now' },
]

export function ServicesShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark-blue mb-4 uppercase" style={{textShadow: '2px 2px 3px rgba(0,0,0,0.3), 1px 1px 2px rgba(0,0,0,0.2)'}}>Serving Boise and Surrounding Areas</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">From Boise to the scenic stretches of the Treasure Valley, we provide fast, affordable junk removal services!</p>
        </div>

        <div className="max-w-7xl mx-auto space-y-16">
          {services.map((service, index) => (
            <div key={service.title} className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <h3 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] lg:hidden w-full">{service.title}</h3>
              <div className={`relative w-full ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative aspect-[4/3]">
                  <Image src={service.image} alt={service.title} fill loading={index === 0 ? "eager" : "lazy"} className="object-contain" sizes="(max-width: 768px) 100vw, 50vw" quality={85} />
                </div>
              </div>
              <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <h3 className="hidden lg:block text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed text-lg mb-8">{service.description}</p>
                <a href={service.link} className="inline-block bg-[#FFC845] hover:bg-[#e5b13d] text-black font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 uppercase tracking-wide">{service.buttonText}</a>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-row gap-4 justify-center mt-16">
          <Button asChild size="lg" className="bg-ub-yellow hover:bg-ub-yellow/90 text-black font-bold text-lg px-10 py-6 rounded-lg uppercase border-4 border-ub-yellow">
            <a href="tel:2083611982"><span className="md:hidden">Call Now</span><span className="hidden md:inline">(208) 361-1982</span></a>
          </Button>
        </div>
      </div>
    </section>
  )
}
