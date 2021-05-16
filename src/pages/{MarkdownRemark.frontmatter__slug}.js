import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { loadStripe } from "@stripe/stripe-js"
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <Seo title={frontmatter.title} />
      <div className="">
        <div className="">
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.price}</h2>
          <form
            method="POST"
            action="/buy"
            onSubmit={e => {
              e.preventDefault()
            }}
          >
            <input value="id" type="hidden" name="product" />
            <button>Buy Now</button>
          </form>
          <div className="" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        price
        slug
        title
      }
    }
  }
`
