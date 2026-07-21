import Link from "next/link";
import { AddVehicleOptions } from "../AddVehicleOptions"; // Adjusted path if the file is in the same directory

export default function NewVehiclePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
      <div className="mb-10">
        <Link
          href="/vehicles/garage"
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

      <AddVehicleOptions />
    </main>
  );
}