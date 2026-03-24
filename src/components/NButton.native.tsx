/**
 * NButton — Netly cross-platform button component (Expo / NativeWind v4)
 */

import React from "react";
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  View,
  type TouchableOpacityProps,
} from "react-native";
import type { NButtonVariant, NButtonSize } from "./NButton";

export interface NButtonNativeProps extends TouchableOpacityProps {
  variant?: NButtonVariant;
  size?: NButtonSize;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  children?: React.ReactNode;
}

const variantClass: Record<NButtonVariant, string> = {
  primary:     "bg-[#cffc00] border-0",
  secondary:   "bg-transparent border border-[rgba(207,252,0,0.3)]",
  ghost:       "bg-transparent border border-[#2a2a2a]",
  destructive: "bg-transparent border border-[rgba(239,68,68,0.3)]",
};

const variantTextClass: Record<NButtonVariant, string> = {
  primary:     "text-[#0a0a0a]",
  secondary:   "text-[#cffc00]",
  ghost:       "text-[#e8e8e8]",
  destructive: "text-[#ef4444]",
};

const sizeClass: Record<NButtonSize, string> = {
  sm: "h-8 px-3",
  md: "h-10 px-4",
  lg: "h-12 px-5",
};

const sizeFontClass: Record<NButtonSize, string> = {
  sm: "text-[12px]",
  md: "text-[13px]",
  lg: "text-[14px]",
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
  ...props
}: NButtonNativeProps) {
  const isDisabled = disabled || loading;

  return (
    <TouchableOpacity
      {...props}
      disabled={isDisabled}
      activeOpacity={0.8}
      className={[
        "flex-row items-center justify-center rounded-lg gap-1.5",
        variantClass[variant],
        sizeClass[size],
        fullWidth ? "w-full" : "self-start",
        isDisabled ? "opacity-40" : "opacity-100",
      ].join(" ")}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={variant === "primary" ? "#0a0a0a" : "#cffc00"}
        />
      ) : (
        <>
          {leftIcon && <View>{leftIcon}</View>}
          <Text
            className={[
              "font-bold tracking-widest uppercase",
              variantTextClass[variant],
              sizeFontClass[size],
            ].join(" ")}
          >
            {children}
          </Text>
          {rightIcon && <View>{rightIcon}</View>}
        </>
      )}
    </TouchableOpacity>
  );
}
