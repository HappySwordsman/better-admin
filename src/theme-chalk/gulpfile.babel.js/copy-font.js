import { src, dest } from "gulp";

module.exports = function () {
  const cssmin = require("gulp-cssmin");
  return src("./src/fonts/**").pipe(cssmin()).pipe(dest("./lib/fonts"));
};
