import { cn } from "../../utils/cn";

/**
 * Card
 *
 * A flexible container with optional image, header, body, and footer slots.
 * Also exports RestaurantCard — a DoorDash-specific card variant.
 */

export function Card({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className, children }) {
  return (
    <div className={cn("px-6 py-5 border-b border-gray-200", className)}>
      {children}
    </div>
  );
}

export function CardBody({ className, children }) {
  return (
    <div className={cn("px-6 py-5", className)}>
      {children}
    </div>
  );
}

export function CardFooter({ className, children }) {
  return (
    <div
      className={cn(
        "px-6 py-4 border-t border-gray-200 bg-gray-50",
        className
      )}
    >
      {children}
    </div>
  );
}

/**
 * RestaurantCard
 *
 * DoorDash-style card for restaurant/store listings.
 * Props:
 *   image       — cover image URL
 *   name        — restaurant name
 *   cuisine     — cuisine type string
 *   rating      — numeric (e.g. 4.7)
 *   reviewCount — number of reviews
 *   deliveryTime— string (e.g. "25–35 min")
 *   deliveryFee — string (e.g. "$0 delivery fee" or "Free delivery")
 *   promoted    — boolean, shows "Promoted" badge
 *   onClick     — click handler
 */
export function RestaurantCard({
  image,
  name,
  cuisine,
  rating,
  reviewCount,
  deliveryTime,
  deliveryFee,
  promoted = false,
  onClick,
  className,
}) {
  return (
    <div
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      className={cn(
        "bg-white rounded-xl overflow-hidden cursor-pointer group transition-shadow duration-200 hover:shadow-md",
        className
      )}
    >
      {/* Cover image */}
      <div className="relative aspect-[16/9] bg-gray-100 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={name}
            className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="size-full flex items-center justify-center text-gray-300">
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-12" aria-hidden="true">
              <path d="M21 3H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 16H3V5h18v14zm-10-7l-4 5h8l-4-5zm2-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
            </svg>
          </div>
        )}
        {promoted && (
          <span className="absolute top-2 left-2 bg-white text-gray-700 text-text-xs font-medium px-2 py-0.5 rounded-full shadow-xs">
            Promoted
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-text-md font-semibold text-gray-900 truncate">
            {name}
          </h3>
          {rating != null && (
            <span className="flex items-center gap-1 shrink-0 text-text-sm font-medium text-gray-700">
              <StarIcon className="size-4 text-yellow-400" />
              {rating}
            </span>
          )}
        </div>

        <div className="flex items-center gap-1.5 mt-0.5 text-text-sm text-gray-600 flex-wrap">
          {cuisine && <span>{cuisine}</span>}
          {reviewCount != null && (
            <>
              <Dot />
              <span>({reviewCount}+)</span>
            </>
          )}
        </div>

        <div className="flex items-center gap-1.5 mt-1.5 text-text-sm text-gray-600 flex-wrap">
          {deliveryTime && <span>{deliveryTime}</span>}
          {deliveryFee && (
            <>
              <Dot />
              <span className={cn(deliveryFee.toLowerCase().includes("free") && "text-green-600 font-medium")}>
                {deliveryFee}
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function StarIcon({ className }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function Dot() {
  return <span className="size-1 rounded-full bg-gray-400 shrink-0" aria-hidden="true" />;
}
