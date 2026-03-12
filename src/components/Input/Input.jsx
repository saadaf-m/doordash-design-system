import { cn } from "../../utils/cn";

/**
 * Input
 *
 * Sizes:  sm | md
 * States: default | error | disabled
 *
 * Confirmed from Figma: seen in modal form with label above, hint text below.
 * Height: 44px (md), 40px (sm). Border: gray-300, focus: brand-600.
 */

export function Input({
  label,
  hint,
  error,
  size = "md",
  leftIcon,
  rightIcon,
  className,
  id,
  ...props
}) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

  const inputBase =
    "w-full rounded-lg border bg-white text-gray-900 placeholder:text-gray-400 shadow-xs transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-offset-0 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500";

  const inputSizes = {
    sm: "h-10 px-3.5 text-text-sm",
    md: "h-11 px-3.5 text-text-md",
  };

  const inputState = error
    ? "border-brand-300 focus:border-brand-300 focus:ring-brand-100"
    : "border-gray-300 focus:border-brand-600 focus:ring-brand-100";

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      {label && (
        <label
          htmlFor={inputId}
          className="text-text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        {leftIcon && (
          <span className="pointer-events-none absolute left-3.5 text-gray-500 size-5">
            {leftIcon}
          </span>
        )}
        <input
          id={inputId}
          className={cn(
            inputBase,
            inputSizes[size],
            inputState,
            leftIcon && "pl-10",
            rightIcon && "pr-10"
          )}
          {...props}
        />
        {rightIcon && (
          <span className="pointer-events-none absolute right-3.5 text-gray-500 size-5">
            {rightIcon}
          </span>
        )}
      </div>
      {(hint || error) && (
        <p
          className={cn(
            "text-text-sm",
            error ? "text-brand-600" : "text-gray-600"
          )}
        >
          {error || hint}
        </p>
      )}
    </div>
  );
}
