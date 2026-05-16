import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { posts } from "@/data/posts";

function Blog() {
  return (
    <div className="bg-background">
      {/* Header */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 pt-24 pb-16 md:pt-32 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="font-body text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Field notes
            </p>
            <h1 className="font-display mt-4 text-5xl leading-[1.05] tracking-tight text-foreground md:text-6xl">
              Notes on building,<br />
              <em className="italic text-primary">shipping, and selling.</em>
            </h1>
            <p className="mt-6 max-w-xl font-body text-base text-muted-foreground md:text-lg">
              Short essays from the workshop. Written between builds, not instead of them.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Post list */}
      <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <ul className="divide-y divide-border">
          {posts.map((post, i) => (
            <motion.li
              key={post.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group"
            >
              <Link
                to={`/blog/${post.slug}`}
                className="grid grid-cols-1 gap-4 py-10 md:grid-cols-12 md:gap-8"
              >
                <div className="md:col-span-3">
                  <p className="font-body text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {post.dateLabel}
                  </p>
                  <p className="mt-1 font-body text-xs text-muted-foreground/70">
                    {post.readTime} read
                  </p>
                </div>
                <div className="md:col-span-9">
                  <h2 className="font-display text-2xl leading-tight tracking-tight text-foreground transition-colors group-hover:text-primary md:text-3xl">
                    {post.title}
                  </h2>
                  <p className="mt-3 font-body text-base text-muted-foreground">
                    {post.summary}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 font-body text-sm font-medium text-primary">
                    Read
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Blog;
