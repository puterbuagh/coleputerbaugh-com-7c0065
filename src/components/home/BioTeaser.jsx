import { Link } from "react-router-dom";

function BioTeaser() {
  return (
    <section className="border-b border-border py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          §04 — About
        </p>
        <p className="font-display text-3xl font-medium leading-[1.15] tracking-tight md:text-5xl">
          12 years abroad. Former educator.
          <br />
          <span className="italic text-muted-foreground">I build things fast.</span>
        </p>
        <Link
          to="/about"
          className="mt-8 inline-flex items-center gap-2 border-b border-foreground pb-1 font-mono text-xs uppercase tracking-[0.2em] text-foreground transition-colors hover:border-primary hover:text-primary"
        >
          Read my story
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </section>
  );
}

export default BioTeaser;
