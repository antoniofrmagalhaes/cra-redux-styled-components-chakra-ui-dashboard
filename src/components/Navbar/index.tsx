import React from 'react'

import { Container, Header, SearchContainer, ProfileContainer } from './styles'

import Search from '../Search'
import { Avatar, AvatarBadge, Flex, Text } from '@chakra-ui/core'

const Navbar: React.FC = () => {
  return (
    <Container padding={0} borderBottom="1px" borderColor="gray.300">
      <Header />
      <SearchContainer>
      <Search />
      {/* <ProfileContainer>
      <Avatar name={'name'} width="35px" height="35px">
        <AvatarBadge
          size="14px"
          bottom="2px"
          right="2px"
          bg="green.500"
          border="1px"
          borderColor="gray.200"
        />
      </Avatar>
      </ProfileContainer> */}
      </SearchContainer>
    </Container>
  )
}

export default Navbar
