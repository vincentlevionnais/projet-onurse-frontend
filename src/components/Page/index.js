// imports npm
import React from 'react';
import Proptypes from 'prop-types';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
// local imports
import BigCalendar from 'src/containers/BigCalendar';
import LoginForm from 'src/containers/LoginForm';
import CreateAccount from 'src/containers/CreateAccount';
import Home from 'src/containers/Home';
import Loader from 'src/components/Loader';
import Errors from '../Errors';
import AddPatient from '../../containers/addPatient';
import Tour from '../Tour';
import PatientCard from '../../containers/PatientCard';
import PatientsList from '../../containers/PatientsList';
import './page.scss';

const Page = ({ isCreate, logged, patientsLoaded, eventsLoaded }) => (
  <Router>
    <Switch>
      {isCreate && <Redirect from="/account/create/account" to="/login" /> }

      {!logged
     && (
     <>
       <Redirect from="/" to="/login" />
       <Route path="/login">
         <LoginForm />
       </Route>
       <Route path="/account/create/account">
         <CreateAccount />
       </Route>
     </>
     )}
      {(!patientsLoaded || !eventsLoaded) && (
        <Loader />
      )}
      { logged && <Redirect from="/login" to="/" />}

      {logged && patientsLoaded && eventsLoaded
      && (

        <>
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
        </>

      )}

    </Switch>
  </Router>
);

Page.propTypes = {

  isCreate: Proptypes.bool.isRequired,
  logged: Proptypes.bool.isRequired,
};

export default Page;
