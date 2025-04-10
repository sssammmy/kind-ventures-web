import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Explicitly set the base path for production builds
  // '/' is correct for deploying to the root of pages.dev or a custom domain
  base: '/', 

  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // Keep the tagger only for development mode
    mode === 'development' && 
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // It's also good practice to explicitly define the build output directory,
  // although 'dist' is the default. This ensures alignment with Cloudflare settings.
  build: {
    outDir: 'dist' 
  }
}));
