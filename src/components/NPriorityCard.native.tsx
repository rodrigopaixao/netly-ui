/**
 * NPriorityCard — Netly priority/ranking card (Expo / NativeWind v4)
 */

import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import type { NPriorityCardProps } from "./NPriorityCard";

const tagClass = {
  brand:   { bg: "bg-[rgba(207,252,0,0.08)] border-[rgba(207,252,0,0.2)]", text: "text-[#cffc00]" },
  success: { bg: "bg-[rgba(34,197,94,0.1)] border-[rgba(34,197,94,0.2)]",  text: "text-[#22c55e]" },
  warning: { bg: "bg-[rgba(245,158,11,0.1)] border-[rgba(245,158,11,0.2)]",text: "text-[#f59e0b]" },
  error:   { bg: "bg-[rgba(239,68,68,0.1)] border-[rgba(239,68,68,0.2)]",  text: "text-[#ef4444]" },
  neutral: { bg: "bg-[#1e1e1e] border-[#2a2a2a]",                          text: "text-[#b0b0b0]" },
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
  onClick,
}: NPriorityCardProps) {
  const deltaColor =
    deltaType === "positive" ? "text-[#22c55e]"
    : deltaType === "negative" ? "text-[#ef4444]"
    : "text-[#6b6b6b]";

  const Wrapper = onClick ? TouchableOpacity : View;

  return (
    <Wrapper
      onPress={onClick}
      activeOpacity={onClick ? 0.8 : 1}
      className="flex-row items-center gap-4 px-5 py-4 rounded-2xl"
      style={{
        backgroundColor: highlighted ? "#2a3300" : "#131313",
        borderWidth: 1,
        borderColor: highlighted ? "rgba(207,252,0,0.2)" : "#2a2a2a",
      }}
    >
      {/* Rank */}
      <View
        className="w-9 h-9 rounded-full items-center justify-center"
        style={{ backgroundColor: highlighted ? "#cffc00" : "#1e1e1e" }}
      >
        <Text
          className="text-sm font-black"
          style={{ color: highlighted ? "#0a0a0a" : "#6b6b6b", fontFamily: "Inter" }}
        >
          {rank}
        </Text>
      </View>

      {/* Content */}
      <View className="flex-1 gap-0.5">
        <View className="flex-row items-center gap-2">
          <Text
            className="text-sm font-bold text-[#e8e8e8] flex-shrink"
            style={{ fontFamily: "Inter" }}
            numberOfLines={1}
          >
            {title}
          </Text>
          {tag && (
            <View
              className={`flex-row items-center rounded-full px-1.5 border ${tagClass[tagVariant].bg}`}
              style={{ height: 18 }}
            >
              <Text
                className={`text-[10px] font-bold tracking-widest uppercase ${tagClass[tagVariant].text}`}
              >
                {tag}
              </Text>
            </View>
          )}
        </View>
        {subtitle && (
          <Text className="text-xs text-[#6b6b6b]" style={{ fontFamily: "Inter" }}>
            {subtitle}
          </Text>
        )}
      </View>

      {/* Value */}
      {(value || valueDelta) && (
        <View className="items-end">
          {value && (
            <Text
              className="text-base font-black"
              style={{
                color: highlighted ? "#cffc00" : "#ffffff",
                fontFamily: "Inter",
                letterSpacing: -0.4,
              }}
            >
              {value}
            </Text>
          )}
          {valueDelta && (
            <Text className={`text-[11px] font-semibold ${deltaColor}`}>
              {valueDelta}
            </Text>
          )}
        </View>
      )}
    </Wrapper>
  );
}
