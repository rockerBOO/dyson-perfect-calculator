import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import copyFiles from "vite-plugin-copy-files";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    copyFiles({
      include: [/\.(less|css|scss)$/, /assets\/img\/*/],
      exclude: [/node_modules/],
    }),
  ],
});
