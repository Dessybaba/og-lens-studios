"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Replace with real error reporting (e.g. Sentry) before launch.
    console.error(error);
  }, [error]);

  return (
    <div className="container-editorial flex min-h-[80vh] flex-col items-center justify-center text-center">
      <p className="eyebrow mb-6">Something went wrong</p>
      <h1 className="font-display text-4xl text-ink md:text-6xl">
        We lost focus for a moment.
      </h1>
      <p className="mt-6 max-w-md font-sans text-stone">
        An unexpected error occurred while loading this page. Try again, or
        head back to the homepage.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-10 border border-ink px-8 py-3 font-sans text-xs uppercase tracking-widest2 text-ink transition-colors duration-300 hover:bg-ink hover:text-ivory"
      >
        Try Again
      </button>
    </div>
  );
}
