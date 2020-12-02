import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <aside className="page-section--small social">
      <div className="wrapper">
        <ul className="social__links">
          <li>
            <a
              href="https://www.facebook.com/cuttingglobe"
              className="null icon--fb"
            >
              <i className="fab fa-facebook-square"></i>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/cuttingglobe"
              className="null icon--tw"
            >
              <i className="fab fa-twitter-square"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/cuttingglobe/"
              className="null icon--ig"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCVeujCJgk_UtsbHIKH9lrPQ"
              className="null icon--yt"
            >
              <i className="fab fa-youtube-square"></i>
            </a>
          </li>
        </ul>
      </div>
    </aside>

    <section className="page-section">
      <div className="wrapper">
        <h2 className="headline">The Cutting Globe!!</h2>
        <div className="generic-container">
          <ul>
            <li>A simple and easy way to propagate your plants and trees.</li>
            <li>
              This amazing product provides a simple but effective way of
              propagating your outdoor and indoor plants in as little as 8
              weeks.
            </li>
            <li>
              A quick and easy way of cloning plants in your garden including
              roses, climbers, trees, fruit bushes, fruit trees and hard to root
              plants like Magnolia and Camellias.
            </li>
            <li>
              Environmentally friendly, allowing you and your children to enjoy
              your garden full of trees and shrubs and the ability to share your
              garden with others.
            </li>
            <li>
              More economical and easier to use than the traditional
              propagators.
            </li>
            <li>
              The specially designed #cuttingglobe helps your cuttings achieve
              stronger roots for a more mature plant.
            </li>
            <li>
              And you can watch the progress through the clear side of the
              Globe!
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section className="page-section">
      <div className="wrapper">
        <video className="video" muted autoplay controls>
          <source src="./videos/video.mp4" />
        </video>
      </div>
    </section>

    <section className="page-section--small">
      <div className="wrapper">
        <div className="rows rows--clearance">
          <div className="rows__50 rows--space-between">
            <div className="ecom-logo">
              <a href="https://www.amazon.co.uk/dp/B07FL9S71R/ref=cm_sw_r_tw_dp_x_s08kFbAP7T12X">
                <img
                  className="full-img full-img--contain"
                  src="./images/Amazon_logo.svg"
                  alt=""
                />
              </a>
            </div>
            <h3 className="headline headline--center headline--link">
              <a
                href="https://www.ebay.ie/sch/sis.html?_nkw=Cutting%20globe%20plant%20propagators%20booster%20pack%20perlite%20and%20gel%20included&_itemId=202389177068"
                className="null"
              >
                Get your Cutting Globes on Amazon
              </a>
            </h3>
          </div>
          <div className="rows__50 rows--space-between">
            <div className="ecom-logo">
              <a href="https://ebay.co.uk">
                <img
                  className="full-img full-img--contain"
                  src="./images/EBay_former_logo.svg"
                  alt=""
                />
              </a>
            </div>
            <h3 className="headline headline--center headline--link">
              <a href="ebay.co.uk" className="null">
                Get your Cutting Globes on Ebay
              </a>
            </h3>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
