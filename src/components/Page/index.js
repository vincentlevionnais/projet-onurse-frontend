// imports npm
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// local imports
import BigCalendar from 'src/containers/BigCalendar';
import Errors from '../Errors';
import Home from '../Home';
import AddPatient from '../../containers/addPatient';
import Tour from '../../containers/Tour';
import PatientCard from '../../containers/PatientCard';
import PatientsList from '../../containers/PatientsList';
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
      <Route path="/patients/:id">
        <PatientCard />
      </Route>
      <Route path="/calendar" exact>
        <BigCalendar />
      </Route>
      <Route>
        <Errors />
      </Route>

    </Switch>
  </Router>
);

export default Page;
