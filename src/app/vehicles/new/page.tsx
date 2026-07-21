import Link from "next/link";
import { VehicleLookupForm } from "../VehicleLookupForm/VehicleLookupForm";

export default function NewVehicle() {

    return (
        <main className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
            <div className="mb-10">
                <Link
                    href="/garage"
                    className="text-sm font-medium text-foreground-muted transition hover:text-foreground"
                >
                    ← Back to my garage
                </Link>

                <p className="mt-8 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                    New vehicle
                </p>

                <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground">
                    Add a vehicle
                </h1>

                <p className="mt-4 max-w-xl leading-7 text-foreground-muted">
                    Search by registration number to import vehicle details, or add the
                    car manually if automatic lookup is unavailable.
                </p>
            </div>

            <section className="rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-card)] sm:p-8">
                <h2 className="text-xl font-semibold text-foreground">
                    Search by registration number
                </h2>

                <p className="mt-2 text-sm leading-6 text-foreground-muted">
                    Norway is supported first. More countries will be added later.
                </p>

                <div className="mt-6">
                    <VehicleLookupForm />
                </div>
            </section>

            <div className="my-8 flex item-center gap-4">
                <div className="h-px flex-1 bg-border" />
                <span className="text-sm text-foreground-subtle">or</span>
                <div className="h-px flex-1 bg-border" />
            </div>
            
            <section className="rounded-2xl border border-dashed border-border-strong bg-surface-muted p-6 sm:p-8">
                <h2 className="text-xl font-semibold text-foreground">
                    Add manually
                </h2>

                <p className="mt-2 text-sm leading-6 text-foreground-muted">
                    Useful for unsupported countries, imported cars, project vehicles,
                    or anything the registry cannot find.
                </p>

                <button
                    type="button"
                    className="mt-5 rounded-xl border border-border-strong bg-surface px-5 py-3 font-semibold text-foreground transition hover:border-foreground"
                >
                    Enter vehicle details
                </button>

            </section>
        </main>
    )
}