"use client";

import { FormField } from "@/src/components/layout/FormField";
import { FormEvent, useState } from "react";
import { RegistrationPlateInput } from "./RegistrationPlateInput";

export type OwnershipStatus = "CURRENT" | "FORMER";
export type MileageUnit = "KM" | "MI";

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
  currentMileage: string;
  mileageUnit: MileageUnit;
  nickname: string;
  purchaseDate: string;
  purchasePrice: string;
  status: OwnershipStatus;
  ownershipStory: string;
};

export const countries = [
  { code: "NO", plateCode: "N", label: "Norway", supported: true },
  { code: "SE", plateCode: "S", label: "Sweden", supported: false },
  { code: "DK", plateCode: "DK", label: "Denmark", supported: false },
  { code: "FI", plateCode: "FIN", label: "Finland", supported: false },
  { code: "GB", plateCode: "UK", label: "United Kingdom", supported: false },
  { code: "OTHER", plateCode: "OTHER", label: "Other", supported: true },
];

export function ManualVehicleForm() {
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
    currentMileage: "",
    mileageUnit: "KM",
    nickname: "",
    purchaseDate: "",
    purchasePrice: "",
    status: "CURRENT",
    ownershipStory: "",
  };

  const [selectedCountry, setSelectedCountry] = useState<any>();
  const [formData, setFormData] =
    useState<ManualVehicleFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  function updateField(field: keyof any, value: string) {
    setFormData((current: any) => ({
      ...current,
      [field]: value,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      console.log(formData);
    } catch (error) {
      console.error("Could not add vehicle", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
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
                updateField("model", event.target.value);
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
              max={new Date().getFullYear() + 1}
              value={formData.modelYear}
              onChange={(event) => {
                updateField("modelYear", event.target.value);
              }}
              placeholder="2002"
              className={inputClasses}
            />
          </FormField>

          <FormField id="registrationCountry" label="Registration country">
            <select
              id="registrationCountry"
              name="registrationCountry"
              className={inputClasses}
              onChange={(event) => setSelectedCountry(event.target.value)}
            >
              {countries.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.label}
                </option>
              ))}
            </select>
          </FormField>

          <FormField
            id="registrationNumber"
            label="Registration details (optional)"
          >
            <RegistrationPlateInput
              countryCode={formData.registrationCountry}
              registrationNumber={formData.registrationNumber}
              onCountryChange={(country) =>
                updateField("registrationCountry", country)
              }
              onRegistrationNumberChange={(registrationNumber) =>
                updateField("registrationNumber", registrationNumber)
              }
            />
          </FormField>

          <FormField id="vin" label="VIN (optional)">
            <input
              id="vin"
              name="vin"
              autoComplete="off"
              maxLength={17}
              value={formData.vin}
              onChange={(event) =>
                updateField("vin", event.target.value.toUpperCase())
              }
              className={inputClasses}
            />
          </FormField>
        </div>
      </fieldset>

      <div className="h-px bg-border" />

      <fieldset className="space-y-5">
        <div>
          <legend className="text-xl font-semibold text-foreground">
            Current configuration
          </legend>

          <p className="mt-1 text-sm leading-6 text-foreground-muted">
            Add what the vehicle is like today.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <FormField id="colour" label="Colour">
            <input
              id="colour"
              name="colour"
              autoComplete="off"
              value={formData.colour}
              onChange={(event) => updateField("colour", event?.target.value)}
              placeholder="Rosso California"
              className={inputClasses}
            />
          </FormField>

          <FormField id="fuelType" label="Fuel type">
            <select
              id="fuelType"
              name="fuelType"
              value={formData.fuelType}
              onChange={(event) => updateField("fuelType", event.target.value)}
              className={inputClasses}
            >
              <option value="">Select fuel type</option>
              <option value="PETROL">Petrol</option>
              <option value="DIESEL">Diesel</option>
              <option value="HYBRID">Hybrid</option>
              <option value="ELECTRIC">Electric</option>
              <option value="HYDROGEN">Hydrogen</option>
              <option value="OTHER">Other</option>
            </select>
          </FormField>

          <FormField id="bodyType" label="Body type">
            <input
              id="bodyType"
              name="bodyType"
              autoComplete="off"
              value={formData.bodyType}
              onChange={(event) => updateField("bodyType", event.target.value)}
              placeholder="Roadster"
              className={inputClasses}
            />
          </FormField>

          <FormField id="currentMileage" label="Current mileage">
            <div className="flex overflow-hidden rounded-xl border border-border-strong bg-surface transition focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10">
              <input
                id="currentMileage"
                name="currentMileage"
                type="number"
                min="0"
                step="1"
                value={formData.currentMileage}
                onChange={(event) =>
                  updateField("currentMileage", event.target.value)
                }
                placeholder="17543"
                className="min-w-0 flex-1 bg-transparent px-4 py-3 text-foreground outline-none placeholder:text-foreground-subtle"
              />
              <select
                id="mileageUnit"
                name="mileageUnit"
                aria-label="Mileage unit"
                value={formData.mileageUnit}
                onChange={(event) =>
                  updateField("mileageUnit", event.target.value as MileageUnit)
                }
                className="border-1 border-border-strong bg-surface-muted px-3 py-3 text-sm font-semibold text-foreground outline-none"
              >
                <option value="KM">km</option>
                <option value="MI">miles</option>
              </select>
            </div>
          </FormField>
        </div>
      </fieldset>

      <div className="h-px bg-border" />

      <fieldset className="space-y-5">
        <div>
          <legend className="text-xl font-semibold text-foreground">
            Ownership
          </legend>

          <p className="mt-1 text-sm leading-6 text-foreground-muted">
            Add the details that make the vehicle part of your garage.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <FormField id="nickname" label="Nicnkname">
            <input
              id="nickname"
              name="nickname"
              autoComplete="off"
              value={formData.nickname}
              onChange={(event) => updateField("nickname", event.target.value)}
              placeholder="Roxanne"
              className={inputClasses}
            />
          </FormField>

          <FormField id="status" label="Ownership status">
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={(event) =>
                updateField("status", event.target.value as OwnershipStatus)
              }
              className={inputClasses}
            >
              <option value="CURRENT">Currently owned</option>
              <option value="FORMER">Previously owned</option>
            </select>
          </FormField>

          <FormField id="purchaseDate" label="Purchase date">
            <input
              id="purchaseDate"
              name="purchaseDate"
              type="date"
              value={formData.purchaseDate}
              onChange={(event) =>
                updateField("purchaseDate", event.target.value)
              }
              className={inputClasses}
            />
          </FormField>

          <FormField id="purchasePrice" label="Purchase price">
            <div className="relative">
              <input
                id="purchasePrice"
                name="purchasePrice"
                type="number"
                min="0"
                step="1"
                value={formData.purchasePrice}
                onChange={(event) =>
                  updateField("purchasePrice", event.target.value)
                }
                placeholder="8500"
                className={`${inputClasses} pr-16`}
              />

              <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm text-foreground-subtle">
                NOK
              </span>
            </div>
          </FormField>

          <FormField id="ownershipStory" label="Ownership story">
                <textarea
                    id="ownershipStory"
                    name="ownershipStory"
                    rows={5}
                    value={formData.ownershipStory}
                    onChange={(event) =>
                        updateField("ownershipStory", event.target.value)
                    }
                    placeholder="How did you find the vehicle? What makes it special?"
                    className={`${inputClasses} resize-y`}
                />
          </FormField>
        </div>
      </fieldset>
      {submitError && (
        <p
          role="alert"
          className="rounded-xl border border-danger/30 bg-danger/5 px-4 py-3 text-sm text-danger"
        >
          {submitError}
        </p>
      )}

      <div className="flex flex-col-reverse gap-3 border-t border-border pt-6 sm:flex-row sm:justify-end">
        <button
          type="button"
          disabled={isSubmitting}
          onClick={() => setFormData(initialFormData)}
          className="rounded-xl border border-border-strong bg-surface px-5 py-3 font-semibold text-foreground transition hover:border-foreground disabled:cursor-not-allowed disabled:opacity-50"
        >
          Clear form
        </button>

        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-xl bg-primary px-5 py-3 font-semibold text-primary-foreground transition hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? "Adding vehicle..." : "Add to garage"}
        </button>
      </div>
    </form>
  );
}

const inputClasses =
  "w-full rounded-xl border border-border-strong bg-surface px-4 py-3 text-foreground outline-none transition placeholder:text-foreground-subtle hover:border-foreground-muted focus:border-primary focus:ring-4 focus:ring-primary/10";
