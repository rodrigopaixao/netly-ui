/**
 * @netly/ui — Tailwind CSS Preset (Metro-compatible alias)
 *
 * This file exists as a root-level alias so Metro and older bundlers
 * that do not support the package.json "exports" field can still resolve
 * `require("@netly/ui/tailwind")` without enabling unstable_enablePackageExports.
 *
 * Usage in tailwind.config.js:
 *   const netlyPreset = require("@netly/ui/tailwind");
 *   module.exports = { presets: [netlyPreset], content: [...] };
 *
 * Usage in tailwind.config.ts (ESM / Tailwind v4):
 *   import netlyPreset from "@netly/ui/tailwind";
 *   export default { presets: [netlyPreset], content: [...] };
 */
module.exports = require("./tailwind.config.js");
