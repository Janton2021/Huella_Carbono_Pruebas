// components
import { Navbar } from 'components/ui/Navbar'
import { Container, Box } from '@chakra-ui/react'
// routing
import { Switch, Route } from 'react-router-dom'
import { routes } from 'services/routes'

export const Private = () => {
  return (
    <>
      <Container maxW="container.sm" px={4} h="100vh" pt={8}>
        <Switch>
          {routes.map((e, i) => {
            if (e.layout === 'private') return <Route key={i} {...e} exact />
            return ''
          })}
        </Switch>
        <Box h={24} />
        <Navbar />
      </Container>
    </>
  )
}
