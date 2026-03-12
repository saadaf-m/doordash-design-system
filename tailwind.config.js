/** @type {import('tailwindcss').Config} */

// =============================================================================
// Design Tokens — sourced from Untitled UI v6.0 Figma design system
// Brand color: DoorDash red (#FF3008)
// =============================================================================

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // -------------------------------------------------------------------------
      // Colors
      // Gray scale: Untitled UI v6.0 flat gray (confirmed: 200, 600, 900)
      // Brand scale: Untitled UI purple — replace with DoorDash red when ready
      // -------------------------------------------------------------------------
      colors: {
        gray: {
          25:  "#FCFCFD",
          50:  "#F9FAFB",
          100: "#F2F4F7",
          200: "#E9EAEB", // confirmed from Figma
          300: "#D5D7DA",
          400: "#A4A7AE",
          500: "#717680",
          600: "#535862", // confirmed from Figma
          700: "#3A3F4B",
          800: "#252B37",
          900: "#181D27", // confirmed from Figma
          950: "#0D121C",
        },

        // DoorDash red — primary brand color
        brand: {
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
        },

        // Semantic surface colors
        white: "#FFFFFF",
        black: "#000000",
      },

      // -------------------------------------------------------------------------
      // Typography
      // Scale sourced directly from Figma styles.
      // Font: Inter (load via Google Fonts or self-host)
      // -------------------------------------------------------------------------
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
      },

      fontSize: {
        // Display scale
        "display-2xl": ["72px", { lineHeight: "90px", letterSpacing: "-2px" }],
        "display-xl":  ["60px", { lineHeight: "72px", letterSpacing: "-2px" }], // confirmed
        "display-lg":  ["48px", { lineHeight: "60px", letterSpacing: "-2px" }],
        "display-md":  ["36px", { lineHeight: "44px", letterSpacing: "-1px" }],
        "display-sm":  ["30px", { lineHeight: "38px", letterSpacing: "0"   }], // confirmed
        "display-xs":  ["24px", { lineHeight: "32px", letterSpacing: "0"   }], // confirmed

        // Text scale
        "text-xl":  ["20px", { lineHeight: "30px", letterSpacing: "0" }], // confirmed
        "text-lg":  ["18px", { lineHeight: "28px", letterSpacing: "0" }], // confirmed
        "text-md":  ["16px", { lineHeight: "24px", letterSpacing: "0" }],
        "text-sm":  ["14px", { lineHeight: "20px", letterSpacing: "0" }], // confirmed
        "text-xs":  ["12px", { lineHeight: "18px", letterSpacing: "0" }],
      },

      fontWeight: {
        regular:   "400",
        medium:    "500",
        semibold:  "600",
        bold:      "700",
      },

      // -------------------------------------------------------------------------
      // Spacing
      // Untitled UI uses a 4px base grid. Common values extracted from Figma:
      // 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128
      // Tailwind's default spacing scale covers this — extended here for
      // non-standard values seen in the Figma source.
      // -------------------------------------------------------------------------
      spacing: {
        4.5: "18px",
        13:  "52px",
        15:  "60px",
        18:  "72px",
        22:  "88px",
        26:  "104px",
        30:  "120px",
      },

      // -------------------------------------------------------------------------
      // Border radius
      // Figma uses rounded-[16px] for badges, rounded-[8px] for cards/inputs
      // -------------------------------------------------------------------------
      borderRadius: {
        none:  "0",
        xs:    "4px",
        sm:    "6px",
        md:    "8px",
        lg:    "10px",
        xl:    "12px",
        "2xl": "16px",
        "3xl": "20px",
        "4xl": "24px",
        full:  "9999px",
      },

      // -------------------------------------------------------------------------
      // Box shadows
      // Extracted from Figma shadow styles on Logomark and card components
      // -------------------------------------------------------------------------
      boxShadow: {
        xs:  "0px 1px 2px 0px rgba(10, 13, 18, 0.05)",
        sm:  "0px 1px 3px 0px rgba(10, 13, 18, 0.10), 0px 1px 2px 0px rgba(10, 13, 18, 0.06)",
        md:  "0px 4px 8px -2px rgba(10, 13, 18, 0.10), 0px 2px 4px -2px rgba(10, 13, 18, 0.06)",
        lg:  "0px 12px 16px -4px rgba(10, 13, 18, 0.08), 0px 4px 6px -2px rgba(10, 13, 18, 0.03)",
        xl:  "0px 20px 24px -4px rgba(10, 13, 18, 0.08), 0px 8px 8px -4px rgba(10, 13, 18, 0.03)",
        "2xl": "0px 24px 48px -12px rgba(10, 13, 18, 0.18)",
        "3xl": "0px 32px 64px -12px rgba(10, 13, 18, 0.14)",
        none: "none",
      },
    },
  },
  plugins: [],
};
