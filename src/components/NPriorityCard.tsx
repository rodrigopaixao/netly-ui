/**
 * NPriorityCard — Netly priority/ranking card (Web)
 *
 * Used in the Account Priority Wizard results screen.
 */

import React from "react";
import { colors } from "../tokens";

export interface NPriorityCardProps {
  rank: number;
  title: string;
  subtitle?: string;
  value?: string;
  valueDelta?: string;
  deltaType?: "positive" | "negative" | "neutral";
  tag?: string;
  tagVariant?: "brand" | "success" | "warning" | "error" | "neutral";
  highlighted?: boolean;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const tagColors = {
  brand:   { bg: colors.brand.dim,                  text: colors.brand.DEFAULT,    border: colors.brand.border },
  success: { bg: colors.semantic.successDim,        text: colors.semantic.success, border: "rgba(34,197,94,0.2)" },
  warning: { bg: colors.semantic.warningDim,        text: colors.semantic.warning, border: "rgba(245,158,11,0.2)" },
  error:   { bg: colors.semantic.errorDim,          text: colors.semantic.error,   border: "rgba(239,68,68,0.2)" },
  neutral: { bg: colors.surface.high,               text: colors.text.tertiary,    border: colors.surface.highest },
};

export function NPriorityCard({
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
  onClick,
}: NPriorityCardProps) {
  const deltaColor =
    deltaType === "positive" ? colors.semantic.success
    : deltaType === "negative" ? colors.semantic.error
    : colors.text.muted;

  const tagStyle = tagColors[tagVariant];

  return (
    <div
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "16px",
        padding: "16px 20px",
        borderRadius: "16px",
        backgroundColor: highlighted ? colors.olive.DEFAULT : colors.surface.overlay,
        border: `1px solid ${highlighted ? colors.brand.border : colors.surface.highest}`,
        cursor: onClick ? "pointer" : "default",
        transition: "border-color 150ms ease, background-color 150ms ease",
        ...style,
      }}
    >
      {/* Rank number */}
      <div
        style={{
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          backgroundColor: highlighted ? colors.brand.DEFAULT : colors.surface.high,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <span
          style={{
            fontSize: "14px",
            fontWeight: 900,
            color: highlighted ? colors.brand.on : colors.text.muted,
            fontFamily: "Inter, system-ui, sans-serif",
          }}
        >
          {rank}
        </span>
      </div>

      {/* Content */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "2px" }}>
          <span
            style={{
              fontSize: "14px",
              fontWeight: 700,
              color: colors.text.secondary,
              fontFamily: "Inter, system-ui, sans-serif",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {title}
          </span>
          {tag && (
            <span
              style={{
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
                flexShrink: 0,
              }}
            >
              {tag}
            </span>
          )}
        </div>
        {subtitle && (
          <span
            style={{
              fontSize: "12px",
              color: colors.text.muted,
              fontFamily: "Inter, system-ui, sans-serif",
            }}
          >
            {subtitle}
          </span>
        )}
      </div>

      {/* Value */}
      {(value || valueDelta) && (
        <div style={{ textAlign: "right", flexShrink: 0 }}>
          {value && (
            <div
              style={{
                fontSize: "16px",
                fontWeight: 900,
                color: highlighted ? colors.brand.DEFAULT : colors.text.primary,
                fontFamily: "Inter, system-ui, sans-serif",
                letterSpacing: "-0.02em",
              }}
            >
              {value}
            </div>
          )}
          {valueDelta && (
            <div
              style={{
                fontSize: "11px",
                fontWeight: 600,
                color: deltaColor,
                fontFamily: "Inter, system-ui, sans-serif",
              }}
            >
              {valueDelta}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
