import * as React from "react"
import { Link } from "gatsby"
import { homePageContent } from "../content/home"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { aboutCG } from "../content/about"
const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Welcome to The Cutting Globe Homepage</h1>
    <p id="introParagraph" className="">
      {homePageContent.introParagraph}
    </p>
    {renderInfoSections(aboutCG.infoSections)}
    <p>
      <Link to="/shop/">Go to page 2</Link>
    </p>
  </Layout>
)

export default IndexPage
/**
 * <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
 */

const renderInfoSections = sections => {
  let content
  return sections.map(section => {
    if (section.content.length > 1) {
      content = (
        <ol>
          {section.content.map(i => (
            <li key={i}>{i}</li>
          ))}
        </ol>
      )
    } else {
      content = <p>{section.content[0]}</p>
    }
    return (
      <section key={section.title} className="info-section">
        <details>
          <summary>
            <h2 className="section-title">{section.title}</h2>
          </summary>
          {content}
        </details>
      </section>
    )
  })
}
