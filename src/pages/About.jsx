import { ArrowUpRight, ExternalLink } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionDivider from "@/components/ui/SectionDivider";
import { SITE } from "@/lib/site";

function About() {
  return (
    <div className="pb-24">
      {/* SECTION 1 — Short version */}
      <section className="pt-20 md:pt-28 pb-16 md:pb-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-5">
            About — Cole Puterbaugh
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-medium tracking-tight text-foreground leading-[1.05]">
            I&rsquo;m Cole Puterbaugh. I build custom software tools for small
            business owners using AI&nbsp;— fast, at a fixed price, with no
            technical knowledge required from you.
          </h1>
        </div>
      </section>

      {/* PHOTO PLACEHOLDER between section 1 and 2 */}
      <section className="py-6">
        <div className="mx-auto max-w-6xl px-6">
          <div
            className="relative aspect-[16/9] md:aspect-[21/9] w-full rounded-sm border border-border bg-secondary/40 grain overflow-hidden flex items-center justify-center"
            role="img"
            aria-label="Photo of Cole — at his desk, on location, or candid"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
            <div className="text-center px-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
                Photo placeholder
              </div>
              <div className="font-display text-xl md:text-2xl text-foreground/70">
                A second portrait of Cole — different from the home page.
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* SECTION 2 — Long story (placeholder) */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-5">
            The longer story
          </div>
          <h2 className="font-display text-3xl md:text-5xl tracking-tight text-foreground leading-tight mb-10">
            How I got here.
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-foreground/85 font-body">
            <p className="italic text-muted-foreground">
              [Placeholder — Cole writes this in his own voice. ~200–300 words.
              Covers: 12 years abroad, teaching career, the moment he
              discovered he could build fast with AI, and why he does this
              work.]
            </p>
            <p>
              I&rsquo;ve spent the last twelve years living and working outside
              the United States. Most of that time I was a teacher&nbsp;— in
              classrooms across multiple countries, with students who didn&rsquo;t
              share my first language and rarely shared my context.
            </p>
            <p>
              Teaching abroad forces you to do two things at once: explain
              hard ideas in simple words, and solve your own problems without
              waiting for somebody else to do it for you. Those two habits are
              the entire foundation of what I do now.
            </p>
            <p>
              The shift happened when I realized I could build real, working
              software in days instead of months by partnering with AI tools
              instead of fighting them. I built one tool to solve a problem in
              my own classroom. Then another. Then I started building tools for
              other people&rsquo;s problems — and quickly realized small
              business owners were drowning in exactly the kind of problems I&rsquo;d
              been solving for free.
            </p>
            <p>
              That&rsquo;s the work now. Real problems. Real tools. Fast.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* SECTION 3 — Why this matters to clients */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl mb-14">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-5">
              Why this matters to clients
            </div>
            <h2 className="font-display text-3xl md:text-5xl tracking-tight text-foreground leading-tight">
              Three things you&rsquo;re actually buying.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
            {[
              {
                n: "01",
                title: "I explain things clearly",
                body:
                  "12 years of teaching means I know how to make complex things simple. You'll always know what I'm building and why.",
              },
              {
                n: "02",
                title: "I build fast because I have to",
                body:
                  "Working abroad taught me to solve problems with limited resources. I don't overcomplicate. I ship.",
              },
              {
                n: "03",
                title: "I have skin in the game",
                body:
                  "My reputation is the only thing I'm selling. I don't walk away from something broken.",
              },
            ].map((col) => (
              <div key={col.n} className="bg-background p-8 md:p-10">
                <div className="font-mono text-xs text-primary mb-6">{col.n}</div>
                <h3 className="font-display text-2xl md:text-3xl text-foreground mb-4 leading-snug">
                  {col.title}
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {col.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* SECTION 4 — The other thing (12yearsout) */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-5">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-5">
                The other thing
              </div>
              <h2 className="font-display text-4xl md:text-5xl tracking-tight text-foreground leading-tight">
                12 Years Out.
              </h2>
            </div>
            <div className="md:col-span-7 space-y-6">
              <p className="text-lg md:text-xl leading-relaxed text-foreground/85">
                When I&rsquo;m not building tools, I run{" "}
                <span className="text-foreground font-medium">12yearsout.com</span>{" "}
                — a podcast and content platform about the realities of
                long-term expat life. Eight weeks in, weekly episodes, and a
                growing community of people who left or are thinking about
                leaving.
              </p>
              <a
                href="https://12yearsout.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-foreground border-b border-foreground/30 hover:border-primary hover:text-primary pb-1 transition-colors"
              >
                Listen here
                <ExternalLink size={14} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* BOTTOM CTA */}
      <section className="pt-20 md:pt-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-4xl md:text-6xl tracking-tight text-foreground leading-tight">
            Sound like someone you&rsquo;d want to work with?
          </h2>
          <div className="mt-10">
            <Button
              as="a"
              href={SITE.calendlyUrl}
              target="_blank"
              rel="noreferrer"
              variant="primary"
            >
              Book a free call
              <ArrowUpRight size={16} aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
