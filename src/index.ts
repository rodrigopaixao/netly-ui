/**
 * @netly/ui — Main entry point
 *
 * Cross-platform UI component library for Expo (NativeWind) and Web (Tailwind CSS).
 *
 * Usage:
 *   import { NButton, NCard, NInput, NBadge, NToggleRow, NBottomTab, NPriorityCard, NStatCard } from "@netly/ui";
 *
 * Tokens:
 *   import { colors, typography, spacing, componentTokens } from "@netly/ui/tokens";
 *
 * Tailwind preset:
 *   const netlyPreset = require("@netly/ui/tailwind");
 *
 * Global CSS (web only):
 *   import "@netly/ui/global.css";
 */

// ── Components ────────────────────────────────────────────────────────────────
export { NButton } from "./components/NButton";
export type { NButtonProps, NButtonVariant, NButtonSize } from "./components/NButton";

export { NCard, NStatCard } from "./components/NCard";
export type { NCardProps, NCardVariant, NStatCardProps } from "./components/NCard";

export { NInput } from "./components/NInput";
export type { NInputProps, NInputType } from "./components/NInput";

export { NBadge } from "./components/NBadge";
export type { NBadgeProps, NBadgeVariant } from "./components/NBadge";

export { NToggleRow } from "./components/NToggleRow";
export type { NToggleRowProps } from "./components/NToggleRow";

export { NBottomTab } from "./components/NBottomTab";
export type { NBottomTabProps, NTabItem } from "./components/NBottomTab";

export { NPriorityCard } from "./components/NPriorityCard";
export type { NPriorityCardProps } from "./components/NPriorityCard";

export { NCategoryRail, NOfferRail, NStatChipRail } from "./components/NHorizontalScroll";
export type {
  NCategoryItem,
  NCategoryRailProps,
  NOfferItem,
  NOfferRailProps,
  NStatChip,
  NStatChipRailProps,
} from "./components/NHorizontalScroll";

// ── Tokens (re-exported for convenience) ─────────────────────────────────────
export {
  colors,
  typography,
  spacing,
  radius,
  elevation,
  animation,
  componentTokens,
  tailwindTokens,
} from "./tokens";
export { default as tokens } from "./tokens";
