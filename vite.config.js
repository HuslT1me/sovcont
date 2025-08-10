import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/sovcont/",
  publicDir: "public",
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "main.html"),
      },
    },
  },
  server: {
    port: 3000,
    open: '/sovcont/main.html',
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "",
      },
    },
  },
});
