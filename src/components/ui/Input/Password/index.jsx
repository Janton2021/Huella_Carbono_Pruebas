import {
  FormControl,
  FormLabel,
  // FormHelperText,
  InputGroup,
  InputRightElement,
  IconButton,
  Input,
} from '@chakra-ui/react'
// icons
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useState } from 'react'

export const InputPass = ({ name, value, handleInput, info, error }) => {
  // show
  const [show, setshow] = useState(false)
  const handleShow = () => setshow(!show)

  return (
    <>
      <FormControl my={2}>
        <FormLabel> {name ? name : "Contraseña"} </FormLabel>
        <InputGroup>
          <Input
            name={value ? value : "password"}
            placeholder='contraseña'
            type={show ? 'text' : 'password'}
            onChange={handleInput}
            value={info[value]}
          />
          <InputRightElement>
            <IconButton
              variant="ghost"
              onClick={handleShow}
              icon={show ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            />
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </>
  )
}
