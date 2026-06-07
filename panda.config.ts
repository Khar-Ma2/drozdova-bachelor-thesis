import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          brand: {
            primary: { value: '#6366f1' },       // Indigo-500
            primaryDark: { value: '#4f46e5' },   // Indigo-600
            primaryLight: { value: '#e0e7ff' },  // Indigo-100
            secondary: { value: '#0ea5e9' },     // Sky-500
            secondaryDark: { value: '#0284c7' }, // Sky-600
            secondaryLight: { value: '#e0f2fe' },// Sky-100
            textMain: { value: '#0f172a' },      // Slate-900
            textMuted: { value: '#64748b' },     // Slate-500
            bgMain: { value: '#fcfcfd' },        // Off-white
            bgCard: { value: '#ffffff' },        // White
            borderLight: { value: 'rgba(226, 232, 240, 0.8)' },
          },
          nozology: {
            ras: { value: '#8b5cf6' },           // Violet-500
            rasLight: { value: '#f5f3ff' },      // Violet-50
            top: { value: '#f97316' },           // Orange-500
            topLight: { value: '#fff7ed' },      // Orange-50
            ora: { value: '#3b82f6' },           // Blue-500
            oraLight: { value: '#eff6ff' },      // Blue-50
            zpr: { value: '#64748b' },           // Slate-500
            zprLight: { value: '#f8fafc' },      // Slate-50
            rdug: { value: '#f59e0b' },          // Amber-500
            rdugLight: { value: '#fffbeb' },     // Amber-50
            znm: { value: '#ec4899' },           // Pink-500
            znmLight: { value: '#fdf2f8' },      // Pink-50
          }
        },
        fonts: {
          sans: { value: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" },
        },
        shadows: {
          soft: { value: '0 4px 20px -2px rgba(15, 23, 42, 0.04)' },
          premium: { value: '0 20px 40px -12px rgba(15, 23, 42, 0.08), 0 1px 3px 0 rgba(15, 23, 42, 0.02)' },
          dialog: { value: '0 30px 60px -15px rgba(15, 23, 42, 0.3)' }
        },
        radii: {
          card: { value: '24px' },
          innerCard: { value: '16px' },
          button: { value: '12px' },
          pill: { value: '30px' },
        }
      }
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
