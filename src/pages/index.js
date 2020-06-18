import React from 'react'
import { Box, Heading, Paragraph } from 'grommet'
import Link from '../components/link'
import Layout from '../components/layout'
import Image from '../components/Image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Heading>Hi people</Heading>
    <Paragraph>Welcome to your new Gatsby site.</Paragraph>
    <Paragraph>Now go build something great.</Paragraph>
    <Box width={{ min: '300px' }} pad="small">
      <Image src="gatsby-astronaut.png" />
    </Box>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
