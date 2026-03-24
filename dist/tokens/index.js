'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// src/tokens/index.ts
var colors = {
  // Brand — Acid Lime (primary accent, used surgically)
  brand: {
    DEFAULT: "#cffc00",
    dim: "rgba(207, 252, 0, 0.08)",
    subtle: "rgba(207, 252, 0, 0.15)",
    border: "rgba(207, 252, 0, 0.2)",
    borderStrong: "rgba(207, 252, 0, 0.3)",
    on: "#0a0a0a"
    // text color on brand background
  },
  // Olive — user bubble, active tab container
  olive: {
    DEFAULT: "#2a3300",
    active: "#4a5c00",
    border: "rgba(207, 252, 0, 0.2)"
  },
  // Surfaces — layered dark backgrounds
  surface: {
    base: "#0a0a0a",
    // page background
    raised: "#0f0f0f",
    // headers, footers, input bars
    overlay: "#131313",
    // cards, chat shell
    elevated: "#1a1a1a",
    // elevated cards
    high: "#1e1e1e",
    // bubbles, inputs, toggles
    highest: "#2a2a2a"
    // borders, dividers
  },
  // Text
  text: {
    primary: "#ffffff",
    secondary: "#e8e8e8",
    tertiary: "#b0b0b0",
    muted: "#6b6b6b",
    disabled: "#484848",
    inverse: "#0a0a0a"
  },
  // Semantic
  semantic: {
    success: "#22c55e",
    successDim: "rgba(34, 197, 94, 0.1)",
    warning: "#f59e0b",
    warningDim: "rgba(245, 158, 11, 0.1)",
    error: "#ef4444",
    errorDim: "rgba(239, 68, 68, 0.1)",
    info: "#3b82f6",
    infoDim: "rgba(59, 130, 246, 0.1)"
  },
  // Chart palette (ordered by priority)
  chart: {
    1: "#cffc00",
    // acid lime
    2: "#a3c900",
    // olive lime
    3: "#4a5c00",
    // deep olive
    4: "#2a3300",
    // darkest olive
    5: "#6b6b6b"
    // neutral grey
  }
};
var typography = {
  fontFamily: {
    display: ["Inter", "system-ui", "sans-serif"],
    body: ["Inter", "system-ui", "sans-serif"],
    mono: ["JetBrains Mono", "Menlo", "monospace"]
  },
  fontSize: {
    "2xs": ["10px", { lineHeight: "14px", letterSpacing: "0.06em" }],
    xs: ["12px", { lineHeight: "16px", letterSpacing: "0.04em" }],
    sm: ["13px", { lineHeight: "20px", letterSpacing: "0.01em" }],
    base: ["14px", { lineHeight: "22px", letterSpacing: "0" }],
    md: ["15px", { lineHeight: "24px", letterSpacing: "-0.01em" }],
    lg: ["17px", { lineHeight: "26px", letterSpacing: "-0.01em" }],
    xl: ["20px", { lineHeight: "28px", letterSpacing: "-0.02em" }],
    "2xl": ["24px", { lineHeight: "30px", letterSpacing: "-0.03em" }],
    "3xl": ["30px", { lineHeight: "36px", letterSpacing: "-0.03em" }],
    "4xl": ["36px", { lineHeight: "42px", letterSpacing: "-0.04em" }],
    "5xl": ["48px", { lineHeight: "52px", letterSpacing: "-0.04em" }],
    "6xl": ["64px", { lineHeight: "68px", letterSpacing: "-0.05em" }]
  },
  fontWeight: {
    regular: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
    black: "900"
  }
};
var spacing = {
  0: "0px",
  0.5: "2px",
  1: "4px",
  1.5: "6px",
  2: "8px",
  2.5: "10px",
  3: "12px",
  3.5: "14px",
  4: "16px",
  5: "20px",
  6: "24px",
  7: "28px",
  8: "32px",
  9: "36px",
  10: "40px",
  12: "48px",
  14: "56px",
  16: "64px",
  20: "80px",
  24: "96px"
};
var radius = {
  none: "0px",
  sm: "4px",
  md: "8px",
  lg: "12px",
  xl: "16px",
  "2xl": "20px",
  "3xl": "24px",
  full: "9999px"
};
var elevation = {
  none: "none",
  sm: "0 1px 2px rgba(0,0,0,0.4)",
  md: "0 2px 8px rgba(0,0,0,0.5)",
  lg: "0 4px 16px rgba(0,0,0,0.6)",
  xl: "0 8px 32px rgba(0,0,0,0.7)",
  brand: "0 0 20px rgba(207,252,0,0.15)"
};
var animation = {
  duration: {
    instant: "50ms",
    fast: "100ms",
    normal: "150ms",
    moderate: "200ms",
    slow: "300ms",
    slower: "500ms"
  },
  easing: {
    default: "cubic-bezier(0.4, 0, 0.2, 1)",
    in: "cubic-bezier(0.4, 0, 1, 1)",
    out: "cubic-bezier(0, 0, 0.2, 1)",
    spring: "cubic-bezier(0.34, 1.56, 0.64, 1)"
  }
};
var componentTokens = {
  button: {
    height: { sm: "32px", md: "40px", lg: "48px" },
    paddingX: { sm: "12px", md: "16px", lg: "20px" },
    fontSize: { sm: "12px", md: "13px", lg: "14px" },
    fontWeight: "700",
    letterSpacing: "0.06em"
  },
  input: {
    height: "48px",
    paddingX: "16px",
    fontSize: "15px",
    borderRadius: radius.xl,
    background: colors.surface.high,
    border: colors.surface.highest,
    borderFocus: colors.brand.border,
    placeholderColor: colors.text.disabled
  },
  card: {
    background: colors.surface.overlay,
    border: colors.surface.highest,
    borderRadius: radius["2xl"],
    padding: spacing[5]
  },
  badge: {
    height: "22px",
    paddingX: "8px",
    fontSize: "11px",
    fontWeight: "700",
    letterSpacing: "0.08em",
    borderRadius: radius.full
  },
  chat: {
    shell: colors.surface.overlay,
    header: colors.surface.raised,
    bubbleAI: colors.surface.high,
    bubbleUser: colors.olive.DEFAULT,
    avatar: colors.brand.DEFAULT,
    inputBg: colors.surface.high,
    chipBorder: colors.brand.borderStrong
  },
  bottomTab: {
    height: "60px",
    background: colors.surface.raised,
    activeContainer: colors.olive.active,
    activeIcon: colors.brand.DEFAULT,
    activeLabel: colors.brand.DEFAULT,
    inactiveIcon: colors.text.muted,
    inactiveLabel: colors.text.disabled,
    labelSize: "10px",
    labelWeight: "700",
    labelSpacing: "0.08em"
  }
};
var tailwindTokens = {
  colors: {
    "netly-brand": colors.brand.DEFAULT,
    "netly-brand-dim": colors.brand.dim,
    "netly-brand-subtle": colors.brand.subtle,
    "netly-brand-border": colors.brand.border,
    "netly-olive": colors.olive.DEFAULT,
    "netly-olive-active": colors.olive.active,
    "netly-surface-base": colors.surface.base,
    "netly-surface-raised": colors.surface.raised,
    "netly-surface": colors.surface.overlay,
    "netly-surface-high": colors.surface.high,
    "netly-border": colors.surface.highest,
    "netly-text": colors.text.primary,
    "netly-text-secondary": colors.text.secondary,
    "netly-text-muted": colors.text.muted,
    "netly-text-disabled": colors.text.disabled,
    "netly-success": colors.semantic.success,
    "netly-warning": colors.semantic.warning,
    "netly-error": colors.semantic.error
  }
};
var tokens = {
  colors,
  typography,
  spacing,
  radius,
  elevation,
  animation,
  componentTokens,
  tailwindTokens
};
var tokens_default = tokens;

exports.animation = animation;
exports.colors = colors;
exports.componentTokens = componentTokens;
exports.default = tokens_default;
exports.elevation = elevation;
exports.radius = radius;
exports.spacing = spacing;
exports.tailwindTokens = tailwindTokens;
exports.typography = typography;
