import { defineConfig } from "vitest/config";
import configuration from "./vite.config";
export default defineConfig({
  ...configuration,
  test: {
    globals: true,
    environmentMatchGlobs: [["src/components/**/*.test.tsx", "jsdom"]],
  },
});
