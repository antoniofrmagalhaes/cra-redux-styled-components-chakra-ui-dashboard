import React from 'react'
import { LinkProps } from 'react-router-dom'

import { Link } from './styles'

import Text from '../../components/Text'

interface ICustomLinkProps extends LinkProps {
  label: string
  // path: string
}
const CustomLink: React.FC<ICustomLinkProps> = ({label, ...rest}) => {
  return (
    <Link {...rest}>
      <Text label={label} paddingLeft="16px"  />
    </Link>
  )
}

export default CustomLink
