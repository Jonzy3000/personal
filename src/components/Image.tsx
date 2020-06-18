import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

interface Props {
  src: string
  maxWidth: number
  alt?: string
}

const Image = ({ src, alt }: Props) => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              sizes(maxWidth: 600) {
                ...GatsbyImageSharpSizes
              }
            }
            extension
            publicURL
          }
        }
      }
    }
  `)

  const image = data.images.edges.find(
    (n: { node: { relativePath: string | string[] } }) => {
      return n.node.relativePath.includes(src)
    }
  )
  if (!image) {
    return null
  }

  if (image.node && image.node.extension === 'svg') {
    return <img src={image.node.publicURL} alt={alt} />
  }

  const imageSizes = image.node.childImageSharp.sizes
  return <Img alt={alt} sizes={imageSizes} />
}

export default Image
