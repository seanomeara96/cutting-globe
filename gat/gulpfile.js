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
  gulp.watch("./styles/**/*.css").on("change", () => {
    console.log("compiling...")
    return gulp
      .src("./styles/*.css")
      .pipe(postcss(plugins))
      .on("error", function (err) {
        console.log(err.toString())

        this.emit("end")
      })
      .pipe(gulp.dest("./src/css"))
  })
})
