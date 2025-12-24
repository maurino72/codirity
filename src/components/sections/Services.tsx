import { Monitor, Code2, Target, Box } from "lucide-react";
import { Section, Container } from "@/components/layout";
import { SectionHeader } from "@/components/ui";
import { ServiceCard } from "./ServiceCard";

const services = [
  {
    icon: <Monitor className="w-7 h-7" strokeWidth={2} />,
    title: "Intelligent Process Automation",
    description:
      "Stop wasting hours on repetitive tasks. We build AI-powered workflows that handle document processing, data entry, customer responses, and more—so your team can focus on work that actually moves the needle.",
    linkText: "Discuss your automation needs",
    linkHref: "#contact",
    featured: true,
  },
  {
    icon: <Code2 className="w-7 h-7" strokeWidth={2} />,
    title: "Custom System Development",
    description:
      "Off-the-shelf software doesn't fit every business. We build tailored systems that solve your specific problems and integrate seamlessly with what you already use.",
    linkText: "Start your project",
    linkHref: "#contact",
  },
  {
    icon: <Target className="w-7 h-7" strokeWidth={2} />,
    title: "AI Integration",
    description:
      "Make your existing tools smarter. We embed AI capabilities like predictive analytics, natural language processing, and intelligent automation into your current stack.",
    linkText: "Explore AI solutions",
    linkHref: "#contact",
  },
  {
    icon: <Box className="w-7 h-7" strokeWidth={2} />,
    title: "Legacy Modernization",
    description:
      "Outdated systems slow you down. We migrate and upgrade your technology without disrupting operations—preserving your data while unlocking modern capabilities.",
    linkText: "Modernize now",
    linkHref: "#contact",
  },
];

export function Services() {
  return (
    <Section id="services" variant="gray" className="reveal">
      <Container>
        <SectionHeader
          label="What We Build"
          title="Solutions That Drive Results"
          description="From intelligent automation to complete system overhauls, we deliver technology that transforms operations."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              linkText={service.linkText}
              linkHref={service.linkHref}
              featured={service.featured}
              className="reveal"
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
