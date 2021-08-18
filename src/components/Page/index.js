// imports npm
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// local imports
import Errors from '../Errors';
import Home from '../Home';
import './page.scss';

const Page = () => (
  <Router>
    <Home />
    {/* <Errors /> */}
  </Router>
);

export default Page;
