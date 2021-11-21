import { FormControl, FormLabel, Input, FormHelperText } from "@chakra-ui/react"

export const InputText = ({ title, placeholder, type, name, handleInput, info, error }) => {
  return (
    <>
      <FormControl my={2}>
        <FormLabel> {title ? title : name} </FormLabel>
        <Input
          name={name}
          type={type}
          placeholder={placeholder ? placeholder : name}
          onChange={handleInput}
          value={info[name]}
        />
         { error ? <FormHelperText color='red.400'> Helper text </FormHelperText> : ''}
      </FormControl>
    </>
  )
}