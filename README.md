# @netly/ui

> Cross-platform UI component library for Expo (NativeWind v4) and Web (Tailwind CSS v4).  
> Built on the **Neon Monolith** design system — Swiss-Industrial precision with digital athleticism.

---

## Installation

```bash
# npm
npm install @netly/ui

# pnpm
pnpm add @netly/ui

# yarn
yarn add @netly/ui
```

### Peer dependencies

```bash
# For Expo / React Native
pnpm add nativewind react-native

# For Web
pnpm add tailwindcss
```

---

## Quick Start

### Web (Tailwind CSS v4)

**1. Import global CSS in your entry file:**

```css
/* index.css */
@import "tailwindcss";
@import "@netly/ui/global.css";
```

**2. Add the preset to your Tailwind config:**

```js
// tailwind.config.js
const netlyPreset = require("@netly/ui/tailwind");
module.exports = {
  presets: [netlyPreset],
  content: ["./src/**/*.{ts,tsx}"],
};
```

**3. Use components:**

```tsx
import { NButton, NCard, NInput, NBadge } from "@netly/ui";

export default function App() {
  return (
    <NCard variant="brand">
      <NInput label="Annual Salary" prefix="$" placeholder="85,000" />
      <NButton variant="primary" size="lg">Calculate Tax</NButton>
      <NBadge variant="success" dot>Optimized</NBadge>
    </NCard>
  );
}
```

---

### Expo (NativeWind v4)

**1. Install NativeWind:**

```bash
pnpm add nativewind
pnpm add -D tailwindcss@3
```

**2. Configure Tailwind with the Netly preset:**

```js
// tailwind.config.js
const netlyPreset = require("@netly/ui/tailwind");
module.exports = {
  presets: [netlyPreset],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
};
```

**3. Configure Babel:**

```js
// babel.config.js
module.exports = {
  presets: ["babel-preset-expo"],
  plugins: ["nativewind/babel"],
};
```

**4. Configure Metro:**

```js
// metro.config.js
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);
module.exports = withNativeWind(config, { input: "./global.css" });
```

**5. Create global.css:**

```css
/* global.css */
@import "tailwindcss";
```

**6. Import in your entry file:**

```tsx
// app/_layout.tsx
import "../global.css";
```

**7. Use components:**

```tsx
import { NButton, NCard, NInput, NBottomTab } from "@netly/ui";

export default function HomeScreen() {
  return (
    <NCard variant="elevated" className="m-4">
      <NInput label="Province" placeholder="Ontario" />
      <NButton variant="primary" fullWidth>Analyze</NButton>
    </NCard>
  );
}
```

---

## Components

| Component | Description | Web | Native |
|---|---|---|---|
| `NButton` | Primary action button with 4 variants | ✅ | ✅ |
| `NCard` | Container card with 4 variants | ✅ | ✅ |
| `NStatCard` | Metric display card with delta | ✅ | ✅ |
| `NInput` | Text input with label, hint, error | ✅ | ✅ |
| `NBadge` | Status badge/chip with 6 variants | ✅ | ✅ |
| `NToggleRow` | Labeled toggle/switch row | ✅ | ✅ |
| `NBottomTab` | Bottom navigation bar | ✅ | ✅ |
| `NPriorityCard` | Ranked priority item card | ✅ | ✅ |

### NButton

```tsx
<NButton variant="primary" size="md" loading={false}>
  Calculate Tax
</NButton>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `primary \| secondary \| ghost \| destructive` | `primary` | Visual style |
| `size` | `sm \| md \| lg` | `md` | Height and padding |
| `loading` | `boolean` | `false` | Shows spinner, disables interaction |
| `leftIcon` | `ReactNode` | — | Icon before label |
| `rightIcon` | `ReactNode` | — | Icon after label |
| `fullWidth` | `boolean` | `false` | Stretches to container width |

### NCard

```tsx
<NCard variant="brand" padding="md">
  Content
</NCard>
```

| Prop | Type | Default |
|---|---|---|
| `variant` | `default \| elevated \| brand \| ghost` | `default` |
| `padding` | `none \| sm \| md \| lg` | `md` |

### NInput

```tsx
<NInput
  label="Annual Salary"
  prefix="$"
  placeholder="85,000"
  hint="Before deductions"
  error="Required"
/>
```

### NBadge

```tsx
<NBadge variant="success" dot>Optimized</NBadge>
```

Variants: `brand` | `success` | `warning` | `error` | `neutral` | `outline`

### NBottomTab

```tsx
const TABS = [
  { key: "analyze", label: "Analyze", icon: "search" },
  { key: "decide",  label: "Decide",  icon: "balance" },
  { key: "grow",    label: "Grow",    icon: "trending_up" },
  { key: "offers",  label: "Offers",  icon: "compare_arrows" },
];

<NBottomTab tabs={TABS} activeKey="analyze" onChange={setActive} />
```

### NPriorityCard

```tsx
<NPriorityCard
  rank={1}
  title="Max RRSP"
  subtitle="Reduces taxable income by $18,000"
  value="$18,000"
  valueDelta="+$4,320 saved"
  deltaType="positive"
  tag="Recommended"
  tagVariant="brand"
  highlighted
/>
```

---

## Design Tokens

```tsx
import { colors, typography, spacing, radius, elevation, animation, componentTokens } from "@netly/ui/tokens";

// Brand color
colors.brand.DEFAULT  // "#cffc00"

// Surface layers
colors.surface.base     // "#0a0a0a"
colors.surface.overlay  // "#131313"
colors.surface.high     // "#1e1e1e"

// Text hierarchy
colors.text.primary    // "#ffffff"
colors.text.muted      // "#6b6b6b"
colors.text.disabled   // "#484848"

// Semantic
colors.semantic.success  // "#22c55e"
colors.semantic.error    // "#ef4444"

// Spacing
spacing[4]   // "16px"
spacing[6]   // "24px"

// Animation
animation.duration.normal   // "150ms"
animation.easing.spring     // "cubic-bezier(0.34, 1.56, 0.64, 1)"
```

---

## Tailwind Classes

All tokens are available as Tailwind utilities after adding the preset:

```tsx
// Colors
className="bg-netly-surface text-netly-text"
className="text-netly-brand border-netly-brand-border"
className="bg-netly-olive-active"

// Shadows
className="shadow-netly-brand"

// Border radius
className="rounded-netly-xl"
```

---

## Troubleshooting

### `Cannot find module '@netly/ui/tailwind'`

This error occurs when Metro (or another bundler) does not support the `exports` field in `package.json`. There are two solutions:

**Solution 1 — Use the root-level alias files (works with all Metro versions):**

The package ships `tailwind.js` and `tokens.js` at the root as direct aliases. These resolve without `exports` support:

```js
// tailwind.config.js — use the root alias directly
const netlyPreset = require("@netly/ui/tailwind"); // resolves to tailwind.js at root
module.exports = { presets: [netlyPreset], content: ["./app/**/*.{ts,tsx}"] };
```

```tsx
// tokens — use the root alias directly
import { colors } from "@netly/ui/tokens"; // resolves to tokens.js at root
```

**Solution 2 — Enable package exports in Metro (Metro ≥ 0.72):**

```js
// metro.config.js
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// Enable package.json exports field resolution
config.resolver.unstable_enablePackageExports = true;

module.exports = withNativeWind(config, { input: "./global.css" });
```

### `Cannot find module '@netly/ui/tokens'`

Same root cause as above. Use `tokens.js` root alias (Solution 1) or enable `unstable_enablePackageExports` (Solution 2).

### NativeWind styles not applying

Make sure the `@netly/ui` source path is included in the `content` array of your `tailwind.config.js`:

```js
module.exports = {
  presets: [require("@netly/ui/tailwind")],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    // Include the library source so NativeWind can scan its class names
    "./node_modules/@netly/ui/dist/**/*.{js,mjs}",
  ],
};
```

---

## License

MIT © Netly Inc.
