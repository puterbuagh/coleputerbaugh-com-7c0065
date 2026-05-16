import { SITE } from "@/lib/site";
import CalendlyEmbed from "@/components/contact/CalendlyEmbed";
import ContactForm from "@/components/contact/ContactForm";

function Contact() {
  return (
    <main className="bg-background">
      <section className="mx-auto max-w-3xl px-6 pt-20 pb-12 md:pt-28 md:pb-16">
        <p className="font-body text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6">
          Contact
        </p>
        <h1 className="font-display text-5xl md:text-7xl font-semibold tracking-tight text-foreground leading-[1.02]">
          Let's talk.
        </h1>
        <p className="mt-6 font-body text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          Not sure if I can help? Tell me the problem. I'll tell you honestly.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-16">
        <p className="font-body text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
          Book a free 20-minute call directly
        </p>
        <CalendlyEmbed />
      </section>

      <div className="mx-auto max-w-4xl px-6">
        <div className="border-t border-border" />
      </div>

      <section className="mx-auto max-w-2xl px-6 py-16 md:py-20">
        <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
          Rather write than book?
        </h2>
        <p className="mt-3 font-body text-base text-muted-foreground">
          Send me a note. Short is fine.
        </p>

        <div className="mt-10 relative">
          <ContactForm />
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="font-body text-base text-foreground">I reply within 24 hours.</p>
          <p className="mt-2 font-body text-base text-muted-foreground">
            Or email me directly:{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="text-primary underline underline-offset-4 decoration-1 hover:decoration-2 transition"
            >
              {SITE.email}
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}

export default Contact;
