import { useState } from "react";
import { toast } from "sonner";
import { SITE } from "@/lib/site";
import Button from "@/components/ui/Button";

function validate({ name, email, problem }) {
  const errors = {};
  if (!name.trim()) errors.name = "Your name is required.";
  if (!email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "That doesn't look like a valid email.";
  }
  if (!problem.trim()) {
    errors.problem = "Tell me the problem in one sentence.";
  } else if (problem.trim().length < 8) {
    errors.problem = "A few more words would help.";
  }
  return errors;
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", problem: "", website: "" });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // Honeypot — silently succeed for bots.
    if (form.website) {
      toast.success("Got it. I'll be in touch within 24 hours.");
      setForm({ name: "", email: "", problem: "", website: "" });
      return;
    }

    const v = validate(form);
    setErrors(v);
    if (Object.keys(v).length > 0) return;

    setSubmitting(true);
    try {
      if (!SITE.formspreeEndpoint) {
        // No endpoint configured — fall back to mailto, but still show success UX.
        const subject = encodeURIComponent("New inquiry from coleputerbaugh.com");
        const body = encodeURIComponent(
          `Name: ${form.name}\nEmail: ${form.email}\n\nProblem:\n${form.problem}`
        );
        window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
        toast.success("Opening your email client…");
        setForm({ name: "", email: "", problem: "", website: "" });
        return;
      }

      const res = await fetch(SITE.formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.problem,
          _subject: "New inquiry from coleputerbaugh.com",
        }),
      });

      if (!res.ok) throw new Error("Submission failed");

      toast.success("Sent. I'll reply within 24 hours.");
      setForm({ name: "", email: "", problem: "", website: "" });
      setErrors({});
    } catch (err) {
      toast.error("Something went wrong. Email me directly instead.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      {/* Honeypot field — hidden from humans */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={onChange}
        />
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={form.name}
          onChange={onChange}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          className="w-full rounded-md border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background transition"
          placeholder="Your name"
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-primary">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={onChange}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className="w-full rounded-md border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background transition"
          placeholder="you@business.com"
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-primary">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="problem" className="block text-sm font-medium text-foreground mb-2">
          Describe your problem in one sentence
        </label>
        <textarea
          id="problem"
          name="problem"
          rows={3}
          value={form.problem}
          onChange={onChange}
          aria-invalid={!!errors.problem}
          aria-describedby={errors.problem ? "problem-error" : undefined}
          className="w-full rounded-md border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background transition resize-none"
          placeholder="The one thing eating your week."
        />
        {errors.problem && (
          <p id="problem-error" className="mt-1 text-sm text-primary">
            {errors.problem}
          </p>
        )}
      </div>

      <div className="pt-2">
        <Button type="submit" disabled={submitting} variant="primary">
          {submitting ? "Sending…" : "Send it →"}
        </Button>
      </div>
    </form>
  );
}

export default ContactForm;
