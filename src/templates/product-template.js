import React from "react"
import { graphql } from "gatsby"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <main class="page-section">
      <div class="wrapper">
        <div class="rows">
          <div class="rows__62">
            <h1 class="headline">{frontmatter.title}</h1>
            <span>€{frontmatter.price}</span>
            <br />
            <span>Tax Included</span>
            <br />
            <div class="commerce-buttons">
              <button class="ui primary basic button">Add to Cart</button>
              <br />
              <button class="ui green button">Buy it now</button>
            </div>
            <div
              class="description"
              dangerouslySetInnerHTML={{ __html: html }}
            ></div>
          </div>
          <div class="rows__38">
            <div class="product-image">
              <img src={frontmatter.previewImage} alt="preview image" />
            </div>
            <div class="product-image__preview-area">
              <div class="product-image__preview-area__preview">
                <img
                  class="product-image__preview-area__preview-img"
                  src="./images/small/2.png"
                  alt=""
                />
              </div>
              <div class="product-image__preview-area__preview">
                <img
                  class="product-image__preview-area__preview-img"
                  src="./images/small/3.png"
                  alt=""
                />
              </div>
              <div class="product-image__preview-area__preview">
                <img
                  class="product-image__preview-area__preview-img"
                  src="./images/small/4.png"
                  alt=""
                />
              </div>
              <div class="product-image__preview-area__preview">
                <img
                  class="product-image__preview-area__preview-img"
                  src="./images/small/5.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        price
        previewImage
      }
    }
  }
`
