/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../../node_modules/semantic-ui-css/semantic.min.css"
import "../css/styles.css"
import footerImg from "../images/footer.jpg"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      {children}
      <footer className="page-section footer">
        <div className="wrapper">
          Copyright © Sean O'Meara. All rights reserved.
        </div>
        <div className="footer__img">
          <img src={footerImg} alt="" />
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
