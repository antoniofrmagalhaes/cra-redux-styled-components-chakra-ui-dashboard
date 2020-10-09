import React, { InputHTMLAttributes } from 'react'
import { IconBaseProps } from 'react-icons/lib'
import { useField } from '@unform/core'

import { Container } from './styles'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  icon?: React.ComponentType<IconBaseProps>
}

const Input: React.FC<IInputProps> = ({ name, icon: Icon, ...rest }) => {
  const inputRef = React.useRef(null)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { fieldName, defaultValue, error, registerField } = useField(name)

  React.useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input ref={inputRef} {...rest} />
    </Container>
  )
}

export default Input
