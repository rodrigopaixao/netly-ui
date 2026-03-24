/**
 * @netly/ui — NHorizontalScroll (Native/NativeWind)
 * Horizontally scrollable card rail with active/selected state.
 * Uses React Native ScrollView with snapToInterval for native feel.
 */

import React, { useState } from "react";
import { ScrollView, Pressable, View, Text } from "react-native";
import { colors } from "../tokens";
import type {
  NCategoryRailProps,
  NOfferRailProps,
  NStatChipRailProps,
} from "./NHorizontalScroll";

// ─── NCategoryRail ────────────────────────────────────────────────────────

export function NCategoryRail({ items, value, onChange }: NCategoryRailProps) {
  const [internal, setInternal] = useState(items[0]?.id ?? "");
  const active = value ?? internal;
  const CARD_WIDTH = 176;
  const GAP = 12;

  const handleSelect = (id: string) => {
    setInternal(id);
    onChange?.(id);
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={CARD_WIDTH + GAP}
      decelerationRate="fast"
      contentContainerStyle={{ gap: GAP, paddingHorizontal: 16 }}
    >
      {items.map((item) => {
        const isActive = active === item.id;
        const accent = item.color ?? colors.brand.DEFAULT;
        return (
          <Pressable
            key={item.id}
            onPress={() => handleSelect(item.id)}
            style={{
              width: CARD_WIDTH,
              height: CARD_WIDTH,
              borderRadius: 16,
              padding: 16,
              justifyContent: "space-between",
              backgroundColor: isActive ? colors.olive.active : colors.surface.elevated,
              borderWidth: 2,
              borderColor: isActive ? accent : colors.surface.highest,
            }}
          >
            {item.icon && (
              <View
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 24,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: accent + "33",
                }}
              >
                <Text style={{ color: accent, fontSize: 20 }}>{item.icon}</Text>
              </View>
            )}
            <Text
              style={{
                fontWeight: "700",
                fontSize: 15,
                lineHeight: 20,
                color: isActive ? accent : colors.text.primary,
              }}
            >
              {item.label}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

// ─── NOfferRail ───────────────────────────────────────────────────────────

export function NOfferRail({ items, value, onChange }: NOfferRailProps) {
  const [internal, setInternal] = useState(items[0]?.id ?? "");
  const active = value ?? internal;
  const CARD_WIDTH = 208;
  const GAP = 12;

  const handleSelect = (id: string) => {
    setInternal(id);
    onChange?.(id);
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={CARD_WIDTH + GAP}
      decelerationRate="fast"
      contentContainerStyle={{ gap: GAP, paddingHorizontal: 16 }}
    >
      {items.map((item) => {
        const isActive = active === item.id;
        const tagColor = item.tagColor ?? colors.brand.DEFAULT;
        return (
          <Pressable
            key={item.id}
            onPress={() => handleSelect(item.id)}
            style={{
              width: CARD_WIDTH,
              borderRadius: 16,
              padding: 16,
              gap: 12,
              backgroundColor: isActive ? colors.olive.active : colors.surface.elevated,
              borderWidth: 2,
              borderColor: isActive ? colors.brand.DEFAULT : colors.surface.highest,
            }}
          >
            {item.tag && (
              <View
                style={{
                  alignSelf: "flex-start",
                  paddingHorizontal: 8,
                  paddingVertical: 2,
                  borderRadius: 999,
                  backgroundColor: tagColor + "22",
                }}
              >
                <Text
                  style={{
                    color: tagColor,
                    fontSize: 10,
                    fontWeight: "700",
                    letterSpacing: 1.5,
                  }}
                >
                  {item.tag}
                </Text>
              </View>
            )}
            <View>
              <Text style={{ color: colors.text.primary, fontWeight: "900", fontSize: 18, lineHeight: 22 }}>
                {item.company}
              </Text>
              <Text style={{ color: colors.text.muted, fontSize: 12 }}>
                {item.role}
              </Text>
            </View>
            <View style={{ gap: 4 }}>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ color: colors.text.muted, fontSize: 12 }}>Base</Text>
                <Text style={{ color: colors.text.primary, fontWeight: "700", fontSize: 13 }}>
                  {item.base}
                </Text>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ color: colors.text.muted, fontSize: 12 }}>Total</Text>
                <Text
                  style={{
                    color: isActive ? colors.brand.DEFAULT : colors.text.primary,
                    fontWeight: "900",
                    fontSize: 13,
                  }}
                >
                  {item.totalComp}
                </Text>
              </View>
            </View>
            <Text
              style={{
                color: item.deltaPositive ? colors.semantic.success : colors.semantic.error,
                fontSize: 12,
                fontWeight: "700",
              }}
            >
              {item.deltaPositive ? "↑" : "↓"} {item.delta}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

// ─── NStatChipRail ────────────────────────────────────────────────────────

export function NStatChipRail({ items, value, onChange }: NStatChipRailProps) {
  const [internal, setInternal] = useState(items[0]?.id ?? "");
  const active = value ?? internal;

  const handleSelect = (id: string) => {
    setInternal(id);
    onChange?.(id);
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ gap: 12, paddingHorizontal: 16 }}
    >
      {items.map((chip) => {
        const isActive = active === chip.id;
        return (
          <Pressable
            key={chip.id}
            onPress={() => handleSelect(chip.id)}
            style={{
              minWidth: 120,
              borderRadius: 12,
              paddingHorizontal: 16,
              paddingVertical: 12,
              gap: 4,
              backgroundColor: isActive ? colors.olive.active : colors.surface.elevated,
              borderWidth: 1.5,
              borderColor: isActive ? colors.brand.DEFAULT : colors.surface.highest,
            }}
          >
            <Text
              style={{
                color: colors.text.muted,
                fontSize: 10,
                fontWeight: "700",
                letterSpacing: 1.5,
                textTransform: "uppercase",
              }}
            >
              {chip.label}
            </Text>
            <Text
              style={{
                color: isActive ? colors.brand.DEFAULT : colors.text.primary,
                fontSize: 18,
                fontWeight: "900",
                lineHeight: 22,
              }}
            >
              {chip.value}
            </Text>
            {chip.delta && (
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: "600",
                  color:
                    chip.deltaPositive === true
                      ? colors.semantic.success
                      : chip.deltaPositive === false
                      ? colors.semantic.error
                      : colors.text.muted,
                }}
              >
                {chip.delta}
              </Text>
            )}
          </Pressable>
        );
      })}
    </ScrollView>
  );
}
