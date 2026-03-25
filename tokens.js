/**
 * @netly/ui — Design Tokens (Metro-compatible alias)
 *
 * This file exists as a root-level alias so Metro and older bundlers
 * that do not support the package.json "exports" field can still resolve
 * `require("@netly/ui/tokens")` without enabling unstable_enablePackageExports.
 *
 * Usage:
 *   import { colors, spacing, typography } from "@netly/ui/tokens";
 */
module.exports = require("./dist/tokens/index.js");
