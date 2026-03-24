/**
 * NButton — Netly cross-platform button component (Web)
 *
 * Variants: primary | secondary | ghost | destructive
 * Sizes: sm | md | lg
 */

import React from "react";
import { colors, componentTokens } from "../tokens";

export type NButtonVariant = "primary" | "secondary" | "ghost" | "destructive";
export type NButtonSize = "sm" | "md" | "lg";

export interface NButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: NButtonVariant;
  size?: NButtonSize;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const variantStyles: Record<NButtonVariant, React.CSSProperties> = {
  primary: {
    backgroundColor: colors.brand.DEFAULT,
    color: colors.brand.on,
    border: "none",
  },
  secondary: {
    backgroundColor: "transparent",
    color: colors.brand.DEFAULT,
    border: `1px solid ${colors.brand.borderStrong}`,
  },
  ghost: {
    backgroundColor: "transparent",
    color: colors.text.secondary,
    border: `1px solid ${colors.surface.highest}`,
  },
  destructive: {
    backgroundColor: "transparent",
    color: colors.semantic.error,
    border: `1px solid rgba(239, 68, 68, 0.3)`,
  },
};

const sizeStyles: Record<NButtonSize, React.CSSProperties> = {
  sm: {
    height: componentTokens.button.height.sm,
    padding: `0 ${componentTokens.button.paddingX.sm}`,
    fontSize: componentTokens.button.fontSize.sm,
  },
  md: {
    height: componentTokens.button.height.md,
    padding: `0 ${componentTokens.button.paddingX.md}`,
    fontSize: componentTokens.button.fontSize.md,
  },
  lg: {
    height: componentTokens.button.height.lg,
    padding: `0 ${componentTokens.button.paddingX.lg}`,
    fontSize: componentTokens.button.fontSize.lg,
  },
};

export function NButton({
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
}: NButtonProps) {
  const isDisabled = disabled || loading;

  const baseStyle: React.CSSProperties = {
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
    width: fullWidth ? "100%" : undefined,
    whiteSpace: "nowrap",
    outline: "none",
    userSelect: "none",
    ...variantStyles[variant],
    ...sizeStyles[size],
    ...style,
  };

  return (
    <button
      {...props}
      disabled={isDisabled}
      style={baseStyle}
      onMouseEnter={(e) => {
        if (!isDisabled) {
          if (variant === "primary") {
            (e.currentTarget as HTMLButtonElement).style.opacity = "0.88";
          } else {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor =
              variant === "secondary" ? colors.brand.dim : colors.surface.high;
          }
        }
        props.onMouseEnter?.(e);
      }}
      onMouseLeave={(e) => {
        if (!isDisabled) {
          (e.currentTarget as HTMLButtonElement).style.opacity = "1";
          (e.currentTarget as HTMLButtonElement).style.backgroundColor =
            variantStyles[variant].backgroundColor as string;
        }
        props.onMouseLeave?.(e);
      }}
      onMouseDown={(e) => {
        if (!isDisabled) {
          (e.currentTarget as HTMLButtonElement).style.transform = "scale(0.97)";
        }
        props.onMouseDown?.(e);
      }}
      onMouseUp={(e) => {
        if (!isDisabled) {
          (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
        }
        props.onMouseUp?.(e);
      }}
    >
      {loading ? (
        <LoadingSpinner size={size} />
      ) : (
        <>
          {leftIcon}
          {children}
          {rightIcon}
        </>
      )}
    </button>
  );
}

function LoadingSpinner({ size }: { size: NButtonSize }) {
  const dim = size === "sm" ? 12 : size === "md" ? 14 : 16;
  return (
    <svg
      width={dim}
      height={dim}
      viewBox="0 0 24 24"
      fill="none"
      style={{ animation: "netly-spin 0.8s linear infinite" }}
    >
      <style>{`@keyframes netly-spin { to { transform: rotate(360deg); } }`}</style>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.25" />
      <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
