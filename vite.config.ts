import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@worms", replacement: path.resolve(__dirname, "src") }],
  },
  server: {
    port: 3000,
  },
  build: {
    write: true,
    lib: {
      entry: "./index.html",
      name: "custom-editor ",
      fileName: "custom-editor",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react"],
      output: {
        format: "esm",
      },
    },
  },
});
