"use client";

import { useState } from "react";
import { ManualVehicleForm } from "./VehicleLookupForm/ManualRegistration";
import { VehicleLookupForm } from "./VehicleLookupForm/VehicleLookupForm";

export function AddVehicleOptions() {

    const [mode, setMode] = useState<"LOOKUP" | "MANUAL">("LOOKUP");

    if(mode === "MANUAL"){
        return(
            <section className="rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-card)] sm:p-8">
                <button
                    type="button"
                    onClick={(() => setMode("LOOKUP"))}
                    className="mb-6 text-sm font-medium text-foreground-muted hover:text-foreground"
                >
                    ← Back to registration lookup
                </button>

                <ManualVehicleForm />
            </section>
        )
    }

    return(
        <>
            <section className="rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-card)] sm:p-8">
                <h2 className="text-xl font-semibold text-foreground">
                    Search by registration number
                </h2>

                <p className="mt-2 text-sm text-foreground-muted">
                    Norway is supported first. More countries will be added later.
                </p>

                <div className="mt-6">
                    <VehicleLookupForm />
                </div>
            </section>

            <div className="my-8 flex items-center gap-4">
                <div className="h-px flex-1 bg-border"/>
                <span className="text-sm text-foreground-subtle">or</span>
                <div className="h-px flex-1 bg-border"/>
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
                    onClick={() => setMode("MANUAL")}
                    className="mt-5 rounded-xl border border-border-stromg bg-surface px-5 py-3 font-semibold text-foreground transition hover:border-foreground"
                >
                    Enter vehicle details
                </button>
            </section>
        </>
    )
}