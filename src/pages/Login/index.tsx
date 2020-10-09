import React from 'react'
import { SubmitHandler, FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import { Flex } from '@chakra-ui/core'
import { useDispatch } from 'react-redux'
import { signInRequest } from '../../store/modules/authentication/actions'

import Input from '../../components/Input'

interface FormData {
  email: string
  password: string
}

const Login: React.FC = () => {
  const dispatch = useDispatch()
  const formRef = React.useRef<FormHandles>(null)
  const handleSubmit: SubmitHandler<FormData> = ({ email, password }) => {
    dispatch(signInRequest(email, password))
  }

  React.useEffect(() => {}, [])

  return (
    <Flex
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100%"
    >
      <h1>Login</h1>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="email" placeholder="email" />
        <Input name="password" type="password" placeholder="password" />
        <button type="submit">Entrar</button>
      </Form>
    </Flex>
  )
}

export default Login
