import styled from 'styled-components'
import {
  Box as ChakraBox,
  CloseButton as ChakraCloseButton
} from '@chakra-ui/core'

export const Container = styled(ChakraBox)`
  position: relative;
  width: calc(100%);
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 16px;
  border-right: 1px solid #dddddd;
  > svg {
    color: #444444;
  }
  > input {
    flex: 1;
    height: 100%;
    margin: 0 10px;
    background: 0;
    &::placeholder {
      font-size: 14px;
      color: #777777;
    }
    &:focus {
      outline-width: 0;
    }
  }
  @media (min-width: 420px) {
    width: calc(100% - 259px);
  }

  @media (min-width: 1600px) {
    width: calc(100% - 299px);
  }
`

export const Content = styled.div`
  position: absolute;
  max-height: 300px;
  top: calc(50px);
  left: 0;
  right: 0;
  padding: 8px 35px;
  background: #ffffff;
  overflow-y: auto;
  scrollbar-color: #dddddd #eeeeee;
  scrollbar-width: thin;
  background: blue;
  &::-webkit-scrollbar-track {
    background-color: #eeeeee;
  }

  &::-webkit-scrollbar {
    width: 7px;
    background-color: #eeeeee;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #dddddd;
  }
  @media (min-width: 1024px) {
    overflow-y: scroll;
  }
`

export const CloseButton = styled(ChakraCloseButton)`
  &:focus {
    outline: 0;
  }
`
