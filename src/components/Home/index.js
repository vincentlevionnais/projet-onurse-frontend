import React from 'react';
import Proptypes from 'prop-types';

import { Link } from 'react-router-dom';
import { LogOut, Settings } from 'react-feather';
import logo from '../../assets/images/LOGO3-rond.png';
import './homeV2.scss';

const Home = ({ handleLogOut, firstname }) => {
  // current date
  const date = new Date();
  // convert current date in french
  const today = date.toLocaleString('fr-FR', {
    timeZone: 'Europe/Paris',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  // convert current hour in french
  const hour = date.toLocaleString('fr-FR', {
    timeZone: 'Europe/Paris',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <>
      <header className="header-home">
        <div className="header-infos">
          <h1 className="header-title">
            Bonjour {firstname}
          </h1>
          <div className="date">
            <time>
              {today}
            </time>
            <time>
              {hour}
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
        <div className="logo">
          <img className="logo-pic" src={logo} alt="logo o'nurse" />
        </div>
        <div className="nav-bottom">
          <Link
            to="/calendar/day"
            className="nav-link tour"
          >
            Ma tournée
          </Link>
        </div>
        
        <div className="nav-top">
          <Link
            to="/to-do-list"
            className="nav-link toDoList"
          >
            TO-DO-LIST
          </Link>
          <Link
            to="/calendar"
            className="nav-link agenda"
          >
            Mon Agenda
          </Link>
        </div>
        <div className="nav-bottom">
          <Link
            to="/patients"
            className="nav-link patient"
          >
            Mes patients
          </Link>
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
