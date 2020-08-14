import React from "react"
import Slideshow from "../components/slideshow"
import { Link } from "gatsby"
import Layout from "../components/layout"
const About = () => (
  <Layout>
    <section className="page-section">
      <div className="wrapper">
        <div className="rows">
          <div className="rows__38">
            <h2 className="headline">About the Cutting Globe</h2>
            <p className="generic-content">
              The cutting globe facilitates a propagation method called air
              layering that has been used for over 4000 years (tried and
              tested). The small globe is designed to take cuttings from
              climbers and long stemmed slim plants. The large globe is designed
              to take larger cuttings from shrubs and trees.
            </p>

            <Slideshow />
          </div>
          <div className="rows__62">
            <div className="generic-container">
              <h3 className="headline">
                10 step guide to using your Cutting Globes
              </h3>
              <ol>
                <li>
                  By selecting a stem or branch on your shrub or tree that will
                  fill the hole on your cutting globe.
                </li>
                <li>Ring the bark in two places 24 mm apart.</li>
                <li>
                  Peel away all the way around scraping off any green cambium
                  layer that might be left behind.
                </li>
                <li>Paste your wound with a rooting hormone powder/gel.</li>
                <li>Fill your cutting globe with damp moss peat.</li>
                <li>
                  Place the cutting globe around wound and clip into place.
                </li>
                <li>Do not overfill and keep closing ridges clear.</li>
                <li>Wait until roots have filled your cutting globe.</li>
                <li>Cut off your now established root ball.</li>
                <li>
                  Plant is now ready to be planted out or into a pot.(Keep
                  Watering)
                </li>
              </ol>
              <div className="page-section page-section--no-p-btm">
                <h3 className="headline">What can I use it on?</h3>
                <div className="generic-container">
                  <ul className="generic-container__flex-list">
                    <li>Roses</li>
                    <li>trees</li>
                    <li>shrubs</li>
                    <li>climbers</li>
                    <li>annuals</li>
                    <li>perennials</li>
                    <li>fruit</li>
                    <li>bushes</li>
                    <li>and much, much more!</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="page-section--small">
      <div className="wrapper">
        <div className="rows rows--clearance">
          <div className="rows__50 rows--space-between">
            <div className="ecom-logo">
              <Link to="">
                <img
                  className="full-img full-img--contain"
                  src="./images/Amazon_logo.svg"
                  alt=""
                />
              </Link>
            </div>
            <h3 className="headline headline--center headline--link">
              <Link to="" className="null">
                Get your Cutting Globes on Amazon
              </Link>
            </h3>
          </div>
          <div className="rows__50 rows--space-between">
            <div className="ecom-logo">
              <Link to="">
                <img
                  className="full-img full-img--contain"
                  src="./images/EBay_former_logo.svg"
                  alt=""
                />
              </Link>
            </div>
            <h3 className="headline headline--center headline--link">
              <Link to="" className="null">
                Get your Cutting Globes on Ebay
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </section>
    <section className="page-section">
      <div className="wrapper">
        <div className="rows">
          <div className="rows__62">
            <div className="generic-container">
              <h3 className="headline">Why use The Cutting Globe?</h3>
              <p className="generic-content">
                For over 4000 years gardeners have been air-layering plants and
                shrubs with great success. Bonsai masters have perfected this
                method of propagation and continue to this day to use it with
                great success.
              </p>
              <p className="generic-content">
                There are many advantages to using the cutting globe to airlayer
                your trees and shrubs etc. The predrilled holes give you a good
                root to stem ratio for your plants to develop once removed from
                the globe.
              </p>
              <p className="generic-content">
                Ideal for indoor plants that have grown leggy through the loss
                of lower foliage and for plants that are hard to root with
                traditional forms of propagation.
              </p>
              <p className="generic-content">
                The size of your cutting can be a lot bigger than what you can
                expect when using a traditional method, therefore saving you
                years in growing time. You can have several cutting globes on
                any one plant.
              </p>
              <p className="generic-content">
                Some plants take years to flower and fruit but with this method
                and with your new cutting globe, your plant will flower or fruit
                in its first year.
              </p>
            </div>
          </div>
          <div className="rows__38">
            <h3 className="headline">Sizes:</h3>
            <div className="generic-container">
              <ul>
                <li>95mm cutting globe for trees, shrubs roses etc.</li>
                <li>
                  69mm cutting globe for smaller branches of trees ,and shrubs
                  both in and outdoors.
                </li>
                <li>
                  29mm cutting globe for shrubs, climbers, house plants, etc.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default About
