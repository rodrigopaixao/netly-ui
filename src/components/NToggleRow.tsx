/**
 * NToggleRow — Netly toggle/switch row component (Web)
 *
 * A labeled row with a toggle switch on the right.
 */

import React from "react";
import { colors } from "../tokens";

export interface NToggleRowProps {
  label: string;
  description?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export function NToggleRow({
  label,
  description,
  checked,
  onChange,
  disabled = false,
  style,
}: NToggleRowProps) {
  return (
    <div
      style={{
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
        ...style,
      }}
      onClick={() => !disabled && onChange(!checked)}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
        <span
          style={{
            fontSize: "14px",
            fontWeight: 600,
            color: colors.text.secondary,
            fontFamily: "Inter, system-ui, sans-serif",
          }}
        >
          {label}
        </span>
        {description && (
          <span
            style={{
              fontSize: "12px",
              color: colors.text.muted,
              fontFamily: "Inter, system-ui, sans-serif",
            }}
          >
            {description}
          </span>
        )}
      </div>

      {/* Toggle switch */}
      <div
        style={{
          position: "relative",
          width: "44px",
          height: "24px",
          borderRadius: "12px",
          backgroundColor: checked ? colors.brand.DEFAULT : colors.surface.highest,
          transition: "background-color 200ms ease",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "3px",
            left: checked ? "23px" : "3px",
            width: "18px",
            height: "18px",
            borderRadius: "50%",
            backgroundColor: checked ? colors.brand.on : colors.text.muted,
            transition: "left 200ms cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
        />
      </div>
    </div>
  );
}
