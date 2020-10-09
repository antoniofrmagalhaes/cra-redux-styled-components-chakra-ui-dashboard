import { Flex, Avatar, Text, PseudoBox, AvatarBadge } from '@chakra-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { signOut } from '../../store/modules/authentication/actions'
import { RootState } from '../../store/modules/rootReducers'
import { store } from '../../store'

import { Container } from './styles'

const Profile: React.FC = () => {
  const dispatch = useDispatch();
  const name = store.getState().profile.name
  return (
    <Container>
      <Avatar name={name} width="35px" height="35px" >
        <AvatarBadge
          size="14px"
          bottom="2px"
          right="2px"
          bg="green.500"
          border="1px"
          borderColor="gray.200"
        />
      </Avatar>
      <Flex flex="1" flexDir="column" mx="10px" pt="5px">
        <Text lineHeight="1" fontSize="12px" fontWeight="bold" color="gray.700">
        {name}
        </Text>
        <Text fontSize="11px" color="#777777">
          Online
        </Text>
      </Flex>
       <Flex flexDir="column">
        <PseudoBox
          as="button"
          height="22px"
          lineHeight="1"
          transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
          border="1px"
          px="5px"
          rounded="2px"
          fontSize="10px"
          fontWeight="semibold"
          bg="#f5f6f7"
          borderColor="#ccd0d5"
          color="#4b4f56"
          _hover={{ bg: '#ebedf0' }}
          _active={{
            bg: '#dddfe2',
            transform: 'scale(0.98)',
            borderColor: '#bec3c9'
          }}
          _focus={{
            boxShadow:
              '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)'
          }}
        >
          Profile
        </PseudoBox>
        <PseudoBox
          as="button"
          height="22px"
          lineHeight="1.2"
          transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
          border="1px"
          px="8px"
          marginTop="5px"
          rounded="2px"
          fontSize="10px"
          fontWeight="semibold"
          bg="#f5f6f7"
          borderColor="#ccd0d5"
          color="#4b4f56"
          _hover={{ bg: '#ebedf0' }}
          _active={{
            bg: '#dddfe2',
            transform: 'scale(0.98)',
            borderColor: '#bec3c9'
          }}
          _focus={{
            boxShadow:
              '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)'
          }}
          onClick={() => dispatch(signOut())}
        >
          Logout
        </PseudoBox>
      </Flex>
    </Container>
  )
}

export default Profile
