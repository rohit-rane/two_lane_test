const { src, dest, watch } = require("gulp");
const cleanCSS = require("gulp-clean-css");
const uglify = require("gulp-uglify");

const minifyCSS = async () => {
  return src("src/assets/css/*.css").pipe(cleanCSS()).pipe(dest("assets/"));
};

const minifyJS = async () => {
  return src("src/assets/js/*.js").pipe(uglify()).pipe(dest("assets/"));
};

exports.default = async () => {
  minifyCSS();
  minifyJS();
  watch("src/assets/css/*.css", minifyCSS);
  watch("src/assets/js/*.js", minifyJS);
};
