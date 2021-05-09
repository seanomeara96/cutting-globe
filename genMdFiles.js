// generates markup files
const { default: slugify } = require("slugify")
const products = require("./products")
const fs = require("fs")

const template = (title, slug, content, price) => `---
  slug: "/shop/${slug}"
  title: "${title}"
  price: "${price}"
---
  ${content}`

const generateProductFiles = () =>
  new Promise((resolve, reject) => {
    let promises = []
    products.forEach(product => {
      let productSlug = slugify(product.title.toLowerCase())
      promises.push(
        fs.writeFile(
          `./src/products/${productSlug}.md`,
          template(product.title, productSlug, product.content, product.price),
          err => {
            console.log(err)
          }
        )
      )
      Promise.allSettled(promises)
        .then(res => resolve(res))
        .catch(err => reject(err))
    })
  })
generateProductFiles()
  .then(res => console.log("done", res))
  .catch(err => console.log("something went wrong", err))
