import { Link } from 'react-router-dom';
import { NAV_LINKS, SITE_EMAIL } from '@/lib/site';

function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 md:px-10 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div>
            <Link
              to="/"
              className="font-display text-3xl md:text-4xl tracking-tight text-foreground hover:text-primary transition-colors"
            >
              <span className="italic">Cole</span> Puterbaugh
            </Link>
            <p className="mt-3 max-w-sm font-body text-sm text-muted-foreground leading-relaxed">
              Custom software tools for small businesses. Built fast, delivered clean.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <a
            href={`mailto:${SITE_EMAIL}`}
            className="font-body text-sm text-foreground hover:text-primary transition-colors"
          >
            {SITE_EMAIL}
          </a>
          <p className="font-body text-xs text-muted-foreground tracking-wide uppercase">
            © Cole Puterbaugh 2026
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
