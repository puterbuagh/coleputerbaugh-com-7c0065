import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Badge from '@/components/ui/Badge';

const packages = [
  {
    num: '01',
    name: 'The Spark',
    price: '$500',
    cadence: 'one-time',
    line: 'One problem. One tool. Five days.',
    featured: false,
  },
  {
    num: '02',
    name: 'The Build',
    price: '$1,500',
    cadence: 'one-time',
    line: 'A complete system. Two weeks.',
    featured: true,
  },
  {
    num: '03',
    name: 'The Partner',
    price: '$2,500',
    cadence: '/month',
    line: 'Ongoing. I hold your context.',
    featured: false,
  },
];

function Packages() {
  return (
    <section className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-5">
            <p className="font-body text-[11px] uppercase tracking-[0.25em] text-primary">
              § Engagements
            </p>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-[-0.02em] text-foreground md:text-6xl">
              How we{' '}
              <span className="italic">work together</span>.
            </h2>
          </div>
          <div className="col-span-12 flex items-end md:col-span-6 md:col-start-7">
            <p className="font-body text-base leading-relaxed text-muted-foreground md:text-lg">
              Three fixed-scope engagements. Pick the one that matches the size of your
              problem. No custom quotes, no scope creep, no surprise invoices.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
          {packages.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`group relative flex flex-col justify-between bg-background p-8 md:p-10 ${
                p.featured ? 'md:-my-4 md:bg-foreground md:text-background' : ''
              }`}
            >
              <div>
                <div className="mb-8 flex items-center justify-between">
                  <span
                    className={`font-body text-[11px] uppercase tracking-[0.25em] ${
                      p.featured ? 'text-background/60' : 'text-muted-foreground'
                    }`}
                  >
                    {p.num} / 03
                  </span>
                  {p.featured ? <Badge variant="accent">Most popular</Badge> : null}
                </div>

                <h3
                  className={`font-display text-3xl tracking-[-0.01em] md:text-4xl ${
                    p.featured ? 'text-background' : 'text-foreground'
                  }`}
                >
                  {p.name}
                </h3>

                <div className="mt-6 flex items-baseline gap-1">
                  <span
                    className={`font-display text-5xl tracking-[-0.02em] md:text-6xl ${
                      p.featured ? 'text-background' : 'text-foreground'
                    }`}
                  >
                    {p.price}
                  </span>
                  <span
                    className={`font-body text-sm ${
                      p.featured ? 'text-background/70' : 'text-muted-foreground'
                    }`}
                  >
                    {p.cadence}
                  </span>
                </div>

                <p
                  className={`mt-8 max-w-xs font-display text-xl italic leading-snug ${
                    p.featured ? 'text-background/90' : 'text-foreground/80'
                  }`}
                >
                  “{p.line}”
                </p>
              </div>

              <Link
                to="/work-with-me"
                className={`mt-12 inline-flex items-center gap-2 font-body text-sm font-medium ${
                  p.featured
                    ? 'text-background underline decoration-primary decoration-2 underline-offset-[6px] hover:decoration-background'
                    : 'text-foreground underline decoration-primary decoration-2 underline-offset-[6px] hover:decoration-foreground'
                }`}
              >
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Packages;
