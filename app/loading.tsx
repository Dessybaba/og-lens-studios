export default function Loading() {
  return (
    <div
      className="flex h-screen w-full items-center justify-center bg-ivory"
      role="status"
      aria-live="polite"
    >
      <div className="flex flex-col items-center gap-4">
        <span className="h-9 w-9 animate-spin rounded-full border border-hairline border-t-gold" />
        <span className="font-sans text-xs uppercase tracking-widest2 text-stone">
          Loading
        </span>
      </div>
    </div>
  );
}
