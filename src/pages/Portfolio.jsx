import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ProjectCard from "@/components/portfolio/ProjectCard";
import Button from "@/components/ui/Button";
import { projects } from "@/data/projects";

function Portfolio() {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="pt-20 md:pt-28 pb-14 md:pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-5">
            Portfolio — {String(projects.length).padStart(2, "0")} projects
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-medium tracking-tight text-foreground leading-[0.95]">
            Things I&rsquo;ve built.
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            All of these are live. All built by me. Ordered most complex first.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section>
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
            {projects.map((project, i) => (
              <ProjectCard key={project.url} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mt-24 md:mt-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl tracking-tight text-foreground leading-tight">
            Want something like this built for your business?
          </h2>
          <div className="mt-10">
            <Button as={Link} to="/work-with-me" variant="primary">
              See how we work together
              <ArrowRight size={16} aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
