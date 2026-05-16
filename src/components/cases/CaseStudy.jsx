import { ArrowUpRight, Quote } from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { SITE } from "@/lib/site";

function CaseStudy({ study, index = 0 }) {
  const {
    clientType,
    problem,
    built,
    duration,
    result,
    quote,
    quoteAttribution,
    screenshotLabel,
    packageUsed,
  } = study;

  return (
    <article className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-wrap items-baseline gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Case {String(index + 1).padStart(2, "0")}
          </span>
          <Badge>{clientType}</Badge>
        </div>

        <div className="grid gap-12 md:grid-cols-12">
          {/* Left: narrative */}
          <div className="md:col-span-7 space-y-10">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">
                The problem
              </h3>
              <p className="font-display text-2xl md:text-3xl leading-snug text-foreground">
                {problem}
              </p>
            </div>

            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">
                What I built
              </h3>
              <p className="text-lg leading-relaxed text-foreground/90">{built}</p>
            </div>

            <div className="grid grid-cols-2 gap-6 border-y border-border py-6">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">
                  Duration
                </div>
                <div className="font-display text-xl text-foreground">{duration}</div>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">
                  Package
                </div>
                <div className="font-display text-xl text-foreground">{packageUsed}</div>
              </div>
            </div>

            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">
                The result
              </h3>
              <p className="font-display text-2xl md:text-3xl leading-snug text-foreground">
                {result}
              </p>
            </div>

            <figure className="border-l-2 border-primary pl-6 py-2">
              <Quote className="text-primary/40 mb-3" size={28} aria-hidden="true" />
              <blockquote className="font-display text-xl md:text-2xl italic leading-snug text-foreground">
                “{quote}”
              </blockquote>
              {quoteAttribution && (
                <figcaption className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  — {quoteAttribution}
                </figcaption>
              )}
            </figure>
          </div>

          {/* Right: screenshot placeholder + CTA */}
          <div className="md:col-span-5 space-y-6">
            <div
              className="aspect-[4/5] w-full rounded-sm border border-border bg-secondary/40 grain relative overflow-hidden flex items-center justify-center"
              role="img"
              aria-label={screenshotLabel}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
              <div className="text-center px-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
                  Screenshot
                </div>
                <div className="font-display text-lg text-foreground/70">
                  {screenshotLabel}
                </div>
              </div>
            </div>

            <div className="rounded-sm border border-border bg-card p-6">
              <p className="font-display text-xl text-foreground mb-4 leading-snug">
                Want a result like this?
              </p>
              <Button
                as="a"
                href={SITE.calendlyUrl}
                target="_blank"
                rel="noreferrer"
                variant="primary"
                className="w-full justify-center"
              >
                Book a free call
                <ArrowUpRight size={16} aria-hidden="true" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default CaseStudy;
