import React from 'react';
import Proptypes from 'prop-types';

import { Link } from 'react-router-dom';
import { LogOut } from 'react-feather';
import logo from '../../assets/images/LOGO-V3.png';
import './homeV2.scss';

const Home = ({ handleLogOut }) => {
  const today = new Date();

  return (
    <>
      <header className="header">
        <div className="header-infos">
          <h1 className="header-title">
            Bienvenue XXX
          </h1>
          <div className="date">
            <time>
              {`${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()}`}
            </time>
            <time>
              {`${today.getHours()}h${today.getMinutes()}`}
            </time>
          </div>
        </div>
        <Link
          to="/"
          className="logout-button"
          onClick={() => handleLogOut()}
        >
          <LogOut />
        </Link>
      </header>
      <div className="logo">
          <img className="logo-pic" src={logo} alt="logo o'nurse" />
        </div>
      <nav className="nav">
        <div className="nav-bottom">
          <div className="nav-element tour">
            <Link
              to="/calendar/day"
              className="nav-link"
            >
              Ma tournée
            </Link>
          </div>
        </div>
        
        <div className="nav-top">
          <div className="nav-element patient">
            <Link
              to="/patients"
              className="nav-link"
            >
              Mes patients
            </Link>
          </div>
          <div className="nav-element agenda">
            <Link
              to="/calendar"
              className="nav-link"
            >
              Mon Agenda
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

Home.propTypes = {

  handleLogOut: Proptypes.func.isRequired,
};

export default Home;
