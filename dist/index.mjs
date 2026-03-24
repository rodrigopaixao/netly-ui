import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState } from 'react';

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
var variantStyles = {
  primary: {
    backgroundColor: colors.brand.DEFAULT,
    color: colors.brand.on,
    border: "none"
  },
  secondary: {
    backgroundColor: "transparent",
    color: colors.brand.DEFAULT,
    border: `1px solid ${colors.brand.borderStrong}`
  },
  ghost: {
    backgroundColor: "transparent",
    color: colors.text.secondary,
    border: `1px solid ${colors.surface.highest}`
  },
  destructive: {
    backgroundColor: "transparent",
    color: colors.semantic.error,
    border: `1px solid rgba(239, 68, 68, 0.3)`
  }
};
var sizeStyles = {
  sm: {
    height: componentTokens.button.height.sm,
    padding: `0 ${componentTokens.button.paddingX.sm}`,
    fontSize: componentTokens.button.fontSize.sm
  },
  md: {
    height: componentTokens.button.height.md,
    padding: `0 ${componentTokens.button.paddingX.md}`,
    fontSize: componentTokens.button.fontSize.md
  },
  lg: {
    height: componentTokens.button.height.lg,
    padding: `0 ${componentTokens.button.paddingX.lg}`,
    fontSize: componentTokens.button.fontSize.lg
  }
};
function NButton({
  variant = "primary",
  size = "md",
  loading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  children,
  disabled,
  style,
  ...props
}) {
  const isDisabled = disabled || loading;
  const baseStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "6px",
    borderRadius: "8px",
    fontFamily: "Inter, system-ui, sans-serif",
    fontWeight: 700,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    cursor: isDisabled ? "not-allowed" : "pointer",
    opacity: isDisabled ? 0.4 : 1,
    transition: "opacity 150ms ease, transform 150ms ease, background-color 150ms ease",
    width: fullWidth ? "100%" : void 0,
    whiteSpace: "nowrap",
    outline: "none",
    userSelect: "none",
    ...variantStyles[variant],
    ...sizeStyles[size],
    ...style
  };
  return /* @__PURE__ */ jsx(
    "button",
    {
      ...props,
      disabled: isDisabled,
      style: baseStyle,
      onMouseEnter: (e) => {
        if (!isDisabled) {
          if (variant === "primary") {
            e.currentTarget.style.opacity = "0.88";
          } else {
            e.currentTarget.style.backgroundColor = variant === "secondary" ? colors.brand.dim : colors.surface.high;
          }
        }
        props.onMouseEnter?.(e);
      },
      onMouseLeave: (e) => {
        if (!isDisabled) {
          e.currentTarget.style.opacity = "1";
          e.currentTarget.style.backgroundColor = variantStyles[variant].backgroundColor;
        }
        props.onMouseLeave?.(e);
      },
      onMouseDown: (e) => {
        if (!isDisabled) {
          e.currentTarget.style.transform = "scale(0.97)";
        }
        props.onMouseDown?.(e);
      },
      onMouseUp: (e) => {
        if (!isDisabled) {
          e.currentTarget.style.transform = "scale(1)";
        }
        props.onMouseUp?.(e);
      },
      children: loading ? /* @__PURE__ */ jsx(LoadingSpinner, { size }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        leftIcon,
        children,
        rightIcon
      ] })
    }
  );
}
function LoadingSpinner({ size }) {
  const dim = size === "sm" ? 12 : size === "md" ? 14 : 16;
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      width: dim,
      height: dim,
      viewBox: "0 0 24 24",
      fill: "none",
      style: { animation: "netly-spin 0.8s linear infinite" },
      children: [
        /* @__PURE__ */ jsx("style", { children: `@keyframes netly-spin { to { transform: rotate(360deg); } }` }),
        /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "3", strokeOpacity: "0.25" }),
        /* @__PURE__ */ jsx("path", { d: "M12 2a10 10 0 0 1 10 10", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round" })
      ]
    }
  );
}
var variantStyles2 = {
  default: {
    backgroundColor: componentTokens.card.background,
    border: `1px solid ${componentTokens.card.border}`,
    boxShadow: "none"
  },
  elevated: {
    backgroundColor: colors.surface.elevated,
    border: `1px solid ${colors.surface.highest}`,
    boxShadow: elevation.md
  },
  brand: {
    backgroundColor: componentTokens.card.background,
    border: `1px solid ${colors.brand.border}`,
    boxShadow: elevation.brand
  },
  ghost: {
    backgroundColor: "transparent",
    border: `1px solid ${colors.surface.highest}`,
    boxShadow: "none"
  }
};
var paddingMap = {
  none: "0",
  sm: "12px",
  md: componentTokens.card.padding,
  lg: "32px"
};
function NCard({
  variant = "default",
  padding = "md",
  as: Tag = "div",
  children,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Tag,
    {
      ...props,
      style: {
        borderRadius: componentTokens.card.borderRadius,
        padding: paddingMap[padding],
        transition: "border-color 150ms ease, box-shadow 150ms ease",
        ...variantStyles2[variant],
        ...style
      },
      children
    }
  );
}
function NStatCard({
  label,
  value,
  delta,
  deltaType = "neutral",
  icon,
  style
}) {
  const deltaColor = deltaType === "positive" ? colors.semantic.success : deltaType === "negative" ? colors.semantic.error : colors.text.muted;
  return /* @__PURE__ */ jsx(NCard, { style, children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "8px" }, children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        },
        children: [
          /* @__PURE__ */ jsx(
            "span",
            {
              style: {
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: colors.text.muted,
                fontFamily: "Inter, system-ui, sans-serif"
              },
              children: label
            }
          ),
          icon && /* @__PURE__ */ jsx(
            "span",
            {
              className: "material-symbols-outlined",
              style: { fontSize: "16px", color: colors.text.disabled },
              children: icon
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      "span",
      {
        style: {
          fontSize: "28px",
          fontWeight: 900,
          letterSpacing: "-0.03em",
          color: colors.text.primary,
          fontFamily: "Inter, system-ui, sans-serif",
          lineHeight: 1
        },
        children: value
      }
    ),
    delta && /* @__PURE__ */ jsx(
      "span",
      {
        style: {
          fontSize: "12px",
          fontWeight: 600,
          color: deltaColor,
          fontFamily: "Inter, system-ui, sans-serif"
        },
        children: delta
      }
    )
  ] }) });
}
function NInput({
  label,
  hint,
  error,
  type = "text",
  leftIcon,
  rightIcon,
  onRightIconClick,
  prefix,
  suffix,
  disabled,
  style,
  ...props
}) {
  const [focused, setFocused] = useState(false);
  const hasError = Boolean(error);
  const borderColor = hasError ? colors.semantic.error : focused ? colors.brand.border : colors.surface.highest;
  const wrapperStyle = {
    display: "flex",
    alignItems: "center",
    height: componentTokens.input.height,
    borderRadius: componentTokens.input.borderRadius,
    backgroundColor: componentTokens.input.background,
    border: `1px solid ${borderColor}`,
    transition: "border-color 150ms ease",
    opacity: disabled ? 0.4 : 1,
    overflow: "hidden"
  };
  const inputStyle = {
    flex: 1,
    height: "100%",
    padding: `0 ${componentTokens.input.paddingX}`,
    paddingLeft: leftIcon || prefix ? "8px" : componentTokens.input.paddingX,
    paddingRight: rightIcon || suffix ? "8px" : componentTokens.input.paddingX,
    fontSize: componentTokens.input.fontSize,
    fontFamily: "Inter, system-ui, sans-serif",
    color: colors.text.secondary,
    backgroundColor: "transparent",
    border: "none",
    outline: "none",
    ...style
  };
  return /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "6px" }, children: [
    label && /* @__PURE__ */ jsx(
      "label",
      {
        style: {
          fontSize: "12px",
          fontWeight: 600,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: colors.text.muted,
          fontFamily: "Inter, system-ui, sans-serif"
        },
        children: label
      }
    ),
    /* @__PURE__ */ jsxs("div", { style: wrapperStyle, children: [
      leftIcon && /* @__PURE__ */ jsx(
        "span",
        {
          className: "material-symbols-outlined",
          style: {
            fontSize: "18px",
            color: focused ? colors.brand.DEFAULT : colors.text.disabled,
            paddingLeft: "14px",
            transition: "color 150ms ease",
            flexShrink: 0
          },
          children: leftIcon
        }
      ),
      prefix && /* @__PURE__ */ jsx(
        "span",
        {
          style: {
            paddingLeft: "14px",
            fontSize: "14px",
            color: colors.text.muted,
            fontFamily: "Inter, system-ui, sans-serif",
            flexShrink: 0
          },
          children: prefix
        }
      ),
      /* @__PURE__ */ jsx(
        "input",
        {
          ...props,
          type,
          disabled,
          onFocus: (e) => {
            setFocused(true);
            props.onFocus?.(e);
          },
          onBlur: (e) => {
            setFocused(false);
            props.onBlur?.(e);
          },
          style: {
            ...inputStyle,
            // Placeholder color via CSS
            // @ts-ignore
            "--placeholder-color": componentTokens.input.placeholderColor
          }
        }
      ),
      suffix && /* @__PURE__ */ jsx(
        "span",
        {
          style: {
            paddingRight: "14px",
            fontSize: "14px",
            color: colors.text.muted,
            fontFamily: "Inter, system-ui, sans-serif",
            flexShrink: 0
          },
          children: suffix
        }
      ),
      rightIcon && /* @__PURE__ */ jsx(
        "span",
        {
          className: "material-symbols-outlined",
          onClick: onRightIconClick,
          style: {
            fontSize: "18px",
            color: colors.text.disabled,
            paddingRight: "14px",
            cursor: onRightIconClick ? "pointer" : "default",
            flexShrink: 0
          },
          children: rightIcon
        }
      )
    ] }),
    (hint || error) && /* @__PURE__ */ jsx(
      "span",
      {
        style: {
          fontSize: "12px",
          color: hasError ? colors.semantic.error : colors.text.muted,
          fontFamily: "Inter, system-ui, sans-serif"
        },
        children: error || hint
      }
    )
  ] });
}
var variantStyles3 = {
  brand: {
    backgroundColor: colors.brand.dim,
    color: colors.brand.DEFAULT,
    border: `1px solid ${colors.brand.border}`
  },
  success: {
    backgroundColor: colors.semantic.successDim,
    color: colors.semantic.success,
    border: "1px solid rgba(34, 197, 94, 0.2)"
  },
  warning: {
    backgroundColor: colors.semantic.warningDim,
    color: colors.semantic.warning,
    border: "1px solid rgba(245, 158, 11, 0.2)"
  },
  error: {
    backgroundColor: colors.semantic.errorDim,
    color: colors.semantic.error,
    border: "1px solid rgba(239, 68, 68, 0.2)"
  },
  neutral: {
    backgroundColor: colors.surface.high,
    color: colors.text.tertiary,
    border: `1px solid ${colors.surface.highest}`
  },
  outline: {
    backgroundColor: "transparent",
    color: colors.text.muted,
    border: `1px solid ${colors.surface.highest}`
  }
};
function NBadge({ variant = "neutral", children, dot, style }) {
  return /* @__PURE__ */ jsxs(
    "span",
    {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: "5px",
        height: componentTokens.badge.height,
        padding: `0 ${componentTokens.badge.paddingX}`,
        borderRadius: componentTokens.badge.borderRadius,
        fontSize: componentTokens.badge.fontSize,
        fontWeight: componentTokens.badge.fontWeight,
        letterSpacing: componentTokens.badge.letterSpacing,
        textTransform: "uppercase",
        fontFamily: "Inter, system-ui, sans-serif",
        whiteSpace: "nowrap",
        ...variantStyles3[variant],
        ...style
      },
      children: [
        dot && /* @__PURE__ */ jsx(
          "span",
          {
            style: {
              width: "5px",
              height: "5px",
              borderRadius: "50%",
              backgroundColor: "currentColor",
              flexShrink: 0
            }
          }
        ),
        children
      ]
    }
  );
}
function NToggleRow({
  label,
  description,
  checked,
  onChange,
  disabled = false,
  style
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "16px",
        padding: "14px 16px",
        borderRadius: "12px",
        backgroundColor: colors.surface.high,
        border: `1px solid ${checked ? colors.brand.border : colors.surface.highest}`,
        opacity: disabled ? 0.4 : 1,
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "border-color 150ms ease",
        ...style
      },
      onClick: () => !disabled && onChange(!checked),
      children: [
        /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "2px" }, children: [
          /* @__PURE__ */ jsx(
            "span",
            {
              style: {
                fontSize: "14px",
                fontWeight: 600,
                color: colors.text.secondary,
                fontFamily: "Inter, system-ui, sans-serif"
              },
              children: label
            }
          ),
          description && /* @__PURE__ */ jsx(
            "span",
            {
              style: {
                fontSize: "12px",
                color: colors.text.muted,
                fontFamily: "Inter, system-ui, sans-serif"
              },
              children: description
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              position: "relative",
              width: "44px",
              height: "24px",
              borderRadius: "12px",
              backgroundColor: checked ? colors.brand.DEFAULT : colors.surface.highest,
              transition: "background-color 200ms ease",
              flexShrink: 0
            },
            children: /* @__PURE__ */ jsx(
              "div",
              {
                style: {
                  position: "absolute",
                  top: "3px",
                  left: checked ? "23px" : "3px",
                  width: "18px",
                  height: "18px",
                  borderRadius: "50%",
                  backgroundColor: checked ? colors.brand.on : colors.text.muted,
                  transition: "left 200ms cubic-bezier(0.34, 1.56, 0.64, 1)"
                }
              }
            )
          }
        )
      ]
    }
  );
}
function NBottomTab({ tabs, activeKey, onChange, style }) {
  const { bottomTab } = componentTokens;
  return /* @__PURE__ */ jsx(
    "nav",
    {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        height: bottomTab.height,
        backgroundColor: bottomTab.background,
        borderTop: `1px solid ${colors.surface.highest}`,
        ...style
      },
      children: tabs.map((tab) => {
        const isActive = tab.key === activeKey;
        return /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => onChange(tab.key),
            style: {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "4px",
              flex: 1,
              height: "100%",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0"
            },
            children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  style: {
                    width: "40px",
                    height: "32px",
                    borderRadius: "16px",
                    backgroundColor: isActive ? bottomTab.activeContainer : "transparent",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "background-color 200ms ease"
                  },
                  children: /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: "material-symbols-outlined",
                      style: {
                        fontSize: "20px",
                        color: isActive ? bottomTab.activeIcon : bottomTab.inactiveIcon,
                        transition: "color 200ms ease"
                      },
                      children: tab.icon
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsx(
                "span",
                {
                  style: {
                    fontSize: bottomTab.labelSize,
                    fontWeight: bottomTab.labelWeight,
                    letterSpacing: bottomTab.labelSpacing,
                    textTransform: "uppercase",
                    color: isActive ? bottomTab.activeLabel : bottomTab.inactiveLabel,
                    fontFamily: "Inter, system-ui, sans-serif",
                    transition: "color 200ms ease"
                  },
                  children: tab.label
                }
              )
            ]
          },
          tab.key
        );
      })
    }
  );
}
var tagColors = {
  brand: { bg: colors.brand.dim, text: colors.brand.DEFAULT, border: colors.brand.border },
  success: { bg: colors.semantic.successDim, text: colors.semantic.success, border: "rgba(34,197,94,0.2)" },
  warning: { bg: colors.semantic.warningDim, text: colors.semantic.warning, border: "rgba(245,158,11,0.2)" },
  error: { bg: colors.semantic.errorDim, text: colors.semantic.error, border: "rgba(239,68,68,0.2)" },
  neutral: { bg: colors.surface.high, text: colors.text.tertiary, border: colors.surface.highest }
};
function NPriorityCard({
  rank,
  title,
  subtitle,
  value,
  valueDelta,
  deltaType = "neutral",
  tag,
  tagVariant = "neutral",
  highlighted = false,
  style,
  onClick
}) {
  const deltaColor = deltaType === "positive" ? colors.semantic.success : deltaType === "negative" ? colors.semantic.error : colors.text.muted;
  const tagStyle = tagColors[tagVariant];
  return /* @__PURE__ */ jsxs(
    "div",
    {
      onClick,
      style: {
        display: "flex",
        alignItems: "center",
        gap: "16px",
        padding: "16px 20px",
        borderRadius: "16px",
        backgroundColor: highlighted ? colors.olive.DEFAULT : colors.surface.overlay,
        border: `1px solid ${highlighted ? colors.brand.border : colors.surface.highest}`,
        cursor: onClick ? "pointer" : "default",
        transition: "border-color 150ms ease, background-color 150ms ease",
        ...style
      },
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              backgroundColor: highlighted ? colors.brand.DEFAULT : colors.surface.high,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0
            },
            children: /* @__PURE__ */ jsx(
              "span",
              {
                style: {
                  fontSize: "14px",
                  fontWeight: 900,
                  color: highlighted ? colors.brand.on : colors.text.muted,
                  fontFamily: "Inter, system-ui, sans-serif"
                },
                children: rank
              }
            )
          }
        ),
        /* @__PURE__ */ jsxs("div", { style: { flex: 1, minWidth: 0 }, children: [
          /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px", marginBottom: "2px" }, children: [
            /* @__PURE__ */ jsx(
              "span",
              {
                style: {
                  fontSize: "14px",
                  fontWeight: 700,
                  color: colors.text.secondary,
                  fontFamily: "Inter, system-ui, sans-serif",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap"
                },
                children: title
              }
            ),
            tag && /* @__PURE__ */ jsx(
              "span",
              {
                style: {
                  display: "inline-flex",
                  alignItems: "center",
                  height: "18px",
                  padding: "0 6px",
                  borderRadius: "9999px",
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontFamily: "Inter, system-ui, sans-serif",
                  backgroundColor: tagStyle.bg,
                  color: tagStyle.text,
                  border: `1px solid ${tagStyle.border}`,
                  flexShrink: 0
                },
                children: tag
              }
            )
          ] }),
          subtitle && /* @__PURE__ */ jsx(
            "span",
            {
              style: {
                fontSize: "12px",
                color: colors.text.muted,
                fontFamily: "Inter, system-ui, sans-serif"
              },
              children: subtitle
            }
          )
        ] }),
        (value || valueDelta) && /* @__PURE__ */ jsxs("div", { style: { textAlign: "right", flexShrink: 0 }, children: [
          value && /* @__PURE__ */ jsx(
            "div",
            {
              style: {
                fontSize: "16px",
                fontWeight: 900,
                color: highlighted ? colors.brand.DEFAULT : colors.text.primary,
                fontFamily: "Inter, system-ui, sans-serif",
                letterSpacing: "-0.02em"
              },
              children: value
            }
          ),
          valueDelta && /* @__PURE__ */ jsx(
            "div",
            {
              style: {
                fontSize: "11px",
                fontWeight: 600,
                color: deltaColor,
                fontFamily: "Inter, system-ui, sans-serif"
              },
              children: valueDelta
            }
          )
        ] })
      ]
    }
  );
}
function NCategoryRail({ items, value, onChange, className = "" }) {
  const [internal, setInternal] = useState(items[0]?.id ?? "");
  const active = value ?? internal;
  const handleSelect = (id) => {
    setInternal(id);
    onChange?.(id);
  };
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory ${className}`,
      style: { scrollbarWidth: "none" },
      children: items.map((item) => {
        const isActive = active === item.id;
        const accent = item.color ?? colors.brand.DEFAULT;
        return /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => handleSelect(item.id),
            className: "snap-start shrink-0 w-44 h-44 rounded-2xl flex flex-col justify-between p-4 transition-all duration-200 text-left",
            style: {
              background: isActive ? colors.olive.active : colors.surface.elevated,
              border: `2px solid ${isActive ? accent : colors.surface.highest}`
            },
            children: [
              item.icon && /* @__PURE__ */ jsx(
                "div",
                {
                  className: "w-12 h-12 rounded-full flex items-center justify-center",
                  style: { background: accent + "33" },
                  children: /* @__PURE__ */ jsx("span", { className: "material-symbols-rounded text-2xl", style: { color: accent }, children: item.icon })
                }
              ),
              /* @__PURE__ */ jsx(
                "p",
                {
                  className: "font-bold text-base leading-tight",
                  style: { color: isActive ? accent : colors.text.primary },
                  children: item.label
                }
              )
            ]
          },
          item.id
        );
      })
    }
  );
}
function NOfferRail({ items, value, onChange, className = "" }) {
  const [internal, setInternal] = useState(items[0]?.id ?? "");
  const active = value ?? internal;
  const handleSelect = (id) => {
    setInternal(id);
    onChange?.(id);
  };
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory ${className}`,
      style: { scrollbarWidth: "none" },
      children: items.map((item) => {
        const isActive = active === item.id;
        const tagColor = item.tagColor ?? colors.brand.DEFAULT;
        return /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => handleSelect(item.id),
            className: "snap-start shrink-0 w-52 rounded-2xl flex flex-col gap-3 p-4 transition-all duration-200 text-left",
            style: {
              background: isActive ? colors.olive.active : colors.surface.elevated,
              border: `2px solid ${isActive ? colors.brand.DEFAULT : colors.surface.highest}`
            },
            children: [
              item.tag && /* @__PURE__ */ jsx(
                "span",
                {
                  className: "self-start text-[10px] font-bold tracking-widest px-2 py-0.5 rounded-full",
                  style: { color: tagColor, background: tagColor + "22" },
                  children: item.tag
                }
              ),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "font-black text-lg leading-tight", style: { color: colors.text.primary }, children: item.company }),
                /* @__PURE__ */ jsx("p", { className: "text-xs", style: { color: colors.text.muted }, children: item.role })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-baseline", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-xs", style: { color: colors.text.muted }, children: "Base" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm font-bold", style: { color: colors.text.primary }, children: item.base })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-baseline", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-xs", style: { color: colors.text.muted }, children: "Total" }),
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: "text-sm font-black",
                      style: { color: isActive ? colors.brand.DEFAULT : colors.text.primary },
                      children: item.totalComp
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxs(
                "div",
                {
                  className: "flex items-center gap-1 text-xs font-bold",
                  style: { color: item.deltaPositive ? colors.semantic.success : colors.semantic.error },
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "material-symbols-rounded text-sm", children: item.deltaPositive ? "arrow_upward" : "arrow_downward" }),
                    item.delta
                  ]
                }
              )
            ]
          },
          item.id
        );
      })
    }
  );
}
function NStatChipRail({ items, value, onChange, className = "" }) {
  const [internal, setInternal] = useState(items[0]?.id ?? "");
  const active = value ?? internal;
  const handleSelect = (id) => {
    setInternal(id);
    onChange?.(id);
  };
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory ${className}`,
      style: { scrollbarWidth: "none" },
      children: items.map((chip) => {
        const isActive = active === chip.id;
        return /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => handleSelect(chip.id),
            className: "snap-start shrink-0 rounded-xl px-4 py-3 flex flex-col gap-1 transition-all duration-200 text-left",
            style: {
              minWidth: 120,
              background: isActive ? colors.olive.active : colors.surface.elevated,
              border: `1.5px solid ${isActive ? colors.brand.DEFAULT : colors.surface.highest}`
            },
            children: [
              /* @__PURE__ */ jsx(
                "p",
                {
                  className: "text-[10px] font-bold tracking-widest uppercase",
                  style: { color: colors.text.muted },
                  children: chip.label
                }
              ),
              /* @__PURE__ */ jsx(
                "p",
                {
                  className: "text-lg font-black leading-none",
                  style: { color: isActive ? colors.brand.DEFAULT : colors.text.primary },
                  children: chip.value
                }
              ),
              chip.delta && /* @__PURE__ */ jsx(
                "p",
                {
                  className: "text-[11px] font-semibold",
                  style: {
                    color: chip.deltaPositive === true ? colors.semantic.success : chip.deltaPositive === false ? colors.semantic.error : colors.text.muted
                  },
                  children: chip.delta
                }
              )
            ]
          },
          chip.id
        );
      })
    }
  );
}

export { NBadge, NBottomTab, NButton, NCard, NCategoryRail, NInput, NOfferRail, NPriorityCard, NStatCard, NStatChipRail, NToggleRow, animation, colors, componentTokens, elevation, radius, spacing, tailwindTokens, tokens_default as tokens, typography };
