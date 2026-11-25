export default function GradientButton({
  children,
  onClick,
  className = "",
  disabled = false,
  type = "button",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center gap-2
        px-8 py-3.5 rounded-lg font-semibold text-white tracking-wide
        bg-orange-600 shadow-sm shadow-orange-600/30
        hover:bg-orange-700 hover:shadow-md hover:-translate-y-0.5
        active:translate-y-0
        focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2
        transition-all duration-200
        disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-sm
        ${className}
      `}
    >
      {children}
    </button>
  );
}