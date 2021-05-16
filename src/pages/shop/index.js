import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { loadStripe } from "@stripe/stripe-js"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Products from "../../components/products/products"
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
      <Products />
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}
export default Shop
