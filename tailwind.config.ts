
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    screens: {
      'xs': '376px',  // Added custom breakpoint for screens larger than iPhone SE
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          pink: "#c0017e",
          blue: "#5797ef",
          purple: "#6b46c1", // Added purple from custom instructions
          deepPurple: "#7105a3", // Added from the image
          brightPink: "#c6008a", // Added from the image
          brightBlue: "#004aad", // Added from the image
        },
        foreground: "hsl(var(--foreground))",
        background: "hsl(var(--background))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #c0017e 0%, #5797ef 100%)",
      },
      fontFamily: {
        'assistant': ['Assistant', 'sans-serif'],
        'migdal': ['MigdalHaemeqMedium', 'sans-serif'],
        'gveretlevin': ['GveretLevin', 'sans-serif'],
      },
      animation: {
        "fade-in": "fadeIn 1.2s ease-out",
        "slide-up": "slideUp 1.2s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
