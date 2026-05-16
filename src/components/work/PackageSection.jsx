import { Check, X } from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { SITE } from "@/lib/site";

function PackageSection({
  number,
  name,
  tagline,
  price,
  priceSuffix,
  whoFor,
  included = [],
  notIncluded = [],
  ctaLabel,
  featured = false,
}) {
  return (
    <section className={`py-20 md:py-28 ${featured ? "bg-secondary/40" : ""}`}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          {/* Left column — title, price, who */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Package №{number}
              </span>
              {featured && <Badge variant="accent">Most popular</Badge>}
            </div>
            <h2 className="mt-4 font-display text-5xl font-medium leading-[1.02] tracking-tight md:text-6xl">
              {name}
            </h2>
            {tagline && (
              <p className="mt-4 font-display text-xl italic text-muted-foreground">
                {tagline}
              </p>
            )}
            <div className="mt-8 flex items-baseline gap-2">
              <span className="font-display text-5xl font-medium tracking-tight text-primary md:text-6xl">
                {price}
              </span>
              {priceSuffix && (
                <span className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
                  {priceSuffix}
                </span>
              )}
            </div>
            <div className="mt-8 border-l-2 border-primary pl-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Who it&rsquo;s for
              </p>
              <p className="mt-2 text-base leading-relaxed text-foreground">{whoFor}</p>
            </div>
            <div className="mt-10 hidden md:block">
              <Button href={SITE.calendlyUrl} external variant="primary">
                {ctaLabel}
              </Button>
            </div>
          </div>

          {/* Right column — included / not included */}
          <div className="md:col-span-7">
            <div className="rounded-sm border border-border bg-card p-7 md:p-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                What&rsquo;s included
              </p>
              <ul className="mt-5 space-y-4">
                {included.map((item) => (
                  <li key={item} className="flex gap-3">
                    <Check className="mt-1 size-4 shrink-0 text-primary" strokeWidth={2.5} />
                    <span className="text-base leading-relaxed text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="my-8 h-px bg-border" />

              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                What&rsquo;s not
              </p>
              <ul className="mt-5 space-y-4">
                {notIncluded.map((item) => (
                  <li key={item} className="flex gap-3">
                    <X className="mt-1 size-4 shrink-0 text-muted-foreground" strokeWidth={2.5} />
                    <span className="text-base leading-relaxed text-muted-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 md:hidden">
              <Button href={SITE.calendlyUrl} external variant="primary">
                {ctaLabel}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PackageSection;
