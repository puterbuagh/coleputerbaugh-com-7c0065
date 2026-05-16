import { Link } from 'react-router-dom';

const baseStyles =
  'inline-flex items-center justify-center gap-2 font-body text-sm md:text-base font-medium tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none';

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3',
  lg: 'px-8 py-4 text-base md:text-lg',
};

const variants = {
  primary:
    'bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_1px_0_0_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_-12px_rgba(192,86,33,0.55)] hover:-translate-y-0.5',
  secondary:
    'bg-transparent text-foreground border border-border hover:bg-muted hover:border-foreground/40',
  ghost:
    'bg-transparent text-foreground hover:text-primary underline-offset-4 hover:underline px-0 py-0',
};

function Button({
  as = 'button',
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  external, // accepted and ignored; auto-detected via href
  ...props
}) {
  // Strip external so it never lands on the DOM
  void external;

  const classes = `${baseStyles} ${variant === 'ghost' ? '' : sizes[size]} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:');
    return (
      <a
        href={href}
        className={classes}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...props}
      >
        {children}
      </a>
    );
  }

  const Tag = as;
  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
}

export default Button;
