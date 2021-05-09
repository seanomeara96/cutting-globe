import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const Shop = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              price
              slug
              title
            }
          }
        }
      }
    }
  `)
  const { allMarkdownRemark } = data
  const { edges } = allMarkdownRemark
  return (
    <Layout>
      <Seo title="Shop The Cutting Globes" />
      <h1>Welcome to The Cutting Globe shop</h1>
      <p>
        Delivery in Ireland costs €x and delivery is expected to take 3-4weeks
      </p>
      {edges.map(({ node }) => {
        const { frontmatter } = node
        const { price, slug, title } = frontmatter
        return (
          <div>
            <h3 className="product-title">
              <Link to={slug}>{title}</Link>
            </h3>
            <span>{price}</span>
          </div>
        )
      })}
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}
export default Shop
