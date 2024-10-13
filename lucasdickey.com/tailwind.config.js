/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
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
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

const colors = require("tailwindcss/colors");

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fdf0f1",
          100: "#fad7d9",
          200: "#f6bec1",
          300: "#f2a5a9",
          400: "#ee8c91",
          500: "#ea7379",
          600: "#c1121f",
          700: "#9a0e19",
          800: "#730b13",
          900: "#4d070d",
        },
        secondary: {
          50: "#fff9e8",
          100: "#fef3d1",
          200: "#fdedb9",
          300: "#fde7a2",
          400: "#fce18b",
          500: "#fbdb74",
          600: "#fdf0d5",
          700: "#cac0aa",
          800: "#979080",
          900: "#656055",
        },
        accent: {
          50: "#e6eef2",
          100: "#ccdde5",
          200: "#b3ccd8",
          300: "#99bbcc",
          400: "#80aabf",
          500: "#669bbc",
          600: "#527c96",
          700: "#3d5d71",
          800: "#293e4b",
          900: "#141f26",
        },
        dark: {
          50: "#e6eaec",
          100: "#ccd5d9",
          200: "#b3c0c6",
          300: "#99abb3",
          400: "#8096a0",
          500: "#66818d",
          600: "#003049",
          700: "#00263a",
          800: "#001c2c",
          900: "#00131d",
        },
        wine: {
          50: "#f2e6e6",
          100: "#e5cccc",
          200: "#d8b3b3",
          300: "#cc9999",
          400: "#bf8080",
          500: "#b26666",
          600: "#780000",
          700: "#600000",
          800: "#480000",
          900: "#300000",
        },
      },
    },
  },
};
