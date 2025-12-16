import { Section, Container } from "@/components/layout";

export default function Home() {
  return (
    <>
      {/* Hero Section Placeholder */}
      <Section padding="hero" className="flex items-center">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-pale border border-brand/20 rounded-full mb-6">
              <span className="w-2 h-2 bg-brand rounded-full animate-pulse-dot" />
              <span className="text-sm font-semibold text-brand-dark">
                AI-Powered Solutions
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
              Transform Your Business with{" "}
              <span className="gradient-text">Intelligent Automation</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We build AI-driven technology solutions that modernize processes,
              eliminate inefficiencies, and accelerate growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand text-white font-semibold rounded-full hover:bg-brand-dark hover:-translate-y-1 hover:shadow-brand transition-all duration-300"
              >
                Get Started
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border border-gray-200 text-gray-700 font-medium rounded-full hover:border-brand hover:text-brand hover:bg-brand-pale transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </Container>
      </Section>

      {/* Services Section Placeholder */}
      <Section id="services" variant="gray">
        <Container>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-4 text-xs font-bold text-brand uppercase tracking-[0.2em] font-mono mb-4">
              <span className="w-8 h-0.5 bg-brand rounded" />
              What We Build
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
              Solutions That Drive Results
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From intelligent automation to complete system overhauls, we
              deliver technology that transforms operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder cards */}
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`bg-white border border-[var(--border)] rounded-3xl p-8 hover:shadow-xl hover:border-brand/30 hover:-translate-y-2 transition-all duration-400 ${
                  i === 1 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-brand-pale to-brand-glow rounded-2xl flex items-center justify-center mb-6">
                  <div className="w-7 h-7 bg-brand/20 rounded-lg" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Service {i}
                </h3>
                <p className="text-gray-600">
                  Placeholder description for service {i}. This will be replaced
                  with actual content.
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process Section Placeholder */}
      <Section id="process" variant="gradient">
        <Container size="narrow">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-4 text-xs font-bold text-brand uppercase tracking-[0.2em] font-mono mb-4">
              <span className="w-8 h-0.5 bg-brand rounded" />
              How We Work
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
              A Proven Approach
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our methodology ensures successful outcomes through collaboration,
              iteration, and continuous improvement.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {["Discovery", "Design", "Build", "Optimize"].map((step, i) => (
              <div key={step} className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center font-mono text-xl font-bold text-gray-400 hover:bg-brand hover:border-brand hover:text-white transition-all duration-300">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step}</h3>
                <p className="text-gray-500">
                  Step {i + 1} description placeholder.
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Contact Section Placeholder */}
      <Section id="contact" variant="gray">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
                Let&apos;s Build Something Great Together
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Ready to transform your business with AI-powered solutions? Get
                in touch and let&apos;s discuss how we can help.
              </p>
              <div className="p-6 bg-gradient-to-br from-brand-dark to-[#1a5a1d] rounded-2xl text-white">
                <h4 className="text-lg font-bold mb-2">
                  Prefer to schedule a call?
                </h4>
                <p className="text-white/80 text-sm mb-4">
                  Book a free 30-minute consultation with our team.
                </p>
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-dark font-bold rounded-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  Schedule a Call
                </button>
              </div>
            </div>
            <div className="bg-white border border-[var(--border)] rounded-3xl p-8 shadow-lg">
              <div className="h-1 -mt-8 -mx-8 mb-8 rounded-t-3xl bg-gradient-to-r from-brand-dark via-brand to-brand-light" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Send us a message
              </h3>
              <p className="text-gray-500 mb-6">
                We&apos;ll get back to you within 24 hours.
              </p>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-brand focus:ring-2 focus:ring-brand/20 focus:bg-white transition-all outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-brand focus:ring-2 focus:ring-brand/20 focus:bg-white transition-all outline-none"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-brand focus:ring-2 focus:ring-brand/20 focus:bg-white transition-all outline-none resize-none"
                />
                <button className="w-full px-6 py-4 bg-brand text-white font-semibold rounded-full hover:bg-brand-dark hover:-translate-y-1 hover:shadow-brand transition-all duration-300">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
