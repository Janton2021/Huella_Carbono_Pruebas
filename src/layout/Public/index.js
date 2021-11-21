import { Switch, Route } from 'react-router-dom'
import { routes } from 'services/routes'

import { Container } from '@chakra-ui/react'

export const Public = () => {
  return (
    <>
      <Container maxW="container.sm" px={4} h='100vh'>
        <Switch>
          {routes.map((e, i) => {
            if (e.layout === 'public') return <Route key={i} {...e} exact />
            return ''
          })}
        </Switch>
      </Container>
    </>
  )
}
