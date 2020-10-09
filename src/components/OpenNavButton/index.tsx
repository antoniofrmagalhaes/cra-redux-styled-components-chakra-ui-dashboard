import React from 'react'

import { MenuButton, Bars } from './styles'

interface IOpenNavButtonProps {
  open: boolean
  orientation?: string
  mobileOnly?:boolean
  toggleHandler: () => void
}

const OpenNavButton: React.FC<IOpenNavButtonProps> = ({
  open,
  orientation,
  mobileOnly,
  toggleHandler
}) => {
  return (
    <MenuButton onClick={() => toggleHandler()} open={open} orientation={orientation} mobileOnly={mobileOnly}>
      <Bars open={open} />
    </MenuButton>
  )
}

export default OpenNavButton
