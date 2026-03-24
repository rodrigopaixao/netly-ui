/**
 * NInput — Netly input component (Web)
 */

import React, { useState } from "react";
import { colors, componentTokens } from "../tokens";

export type NInputType = "text" | "email" | "password" | "number" | "tel" | "url" | "search";

export interface NInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  label?: string;
  hint?: string;
  error?: string;
  type?: NInputType;
  leftIcon?: string; // material symbol name
  rightIcon?: string;
  onRightIconClick?: () => void;
  prefix?: string;
  suffix?: string;
}

export function NInput({
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
}: NInputProps) {
  const [focused, setFocused] = useState(false);
  const hasError = Boolean(error);

  const borderColor = hasError
    ? colors.semantic.error
    : focused
    ? colors.brand.border
    : colors.surface.highest;

  const wrapperStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    height: componentTokens.input.height,
    borderRadius: componentTokens.input.borderRadius,
    backgroundColor: componentTokens.input.background,
    border: `1px solid ${borderColor}`,
    transition: "border-color 150ms ease",
    opacity: disabled ? 0.4 : 1,
    overflow: "hidden",
  };

  const inputStyle: React.CSSProperties = {
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
    ...style,
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      {label && (
        <label
          style={{
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: colors.text.muted,
            fontFamily: "Inter, system-ui, sans-serif",
          }}
        >
          {label}
        </label>
      )}

      <div style={wrapperStyle}>
        {leftIcon && (
          <span
            className="material-symbols-outlined"
            style={{
              fontSize: "18px",
              color: focused ? colors.brand.DEFAULT : colors.text.disabled,
              paddingLeft: "14px",
              transition: "color 150ms ease",
              flexShrink: 0,
            }}
          >
            {leftIcon}
          </span>
        )}
        {prefix && (
          <span
            style={{
              paddingLeft: "14px",
              fontSize: "14px",
              color: colors.text.muted,
              fontFamily: "Inter, system-ui, sans-serif",
              flexShrink: 0,
            }}
          >
            {prefix}
          </span>
        )}

        <input
          {...props}
          type={type}
          disabled={disabled}
          onFocus={(e) => {
            setFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setFocused(false);
            props.onBlur?.(e);
          }}
          style={{
            ...inputStyle,
            // Placeholder color via CSS
            // @ts-ignore
            "--placeholder-color": componentTokens.input.placeholderColor,
          }}
        />

        {suffix && (
          <span
            style={{
              paddingRight: "14px",
              fontSize: "14px",
              color: colors.text.muted,
              fontFamily: "Inter, system-ui, sans-serif",
              flexShrink: 0,
            }}
          >
            {suffix}
          </span>
        )}
        {rightIcon && (
          <span
            className="material-symbols-outlined"
            onClick={onRightIconClick}
            style={{
              fontSize: "18px",
              color: colors.text.disabled,
              paddingRight: "14px",
              cursor: onRightIconClick ? "pointer" : "default",
              flexShrink: 0,
            }}
          >
            {rightIcon}
          </span>
        )}
      </div>

      {(hint || error) && (
        <span
          style={{
            fontSize: "12px",
            color: hasError ? colors.semantic.error : colors.text.muted,
            fontFamily: "Inter, system-ui, sans-serif",
          }}
        >
          {error || hint}
        </span>
      )}
    </div>
  );
}
