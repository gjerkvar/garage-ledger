"use client";

import { FormField } from "@/src/components/layout/FormField";
import { FormEvent, useState } from "react";

export type OwnershipStatus = "CURRENT" | "FORMER";

export type ManualVehicleFormData = {
  make: string;
  model: string;
  modelYear: string;
  registrationCountry: string;
  registrationNumber: string;
  vin: string;
  colour: string;
  fuelType: string;
  bodyType: string;
  currentMileageKm: string;
  nickname: string;
  purchaseDate: string;
  purchasePrice: string;
  status: OwnershipStatus;
  ownershipStory: string;
};


export function ManualVehicleForm(){
    const initialFormData: ManualVehicleFormData = {
        make: "",
        model: "",
        modelYear: "",
        registrationCountry: "NO",
        registrationNumber: "",
        vin: "",
        colour: "",
        fuelType: "",
        bodyType: "",
        currentMileageKm: "",
        nickname: "",
        purchaseDate: "",
        purchasePrice: "",
        status: "CURRENT",
        ownershipStory: "",
      };
    const [formData, setFormData] = useState<ManualVehicleFormData>(initialFormData);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    function updateField(
        field: keyof any,
        value:string
    ){
        setFormData((current:any) => ({
            ...current,
            [field]:value,
        }));
    }

    async function handleSubmit(
        event: FormEvent<HTMLFormElement>
    ){
        event.preventDefault();
        setIsSubmitting(true);

        try{
            console.log(formData);
        } catch(error){
            console.error("Could not add vehicle", error);
        } finally {
            setIsSubmitting(false);
        }
    }

    return(
        <form
            onSubmit={handleSubmit}
            className="space-y-8"
        >
            <fieldset className="space-y-5">
                <div>
                    <legend className="text-xl font-semibold text-foreground">
                        Vehicle details
                    </legend>

                    <p className="mt-1 text-sm text-foreground-muted">
                        Start with the basic information that identifies the car.
                    </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                    <FormField id="make" label="Make" required>
                        <input
                            id="make"
                            name="make"
                            required
                            autoComplete="off"
                            value={formData.make}
                            onChange={(event) => {
                                updateField("make", event.target.value);
                            }}
                            placeholder="Toyota"
                            className={inputClasses}
                        />
                    </FormField>

                    <FormField id="model" label="Model" required>
                        <input
                            id="model"
                            name="model"
                            required
                            autoComplete="off"
                            value={formData.model}
                            onChange={(event) => {
                                updateField("model", event.target.value)
                            }}
                            placeholder="MR2"
                            className={inputClasses}
                        />
                    </FormField>

                    <FormField id="modelYear" label="Model year">
                        <input
                            id="modelYear"
                            name="modelYear"
                            type="number"
                            min="1886"
                            max={new Date().getFullYear() +1}
                            value={formData.modelYear}
                            onChange={(event) => {
                                updateField("modelYear", event.target.value)
                            }}
                            placeholder="2002"
                            className="inputClasses"
                        />
                    </FormField>
                </div>
            </fieldset>
        </form>
    )
}

const inputClasses =
  "w-full rounded-xl border border-border-strong bg-surface px-4 py-3 text-foreground outline-none transition placeholder:text-foreground-subtle hover:border-foreground-muted focus:border-primary focus:ring-4 focus:ring-primary/10";