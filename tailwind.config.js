/**
 * @netly/ui — Tailwind CSS Preset
 *
 * Usage in your tailwind.config.js:
 *   const netlyPreset = require("@netly/ui/tailwind");
 *   module.exports = { presets: [netlyPreset], ... };
 *
 * Usage in your tailwind.config.ts (Tailwind v4 / NativeWind v4):
 *   import netlyPreset from "@netly/ui/tailwind";
 *   export default { presets: [netlyPreset], ... };
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        // ── Brand ──────────────────────────────────
        "netly-brand": {
          DEFAULT: "#cffc00",
          dim: "rgba(207, 252, 0, 0.08)",
          subtle: "rgba(207, 252, 0, 0.15)",
          border: "rgba(207, 252, 0, 0.2)",
          strong: "rgba(207, 252, 0, 0.3)",
          on: "#0a0a0a",
        },

        // ── Olive ──────────────────────────────────
        "netly-olive": {
          DEFAULT: "#2a3300",
          active: "#4a5c00",
        },

        // ── Surfaces ───────────────────────────────
        "netly-surface": {
          base: "#0a0a0a",
          raised: "#0f0f0f",
          DEFAULT: "#131313",
          elevated: "#1a1a1a",
          high: "#1e1e1e",
          highest: "#2a2a2a",
        },

        // ── Text ───────────────────────────────────
        "netly-text": {
          DEFAULT: "#ffffff",
          secondary: "#e8e8e8",
          tertiary: "#b0b0b0",
          muted: "#6b6b6b",
          disabled: "#484848",
          inverse: "#0a0a0a",
        },

        // ── Semantic ───────────────────────────────
        "netly-success": "#22c55e",
        "netly-warning": "#f59e0b",
        "netly-error": "#ef4444",
        "netly-info": "#3b82f6",

        // ── Charts ─────────────────────────────────
        "netly-chart": {
          1: "#cffc00",
          2: "#a3c900",
          3: "#4a5c00",
          4: "#2a3300",
          5: "#6b6b6b",
        },
      },

      fontFamily: {
        "netly-display": ["Inter", "system-ui", "sans-serif"],
        "netly-body": ["Inter", "system-ui", "sans-serif"],
        "netly-mono": ["JetBrains Mono", "Menlo", "monospace"],
      },

      borderRadius: {
        "netly-sm": "4px",
        "netly-md": "8px",
        "netly-lg": "12px",
        "netly-xl": "16px",
        "netly-2xl": "20px",
        "netly-3xl": "24px",
      },

      boxShadow: {
        "netly-sm": "0 1px 2px rgba(0,0,0,0.4)",
        "netly-md": "0 2px 8px rgba(0,0,0,0.5)",
        "netly-lg": "0 4px 16px rgba(0,0,0,0.6)",
        "netly-xl": "0 8px 32px rgba(0,0,0,0.7)",
        "netly-brand": "0 0 20px rgba(207,252,0,0.15)",
      },

      transitionDuration: {
        "netly-fast": "100ms",
        "netly-normal": "150ms",
        "netly-slow": "300ms",
      },

      transitionTimingFunction: {
        "netly-spring": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
};
