import { FormControl, FormLabel, Input, FormHelperText } from "@chakra-ui/react"

export const InputEmail = ({ handleInput, info, error }) => {
  return (
    <>
      <FormControl my={2}>
        <FormLabel> Email </FormLabel>
        <Input
          name='email'
          type='email'
          placeholder='email'
          onChange={handleInput}
          value={info.email}
        />
         { error ? <FormHelperText color='red.400'> Helper text </FormHelperText> : ''}
      </FormControl>
    </>
  )
}