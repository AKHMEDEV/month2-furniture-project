import React from 'react'
import { H1, H2, H3, H4, H5, Text, Text2, Menu, Menu2 } from './Typography.styles'

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  text: Text,
  text2: Text2,
  menu: Menu,
  menu2: Menu2
}

const Typography = ({ type, text, children, styles = null }) => {
  const Component = components[type]
  if (!Component) return null

  return <Component style={styles}>{text || children}</Component>
}

export default Typography