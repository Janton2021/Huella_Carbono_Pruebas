// components
import { Heading, Box } from '@chakra-ui/react'
import { InputEmail } from 'components/ui/Input/Email'
import { InputPass } from 'components/ui/Input/Password'
import { SubmitBtn } from 'components/ui/Button/Submit'
import { PassValidator } from 'components/ui/Input/Password/Validator'
import { Card } from 'components/ui/Card'
// hooks
import { useState } from 'react'
// data
// import { valPass, valEmail } from 'services/utils/regEx'


export const RegisterForm = () => {
  // input
  const form = { email: '', password: '' }
  const [info, setinfo] = useState(form)
  
  // 🤟 Pasword //////////////////// REFACTOR + USEEFFECT + FORM VALIDATION
  const valPass = {
    upper: new RegExp(/(?=.*?[A-Z])/),
    lower: new RegExp(/(?=.*?[a-z])/),
    digit: new RegExp(/(?=.*?[0-9])/),
    special: new RegExp(/(?=.*?[#?!@$%^&*-])/),
    length: new RegExp(/.{8,}$/),
  }
  const valEmail = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
  // 
  const [upper, setupper] = useState({ message: 'Letras mayúsculas', valid: false,})
  const [digit, setdigit] = useState({ message: 'Al menos un número', valid: false,})
  const [special, setspecial] = useState({ message: 'Un caracter especial', valid: false,})
  const [length, setlength] = useState({ message: '8 o más caracteres', valid: false,})
  // const [strength, setstrength] = useState(1)
  // 
  const value = {
    email: valEmail.test(info.email),
    upper: valPass.upper.test(info.password), 
    digit: valPass.digit.test(info.password),
    special: valPass.special.test(info.password),
    length: valPass.length.test(info.password),
  }
  const fn = (fn, bool) => fn((curr) => ({ ...curr, valid: bool }))
  const validatedPass = () => {
    value.upper ? fn(setupper, true) : fn(setupper, false )
    value.digit ? fn(setdigit, true) : fn(setdigit, false )
    value.special ? fn(setspecial, true) : fn(setspecial, false )
    value.length ? fn(setlength, true) : fn(setlength, false )

    // upper.valid && setstrength(strength + 1)
    // digit.valid && setstrength(strength + 1)
    // special.valid && setstrength(strength + 1)
    // length.valid && setstrength(strength + 1)
  }
  // 🤟 Pasword //////////////////// REFACTOR
  




  // inputs
  const handleInput = (e) => {
    setinfo((curr) => ({ ...curr, [e.target.name]: e.target.value }))
    validatedPass()
    // console.info(strength)
  }
  
  // not empty
  // const isValid = true
  const isValid = value.email && value.length


  // submit
  const handleSubmit = (e) => {
    e.preventDefault()
    console.info(info)
  }

  return (
    <>
      <Heading> Registro </Heading>

      <Box my={4}>
        <form method="POST" onSubmit={handleSubmit}>
          <InputEmail handleInput={handleInput} info={info} />
          <InputPass handleInput={handleInput} info={info} />

          {/* REFATOR ////////////////////////////////  */}
          <Card bg='red.100'>
          <PassValidator valid={upper.valid} value={upper.message} />
          <PassValidator valid={digit.valid} value={digit.message} />
          <PassValidator valid={special.valid} value={special.message} />
          <PassValidator valid={length.valid} value={length.message} />
          </Card>

          <SubmitBtn isValid={isValid} name="Registro" />
        </form>
      </Box>
    </>
  )
}