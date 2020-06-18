/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { ReactNode } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { Grommet, Box, Footer, Text, Anchor } from 'grommet'
// import { grommet } from 'grommet/themes'

import Header from './header'
import { theme } from './theme'

const Layout = ({ children }: { children: ReactNode }) => {
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
    <Grommet
      theme={theme}
      full
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header siteTitle={data.site.siteMetadata.title} />
      <Box as="main" pad="medium" align="center" flex>
        {children}
      </Box>
      <Footer background="light-4" justify="center" pad="small">
        <Text textAlign="center" size="small">
          © {new Date().getFullYear()}, Built with
          {` `}
          <Anchor href="https://www.gatsbyjs.org">Gatsby</Anchor>
          {` and `}
          <Anchor href="https://v2.grommet.io">Grommet</Anchor>
        </Text>
      </Footer>
    </Grommet>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
