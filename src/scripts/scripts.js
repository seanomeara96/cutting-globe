import "../styles/styles.css";
let slideshow;
if (window.location.pathname === "/about.html") {
  import("./modules/SlideShow").then((x) => {
    slideshow = new x.default(5000);
  });
}
if (module.hot) {
  module.hot.accept();
}
