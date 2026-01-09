export function CardSkeleton() {
  return (
    <article className="bg-card animate-pulse">
      <div className="rounded-lg overflow-hidden bg-muted">
        <div className="w-full h-32 bg-muted-foreground/20" />
      </div>

      <header className="py-2">
        <div className="h-3 w-3/4 rounded bg-muted-foreground/20" />
      </header>
    </article>
  );
}
