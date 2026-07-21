import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-border bg-surface">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-md focus-visible:outline-none"
        >
          <div className="flex overflow-hidden rounded-md border-2 border-foreground bg-white shadow-sm">
            <span className="bg-blue-700 px-2 py-1.5 text-xs font-bold text-white">
              N
            </span>

            <span className="px-3 py-1.5 text-xs font-bold tracking-widest text-foreground">
              GL
            </span>
          </div>

          <div>
            <p className="font-semibold tracking-tight text-foreground">
              Garage Ledger
            </p>

            <p className="hidden text-xs text-foreground-muted sm:block">
              Your cars. Their stories.
            </p>
          </div>
        </Link>

        <nav className="flex items-center gap-5">
          <Link
            href="/garage"
            className="hidden text-sm font-medium text-foreground-muted transition hover:text-foreground sm:block"
          >
            My garage
          </Link>

          <Link
            href="/vehicles/new"
            className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary-hover"
          >
            Add vehicle
          </Link>
        </nav>
      </div>
    </header>
  );
}

