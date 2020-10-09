import React from 'react'
import {
  AccordionItem,
  AccordionHeader,
  Box,
  AccordionIcon,
  AccordionPanel,
  Flex
} from '@chakra-ui/core'

import { Link } from './styles'

import { IPath } from '../Navigator'
import Text from '../Text'

interface IGroupLinkProps {
  label: string
  subpaths: IPath[]
}

const GroupLink: React.FC<IGroupLinkProps> = ({ label, subpaths }) => {
  const [active, setActive] = React.useState(false)
  return (
    <AccordionItem border={0}>
      <AccordionHeader
        border={0}
        paddingRight="8px"
        _hover={{ backgroundColor: 'gray.200' }}
        onClick={() => setActive(!active)}
      >
        <Box width="100%" textAlign="left">
          <Text flex="1" fontWeight="bold" label={label} />
        </Box>
        <AccordionIcon />
      </AccordionHeader>
      <AccordionPanel p={0} width="100%">
        <Flex flexDirection="column">
          {subpaths.map(({ id, to, label }) => (
            <Link key={id} label={label} to={to}  />
          ))}
        </Flex>
      </AccordionPanel>
    </AccordionItem>
  )
}

export default GroupLink
