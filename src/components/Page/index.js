// imports npm
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// local imports
import AddPatient from '../../containers/addPatient';
import Errors from '../Errors';
import Home from '../Home';
import PatientsList from '../PatientsList';

import Tour from '../Tour';
import PatientCard from '../PatientCard';
import './page.scss';

const Page = () => (
  <Router>
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
      <Route path="/patients/add">
        <AddPatient />
      </Route>
      <Route path="/patients/10">
        <PatientCard />
      </Route>
      <Route>
        <Errors />
      </Route>

    </Switch>
  </Router>
);

export default Page;
