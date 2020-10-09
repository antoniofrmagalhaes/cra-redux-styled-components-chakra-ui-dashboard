import { Box, Flex } from '@chakra-ui/core'
import React from 'react'

import Navbar from '../../../components/Navbar'
import Navigator from '../../../components/Navigator'
import Sidenav from '../../../components/Sidenav'
import Drawer from '../../../components/Drawer'

import { ContentContainer, Content } from './styles'

import config from '../../../config/sidenav'
import Profile from '../../../components/Profile'

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <Box width="100%" height="100vh" position="relative" overflow="hidden" >
     <Sidenav />
      <ContentContainer>
        <Navbar/>
        <Content>{children}</Content>
      </ContentContainer>
      <Drawer orientation="right">
        <Profile/>
      </Drawer>
    </Box>
  )
}

export default DefaultLayout
