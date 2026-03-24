/**
 * NCard — Netly card component (Web)
 *
 * Variants: default | elevated | brand | ghost
 */

import React from "react";
import { colors, componentTokens, elevation } from "../tokens";

export type NCardVariant = "default" | "elevated" | "brand" | "ghost";

export interface NCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: NCardVariant;
  padding?: "none" | "sm" | "md" | "lg";
  as?: React.ElementType;
}

const variantStyles: Record<NCardVariant, React.CSSProperties> = {
  default: {
    backgroundColor: componentTokens.card.background,
    border: `1px solid ${componentTokens.card.border}`,
    boxShadow: "none",
  },
  elevated: {
    backgroundColor: colors.surface.elevated,
    border: `1px solid ${colors.surface.highest}`,
    boxShadow: elevation.md,
  },
  brand: {
    backgroundColor: componentTokens.card.background,
    border: `1px solid ${colors.brand.border}`,
    boxShadow: elevation.brand,
  },
  ghost: {
    backgroundColor: "transparent",
    border: `1px solid ${colors.surface.highest}`,
    boxShadow: "none",
  },
};

const paddingMap = {
  none: "0",
  sm: "12px",
  md: componentTokens.card.padding,
  lg: "32px",
};

export function NCard({
  variant = "default",
  padding = "md",
  as: Tag = "div",
  children,
  style,
  ...props
}: NCardProps) {
  return (
    <Tag
      {...props}
      style={{
        borderRadius: componentTokens.card.borderRadius,
        padding: paddingMap[padding],
        transition: "border-color 150ms ease, box-shadow 150ms ease",
        ...variantStyles[variant],
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}

// ── NStatCard ──────────────────────────────────────────────────────────────────

export interface NStatCardProps {
  label: string;
  value: string;
  delta?: string;
  deltaType?: "positive" | "negative" | "neutral";
  icon?: string; // material symbol name
  style?: React.CSSProperties;
}

export function NStatCard({
  label,
  value,
  delta,
  deltaType = "neutral",
  icon,
  style,
}: NStatCardProps) {
  const deltaColor =
    deltaType === "positive"
      ? colors.semantic.success
      : deltaType === "negative"
      ? colors.semantic.error
      : colors.text.muted;

  return (
    <NCard style={style}>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: colors.text.muted,
              fontFamily: "Inter, system-ui, sans-serif",
            }}
          >
            {label}
          </span>
          {icon && (
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "16px", color: colors.text.disabled }}
            >
              {icon}
            </span>
          )}
        </div>
        <span
          style={{
            fontSize: "28px",
            fontWeight: 900,
            letterSpacing: "-0.03em",
            color: colors.text.primary,
            fontFamily: "Inter, system-ui, sans-serif",
            lineHeight: 1,
          }}
        >
          {value}
        </span>
        {delta && (
          <span
            style={{
              fontSize: "12px",
              fontWeight: 600,
              color: deltaColor,
              fontFamily: "Inter, system-ui, sans-serif",
            }}
          >
            {delta}
          </span>
        )}
      </div>
    </NCard>
  );
}
