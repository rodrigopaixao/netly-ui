/**
 * NBottomTab — Netly bottom navigation bar (Expo / NativeWind v4)
 *
 * Designed to be used with Expo Router's tab layout or standalone.
 * For Expo Router: use this as a custom tabBar in your _layout.tsx.
 */

import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  type ViewProps,
} from "react-native";
import type { NTabItem } from "./NBottomTab";

export interface NBottomTabNativeProps extends ViewProps {
  tabs: NTabItem[];
  activeKey: string;
  onChange: (key: string) => void;
}

export function NBottomTab({
  tabs,
  activeKey,
  onChange,
  ...props
}: NBottomTabNativeProps) {
  return (
    <View
      {...props}
      className="flex-row items-center justify-around"
      style={[
        {
          height: 60,
          backgroundColor: "#0f0f0f",
          borderTopWidth: 1,
          borderTopColor: "#2a2a2a",
        },
        props.style as any,
      ]}
    >
      {tabs.map((tab) => {
        const isActive = tab.key === activeKey;
        return (
          <TouchableOpacity
            key={tab.key}
            onPress={() => onChange(tab.key)}
            activeOpacity={0.7}
            className="flex-1 items-center justify-center gap-1"
            style={{ height: "100%" }}
          >
            {/* Icon container */}
            <View
              className="items-center justify-center rounded-2xl"
              style={{
                width: 40,
                height: 32,
                backgroundColor: isActive ? "#4a5c00" : "transparent",
              }}
            >
              {/* Use MaterialIcons or any icon library */}
              {/* Replace with your icon component: */}
              {/* <MaterialIcons name={tab.icon} size={20} color={isActive ? "#cffc00" : "#6b6b6b"} /> */}
              <Text
                style={{
                  fontSize: 20,
                  color: isActive ? "#cffc00" : "#6b6b6b",
                  fontFamily: "MaterialSymbolsOutlined", // load via @expo-google-fonts
                }}
              >
                {tab.icon}
              </Text>
            </View>

            {/* Label */}
            <Text
              className="text-[10px] font-bold tracking-widest uppercase"
              style={{ color: isActive ? "#cffc00" : "#484848" }}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

/**
 * Expo Router integration example:
 *
 * // app/(tabs)/_layout.tsx
 * import { Tabs } from "expo-router";
 * import { NBottomTab } from "@netly/ui";
 *
 * export default function TabLayout() {
 *   return (
 *     <Tabs
 *       tabBar={(props) => (
 *         <NBottomTab
 *           tabs={[
 *             { key: "analyze", label: "Analyze", icon: "search" },
 *             { key: "decide",  label: "Decide",  icon: "balance" },
 *             { key: "grow",    label: "Grow",    icon: "trending_up" },
 *             { key: "offers",  label: "Offers",  icon: "compare_arrows" },
 *           ]}
 *           activeKey={props.state.routes[props.state.index].name}
 *           onChange={(key) => props.navigation.navigate(key)}
 *         />
 *       )}
 *     >
 *       <Tabs.Screen name="analyze" />
 *       <Tabs.Screen name="decide" />
 *       <Tabs.Screen name="grow" />
 *       <Tabs.Screen name="offers" />
 *     </Tabs>
 *   );
 * }
 */
