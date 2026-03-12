/**
 * Typography tokens — sourced from Untitled UI v6.0 Figma design system.
 * All values confirmed from Figma via MCP unless noted.
 * Font family: Inter
 */

export const fontFamily = {
  sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
  mono: ["source-code-pro", "Menlo", "Monaco", "Consolas", "Courier New", "monospace"],
};

export const fontWeight = {
  regular:  400,
  medium:   500,
  semibold: 600,
  bold:     700,
};

// fontSize: [size, lineHeight, letterSpacing]
export const typeScale = {
  "display-2xl": { fontSize: "72px", lineHeight: "90px", letterSpacing: "-2px"  },
  "display-xl":  { fontSize: "60px", lineHeight: "72px", letterSpacing: "-2px"  }, // confirmed
  "display-lg":  { fontSize: "48px", lineHeight: "60px", letterSpacing: "-2px"  },
  "display-md":  { fontSize: "36px", lineHeight: "44px", letterSpacing: "-1px"  },
  "display-sm":  { fontSize: "30px", lineHeight: "38px", letterSpacing: "0"     }, // confirmed
  "display-xs":  { fontSize: "24px", lineHeight: "32px", letterSpacing: "0"     }, // confirmed
  "text-xl":     { fontSize: "20px", lineHeight: "30px", letterSpacing: "0"     }, // confirmed
  "text-lg":     { fontSize: "18px", lineHeight: "28px", letterSpacing: "0"     }, // confirmed
  "text-md":     { fontSize: "16px", lineHeight: "24px", letterSpacing: "0"     },
  "text-sm":     { fontSize: "14px", lineHeight: "20px", letterSpacing: "0"     }, // confirmed
  "text-xs":     { fontSize: "12px", lineHeight: "18px", letterSpacing: "0"     },
};
