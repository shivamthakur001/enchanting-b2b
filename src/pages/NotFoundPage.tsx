import { Link } from "../router/Router";

export function NotFoundPage() {
  return (
    <div className="mx-auto max-w-lg px-4 py-24 text-center">
      <p className="text-[11px] font-semibold tracking-[0.16em] text-ink-soft uppercase">404</p>
      <h1 className="mt-2 font-display text-5xl text-ink">This page is not on the map</h1>
      <p className="mt-3 text-ink-muted">The route you asked for is not part of the portal.</p>
      <Link
        to="/"
        className="mt-6 inline-flex h-11 items-center rounded-md bg-forest px-5 text-[14px] font-semibold text-ivory"
      >
        Return home
      </Link>
    </div>
  );
}
