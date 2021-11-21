import { VStack, Button, Text } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

export const NavbarButton = ({ path, icon, name }) => {
  const pathname = window.location.pathname

  return (
    <>
      <NavLink to={path}>
        <Button colorScheme={  pathname === path ? 'primary' : 'gray' } variant='ghost' w={12} h={12}>
          <VStack>
            {icon}
            <Text fontSize="xs"> {name} </Text>
          </VStack>
        </Button>
      </NavLink>
    </>
  )
}