import { Monitor, Code2, Target, Box } from "lucide-react";
import { Section, Container } from "@/components/layout";
import { SectionHeader } from "@/components/ui";
import { ServiceCard } from "./ServiceCard";

const services = [
  {
    icon: <Monitor className="w-7 h-7" strokeWidth={2} />,
    title: "Intelligent Process Automation",
    description:
      "Eliminate repetitive tasks with AI-powered workflows that learn, adapt, and scale with your business. From document processing to customer service, we automate the mundane so your team can focus on what matters.",
    linkText: "Discuss your automation needs",
    linkHref: "#contact",
    featured: true,
    stats: [
      { value: "40%", label: "Cost Savings" },
      { value: "20h", label: "Saved Weekly" },
      { value: "99%", label: "Accuracy" },
    ],
  },
  {
    icon: <Code2 className="w-7 h-7" strokeWidth={2} />,
    title: "Custom System Development",
    description:
      "Tailored software solutions built for your unique challenges. We architect and develop systems that integrate seamlessly with your existing infrastructure.",
    linkText: "Start your project",
    linkHref: "#contact",
  },
  {
    icon: <Target className="w-7 h-7" strokeWidth={2} />,
    title: "AI Integration",
    description:
      "Embed machine learning capabilities into your existing tools. Predictive analytics, natural language processing, and intelligent decision-making.",
    linkText: "Explore AI solutions",
    linkHref: "#contact",
  },
  {
    icon: <Box className="w-7 h-7" strokeWidth={2} />,
    title: "Legacy Modernization",
    description:
      "Upgrade outdated systems without disruption. We migrate, refactor, and enhance your technology stack while preserving critical data.",
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
              stats={service.stats}
              className="reveal"
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
