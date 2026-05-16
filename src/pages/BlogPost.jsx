import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getPostBySlug } from "@/data/posts";
import Button from "@/components/ui/Button";

function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <article className="bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 pt-24 pb-12 md:pt-32 md:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft size={14} />
              All posts
            </Link>
            <div className="mt-8 flex items-center gap-3 font-body text-xs uppercase tracking-[0.22em] text-muted-foreground">
              <span>{post.dateLabel}</span>
              <span aria-hidden="true" className="h-px w-6 bg-border" />
              <span>{post.readTime} read</span>
            </div>
            <h1 className="font-display mt-5 text-4xl leading-[1.08] tracking-tight text-foreground md:text-5xl">
              {post.title}
            </h1>
          </motion.div>
        </div>
      </header>

      {/* Body */}
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <div className="prose-editorial space-y-6 font-body text-lg leading-[1.75] text-foreground/90">
          {post.body.map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className={
                i === 0
                  ? "first-letter:font-display first-letter:mr-2 first-letter:float-left first-letter:text-6xl first-letter:leading-[0.85] first-letter:text-primary"
                  : ""
              }
            >
              {para}
            </motion.p>
          ))}
        </div>

        {/* Author bio */}
        <div className="mt-16 border-t border-border pt-10">
          <div className="flex items-start gap-5">
            <div
              aria-hidden="true"
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10 font-display text-xl text-primary"
            >
              CP
            </div>
            <div>
              <p className="font-display text-lg text-foreground">Cole Puterbaugh</p>
              <p className="mt-1 font-body text-sm leading-relaxed text-muted-foreground">
                Former educator, 12 years abroad. I build custom software tools
                for small businesses — fast, fixed price, no code required from you.
              </p>
            </div>
          </div>
        </div>

        {/* End CTA */}
        <div className="mt-16 rounded-2xl border border-border bg-card p-8 md:p-12">
          <p className="font-display text-2xl leading-tight tracking-tight text-foreground md:text-3xl">
            Enjoyed this? See how I work.
          </p>
          <p className="mt-3 font-body text-base text-muted-foreground">
            Three packages. Fixed scope. Fixed price. Pick the one that fits.
          </p>
          <div className="mt-6">
            <Button as={Link} to="/work-with-me" variant="primary">
              See how I work
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default BlogPost;
