const { series } = require("gulp");
const compile = require("./compile");
const copyFont = require("./copy-font");

exports.build = series(compile, copyFont);
