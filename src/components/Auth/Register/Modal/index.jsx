// components
import { RegisterForm, } from 'components/Auth/Register/Form'
import { Button, Text } from '@chakra-ui/react'

export const RegisterModal = ({RoC, LoO}) => {
  const handleClick = () => {
    RoC()
    LoO()
  }

  return (
    <>
      <RegisterForm />
      <Text> ¿Tienes una cuenta? <Button variant='link' onClick={handleClick}> login </Button> </Text>
    </>
  )
}
