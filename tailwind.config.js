/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#A128FF",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#6100AD",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#00AAFF",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Satoshi Variable", "Satoshi", "sans-serif"],
      },
      boxShadow: {
        'card': '0px 0px 14px rgba(211, 211, 211, 0.15)',
        'nav': '0px 0px 20px rgba(127, 127, 127, 0.15)',
        'logo': '0px 0px 10.25px rgba(148, 148, 148, 0.25)',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}