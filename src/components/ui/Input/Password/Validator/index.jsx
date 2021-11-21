// components
import { Text, Icon } from '@chakra-ui/react'
// icons
import { AiOutlineCheckCircle, AiFillCheckCircle } from 'react-icons/ai'

export const PassValidator = ({ valid, value }) => {
  return (
    <>
      <Text color={ !valid && 'gray.500'} fontSize="sm">
        <Icon as={ !valid ? AiOutlineCheckCircle : AiFillCheckCircle} /> {value}
      </Text>
    </>
  )
}
