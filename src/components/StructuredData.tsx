const cityCoordinates: Record<string, { lat: number; lng: number }> = {
  'Boise': { lat: 43.6150, lng: -116.2023 },
  'Meridian': { lat: 43.6121, lng: -116.3915 },
  'Nampa': { lat: 43.5407, lng: -116.5635 },
  'Caldwell': { lat: 43.6629, lng: -116.6874 },
  'Eagle': { lat: 43.6957, lng: -116.3535 },
}

const faqData = [
  { question: 'How much does junk removal cost?', answer: 'Junk removal pricing is based on how much space your items take in our truck. Most single-item pickups start around $75-100, while full truck loads range from $400-600. We provide exact quotes before starting any work.' },
  { question: 'What items do you take?', answer: 'We take almost everything: furniture, appliances, electronics, yard waste, construction debris, mattresses, hot tubs, and more. We cannot take hazardous materials like paint, chemicals, or asbestos.' },
  { question: 'Do you offer same-day junk removal?', answer: 'Yes! We offer same-day and next-day junk removal throughout the Treasure Valley. Call us at (208) 361-1982 for immediate service.' },
  { question: 'What happens to the items you remove?', answer: 'We donate usable items to local charities, recycle what we can, and only send true waste to the landfill. Typically less than 30% of what we collect goes to landfill.' },
  { question: 'Do I need to be home?', answer: 'Not necessarily. As long as items are accessible and payment is arranged, we can complete the job while you are away.' },
  { question: 'What areas do you serve?', answer: 'We serve Boise, Meridian, Nampa, Caldwell, Eagle, and surrounding Treasure Valley communities.' },
]

export function StructuredData({ city = 'Boise' }: { city?: string }) {
  const coords = cityCoordinates[city] || cityCoordinates['Boise']

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Junk Removal Pros - ${city}`,
    "description": `Professional junk removal services in ${city}, Idaho. Fast, affordable junk hauling. Licensed and insured.`,
    "url": "https://boise-junk-removal.com",
    "telephone": "+1-208-361-1982",
    "email": "info@boise-junk-removal.com",
    "address": { "@type": "PostalAddress", "addressLocality": city, "addressRegion": "ID", "addressCountry": "US" },
    "geo": { "@type": "GeoCoordinates", "latitude": coords.lat, "longitude": coords.lng },
    "areaServed": [
      { "@type": "City", "name": "Boise", "addressRegion": "ID" },
      { "@type": "City", "name": "Meridian", "addressRegion": "ID" },
      { "@type": "City", "name": "Nampa", "addressRegion": "ID" },
      { "@type": "City", "name": "Caldwell", "addressRegion": "ID" },
      { "@type": "City", "name": "Eagle", "addressRegion": "ID" }
    ],
    "serviceType": ["Junk Removal", "Furniture Removal", "Appliance Removal", "Yard Waste Removal", "Construction Debris Removal"],
    "priceRange": "$$",
    "openingHoursSpecification": [{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], "opens": "08:00", "closes": "21:00" }],
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "150" }
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Junk Removal Services",
    "provider": { "@type": "LocalBusiness", "name": "Junk Removal Pros" },
    "areaServed": { "@type": "State", "name": "Idaho" },
    "description": `Professional junk removal and hauling services in ${city} and the Treasure Valley.`
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((faq) => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  )
}
