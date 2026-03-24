/**
 * NToggleRow — Netly toggle/switch row component (Expo / NativeWind v4)
 */

import React from "react";
import {
  View,
  Text,
  Switch,
  TouchableOpacity,
  type ViewProps,
} from "react-native";
import type { NToggleRowProps } from "./NToggleRow";

export function NToggleRow({
  label,
  description,
  checked,
  onChange,
  disabled = false,
  style,
}: NToggleRowProps) {
  return (
    <TouchableOpacity
      onPress={() => !disabled && onChange(!checked)}
      disabled={disabled}
      activeOpacity={0.8}
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          padding: 14,
          borderRadius: 12,
          backgroundColor: "#1e1e1e",
          borderWidth: 1,
          borderColor: checked ? "rgba(207,252,0,0.2)" : "#2a2a2a",
          opacity: disabled ? 0.4 : 1,
        },
        style as any,
      ]}
    >
      <View style={{ flex: 1, gap: 2 }}>
        <Text
          className="text-sm font-semibold text-[#e8e8e8]"
          style={{ fontFamily: "Inter" }}
        >
          {label}
        </Text>
        {description && (
          <Text
            className="text-xs text-[#6b6b6b]"
            style={{ fontFamily: "Inter" }}
          >
            {description}
          </Text>
        )}
      </View>

      <Switch
        value={checked}
        onValueChange={onChange}
        disabled={disabled}
        trackColor={{
          false: "#2a2a2a",
          true: "#cffc00",
        }}
        thumbColor={checked ? "#0a0a0a" : "#6b6b6b"}
        ios_backgroundColor="#2a2a2a"
      />
    </TouchableOpacity>
  );
}
