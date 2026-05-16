import { projects } from "@/data/projects";

function ProofStrip() {
  return (
    <section className="border-y border-border bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              §03 — Receipts
            </p>
            <h2 className="font-display text-4xl font-medium leading-[1.05] tracking-tight md:text-5xl">
              Things I&rsquo;ve shipped.
            </h2>
          </div>
          <p className="hidden max-w-xs text-right text-sm text-muted-foreground md:block">
            Eight live products. Every one built by me. Scroll &rarr;
          </p>
        </div>
      </div>

      <div className="scrollbar-hide overflow-x-auto">
        <ul className="flex gap-5 px-6 pb-4 md:gap-6 md:px-12" style={{ width: "max-content" }}>
          {projects.map((p, i) => (
            <li key={p.name} className="w-[260px] shrink-0 md:w-[320px]">
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer noopener"
                className="group block"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-border bg-card">
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg, ${
                        i % 2 === 0 ? "oklch(0.92 0.04 60)" : "oklch(0.88 0.02 50)"
                      } 0%, oklch(0.96 0.01 80) 100%)`,
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center px-6">
                    <span className="font-display text-2xl font-medium leading-tight tracking-tight text-foreground/80 md:text-3xl">
                      {p.name}
                    </span>
                  </div>
                  <div className="absolute left-3 top-3 font-mono text-[10px] uppercase tracking-widest text-foreground/50">
                    №{String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="absolute inset-0 border-2 border-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <div className="mt-4 flex items-baseline justify-between gap-3">
                  <span className="font-display text-lg font-medium tracking-tight">
                    {p.name}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-primary">
                    Visit &rarr;
                  </span>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                  {p.businessCase}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ProofStrip;
