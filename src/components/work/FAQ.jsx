import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Do I need to know anything technical?",
    a: "No. You describe the problem in plain English. I handle everything else — the architecture, the code, the deployment, the explanation of what it does.",
  },
  {
    q: "What if I'm not happy with what you build?",
    a: "Each package includes defined revision rounds. If we're misaligned after revisions, I'll refund the difference. I don't want your money if the tool doesn't work for you.",
  },
  {
    q: "What kinds of tools do you actually build?",
    a: "Lead trackers, client dashboards, intake forms, booking systems, internal reporting tools, calculators, workflow automations. If it solves a business problem, I can probably build it.",
  },
  {
    q: "How do I know this will work for my business specifically?",
    a: "That's what the free 20-minute call is for. If I don't think I can solve your problem, I'll tell you on that call — before you spend anything.",
  },
  {
    q: "What happens after delivery?",
    a: "Spark clients get the tool and a walkthrough. Build clients get 30 days of async support. Partner clients get ongoing access. Every client gets a pitch to upgrade at day 30.",
  },
];

function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-20 md:px-10 md:py-28">
        <div className="mb-14 max-w-2xl">
          <div className="font-display text-xs uppercase tracking-[0.22em] text-muted-foreground mb-4">
            § Common questions
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-foreground">
            Answers, before you ask.
          </h2>
        </div>

        <div className="divide-y divide-border border-y border-border">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-primary"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg md:text-xl font-medium tracking-tight pr-4">
                    {item.q}
                  </span>
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border transition-colors ${
                      isOpen ? "bg-primary text-primary-foreground border-primary" : "bg-background"
                    }`}
                  >
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-3xl font-body text-[16px] leading-relaxed text-muted-foreground">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
