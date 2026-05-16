import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { SITE } from '@/lib/site';

function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* subtle grain + corner mark */}
      <div className="pointer-events-none absolute inset-0 grain opacity-[0.5]" />
      <div className="pointer-events-none absolute right-0 top-0 hidden h-64 w-64 -translate-y-12 translate-x-12 rounded-full bg-primary/10 blur-3xl md:block" />

      <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        {/* Editorial masthead row */}
        <div className="mb-12 flex items-center justify-between font-body text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          <span>Vol. 01 — Independent Studio</span>
          <span className="hidden sm:inline">Based abroad · Building everywhere</span>
          <span>2026 Edition</span>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-10">
          {/* Headline column */}
          <div className="col-span-12 md:col-span-8">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mb-6 font-body text-[11px] uppercase tracking-[0.25em] text-primary"
            >
              — A studio of one
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-[44px] leading-[0.98] tracking-[-0.02em] text-foreground sm:text-6xl md:text-7xl lg:text-[88px]"
            >
              I build{' '}
              <span className="italic text-primary">custom tools</span>
              <br className="hidden sm:block" /> for small businesses.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 max-w-xl font-body text-lg leading-relaxed text-muted-foreground md:text-xl"
            >
              Fast. <span className="text-foreground">No code required from you.</span> Describe the
              problem in plain English — I deliver the working thing.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center gap-5"
            >
              <a
                href={SITE.calendlyUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 font-body text-sm font-medium text-background transition hover:bg-primary"
              >
                Book a free 20-min call
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <Link
                to="/work-with-me"
                className="font-body text-sm font-medium text-foreground underline decoration-primary decoration-2 underline-offset-[6px] transition hover:decoration-foreground"
              >
                See how we work →
              </Link>
            </motion.div>
          </div>

          {/* Portrait column — offset right, editorial frame */}
          <div className="col-span-12 md:col-span-4">
            <motion.figure
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative md:mt-10 md:translate-y-6"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden border border-border bg-muted">
                {/* Portrait placeholder — replace src with real photo */}
                <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_30%_20%,rgba(193,82,29,0.18),transparent_60%)]">
                  <span className="font-display text-[120px] italic leading-none text-primary/30">CP</span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                  <span className="font-body text-[10px] uppercase tracking-[0.2em] text-foreground/70">
                    Portrait
                  </span>
                  <span className="font-body text-[10px] uppercase tracking-[0.2em] text-foreground/70">
                    Plate 01
                  </span>
                </div>
              </div>
              <figcaption className="mt-3 font-body text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                Cole Puterbaugh — Builder, ex-educator
              </figcaption>
            </motion.figure>
          </div>
        </div>

        {/* Footer rule of the hero */}
        <div className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6 font-body text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          <span>Fixed price · Fixed timeline</span>
          <span>Spark · Build · Partner</span>
          <span className="hidden sm:inline">Replies within 24 hours</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
