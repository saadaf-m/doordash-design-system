import { cn } from "../../utils/cn";

/**
 * Avatar
 *
 * Sizes:   xs | sm | md | lg | xl | 2xl
 * Shows image if src provided, falls back to initials, then a generic icon.
 */

const sizes = {
  xs:  "size-6 text-[10px]",
  sm:  "size-8 text-text-xs",
  md:  "size-10 text-text-sm",
  lg:  "size-12 text-text-md",
  xl:  "size-14 text-text-lg",
  "2xl": "size-16 text-display-xs",
};

const statusDotSizes = {
  xs:  "size-1.5 border",
  sm:  "size-2 border",
  md:  "size-2.5 border-2",
  lg:  "size-3 border-2",
  xl:  "size-3.5 border-2",
  "2xl": "size-4 border-2",
};

const statusColors = {
  online:  "bg-green-500",
  offline: "bg-gray-400",
  busy:    "bg-brand-500",
  away:    "bg-yellow-400",
};

function getInitials(name = "") {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function PersonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-[60%]" aria-hidden="true">
      <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 2c-5.33 0-8 2.67-8 4v1h16v-1c0-1.33-2.67-4-8-4z" />
    </svg>
  );
}

export function Avatar({
  src,
  alt,
  name,
  size = "md",
  status,
  className,
}) {
  const initials = getInitials(name || alt);

  return (
    <span className={cn("relative inline-flex shrink-0", className)}>
      <span
        className={cn(
          "inline-flex items-center justify-center rounded-full overflow-hidden bg-gray-100 text-gray-600 font-semibold select-none",
          sizes[size]
        )}
      >
        {src ? (
          <img
            src={src}
            alt={alt || name || "Avatar"}
            className="size-full object-cover"
          />
        ) : initials ? (
          initials
        ) : (
          <PersonIcon />
        )}
      </span>
      {status && (
        <span
          className={cn(
            "absolute bottom-0 right-0 rounded-full border-white",
            statusDotSizes[size],
            statusColors[status]
          )}
        />
      )}
    </span>
  );
}

/**
 * AvatarGroup — stacks multiple avatars with overlap
 */
export function AvatarGroup({ avatars = [], max = 4, size = "md" }) {
  const visible = avatars.slice(0, max);
  const overflow = avatars.length - max;

  return (
    <div className="flex items-center">
      {visible.map((avatar, i) => (
        <span key={i} className={i > 0 ? "-ml-2" : ""}>
          <Avatar
            {...avatar}
            size={size}
            className="ring-2 ring-white"
          />
        </span>
      ))}
      {overflow > 0 && (
        <span
          className={cn(
            "-ml-2 inline-flex items-center justify-center rounded-full bg-gray-100 text-gray-600 font-semibold ring-2 ring-white",
            sizes[size]
          )}
        >
          +{overflow}
        </span>
      )}
    </div>
  );
}
