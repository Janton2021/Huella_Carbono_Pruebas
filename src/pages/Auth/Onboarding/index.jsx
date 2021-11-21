// components
import { Heading, Button, HStack } from '@chakra-ui/react'
import { Card } from 'components/ui/Card'
import { Carrusel } from 'components/Auth/Onboarding'
// data
import { Link } from 'react-router-dom'
import { paths } from 'services/routes'
// hooks
import { useEffect } from 'react'

export const Onboarding = () => {
  useEffect(() => {
    document.title = 'Carbon | Onboard'
  }, [])

  return (
    <>
      <Heading> Onboarding </Heading>
        <Button variant='link'>
          <Link to={paths.home}> Omitir </Link>
        </Button>

        <Carrusel />
        <Button my={2} w="full" colorScheme='secondary'> Continuar </Button>
    </>
  )
}



