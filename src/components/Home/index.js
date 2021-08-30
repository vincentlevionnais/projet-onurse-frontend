import React from 'react';
import Proptypes from 'prop-types';

import { Link } from 'react-router-dom';
import { LogOut, Settings } from 'react-feather';
import logo from '../../assets/images/LOGO-V3.png';
import './home.scss';

const Home = ({ handleLogOut, firstname }) => {
  const today = new Date();

  return (
    <>
      <header className="header">
        <div className="header-infos">
          <h1 className="header-title">
            Bonjour {firstname}
          </h1>
          <div className="date">
            <time>
              {`${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`}
            </time>
            <time>
              {`${today.getHours()}h${today.getMinutes()}`}
            </time>
          </div>
        </div>
        <Link
          to="/account/settings"
          className="settings-button"
        >
          <Settings />
        </Link>

        <Link
          to="/"
          className="logout-button"
          onClick={() => handleLogOut()}
        >
          <LogOut />
        </Link>
      </header>
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
        <div className="logo">
          <img className="logo-pic" src={logo} alt="logo o'nurse" />
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
  firstname: Proptypes.string.isRequired,
};

export default Home;
