/**
 * NBadge — Netly badge/chip component (Expo / NativeWind v4)
 */

import React from "react";
import { View, Text } from "react-native";
import type { NBadgeVariant } from "./NBadge";

export interface NBadgeNativeProps {
  variant?: NBadgeVariant;
  children: React.ReactNode;
  dot?: boolean;
  className?: string;
}

const variantClass: Record<NBadgeVariant, string> = {
  brand:   "bg-[rgba(207,252,0,0.08)] border border-[rgba(207,252,0,0.2)]",
  success: "bg-[rgba(34,197,94,0.1)] border border-[rgba(34,197,94,0.2)]",
  warning: "bg-[rgba(245,158,11,0.1)] border border-[rgba(245,158,11,0.2)]",
  error:   "bg-[rgba(239,68,68,0.1)] border border-[rgba(239,68,68,0.2)]",
  neutral: "bg-[#1e1e1e] border border-[#2a2a2a]",
  outline: "bg-transparent border border-[#2a2a2a]",
};

const variantTextClass: Record<NBadgeVariant, string> = {
  brand:   "text-[#cffc00]",
  success: "text-[#22c55e]",
  warning: "text-[#f59e0b]",
  error:   "text-[#ef4444]",
  neutral: "text-[#b0b0b0]",
  outline: "text-[#6b6b6b]",
};

export function NBadge({ variant = "neutral", children, dot, className }: NBadgeNativeProps) {
  return (
    <View
      className={[
        "flex-row items-center self-start rounded-full px-2",
        variantClass[variant],
        className,
      ].filter(Boolean).join(" ")}
      style={{ height: 22, gap: 5 }}
    >
      {dot && (
        <View
          className={`w-1.5 h-1.5 rounded-full ${variantTextClass[variant].replace("text-", "bg-")}`}
        />
      )}
      <Text
        className={[
          "text-[11px] font-bold tracking-widest uppercase",
          variantTextClass[variant],
        ].join(" ")}
      >
        {children}
      </Text>
    </View>
  );
}
