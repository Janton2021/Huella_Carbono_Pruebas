// components
import { NavbarButton } from 'components/ui/Button/Navbar'
import { HStack } from '@chakra-ui/react'
import { Card } from 'components/ui/Card'
// routes
import { navlinks } from 'services/routes'
// hooks
import { useColorModeValue } from '@chakra-ui/color-mode'

export const Navbar = () => {
  const bg = useColorModeValue('gray.100', 'gray.700')
  return (
    <>
      <Card
        bg={bg}
        position="fixed"
        bottom={3}
        left={0}
        right={0}
        maxW="sm"
        h={16}
        py={2}
        m='auto'
      >
        <HStack justifyContent="space-between" w='full'>
          {navlinks.map((e) => (
            <NavbarButton
              key={e.name}
              name={e.name}
              icon={e.icon}
              path={e.path}
            />
          ))}
        </HStack>
      </Card>
    </>
  )
}
