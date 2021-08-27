import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ArrowLeft, LogOut } from 'react-feather';
import './page.scss';

const Header = ({ titlePage, handleLogOut }) => (

  <header className="header">
    <Link
      to="/"
      className="home-button"
    >
      <ArrowLeft />
    </Link>
    <div className="header-infos">
      <h1 className="header-title">
        {titlePage}
      </h1>
    </div>
    <Link
      to=""
      className="logout-button"
      onClick={() => handleLogOut()}
    >
      <LogOut />
    </Link>
  </header>
);

Header.propTypes = {
  titlePage: PropTypes.string.isRequired,
  handleLogOut: PropTypes.func.isRequired,

};

export default Header;
