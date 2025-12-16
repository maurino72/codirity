import { Section, Container } from "@/components/layout";
import { SectionHeader } from "@/components/ui";
import { ProcessStep } from "./ProcessStep";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We analyze your current processes, identify bottlenecks, and understand your strategic goals.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We architect a custom solution with clear milestones and measurable outcomes.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Our team develops and tests rigorously, keeping you involved at every stage.",
  },
  {
    number: "04",
    title: "Optimize",
    description:
      "Post-launch support and iterative improvements ensure lasting success.",
  },
];

export function Process() {
  return (
    <Section
      id="process"
      variant="gradient"
      className={cn(
        "relative",
        "before:absolute before:inset-0",
        "before:bg-[radial-gradient(ellipse_at_50%_50%,rgba(50,205,50,0.08)_0%,transparent_70%)]",
        "before:pointer-events-none"
      )}
    >
      <Container size="narrow">
        <SectionHeader
          label="How We Work"
          title="A Proven Approach"
          description="Our methodology ensures successful outcomes through collaboration, iteration, and continuous improvement."
          className="mb-16 reveal"
        />

        <div className="relative">
          {/* Connecting Line */}
          <div
            className={cn(
              "hidden md:block absolute top-[50px] left-[12%] right-[12%]",
              "h-0.5 bg-gradient-to-r from-gray-200 via-brand to-gray-200",
              "z-0"
            )}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="group reveal">
                <ProcessStep
                  number={step.number}
                  title={step.title}
                  description={step.description}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
