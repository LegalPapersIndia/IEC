export default function FormField({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = false,
  placeholder = "",
  options = [],
  children,
  className = "",
  error,
  ...props
}) {
  const baseInputClass = `
    w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-slate-900
    placeholder:text-slate-400 shadow-sm transition duration-200
    focus:outline-none focus:ring-2
    ${
      error
        ? "border-red-400 bg-red-50/40 focus:border-red-500 focus:ring-red-500/20"
        : "border-slate-300 hover:border-slate-400 focus:border-navy-600 focus:ring-navy-600/20"
    }
  `;

  return (
    <div className={`space-y-1.5 ${className}`}>
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-semibold text-slate-700"
        >
          {label}
          {required && <span className="text-red-600 ml-1">*</span>}
        </label>
      )}

      {type === "select" ? (
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          aria-invalid={error ? true : undefined}
          className={baseInputClass}
          {...props}
        >
          <option value="">Select an option</option>
          {options.map((opt, index) => (
            <option key={index} value={opt.value || opt}>
              {opt.label || opt}
            </option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          rows={4}
          aria-invalid={error ? true : undefined}
          className={`${baseInputClass} resize-y min-h-[100px]`}
          {...props}
        />
      ) : type === "radio" ? (
        <div className="flex flex-wrap gap-4">{children}</div>
      ) : (
        <input
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          aria-invalid={error ? true : undefined}
          className={baseInputClass}
          {...props}
        />
      )}

      {error && <p className="text-xs font-medium text-red-600">{error}</p>}
    </div>
  );
}