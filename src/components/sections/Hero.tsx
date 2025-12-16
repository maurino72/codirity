import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui";
import { Container } from "@/components/layout";
import { HeroBackground } from "./HeroBackground";
import { HeroCards } from "./HeroCards";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section
      className={cn(
        "min-h-screen flex items-center",
        "pt-32 pb-24 px-4 md:px-8 lg:px-16",
        "relative z-[1]",
        "bg-gradient-to-b from-white to-gray-50",
        "overflow-hidden"
      )}
    >
      {/* Background gradient overlay */}
      <div
        className={cn(
          "absolute top-0 right-0 w-[60%] h-full z-0",
          "bg-[radial-gradient(ellipse_at_70%_30%,rgba(50,205,50,0.08)_0%,transparent_60%)]"
        )}
      />

      <HeroBackground />

      <Container className="relative z-[1]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-16 items-center">
          {/* Hero Content */}
          <div className="relative">
            <Badge
              withDot
              className="mb-6 opacity-0 animate-slide-up animation-delay-200"
            >
              AI-Powered Technology Solutions
            </Badge>

            <h1
              className={cn(
                "text-4xl md:text-5xl lg:text-6xl xl:text-[4.5rem]",
                "font-extrabold leading-[1.08] tracking-[-2.5px]",
                "text-gray-900 mb-6",
                "opacity-0 animate-slide-up animation-delay-300"
              )}
            >
              Modernize Your
              <br />
              Business With
              <br />
              <span className="gradient-text">Intelligent AI</span>
            </h1>

            <p
              className={cn(
                "text-lg md:text-xl text-gray-600",
                "max-w-[520px] leading-relaxed mb-10",
                "opacity-0 animate-slide-up animation-delay-400"
              )}
            >
              We deliver intelligent automation and custom system development
              that transforms how companies operate—reducing costs, accelerating
              growth, and future-proofing your business.
            </p>

            <div
              className={cn(
                "flex flex-wrap gap-4",
                "opacity-0 animate-slide-up animation-delay-500"
              )}
            >
              <a
                href="#contact"
                className={cn(
                  "inline-flex items-center justify-center gap-2",
                  "px-8 py-4 text-base font-semibold rounded-full",
                  "bg-brand text-white",
                  "hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-brand",
                  "transition-all duration-300"
                )}
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#services"
                className={cn(
                  "inline-flex items-center justify-center gap-2",
                  "px-8 py-4 text-base font-semibold rounded-full",
                  "bg-white text-gray-700 border border-gray-200",
                  "hover:border-brand hover:text-brand hover:bg-brand-pale",
                  "transition-all duration-300"
                )}
              >
                Explore Services
              </a>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="hidden lg:block">
            <HeroCards />
          </div>
        </div>
      </Container>
    </section>
  );
}
