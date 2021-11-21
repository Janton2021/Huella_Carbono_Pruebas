// components
import { LoginForm, } from 'components/Auth/Login/Form'
import { Button, Text } from '@chakra-ui/react'

export const LoginModal = ({ LoC, RoO }) => {
  const handleClick = () => {
    LoC()
    RoO()
  }
  return (
    <>
      <LoginForm LoC={LoC} RoO={RoO}/>
      <Text> ¿No tienes una cuenta? <Button variant='link' onClick={handleClick}> regístrate </Button> </Text>
    </>
  )
}
