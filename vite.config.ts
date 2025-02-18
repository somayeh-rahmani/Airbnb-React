import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": {}, // اگر از process.env استفاده می‌کنید
    global: {},
  },
  resolve: {
    alias: {
      global: resolve("node_modules/global"),
    },
  },
});
