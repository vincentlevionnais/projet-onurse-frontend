// imports npm
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// local imports
import Errors from '../Errors';
import Home from '../Home';
import Tour from '../Tour';
import PatientCard from '../../containers/PatientCard';
import PatientsList from '../../containers/PatientsList';
import './page.scss';
import Loader from '../Loader';

const Page = () => (
  <Router>
    <Loader />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/calendar/day">
        <Tour />
      </Route>
      <Route path="/patients" exact>
        <PatientsList />
      </Route>
      <Route path="/patients/:id">
        <PatientCard />
      </Route>
      <Route>
        <Errors />
      </Route>
    </Switch>
  </Router>
);

export default Page;
