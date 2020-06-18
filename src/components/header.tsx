import { Link } from 'gatsby'
import React from 'react'
import { Header as GrommetHeader, Heading } from 'grommet'

interface Props {
  siteTitle: string
}

const Header = ({ siteTitle }: Props) => (
  <GrommetHeader background="brand" align="center" justify="center">
    <Heading>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
    </Heading>
  </GrommetHeader>
)

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
