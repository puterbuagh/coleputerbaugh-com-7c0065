import { useEffect, useRef } from "react";
import { SITE } from "@/lib/site";

function CalendlyEmbed({ url }) {
  const containerRef = useRef(null);
  const calendlyUrl = url || SITE.calendlyUrl;

  useEffect(() => {
    const existing = document.querySelector(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]'
    );
    if (!existing) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }

    const linkExisting = document.querySelector(
      'link[href="https://assets.calendly.com/assets/external/widget.css"]'
    );
    if (!linkExisting) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(link);
    }
  }, []);

  return (
    <div className="w-full">
      <div
        ref={containerRef}
        className="calendly-inline-widget rounded-lg border border-border bg-card overflow-hidden"
        data-url={calendlyUrl}
        style={{ minWidth: "320px", height: "720px" }}
        aria-label="Calendly scheduling widget"
      />
      <noscript>
        <p className="text-sm text-muted-foreground mt-2">
          Enable JavaScript to see the scheduling widget, or visit{" "}
          <a className="underline text-primary" href={calendlyUrl} target="_blank" rel="noreferrer">
            {calendlyUrl}
          </a>
          .
        </p>
      </noscript>
    </div>
  );
}

export default CalendlyEmbed;
