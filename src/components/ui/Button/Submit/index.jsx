import { Button } from '@chakra-ui/react'

export const SubmitBtn = ({ isValid, name, colorScheme }) => {
  return (
    <>
      <Button colorScheme={colorScheme ? colorScheme : 'primary' } my={2} w="full" type="submit" isDisabled={isValid ? false : true}>
        {name}
      </Button>
    </>
  )
}
