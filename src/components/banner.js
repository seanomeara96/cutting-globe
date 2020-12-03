import React from "react"

import Image from "./image"
const Banner = () => (
  <section className="banner style1 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right">
    <div className="content">
      <h1>Cutting Globe</h1>
      <p className="major">
        A (modular, highly tweakable) responsive one-page template designed by{" "}
        <a href="https://html5up.net">HTML5 UP</a> and released for free under
        the <a href="https://html5up.net/license">Creative Commons</a>.
      </p>
      <ul className="actions stacked">
        <li>
          <a href="#first" className="button big wide smooth-scroll-middle">
            Get Started
          </a>
        </li>
      </ul>
    </div>
    <div className="image">
      <img src="./images/landing-hero.jpg" alt="" />
      <Image />
    </div>
  </section>
)

export default Banner
