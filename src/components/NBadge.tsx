/**
 * NBadge — Netly badge/chip component (Web)
 *
 * Variants: brand | success | warning | error | neutral | outline
 */

import React from "react";
import { colors, componentTokens } from "../tokens";

export type NBadgeVariant = "brand" | "success" | "warning" | "error" | "neutral" | "outline";

export interface NBadgeProps {
  variant?: NBadgeVariant;
  children: React.ReactNode;
  dot?: boolean;
  style?: React.CSSProperties;
}

const variantStyles: Record<NBadgeVariant, React.CSSProperties> = {
  brand: {
    backgroundColor: colors.brand.dim,
    color: colors.brand.DEFAULT,
    border: `1px solid ${colors.brand.border}`,
  },
  success: {
    backgroundColor: colors.semantic.successDim,
    color: colors.semantic.success,
    border: "1px solid rgba(34, 197, 94, 0.2)",
  },
  warning: {
    backgroundColor: colors.semantic.warningDim,
    color: colors.semantic.warning,
    border: "1px solid rgba(245, 158, 11, 0.2)",
  },
  error: {
    backgroundColor: colors.semantic.errorDim,
    color: colors.semantic.error,
    border: "1px solid rgba(239, 68, 68, 0.2)",
  },
  neutral: {
    backgroundColor: colors.surface.high,
    color: colors.text.tertiary,
    border: `1px solid ${colors.surface.highest}`,
  },
  outline: {
    backgroundColor: "transparent",
    color: colors.text.muted,
    border: `1px solid ${colors.surface.highest}`,
  },
};

export function NBadge({ variant = "neutral", children, dot, style }: NBadgeProps) {
  return (
    <span
      style={{
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
        ...variantStyles[variant],
        ...style,
      }}
    >
      {dot && (
        <span
          style={{
            width: "5px",
            height: "5px",
            borderRadius: "50%",
            backgroundColor: "currentColor",
            flexShrink: 0,
          }}
        />
      )}
      {children}
    </span>
  );
}
