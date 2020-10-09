import { Flex } from '@chakra-ui/core'
import React from 'react'
import OutsideClickHandler from 'react-outside-click-handler'

import OpenNavButton from '../OpenNavButton'

import { Container } from './styles'

interface ISidenavProps {
  children:React.ReactNode,
  orientation?:string,
  main?: boolean
}

const Drawer: React.FC<ISidenavProps> = ({children, orientation, main}) => {
  const [open, setOpen] = React.useState(false)
  return (
    <OutsideClickHandler onOutsideClick={() => setOpen(false)}>
      <Container open={open} orientation={orientation} main={main}>
        <OpenNavButton open={open} orientation={orientation} toggleHandler={() => setOpen(!open)} />
        <Flex height="100%" flexDirection="column" mt="48px" borderTop="1px" borderColor="gray.300">
        {children}
        </Flex>
      </Container>
    </OutsideClickHandler>
  )
}

export default Drawer
