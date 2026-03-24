import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    "tokens/index": "src/tokens/index.ts",
  },
  format: ["esm", "cjs"],
  dts: true,
  splitting: false,
  treeshake: true,
  clean: true,
  outExtension({ format }) {
    return { js: format === "esm" ? ".mjs" : ".js" };
  },
  external: [
    "react",
    "react-native",
    "nativewind",
    "tailwindcss",
    "react/jsx-runtime",
  ],
  esbuildOptions(options) {
    options.jsx = "automatic";
  },
});
