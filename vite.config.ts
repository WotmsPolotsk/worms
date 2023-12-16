import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
