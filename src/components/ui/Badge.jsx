import React from 'react';

const variantClasses = {
  default: 'bg-foreground/5 text-foreground border-border',
  accent: 'bg-primary text-primary-foreground border-primary',
  outline: 'bg-transparent text-foreground border-border',
  muted: 'bg-muted text-muted-foreground border-transparent',
};

function Badge({ children, variant = 'default', className = '' }) {
  const v = variantClasses[variant] || variantClasses.default;
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-[0.08em] font-body ${v} ${className}`}
    >
      {children}
    </span>
  );
}

export default Badge;
