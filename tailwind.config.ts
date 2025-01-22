import { PRIMARY_BG_COLOR, PRIMARY_COLOR, QUATERNARY_TEXT_COLOR, SECONDARY_COLOR, SECONDARY_TEXT_COLOR, TERTIARY_TEXT_COLOR } from "./colors";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: PRIMARY_COLOR,
        secondary: SECONDARY_COLOR,
        primary_bg: PRIMARY_BG_COLOR,
        secondary_text: SECONDARY_TEXT_COLOR,
        tertiary_text: TERTIARY_TEXT_COLOR,
        quaternary_text: QUATERNARY_TEXT_COLOR,
      },
    },
  },
  plugins: [],
} satisfies Config;
