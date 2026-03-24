/**
 * NCard — Netly card component (Expo / NativeWind v4)
 */

import React from "react";
import { View, Text, type ViewProps } from "react-native";
import type { NCardVariant } from "./NCard";

export interface NCardNativeProps extends ViewProps {
  variant?: NCardVariant;
  padding?: "none" | "sm" | "md" | "lg";
  children?: React.ReactNode;
}

const variantClass: Record<NCardVariant, string> = {
  default:  "bg-[#131313] border border-[#2a2a2a]",
  elevated: "bg-[#1a1a1a] border border-[#2a2a2a]",
  brand:    "bg-[#131313] border border-[rgba(207,252,0,0.2)]",
  ghost:    "bg-transparent border border-[#2a2a2a]",
};

const paddingClass = {
  none: "",
  sm:   "p-3",
  md:   "p-5",
  lg:   "p-8",
};

export function NCard({
  variant = "default",
  padding = "md",
  children,
  className,
  ...props
}: NCardNativeProps & { className?: string }) {
  return (
    <View
      {...props}
      className={[
        "rounded-[20px]",
        variantClass[variant],
        paddingClass[padding],
        className,
      ].filter(Boolean).join(" ")}
    >
      {children}
    </View>
  );
}

// ── NStatCard ──────────────────────────────────────────────────────────────────

export interface NStatCardNativeProps {
  label: string;
  value: string;
  delta?: string;
  deltaType?: "positive" | "negative" | "neutral";
  className?: string;
}

export function NStatCard({
  label,
  value,
  delta,
  deltaType = "neutral",
  className,
}: NStatCardNativeProps) {
  const deltaColor =
    deltaType === "positive" ? "text-[#22c55e]"
    : deltaType === "negative" ? "text-[#ef4444]"
    : "text-[#6b6b6b]";

  return (
    <NCard className={className}>
      <View className="gap-2">
        <Text className="text-[11px] font-bold tracking-widest uppercase text-[#6b6b6b]">
          {label}
        </Text>
        <Text className="text-[28px] font-black text-white" style={{ letterSpacing: -0.8 }}>
          {value}
        </Text>
        {delta && (
          <Text className={`text-xs font-semibold ${deltaColor}`}>{delta}</Text>
        )}
      </View>
    </NCard>
  );
}
