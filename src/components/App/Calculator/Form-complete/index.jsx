// components
import { Card } from 'components/ui/Card'
import { Heading, Button } from '@chakra-ui/react'
// data
import { Link } from 'react-router-dom'
import { paths } from 'services/routes'

export const Form = () => {
  return (
    <>
      <Card bg="blue.100">
        <Heading size="md"> Formulario de CO2 </Heading>
        <Button>
          <Link to={paths.results}> ver resultado </Link>
        </Button>
      </Card>
    </>
  )
}
