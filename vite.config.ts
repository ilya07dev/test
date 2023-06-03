import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "url";

const baseURL = fileURLToPath(new URL("./src", import.meta.url));
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@src",
        replacement: baseURL,
      },
      {
        find: "@icons",
        replacement: `${baseURL}/components/Icons`,
      },
    ],
  },
});
