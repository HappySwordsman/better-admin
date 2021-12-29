"use strict";

const path = require("path");

function resolve(dir) {
  return path.join(__dirname, "..", dir);
}
module.exports = {
  context: path.resolve(__dirname, "../"),
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      "@": resolve("src"),
    },
  },
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
};
