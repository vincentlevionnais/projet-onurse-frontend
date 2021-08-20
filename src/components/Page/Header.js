import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { ArrowLeft, LogOut } from 'react-feather';
import './page.scss';

const Header = () => {
  const history = useHistory();

  function goBack() {
    history.goBack();
  }

  return (
    <header className="header">
      <Link
        to={goBack()}
        className="home-button"
      >
        <ArrowLeft />
      </Link>
      <div className="header-infos">
        <h1 className="header-title">
          Mes patients
        </h1>
      </div>
      <Link
        to="/login"
        className="logout-button"
      >
        <LogOut />
      </Link>
    </header>
  );
};

export default Header;
