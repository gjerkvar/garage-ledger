type FormFieldProps = {
  label: string;
  id: string;
  required?: boolean;
  children: React.ReactNode;
};

export function FormField({
  label,
  id,
  required = false,
  children,
}: FormFieldProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-foreground">
        {label}

        {required && (
          <span className="ml-1 text-danger">*</span>
        )}
      </span>

      {children}
    </label>
  );
}