import tailwindcss from "@tailwindcss/vite";

import path from "path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
   host:true,
  },
  preview: {
	allowedHosts: ['ynow.uk']
  }
});
