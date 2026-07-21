export type CountryCode = "NO" | "SE" | "DK" | "FI" | "GB";

type RegistrationPlateInputProps = {
    countryCode: CountryCode;
    registrationNumber: string;
    onCountryChange: (countryCode: CountryCode) => void;
    onRegistrationNumberChange: (value: string) => void;
    disabled?: boolean;
};

const countries = [
    {code: "NO", plateCode: "N", label: "Norway", supported: true},
    {code: "SE", plateCode: "S", label: "Sweden", supported: false},
    {code: "DK", plateCode: "DK", label: "Denmark", supported: false},
    {code: "FI", plateCode: "FIN", label: "Finland", supported: false},
    {code: "GB", plateCode: "UK", label: "United Kingdom", supported: false}, 
]

export function RegistrationPlateInput({
    countryCode,
    registrationNumber,
    onCountryChange,
    onRegistrationNumberChange,
    disabled = false,
}: RegistrationPlateInputProps) {

    const selectedCountry = countries.find((country) => country.code === countryCode) ?? countries[0];

    return(
         <div className="flex w-full max-v-md overflow-hidden rounded-xl border-2 border-neutral-900 bg-white shadow-sm">
            <label className="relative flex min-w-20 items-center justify-center bg-blue-700 text-white">
                <span className="pointer-events-none font-semibold">
                    {selectedCountry.plateCode}
                </span>

                <select
                    aria-label="Country of registration"
                    value={countryCode}
                    disabled={disabled}
                    onChange={(event) => onCountryChange(event.target.value as CountryCode)
                    }
                    className="absolute inset-0 cursor-pointer opacity-0"
                >
                    {countries.map((country) => (
                        <option
                            key={country.code}
                            value={country.code}
                            disabled={!country.supported}
                        >
                            {country.label}
                            {!country.supported ? " - coming latear" : ""}
                        </option>
                    ))}
                </select>
            </label>
            
            <input
                aria-label="Registration number"
                value={registrationNumber}
                disabled={disabled}
                onChange={(event) =>
                    onRegistrationNumberChange(
                        event.target.value.toUpperCase()
                    )
                }
                placeholder="AB 12345"
                className="min-w-0 flex-1 px-5 py-4 text-2xl font-semibold uppercase tracking-widest outline-none"
            />
        </div>
    )
}