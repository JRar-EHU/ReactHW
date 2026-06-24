import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./setupTests.ts"],
    coverage: {
      provider: "v8",
      enabled: true,
      reportsDirectory: "coverage",
      reporter: ["html"],

      include: ["src/**/*.{ts,tsx,js,jsx}"],
      exclude: [
        "**/node_modules/**",
        "**/*.d.ts",
        "src/main.tsx",
        "src/i18n.ts",
        "src/types.ts",
        "**/src/**/styles/**",
        "**/src/**/constants.ts",
        "**/src/**/App.tsx",
        "**/index.{js,ts}",
        "**/coverage/**",
        "src/**/components/**/index.{js,jsx,ts,tsx}",
        "src/**/components/**/styles.{js,ts}",
        "src/**/components/**/__tests__/**/*.{js,jsx,ts,tsx}",
      ],
    },
  },
});
