// components
import { Heading, Box } from '@chakra-ui/react'
import { InputPass } from 'components/ui/Input/Password'
import { SubmitBtn } from 'components/ui/Button/Submit'
// hooks
import { useState } from 'react'

export const ResetForm = () => {
  // inputs
  const form = { oldpass: '', newpass:''}
  const [info, setinfo] = useState(form)
  const handleInput = (e) => setinfo((curr) => ({ ...curr, [e.target.name]: e.target.value }))
  const handleSubmit = (e) => {
    e.preventDefault() 
    console.info(info)
  }
  const isValid = info.oldpass !== '' && info.newpass !== '' && info.oldpass === info.newpass
  const error = false

  return (
    <>
      <Heading> Nueva contraseña </Heading>

      <Box my={4}>
        <form method="POST" onSubmit={handleSubmit}>
          <InputPass handleInput={handleInput} info={info} error={error} value='oldpass' name='Nueva contraseña'/>
          <InputPass handleInput={handleInput} info={info} error={error} value='newpass' name='Repite contraseña'/>
          <SubmitBtn isValid={isValid} name='Cambiar contraseña'/>
        </form>
      </Box>

    </>
  )
}
