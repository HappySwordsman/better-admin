const { src, dest } = require("gulp");

module.exports = function () {
  const postcss = require("gulp-postcss");
  const sass = require("gulp-dart-sass");
  const cssmin = require("gulp-cssmin");
  const autoprefixer = require("autoprefixer");

  return src("./src/*.scss")
    .pipe(sass.sync().on("error", sass.logError))
    .pipe(
      postcss([
        autoprefixer({
          overrideBrowserslist: ["ie > 9", "last 2 versions"],
          cascade: false,
        }),
      ])
    )
    .pipe(cssmin())
    .pipe(dest("./lib"));
};
