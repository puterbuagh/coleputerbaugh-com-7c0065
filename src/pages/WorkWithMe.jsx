import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PackageSection from "@/components/work/PackageSection";
import SectionDivider from "@/components/ui/SectionDivider";
import FAQ from "@/components/work/FAQ";
import Button from "@/components/ui/Button";
import { CALENDLY_URL } from "@/lib/site";

const packages = [
  {
    number: "01",
    name: "The Spark",
    price: "$500",
    priceSuffix: "one-time",
    tagline: "One problem. One tool. Five days.",
    whoFor:
      "Solo operators and small business owners with one specific painful problem they want solved fast.",
    included: [
      "60-minute discovery call",
      "Full custom tool built to spec",
      "One round of revisions",
      "Loom walkthrough video on delivery",
      "5 business day turnaround",
    ],
    notIncluded: [
      "Ongoing support beyond delivery",
      "More than one core feature",
      "Hosting setup (I deliver the code)",
    ],
    ctaLabel: "Book a Spark call",
    featured: false,
  },
  {
    number: "02",
    name: "The Build",
    price: "$1,500",
    priceSuffix: "one-time",
    tagline: "A complete system. Two weeks.",
    whoFor:
      "Business owners who need a complete working system — not just a single tool.",
    included: [
      "90-minute strategy session",
      "Full tool with authentication, data storage, dashboard",
      "Two rounds of revisions",
      "30 days async email support after delivery",
      "10 business day turnaround",
    ],
    notIncluded: [
      "Ongoing monthly changes",
      "Third-party API integrations beyond one",
    ],
    ctaLabel: "Book a Build call",
    featured: true,
  },
  {
    number: "03",
    name: "The Partner",
    price: "$2,500",
    priceSuffix: "per month — retainer",
    tagline: "Ongoing. I hold your context.",
    whoFor:
      "Growing businesses with continuous operational problems that need a technical partner on call, not a one-time vendor.",
    included: [
      "Monthly strategy call",
      "Up to 3 tool builds or iterations per month",
      "48-hour priority turnaround",
      "I hold full context of your business and stack",
      "Direct async access M–F",
    ],
    notIncluded: [
      "Unlimited revisions on completed work",
      "Work outside agreed monthly scope",
    ],
    ctaLabel: "Apply for a Partner spot",
    featured: false,
  },
];

function WorkWithMe() {
  return (
    <div className="relative">
      {/* Page header */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 grain-overlay opacity-50 pointer-events-none" />
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32 relative">
          <div className="font-display text-xs uppercase tracking-[0.22em] text-muted-foreground mb-6">
            § Work with me
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-medium tracking-tight leading-[0.95] text-foreground max-w-4xl">
            Three ways in.
            <br />
            <span className="italic text-primary">One clear price each.</span>
          </h1>
          <p className="mt-8 max-w-2xl font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
            No estimates. No scope creep. No surprise invoices. Pick the package that
            fits the size of your problem — or book the free call and we'll figure it
            out together.
          </p>
        </div>
      </section>

      {/* Packages */}
      {packages.map((pkg, i) => (
        <div key={pkg.name}>
          <PackageSection
            number={pkg.number}
            name={pkg.name}
            tagline={pkg.tagline}
            price={pkg.price}
            priceSuffix={pkg.priceSuffix}
            whoFor={pkg.whoFor}
            included={pkg.included}
            notIncluded={pkg.notIncluded}
            ctaLabel={pkg.ctaLabel}
            featured={pkg.featured}
          />
          {i < packages.length - 1 && <SectionDivider />}
        </div>
      ))}

      {/* FAQ */}
      <FAQ />

      {/* Closing CTA */}
      <section className="relative border-t border-border bg-foreground text-background">
        <div className="absolute inset-0 grain-overlay opacity-30 pointer-events-none" />
        <div className="relative mx-auto max-w-5xl px-6 py-24 md:px-10 md:py-32 text-center">
          <div className="font-display text-xs uppercase tracking-[0.22em] text-background/60 mb-6">
            § Still deciding?
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-medium tracking-tight leading-[1.02]">
            Not sure which is
            <br />
            <span className="italic text-primary">right for you?</span>
          </h2>
          <p className="mt-8 max-w-xl mx-auto font-body text-lg text-background/70">
            Book the free call. We'll figure it out together — and if I can't help,
            I'll tell you who can.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button href={CALENDLY_URL} variant="primary" size="lg">
              Book a free 20-min call
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Link
              to="/portfolio"
              className="font-body text-sm text-background/70 hover:text-background border-b border-background/30 hover:border-background pb-0.5"
            >
              See what I've shipped →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WorkWithMe;
