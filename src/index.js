import React from 'react'
import ReactDOM from 'react-dom'

// style
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from 'theme/theme'
import 'theme/styles.css'

// components
import { DEMO_LINKS } from 'components/_DEMO-LINKS'

// routing
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Private } from 'layout/Private'
import { Public } from 'layout/Public'
import { paths } from 'services/routes'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Router>
        <DEMO_LINKS/>
        <Switch>
          <Route path='/auth' component={Public} />
          <Route path='/' component={Private} />
          <Redirect to={paths.index}/>
        </Switch>
      </Router>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
