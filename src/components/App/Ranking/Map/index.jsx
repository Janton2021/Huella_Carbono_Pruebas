import React from 'react';
import  {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './Map.css';
import  MapView  from './MapView'


export const Mapping = () => {
  return (
    <Router>
      <Switch>
        <Route>
          <MapView />
        </Route>
      </Switch>
    </Router>    
  );
}

//export default Map
