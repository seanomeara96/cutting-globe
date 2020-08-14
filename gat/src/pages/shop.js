import React from "react"
import Layout from "../components/layout"
import ShopCard from "../components/shopcard"
const Shop = () => {
  return (
    <Layout>
      <section className="page-section">
        <div className="wrapper">
          <div className="ui cards">
            <ShopCard />
            <div className="card">
              <div className="image card__img">
                <img src="./images/187063449_4-600_600.jpg" />
              </div>
              <div className="content">
                <div className="header">large</div>
                <div className="meta">
                  <a>15.99</a>
                </div>
                <div className="description">
                  {/* <!--max 240 chars--> */}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit adipisci fugit quia alias id rem ratione
                  obcaecati magnam dicta placeat. Deleniti veritatis
                  accusantium, fugit eos odi
                </div>
              </div>
              <div className="extra content">
                <span className="right floated">
                  <button className="ui green button">Add to cart</button>
                </span>
                <span>
                  <button className="ui button">More info</button>
                </span>
              </div>
            </div>
            <div className="card">
              <div className="image card__img">
                <img src="./images/6c5f7d015e2a480840b63830ecaac11a.jpg" />
              </div>
              <div className="content">
                <div className="header">Medium</div>
                <div className="meta">
                  <a>10.99</a>
                </div>
                <div className="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit adipisci fugit quia alias id rem ratione
                  obcaecati magnam dicta placeat. Deleniti veritatis
                  accusantium, fugit eos odi
                </div>
              </div>
              <div className="extra content">
                <span className="right floated">
                  <button className="ui green button">Add to cart</button>
                </span>
                <span>
                  <button className="ui button">More info</button>
                </span>
              </div>
            </div>
            <div className="card">
              <div className="image card__img">
                <img
                  className="card__img-el"
                  src="./images/ad8d2d06595c552369f16a222925f3c8.png"
                />
              </div>
              <div className="content">
                <div className="header">Small</div>
                <div className="meta">
                  <a>5.99</a>
                </div>
                <div className="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit adipisci fugit quia alias id rem ratione
                  obcaecati magnam dicta placeat. Deleniti veritatis
                  accusantium, fugit eos odi
                </div>
              </div>
              <div className="extra content">
                <span className="right floated">
                  <button className="ui green button">Add to cart</button>
                </span>
                <span>
                  <button className="ui button">More info</button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Shop
