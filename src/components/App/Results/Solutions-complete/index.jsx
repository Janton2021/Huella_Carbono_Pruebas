// componentes 
import { Card } from 'components/ui/Card'
import { Heading, Button } from '@chakra-ui/react'

export const Solutions = () => {
  return (
    <>
      <Card bg="red.100">
        <Heading size="md"> Soluciones propuestas </Heading>
        <Button colorScheme="secondary"> Compartir </Button>
      </Card>
    </>
  )
}
