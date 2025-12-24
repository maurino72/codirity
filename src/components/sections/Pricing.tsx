import { Section, Container } from "@/components/layout";
import { SectionHeader } from "@/components/ui";
import { PricingCard } from "./PricingCard";

const CAL_LINK = "support-codirity-lz8rjc/30min";

const plans = [
  {
    name: "Let's Talk",
    price: "Let's Talk",
    description:
      "We'll build a project tailored to your specific needs. Tell us about your vision and let's create something great together.",
    features: [],
    ctaText: "Book a Call",
    ctaHref: "#contact",
    calLink: CAL_LINK,
    featured: true,
  },
];

export function Pricing() {
  return (
    <Section id="pricing" variant="default" className="reveal">
      <Container size="narrow">
        <SectionHeader
          label="Pricing"
          title="Simple, Transparent Pricing"
          description="Ready to build something great? Let's discuss your project."
          className="mb-16"
        />

        <div className="max-w-lg mx-auto">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              name={plan.name}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              ctaText={plan.ctaText}
              ctaHref={plan.ctaHref}
              calLink={plan.calLink}
              featured={plan.featured}
              className="reveal"
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
