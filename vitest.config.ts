import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],

  // 🔹 Required for GitHub Pages (repo name)
  base: "/my-valentine-quest/",

  // 🔹 Vitest configuration
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test/setup.ts"],
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
  },

  // 🔹 Path alias (@ -> src)
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
