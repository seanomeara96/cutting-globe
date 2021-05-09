import React from "react"
import { contactDetails } from "../content/contact"
const Footer = () => (
  <footer
    style={{
      marginTop: `2rem`,
    }}
  >
    <address>{contactDetails.address}</address>© {new Date().getFullYear()}, The
    Cutting Globe
  </footer>
)

export default Footer
