/**
 * Color tokens — sourced from Untitled UI v6.0 Figma design system.
 * Values marked "confirmed" were read directly from Figma via MCP.
 * All others are interpolated from the confirmed anchors.
 */

export const gray = {
  25:  "#FCFCFD",
  50:  "#F9FAFB",
  100: "#F2F4F7",
  200: "#E9EAEB", // confirmed
  300: "#D5D7DA",
  400: "#A4A7AE",
  500: "#717680",
  600: "#535862", // confirmed
  700: "#3A3F4B",
  800: "#252B37",
  900: "#181D27", // confirmed
  950: "#0D121C",
};

// DoorDash red — primary brand color
export const brand = {
  25:  "#FFF5F4",
  50:  "#FFECEA",
  100: "#FFD5D1",
  200: "#FFAAA3",
  300: "#FF7A70",
  400: "#FF4D40",
  500: "#FF3008", // DoorDash primary red
  600: "#E62B07",
  700: "#BF2406",
  800: "#8F1B04",
  900: "#5F1203",
  950: "#3A0B02",
};

export const white = "#FFFFFF";
export const black = "#000000";

// Semantic aliases
export const semantic = {
  // Text
  "text-primary":     gray[900],
  "text-secondary":   gray[600],
  "text-tertiary":    gray[500],
  "text-disabled":    gray[400],
  "text-placeholder": gray[400],
  "text-brand":       brand[600],
  "text-on-brand":    white,

  // Backgrounds
  "bg-primary":      white,
  "bg-secondary":    gray[50],
  "bg-tertiary":     gray[100],
  "bg-brand":        brand[500],
  "bg-brand-subtle": brand[50],

  // Borders
  "border-primary":  gray[200],
  "border-secondary":gray[300],
  "border-brand":    brand[500],
};
