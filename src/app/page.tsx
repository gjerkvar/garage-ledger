import { Header } from "@/src/components/layout/header/Header";
import { VehicleLookupForm } from "@/src/app/vehicles/VehicleLookupForm/VehicleLookupForm";

export default function Home() {
  return (
    <div>
      <section className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
          Your digital garage
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Keep every car, every repair, and every story.
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-foreground-muted">
          Add a vehicle by registration number and build a complete ownership history.
        </p>

        <div className="mt-10 flex justify-center">
          <VehicleLookupForm />
        </div>
      </section>
    </div>
  );
}
