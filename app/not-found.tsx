import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-editorial flex min-h-[80vh] flex-col items-center justify-center text-center">
      <p className="eyebrow mb-6">Error 404</p>
      <h1 className="font-display text-5xl text-ink md:text-7xl">
        This frame doesn&apos;t exist.
      </h1>
      <p className="mt-6 max-w-md font-sans text-stone">
        The page you&apos;re looking for has been moved, renamed, or never
        existed. Let&apos;s get you back into focus.
      </p>
      <Link
        href="/"
        className="mt-10 border border-ink px-8 py-3 font-sans text-xs uppercase tracking-widest2 text-ink transition-colors duration-300 hover:bg-ink hover:text-ivory"
      >
        Return Home
      </Link>
    </div>
  );
}
