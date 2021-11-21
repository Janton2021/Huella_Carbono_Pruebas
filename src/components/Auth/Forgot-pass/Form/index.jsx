// components
import { Heading, Box } from '@chakra-ui/react'
import { InputEmail } from 'components/ui/Input/Email'
import { SubmitBtn } from 'components/ui/Button/Submit'
// hooks
import { useState } from 'react'

export const ForgotForm = () => {
  // inputs
  const form = { email: '' }
  const [info, setinfo] = useState(form)
  const handleInput = (e) =>
    setinfo((curr) => ({ ...curr, [e.target.name]: e.target.value }))
  const handleSubmit = (e) => {
    e.preventDefault()
    console.info(info)
  }
  const isValid = info.email !== ''
  const error = false

  return (
    <>
      <Heading> Olvidé mi contraseña </Heading>

      <Box my={4}>
        <form method="POST" onSubmit={handleSubmit}>
          <InputEmail handleInput={handleInput} info={info} error={error} />
          <SubmitBtn isValid={isValid} name="Enviar email" />
        </form>
      </Box>
    </>
  )
}
