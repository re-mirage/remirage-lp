import type { Config } from 'tailwindcss';
const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette');

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          50: 'hsl(262.1, 83.3%, 97%)',
          100: 'hsl(262.1, 83.3%, 92%)',
          200: 'hsl(262.1, 83.3%, 85%)',
          300: 'hsl(262.1, 83.3%, 75%)',
          400: 'hsl(262.1, 83.3%, 67%)',
          500: 'hsl(262.1, 83.3%, 57.8%)',
          600: 'hsl(262.1, 83.3%, 52%)',
          700: 'hsl(262.1, 83.3%, 45%)',
          800: 'hsl(262.1, 83.3%, 38%)',
          900: 'hsl(262.1, 83.3%, 30%)',
          950: 'hsl(262.1, 83.3%, 20%)',
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          50: 'hsl(220, 14.3%, 98%)',
          100: 'hsl(220, 14.3%, 95.9%)',
          200: 'hsl(220, 14.3%, 91%)',
          300: 'hsl(220, 14.3%, 85%)',
          400: 'hsl(220, 14.3%, 75%)',
          500: 'hsl(220, 14.3%, 65%)',
          600: 'hsl(220, 14.3%, 55%)',
          700: 'hsl(220, 14.3%, 45%)',
          800: 'hsl(220, 14.3%, 35%)',
          900: 'hsl(220, 14.3%, 25%)',
          950: 'hsl(220, 14.3%, 15%)',
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        aurora: {
          from: {
            backgroundPosition: '50% 50%, 50% 50%',
          },
          to: {
            backgroundPosition: '350% 50%, 350% 50%',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        aurora: 'aurora 60s linear infinite',
      },
      backgroundImage: {
        'radial-faded': 'radial-gradient(circle, transparent 50%, rgba(0,0,0,0.8) 100%)',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), addVariablesForColors],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ':root': newVars,
  });
}

export default config;
