// components
import { Card } from 'components/ui/Card'
import { Heading, Button } from '@chakra-ui/react'

export const LogrosTable = () => {
  return (
    <>
      <Card bg="red.100">
        <Heading size="md"> Listado de logros </Heading>
        <Button colorScheme="secondary"> Badges </Button>
      </Card>
    </>
  )
}
