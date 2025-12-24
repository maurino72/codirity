import { RevealProvider } from "@/components/layout";
import { Hero, Services, Process, About, Pricing, Contact } from "@/components/sections";

export default function Home() {
  return (
    <RevealProvider>
      <Hero />
      <Services />
      <Process />
      <About />
      <Pricing />
      <Contact />
    </RevealProvider>
  );
}
