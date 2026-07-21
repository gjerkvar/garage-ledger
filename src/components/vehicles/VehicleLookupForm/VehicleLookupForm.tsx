"use client";

import { FormEvent, useState } from "react";
import { CountryCode, RegistrationPlateInput } from "./RegistrationPlateInput";

export function VehicleLookupForm() {
    const [countryCode, setCountryCode] = useState<CountryCode>("NO")
    const [registrationNumber, setRegistrationNumber] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event?.preventDefault();
        setIsLoading(true);

        try {
            console.log("LOL")
        } catch {
            console.log("catcj")
        } finally {
            console.log("finally")
        }
    }

    return (
        <form>
            <RegistrationPlateInput 
                countryCode={countryCode}
                registrationNumber={registrationNumber}
                onCountryChange={(newCountryCode => {
                    setCountryCode(newCountryCode);
                    setRegistrationNumber("");
                })}
                onRegistrationNumberChange={setRegistrationNumber}
                disabled={isLoading}
            />

            <button
                type="submit"
                disabled={isLoading}
                className="w-full rounded-xl bg-neutral-900 px-5 py-4 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
            >

                {isLoading ? "Searching..." : "Find vehicle"}
            </button>
        </form>
    );
}