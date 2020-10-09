import { Flex } from '@chakra-ui/core'
import React from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import Navigator from '../Navigator'

import OpenNavButton from '../OpenNavButton'

import { Container } from './styles'


import config from '../../config/sidenav'

interface ISidenavProps {
  orienration?:string,
  main?: boolean
}

const Sidenav: React.FC<ISidenavProps> = ({ orienration, main}) => {
  const [open, setOpen] = React.useState(false)
  return (
    <OutsideClickHandler onOutsideClick={() => setOpen(false)}>
      <Container open={open} orientation={orienration} main={main} >
        <OpenNavButton open={open} orientation={orienration} toggleHandler={() => setOpen(!open)} mobileOnly />
        <Flex height="100%" flexDirection="column" pt="48px">
        <Navigator config={config}/>
        </Flex>
      </Container>
    </OutsideClickHandler>
  )
}

export default Sidenav
