const postcss = require("gulp-postcss")
const gulp = require("gulp")
let plugins = [
  require("postcss-import"),
  require("postcss-mixins"),
  require("postcss-simple-vars"),
  require("postcss-hexrgba"),
  require("postcss-nested"),
  require("autoprefixer"),
  require("cssnano"),
]
gulp.task("style", function () {
  gulp.watch("./styles/**/*.css").on("change", () =>
    gulp
      .src("./styles/*.css")
      .pipe(postcss(plugins))
      .on("error", () => this.emit("end"))
      .pipe(gulp.dest("./src/css"))
  )
})
