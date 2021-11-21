// components
import { Box, VStack, HStack, Heading, Button, Text } from '@chakra-ui/react'
import { InputPass } from 'components/ui/Input/Password'
import { InputEmail } from 'components/ui/Input/Email'
import { SubmitBtn } from 'components/ui/Button/Submit'
import { ForgotModal } from 'components/Auth/Forgot-pass/Modal'
import { Modal } from 'components/ui/Modal'
// hooks
import { useState } from 'react'
// hooks
import { useDisclosure } from '@chakra-ui/hooks'

export const LoginForm = ({LoC, RoO}) => {
  // forgot modal
  const { isOpen: FiO, onOpen: FoO, onClose: FoC } = useDisclosure()
  // inputs
  const form = { email: '', password: '' }
  const [info, setinfo] = useState(form)
  const handleInput = (e) =>
    setinfo((curr) => ({ ...curr, [e.target.name]: e.target.value }))
  const handleSubmit = (e) => {
    e.preventDefault()
    console.info(info)
  }
  // state
  const isValid = info.email !== '' && info.password !== ''
  const error = false

  return (
    <>
      <Heading> Login </Heading>

      <Box my={4}>
        <form method="POST" onSubmit={handleSubmit}>
          <InputEmail handleInput={handleInput} info={info} error={error} />
          <InputPass handleInput={handleInput} info={info} error={error} />
          <HStack justifyContent='flex-end' my={2}>

          <Button onClick={FoO} my={2} w="full" variant='link'> olvidé mi contraseña </Button>
          <Modal isOpen={FiO} onClose={FoC} content={<ForgotModal LoC={LoC} FoC={FoC} RoO={RoO} />} />

          </HStack>
          <SubmitBtn isValid={isValid} name="Login" />
        </form>
      </Box>

      <VStack my={2}>
        <Text> ó </Text>
        <Button colorScheme="facebook" w="full" variant="outline">
          Continúa con Facebook
        </Button>
        <Button colorScheme="gray" w="full" variant="outline">
          Continúa con Google
        </Button>
        <Button colorScheme="gray" w="full" variant="outline">
          Continúa con Apple
        </Button>
      </VStack>
    </>
  )
}
