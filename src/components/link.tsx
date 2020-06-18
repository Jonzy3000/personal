import React from 'react'
import { Anchor } from 'grommet'
import { navigate } from 'gatsby'

interface Props {
  to: string
}

const Link = ({ to, ...rest }: Props) => (
  <Anchor
    href={to}
    onClick={ev => {
      navigate(to)
      ev.preventDefault()
    }}
    {...rest}
  />
)

export default Link
