// components
import { ForgotForm, } from 'components/Auth/Forgot-pass/Form'
import { Button, Text } from '@chakra-ui/react'

export const ForgotModal = ({ LoC, FoC, RoO }) => {
  const handleClick = () => {
    FoC()
    // LoC()
    RoO()
  }
  return (
    <>
      <ForgotForm />
      <Text> ¿No tienes una cuenta? <Button variant='link' onClick={handleClick}> regístrate </Button> </Text>
    </>
  )
}
