import { cn } from "../../utils/cn";

/**
 * Badge
 *
 * Sizes:    sm | md | lg
 * Colors:   gray | brand | red | orange | yellow | green | blue | indigo | purple | pink
 *
 * Confirmed from Figma: rounded-2xl pill, brand-50 bg, brand-700 text, px-3 py-1, text-sm/medium.
 */

const base = "inline-flex items-center gap-1.5 font-medium rounded-full";

const sizes = {
  sm: "px-2 py-0.5 text-text-xs",
  md: "px-2.5 py-0.5 text-text-sm",
  lg: "px-3 py-1 text-text-sm",
};

const colors = {
  gray:   "bg-gray-100   text-gray-700   border border-gray-200",
  brand:  "bg-brand-50   text-brand-700  border border-brand-200",
  red:    "bg-red-50     text-red-700    border border-red-200",
  orange: "bg-orange-50  text-orange-700 border border-orange-200",
  yellow: "bg-yellow-50  text-yellow-700 border border-yellow-200",
  green:  "bg-green-50   text-green-700  border border-green-200",
  blue:   "bg-blue-50    text-blue-700   border border-blue-200",
  indigo: "bg-indigo-50  text-indigo-700 border border-indigo-200",
  purple: "bg-purple-50  text-purple-700 border border-purple-200",
  pink:   "bg-pink-50    text-pink-700   border border-pink-200",
};

function Dot({ className }) {
  return <span className={cn("size-1.5 rounded-full bg-current", className)} />;
}

export function Badge({
  size = "md",
  color = "gray",
  dot = false,
  leftIcon,
  rightIcon,
  className,
  children,
}) {
  return (
    <span className={cn(base, sizes[size], colors[color], className)}>
      {dot && <Dot />}
      {leftIcon && <span className="size-3">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="size-3">{rightIcon}</span>}
    </span>
  );
}
