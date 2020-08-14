import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="site-header wrapper page-section">
    <div>
      <h1 className="headline">{siteTitle}</h1>
      <nav className="top-nav">
        <ul>
          <li>
            <a href="products.html" className="null">
              Shop
            </a>
          </li>
          <li>
            <Link to="/about" className="null">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="null">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>

    <div className="generic-container">
      <h2 className="headline">Start growing your own free plants!</h2>
      <div className="site-header__btns">
        <Link to="/shop" className="ui green button">
          Buy Now!
        </Link>
        <button className="ui primary basic button">Sign Up for Updates</button>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
