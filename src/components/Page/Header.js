import React from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { ArrowLeft, LogOut } from 'react-feather';
import './page.scss';

const Header = ({ titlePage, handleLogOut }) => {
  const history = useHistory();

  const handleBack = () => {
    history.goBack();
  };

  return (

    <header className="header">
      <Link
        to=""
        type="submit"
        onClick={handleBack}
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
};

Header.propTypes = {
  titlePage: PropTypes.string.isRequired,
  handleLogOut: PropTypes.func.isRequired,

};

export default Header;
