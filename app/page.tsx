import { ThemeToggle } from "@/components/theme-toggle";
import { LandingSections } from "@/sections/landing-sections";
import { faqs, reviews, services } from "@/lib/data";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Northstar SEO",
  url: "https://example-seo.agency",
  description: "SEO agency delivering measurable growth for SaaS and B2B companies."
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer
    }
  }))
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: services.map((service, index) => ({
    "@type": "Service",
    position: index + 1,
    name: service.title,
    description: service.description
  }))
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: reviews.map((review, index) => ({
    "@type": "Review",
    position: index + 1,
    author: review.name,
    reviewBody: review.text,
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating,
      bestRating: 5
    }
  }))
};

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-8 md:py-12 space-y-24">
      <header className="flex justify-end">
        <ThemeToggle />
      </header>

      <section className="grid items-center gap-12 lg:grid-cols-2" aria-labelledby="hero-title">
        <div className="space-y-8">
          <p className="text-accent font-medium">SEO agency for measurable growth</p>
          <h1 id="hero-title" className="text-5xl sm:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight">
            Enterprise SEO that turns search demand into pipeline.
          </h1>
          <p className="text-lg text-muted max-w-xl">
            We help B2B and SaaS brands increase qualified organic traffic by 120–300% with technical SEO, authority growth, and conversion-focused content.
          </p>
          <button className="rounded-full bg-accent text-white px-7 py-3 font-medium shadow-glow hover:scale-[1.03] transition duration-300">
            Request growth plan
          </button>
        </div>
        <svg viewBox="0 0 400 320" className="w-full h-auto" role="img" aria-label="SEO growth chart animation">
          <defs>
            <linearGradient id="lineGrad" x1="0" x2="1">
              <stop offset="0%" stopColor="#4f7cff" />
              <stop offset="100%" stopColor="#76d4ff" />
            </linearGradient>
          </defs>
          <path d="M20 280 C 110 230, 140 200, 210 170 S 320 80, 380 40" fill="none" stroke="url(#lineGrad)" strokeWidth="8" strokeLinecap="round">
            <animate attributeName="stroke-dasharray" values="0,900;900,0" dur="2.5s" repeatCount="indefinite" />
          </path>
          <circle cx="300" cy="95" r="10" fill="#4f7cff">
            <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
          </circle>
        </svg>
      </section>

      <LandingSections />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
    </main>
  );
}
