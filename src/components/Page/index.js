// imports npm
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// local imports
import Errors from '../Errors';
import './page.scss';

const Page = () => (
  <Router>
    <Errors />
  </Router>
);

export default Page;
