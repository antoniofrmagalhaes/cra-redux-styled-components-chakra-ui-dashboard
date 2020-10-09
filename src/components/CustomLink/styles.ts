import { Link as StyledLink } from 'react-router-dom'
import styled from 'styled-components'

export const Link = styled(StyledLink)`
  > p {
    display: flex;
    align-items: center;
    height: 40px;
    &:hover {
      background: #f3f3f3;
    }
  }
`
