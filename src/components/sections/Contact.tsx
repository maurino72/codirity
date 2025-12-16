import { Section, Container } from "@/components/layout";
import { ContactInfo } from "./ContactInfo";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <Section id="contact" variant="gray" padding="hero">
      <Container size="narrow">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
          <div className="reveal">
            <ContactInfo />
          </div>
          <div className="reveal">
            <ContactForm />
          </div>
        </div>
      </Container>
    </Section>
  );
}
