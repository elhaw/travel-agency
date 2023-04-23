/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{css,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",
      blackishgreen: {
        DEFAULT: "#11221",
      },
      mintgreen: {
        DEFAULT: "#8DD3BB",
        100: "#9BE0C8",
        200: "#82CBB2",
      },
      netural: {
        "gray-1": "#D2D1D3",
        "gray-5": "#8F8C91",
      },
      Slamon: {
        DEFAULTL: "#FF868",
      },
    },
    fontSize: {
      xs: [".625rem", { lineHeight: "1.25" }], // 10px = .625rem
      sm: [".75rem", { lineHeight: "1.25" }], // 12px = .75rem
      base: [".875rem", { lineHeight: "1.25" }], // 14px = .875rem
      lg: ["1rem", { lineHeight: "1.25" }], // 16px = 1rem
      xl: ["1.25rem", { lineHeight: "1.25" }], // 20px = 1.25rem
      "2xl": ["1.5rem", { lineHeight: "1.25" }], // 24px = 1.5rem
      "3xl": ["1.875rem", { lineHeight: "1.25" }], // 30px = 1.875rem
      "4xl": ["2rem", { lineHeight: "1.25" }], // 32px = 2rem
      "5xl": ["2.25rem", { lineHeight: "1.3" }], // 36px = 2.25rem
    },
    fontWeight: {
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
    fontFamily: {
      Montserrat: ["Montserrat"],
      Tradegothic: ["Tradegothic"],
    },
    extend: {
      borderRadius: {
        xs: ".25rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
