import { cn } from "../../utils/cn";

/**
 * Button
 *
 * Variants: primary | secondary | tertiary | ghost | destructive
 * Sizes:    sm | md | lg | xl | 2xl
 *
 * Tokens sourced from Untitled UI v6.0 Figma design system.
 */

const base =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

const variants = {
  // DoorDash red (#FF3008) = brand-500; hover darkens to brand-600
  primary:
    "bg-brand-500 text-white shadow-xs hover:bg-brand-600 focus-visible:ring-brand-500",
  secondary:
    "bg-white text-gray-700 shadow-xs border border-gray-300 hover:bg-gray-50 focus-visible:ring-brand-500",
  tertiary:
    "bg-transparent text-brand-600 hover:bg-brand-50 focus-visible:ring-brand-500",
  ghost:
    "bg-transparent text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus-visible:ring-gray-400",
  // Destructive: outlined red — visually distinct from filled primary
  destructive:
    "bg-white text-brand-600 shadow-xs border border-brand-300 hover:bg-brand-50 focus-visible:ring-brand-500",
};

const sizes = {
  sm:  "h-9 px-3.5 text-text-sm",
  md:  "h-10 px-4 text-text-sm",
  lg:  "h-11 px-[18px] text-text-md",
  xl:  "h-12 px-5 text-text-md",
  "2xl": "h-[60px] px-7 text-text-lg",
};

const iconSizes = {
  sm:  "size-4",
  md:  "size-4",
  lg:  "size-5",
  xl:  "size-5",
  "2xl": "size-6",
};

export function Button({
  variant = "primary",
  size = "md",
  leftIcon,
  rightIcon,
  loading = false,
  disabled = false,
  className,
  children,
  ...props
}) {
  const iconClass = iconSizes[size];

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <Spinner className={iconClass} />
      ) : leftIcon ? (
        <span className={iconClass}>{leftIcon}</span>
      ) : null}
      {children}
      {!loading && rightIcon && (
        <span className={iconClass}>{rightIcon}</span>
      )}
    </button>
  );
}

function Spinner({ className }) {
  return (
    <svg
      className={cn("animate-spin", className)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12" cy="12" r="10"
        stroke="currentColor" strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}
