import React from "react"
import { Link } from "gatsby"
const ShopCard = props => {
  return (
    <div className="card">
      <div className="image card__img">
        <img src={props.previewImage} />
      </div>
      <div className="content">
        <div className="header">{props.name}</div>
        <div className="meta">
          <a>{props.price}</a>
        </div>
        <div className="description">
          {/* <!--max 240 chars--> */}
          {/*props.description.slice(0, 240)*/}
        </div>
      </div>
      <div className="extra content">
        <span className="right floated">
          <button className="ui green button">Add to cart</button>
        </span>
        <span>
          <Link to={`/shop/${props.name}`} className="ui button">
            More info
          </Link>
        </span>
      </div>
    </div>
  )
}

export default ShopCard
