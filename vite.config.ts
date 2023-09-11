/// <reference types="vitest" />
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "frontend/src/setupTests.ts",
    include: ["frontend/src/**/*.test.{ts,tsx}"],
    coverage: {
      provider: "v8",
      reporter: ["lcov", "text"],
      include: ["frontend/src/components/{Button,Header,Input}/*.{ts,tsx}", "frontend/src/components/Contacts/{Contact}/*.{ts,tsx}"],
      exclude: [
        "**/*.test.{ts,tsx}",
        "**/types.ts",
        "**/*.d.ts",
        "**/src/main.tsx",
      ],
    },
  },
});
