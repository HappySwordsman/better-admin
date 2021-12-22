import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import legacy from "@vitejs/plugin-legacy";
import eslintPlugin from "vite-plugin-eslint";
import configResolve from "./config/resolve";

// https://vitejs.dev/config/
export default defineConfig({
  root: process.cwd(),
  server: {
    host: "0.0.0.0",
    port: 9110,
    strictPort: true,
  },
  plugins: [
    vue(), // 设置eslint
    eslintPlugin({
      include: ["src/**/*.vue", "src/**/*.js"], // 检查的文件
      exclude: ["./node_modules/**"],
      cache: false,
    }),
    legacy(),
  ],
  resolve: configResolve.resolve,
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "./src/themes/color.scss";
        @import "./src/themes/base.scss";
        `,
      },
    },
  },
});
