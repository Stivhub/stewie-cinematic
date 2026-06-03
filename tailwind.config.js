/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "on-secondary-fixed-variant": "#474746",
        "inverse-surface": "#e2e2e2",
        "secondary-fixed": "#e5e2e1",
        "surface-dim": "#121414",
        "surface-variant": "#333535",
        "on-surface-variant": "#d0c5af",
        "background": "#050505", // Customized to a darker cinematic black
        "on-primary-fixed": "#241a00",
        "secondary-fixed-dim": "#c8c6c5",
        "on-surface": "#e2e2e2",
        "primary-fixed-dim": "#e9c349",
        "on-background": "#e2e2e2",
        "inverse-primary": "#735c00",
        "error": "#ffb4ab",
        "surface-bright": "#37393a",
        "surface": "#121414",
        "on-error": "#690005",
        "on-primary-fixed-variant": "#574500",
        "tertiary": "#d0cecd",
        "error-container": "#93000a",
        "surface-container-lowest": "#050505",
        "on-primary": "#3c2f00",
        "on-error-container": "#ffdad6",
        "on-secondary": "#313030",
        "surface-container-highest": "#333535",
        "tertiary-container": "#b5b2b2",
        "on-secondary-fixed": "#1c1b1b",
        "surface-container": "#1e2020",
        "primary-fixed": "#ffe088",
        "primary-container": "#d4af37", // Soft gold
        "secondary": "#c8c6c5",
        "primary": "#d4af37", // Adjusted from #f2ca50 to soft gold
        "outline": "#99907c",
        "on-tertiary-container": "#454545",
        "inverse-on-surface": "#2f3131",
        "outline-variant": "#4d4635",
        "on-tertiary": "#313030",
        "surface-container-low": "#1a1c1c",
        "tertiary-fixed-dim": "#c9c6c5",
        "on-secondary-container": "#b7b5b4",
        "on-primary-container": "#554300",
        "surface-container-high": "#282a2b",
        "surface-tint": "#e9c349",
        "on-tertiary-fixed": "#1c1b1b",
        "on-tertiary-fixed-variant": "#474646",
        "secondary-container": "#474746",
        "tertiary-fixed": "#e5e2e1"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "gutter": "24px",
        "section-gap": "160px",
        "unit": "8px",
        "margin-mobile": "24px",
        "margin-desktop": "80px"
      },
      fontFamily: {
        "body-lg": ["Hanken Grotesk"],
        "display-lg-mobile": ["EB Garamond"],
        "headline-lg": ["EB Garamond"],
        "headline-xl": ["EB Garamond"],
        "display-lg": ["EB Garamond"],
        "label-caps": ["Hanken Grotesk"],
        "body-md": ["Hanken Grotesk"]
      },
      fontSize: {
        "body-lg": ["18px", { lineHeight: "1.6", letterSpacing: "0.01em", fontWeight: "400" }],
        "display-lg-mobile": ["48px", { lineHeight: "1.1", fontWeight: "500" }],
        "headline-lg": ["32px", { lineHeight: "1.2", fontWeight: "500" }],
        "headline-xl": ["48px", { lineHeight: "1.2", fontWeight: "500" }],
        "display-lg": ["72px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "500" }],
        "label-caps": ["12px", { lineHeight: "1.0", letterSpacing: "0.2em", fontWeight: "700" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
