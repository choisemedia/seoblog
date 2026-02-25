"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatedSection } from "@/components/animated-section";
import { caseStudies, certificates, faqs, processSteps, reviews, services, trustedPlatforms } from "@/lib/data";
import { motion } from "framer-motion";

export function LandingSections() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <AnimatedSection id="trusted" className="space-y-8" delay={0.2}>
        <h2 className="text-3xl font-semibold">Trusted by growth teams</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" itemScope itemType="https://schema.org/Organization">
          {trustedPlatforms.map((platform) => (
            <article key={platform.name} className="rounded-2xl border border-black/10 dark:border-white/10 p-5 bg-card/40">
              <Image src="/logos/platform.svg" width={84} height={28} alt={platform.alt} className="mb-4 h-7 w-auto" />
              <p className="text-sm text-muted">{platform.name}</p>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="space-y-6" delay={0.2}>
        <h2 className="text-3xl font-semibold">Certificates</h2>
        <ul className="space-y-3">
          {certificates.map((certificate) => (
            <li key={certificate.title} className="rounded-2xl p-4 bg-card/50 border border-black/10 dark:border-white/10" itemScope itemType="https://schema.org/EducationalOccupationalCredential">
              <p className="font-medium" itemProp="name">{certificate.title}</p>
              <p className="text-sm text-muted">
                Issued by <span itemProp="recognizedBy">{certificate.issuer}</span> · <time itemProp="dateCreated">{certificate.date}</time>
              </p>
            </li>
          ))}
        </ul>
      </AnimatedSection>

      <AnimatedSection id="cases" className="space-y-8" delay={0.2}>
        <h2 className="text-3xl font-semibold">Case studies</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {caseStudies.map((item) => (
            <article key={item.client} className="rounded-3xl p-6 bg-card/50 border border-black/10 dark:border-white/10" itemScope itemType="https://schema.org/Review">
              <h3 className="text-xl font-medium" itemProp="author">{item.client}</h3>
              <div className="mt-4 flex items-end gap-6 text-sm">
                <p>Before: <span className="font-semibold">{item.before.toLocaleString()}</span></p>
                <p>After: <span className="font-semibold">{item.after.toLocaleString()}</span></p>
              </div>
              <motion.p
                initial={{ opacity: 0.4 }}
                whileInView={{ opacity: 1 }}
                className="mt-3 text-4xl font-semibold text-accent"
              >
                +{item.growth}%
              </motion.p>
              <p className="mt-3 text-sm text-muted" itemProp="reviewBody">{item.summary}</p>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="space-y-6" delay={0.2}>
        <h2 className="text-3xl font-semibold">Client reviews</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {reviews.map((review) => (
            <article key={review.name} className="rounded-3xl p-6 bg-card/50 border border-black/10 dark:border-white/10" itemScope itemType="https://schema.org/Review">
              <div className="flex items-center gap-4">
                <Image src={review.image} width={48} height={48} alt={`${review.name} portrait`} className="rounded-full" />
                <div>
                  <p className="font-medium" itemProp="author">{review.name}</p>
                  <p className="text-sm text-muted">{review.company}</p>
                </div>
              </div>
              <p className="mt-4 text-muted" itemProp="reviewBody">{review.text}</p>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection id="services" className="space-y-8" delay={0.2}>
        <h2 className="text-3xl font-semibold">Services</h2>
        <div className="space-y-5">
          {services.map((service) => (
            <article key={service.title} className="rounded-3xl border border-black/10 dark:border-white/10 bg-card/50 p-6" itemScope itemType="https://schema.org/Service">
              <h3 className="text-2xl font-medium" itemProp="name">{service.title}</h3>
              <p className="mt-3 text-muted" itemProp="description">{service.description}</p>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="space-y-6" delay={0.2}>
        <h2 className="text-3xl font-semibold">Our process</h2>
        <ol className="grid gap-4 md:grid-cols-4">
          {processSteps.map((step, index) => (
            <li key={step} className="rounded-2xl p-4 border border-black/10 dark:border-white/10 bg-card/40">
              <p className="text-xs text-accent">Step {index + 1}</p>
              <p className="mt-2 font-medium">{step}</p>
            </li>
          ))}
        </ol>
      </AnimatedSection>

      <AnimatedSection id="faq" className="space-y-6" delay={0.2}>
        <h2 className="text-3xl font-semibold">FAQ</h2>
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const expanded = openFaq === index;
            return (
              <article key={faq.question} className="rounded-2xl border border-black/10 dark:border-white/10 bg-card/50 p-4">
                <button
                  aria-expanded={expanded}
                  aria-controls={`faq-${index}`}
                  className="w-full text-left font-medium"
                  onClick={() => setOpenFaq(expanded ? null : index)}
                >
                  {faq.question}
                </button>
                <p id={`faq-${index}`} className="mt-3 text-muted">
                  {faq.answer}
                </p>
              </article>
            );
          })}
        </div>
      </AnimatedSection>

      <AnimatedSection className="rounded-3xl bg-accent text-white p-10 text-center space-y-5" delay={0.2}>
        <h2 className="text-4xl font-semibold">Ready to scale predictable SEO revenue?</h2>
        <p className="text-white/90">Get a custom roadmap in 48 hours with priorities tied to pipeline impact.</p>
        <button className="rounded-full bg-white text-black px-6 py-3 font-medium hover:scale-[1.03] transition-transform">Book strategy call</button>
      </AnimatedSection>
    </>
  );
}
