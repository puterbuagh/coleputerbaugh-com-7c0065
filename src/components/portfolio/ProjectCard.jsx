import { ArrowUpRight } from "lucide-react";
import Badge from "@/components/ui/Badge";

function ProjectCard({ project, index = 0 }) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer noopener"
      className="group relative block overflow-hidden border border-border bg-card transition-colors duration-300 hover:border-foreground/40"
    >
      {/* Visual block — gradient placeholder */}
      <div
        className={`relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br ${project.accent} border-b border-border`}
      >
        <div className="absolute inset-0 grain-overlay opacity-60" />
        <div className="absolute left-6 top-5 font-display text-xs uppercase tracking-[0.18em] text-muted-foreground">
          № {number}
        </div>
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <span className="font-display text-2xl md:text-3xl font-medium tracking-tight text-foreground/90 text-center">
            {project.name}
          </span>
        </div>
        <div className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/70 backdrop-blur transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>

      {/* Meta */}
      <div className="flex flex-col gap-4 p-6 md:p-7">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-xl md:text-2xl font-medium tracking-tight text-foreground">
            {project.name}
          </h3>
          <span className="font-body text-xs text-muted-foreground">
            {project.displayUrl}
          </span>
        </div>

        <p className="font-body text-[15px] leading-relaxed text-muted-foreground">
          {project.businessCase}
        </p>

        <div className="flex flex-wrap gap-2 pt-1">
          {project.stack.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="pt-2">
          <span className="inline-flex items-center gap-1.5 font-body text-sm font-medium text-foreground border-b border-foreground/30 pb-0.5 transition-colors group-hover:border-primary group-hover:text-primary">
            Visit site
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </a>
  );
}

export default ProjectCard;
