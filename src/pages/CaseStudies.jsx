import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";
import { SITE } from "@/lib/site";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import SectionDivider from "@/components/ui/SectionDivider";

function CaseStudies() {
  return (
    <div className="bg-background">
      {/* Header */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-5xl px-6 pt-24 pb-16 md:pt-32 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="font-body text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Case studies
            </p>
            <h1 className="font-display mt-4 text-5xl leading-[1.05] tracking-tight text-foreground md:text-7xl">
              Results.
            </h1>
            <p className="mt-6 max-w-xl font-body text-base text-muted-foreground md:text-lg">
              Real problems. Real tools. Real outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case studies */}
      <div className="mx-auto max-w-5xl px-6">
        {caseStudies.map((cs, idx) => (
          <div key={cs.id}>
            <motion.section
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="py-20 md:py-28"
            >
              {/* Eyebrow */}
              <div className="flex flex-wrap items-center gap-3">
                <p className="font-body text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  Case {String(idx + 1).padStart(2, "0")}
                </p>
                <span aria-hidden="true" className="h-px w-8 bg-border" />
                <p className="font-body text-xs uppercase tracking-[0.18em] text-foreground/70">
                  {cs.clientType}
                </p>
              </div>

              {/* Headline — derived from the problem statement */}
              <h2 className="font-display mt-6 text-3xl leading-[1.1] tracking-tight text-foreground md:text-5xl">
                {cs.problem}
              </h2>

              {/* Two-column layout */}
              <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10">
                {/* Left: narrative */}
                <div className="space-y-8 md:col-span-7">
                  <div>
                    <p className="font-body text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      What was built
                    </p>
                    <p className="mt-2 font-body text-base leading-relaxed text-foreground/90 md:text-lg">
                      {cs.built}
                    </p>
                  </div>

                  {/* Pull quote */}
                  <figure className="relative rounded-xl border-l-2 border-primary bg-card/60 p-6 md:p-8">
                    <Quote
                      size={22}
                      className="absolute -top-3 left-6 bg-background px-1 text-primary"
                      aria-hidden="true"
                    />
                    <blockquote className="font-display text-xl leading-snug text-foreground md:text-2xl">
                      “{cs.quote}”
                    </blockquote>
                    <figcaption className="mt-4 font-body text-sm text-muted-foreground">
                      — {cs.quoteAttribution}
                    </figcaption>
                  </figure>
                </div>

                {/* Right: facts + screenshot */}
                <aside className="space-y-6 md:col-span-5">
                  <div
                    aria-label={cs.screenshotLabel || "Project screenshot placeholder"}
                    className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-border bg-muted"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(0.92_0.04_55/0.7),transparent_60%),radial-gradient(circle_at_80%_80%,oklch(0.88_0.06_45/0.6),transparent_55%)]" />
                    <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
                      <p className="font-display text-sm uppercase tracking-[0.22em] text-muted-foreground">
                        {cs.screenshotLabel || "Screenshot"}
                      </p>
                    </div>
                    <div className="absolute left-4 top-4 flex gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-foreground/20" />
                      <span className="h-2.5 w-2.5 rounded-full bg-foreground/20" />
                      <span className="h-2.5 w-2.5 rounded-full bg-foreground/20" />
                    </div>
                  </div>

                  <dl className="divide-y divide-border rounded-xl border border-border bg-card">
                    <div className="flex items-baseline justify-between gap-4 px-5 py-4">
                      <dt className="font-body text-xs uppercase tracking-[0.16em] text-muted-foreground">
                        Duration
                      </dt>
                      <dd className="font-display text-base text-foreground">
                        {cs.duration}
                      </dd>
                    </div>
                    <div className="flex items-baseline justify-between gap-4 px-5 py-4">
                      <dt className="font-body text-xs uppercase tracking-[0.16em] text-muted-foreground">
                        Result
                      </dt>
                      <dd className="max-w-[60%] text-right font-display text-base leading-snug text-foreground">
                        {cs.result}
                      </dd>
                    </div>
                    <div className="flex items-baseline justify-between gap-4 px-5 py-4">
                      <dt className="font-body text-xs uppercase tracking-[0.16em] text-muted-foreground">
                        Package
                      </dt>
                      <dd>
                        <Badge>{cs.packageUsed}</Badge>
                      </dd>
                    </div>
                  </dl>
                </aside>
              </div>

              {/* CTA */}
              <div className="mt-14 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="font-display text-2xl leading-tight text-foreground md:text-3xl">
                  Want a result like this?
                </p>
                <Button
                  href={SITE.calendlyUrl}
                  variant="primary"
                >
                  Book a free call
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </motion.section>

            {idx < caseStudies.length - 1 && <SectionDivider />}
          </div>
        ))}

        {/* More coming */}
        <div className="border-t border-border py-20 text-center">
          <p className="font-body text-xs uppercase tracking-[0.22em] text-muted-foreground">
            More case studies in progress
          </p>
          <p className="font-display mx-auto mt-4 max-w-xl text-2xl leading-tight tracking-tight text-foreground md:text-3xl">
            Could yours be next?
          </p>
          <div className="mt-6 flex justify-center">
            <Button as={Link} to="/work-with-me" variant="secondary">
              See how we work together
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseStudies;
