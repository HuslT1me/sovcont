import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "./",
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
        index: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        cases_item: resolve(__dirname, "cases-item.html"),
        cases: resolve(__dirname, "cases.html"),
        contacts: resolve(__dirname, "contacts.html"),
        news_item: resolve(__dirname, "news-item.html"),
        news: resolve(__dirname, "news.html"),
        partners: resolve(__dirname, "partners.html"),
        services_alt: resolve(__dirname, "services_alt.html"),
        services: resolve(__dirname, "services.html"),
      },
    },
  },
  server: {
    port: 3000,
    open: '/index.html',
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "",
      },
    },
  },
});
