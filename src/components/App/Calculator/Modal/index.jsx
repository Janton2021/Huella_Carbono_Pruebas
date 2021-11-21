// components
import { Button, VStack } from '@chakra-ui/react'
import { Heading, Text } from '@chakra-ui/layout'
// data
import { Link } from 'react-router-dom'
import { paths } from 'services/routes'

export const CalculatorModal = ({ CoC }) => {
  const handleClose = () => CoC()

  return (
    <>
      <VStack>
        <Heading> Completa tu progreso </Heading>
        <Text> Descripción </Text>
        <Link to={paths.calculator}>
          <Button> Comenzar</Button>
        </Link>
        <Button onClick={handleClose} variant="link"> saltar </Button>
      </VStack>
    </>
  )
}
