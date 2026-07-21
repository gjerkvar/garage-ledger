"use client";

import { FormField } from "@/src/components/layout/FormField";
import { FormEvent, useState } from "react";

export type OwnershipStatus = "CURRENT" | "FORMER";

export function ManualVehicleForm(){
    const [formData, setFormData] = useState<any>();
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
                    <FormField>
                        
                    </FormField>
                </div>
            </fieldset>
        </form>
    )
}