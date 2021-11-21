import { HStack, IconButton, Text} from '@chakra-ui/react'

export const UserModal = ({ icon, name, onClick }) => {
  return (
    <>
      <HStack w="100%" onClick={onClick} cursor='pointer'>
        <IconButton icon={icon} variant="ghost" colorScheme="gray" size='sm'/>
        <Text fontSize='sm'>{name}</Text>
      </HStack>
    </>
  )
}