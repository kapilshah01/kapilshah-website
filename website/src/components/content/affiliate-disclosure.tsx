export function AffiliateDisclosure({
  className = "",
}: {
  className?: string;
}) {
  return (
    <aside
      aria-label="Affiliate disclosure"
      className={`my-6 rounded-lg border border-border/80 bg-surface-muted/60 px-4 py-3 text-xs leading-relaxed text-muted-foreground ${className}`}
    >
      <p>
        <strong className="font-semibold text-foreground">Disclosure:</strong> Some links on this site may be partner links. If you purchase through one, we may earn a commission at no additional cost to you. Our recommendations are based on relevance to the security problem, not commission.
      </p>
    </aside>
  );
}
