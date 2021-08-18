// imports npm
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// local imports
import Errors from '../Errors';
import Home from '../Home';
import Tour from '../Tour';
import './page.scss';

const Page = () => (
  <Router>
    <Tour />
    {/* <Home /> */}
    {/* <Errors /> */}
  </Router>
);

export default Page;
