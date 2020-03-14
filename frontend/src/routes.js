import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import routesContants from './utils/routes.contants';

const EmployeesApp = lazy(() => import('./screens/EmployeesApp/EmployeesApp'));
const ExtractApp = lazy(() => import('./screens/ExtractApp/ExtractApp'));

export default function Routes(){
  return (
    <Suspense fallback={<>Carregando...</>}>
      <Router>
        <Switch>
          <Route exact path={routesContants.ROOT} component={EmployeesApp}/>
          <Route path={routesContants.EMPLOYEES} component={EmployeesApp}/>
          <Route path={routesContants.EXTRACT} component={ExtractApp}/>
          <Route path="*" component={() => <Redirect to={routesContants.EMPLOYEES} />}/>
        </Switch>
      </Router>
    </Suspense>
  )
}