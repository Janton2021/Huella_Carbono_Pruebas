import { HStack, IconButton, Text, Box, Link } from '@chakra-ui/react'

export const UserExternalLink = ({ icon, name, link }) => {
  return (
    <>
      <Box w="full">
        <Link href={link} isExternal >
          <HStack w="100%">
            <IconButton icon={icon} variant="ghost" colorScheme="gray" size='sm'/>
            <Text fontSize='sm'>{name} </Text>
          </HStack>
        </Link>
      </Box>
    </>
  )
}