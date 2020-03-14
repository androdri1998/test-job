import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import HomeApp from './screens/Home/HomeApp';

export default function Routes(){
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeApp}/>
      </Switch>
    </Router>
  )
}