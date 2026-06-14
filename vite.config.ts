import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Build to plain static assets (relative paths) so the output in dist/
// can be uploaded as-is to the FTP web root.
export default defineConfig({
  base: "./",
  plugins: [react()],
});
