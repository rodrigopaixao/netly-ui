/**
 * NInput — Netly input component (Expo / NativeWind v4)
 */

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  type TextInputProps,
} from "react-native";
import type { NInputType } from "./NInput";

export interface NInputNativeProps extends Omit<TextInputProps, "secureTextEntry"> {
  label?: string;
  hint?: string;
  error?: string;
  type?: NInputType;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onRightIconPress?: () => void;
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
  onRightIconPress,
  prefix,
  suffix,
  editable = true,
  ...props
}: NInputNativeProps) {
  const [focused, setFocused] = useState(false);
  const hasError = Boolean(error);

  const borderClass = hasError
    ? "border-[#ef4444]"
    : focused
    ? "border-[rgba(207,252,0,0.2)]"
    : "border-[#2a2a2a]";

  return (
    <View className="gap-1.5">
      {label && (
        <Text className="text-[12px] font-bold tracking-widest uppercase text-[#6b6b6b]">
          {label}
        </Text>
      )}

      <View
        className={[
          "flex-row items-center h-12 rounded-xl bg-[#1e1e1e] border overflow-hidden",
          borderClass,
          !editable ? "opacity-40" : "",
        ].join(" ")}
      >
        {leftIcon && (
          <View className="pl-3.5">{leftIcon}</View>
        )}
        {prefix && (
          <Text className="pl-3.5 text-sm text-[#6b6b6b]">{prefix}</Text>
        )}

        <TextInput
          {...props}
          editable={editable}
          secureTextEntry={type === "password"}
          keyboardType={
            type === "email" ? "email-address"
            : type === "number" ? "numeric"
            : type === "tel" ? "phone-pad"
            : "default"
          }
          onFocus={(e) => {
            setFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setFocused(false);
            props.onBlur?.(e);
          }}
          className="flex-1 h-full px-4 text-[15px] text-[#e8e8e8]"
          placeholderTextColor="#484848"
          style={{ fontFamily: "Inter" }}
        />

        {suffix && (
          <Text className="pr-3.5 text-sm text-[#6b6b6b]">{suffix}</Text>
        )}
        {rightIcon && (
          <TouchableOpacity
            onPress={onRightIconPress}
            className="pr-3.5"
            disabled={!onRightIconPress}
          >
            {rightIcon}
          </TouchableOpacity>
        )}
      </View>

      {(hint || error) && (
        <Text
          className={`text-xs ${hasError ? "text-[#ef4444]" : "text-[#6b6b6b]"}`}
        >
          {error || hint}
        </Text>
      )}
    </View>
  );
}
