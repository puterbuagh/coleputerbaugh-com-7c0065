import React from 'react';

function SectionDivider({ label, className = '' }) {
  return (
    <div className={`relative w-full ${className}`} aria-hidden={!label}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-6">
          <span className="h-px flex-1 bg-border" />
          {label ? (
            <span className="font-body text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              {label}
            </span>
          ) : null}
          <span className="h-px flex-1 bg-border" />
        </div>
      </div>
    </div>
  );
}

export default SectionDivider;
