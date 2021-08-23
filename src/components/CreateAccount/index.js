import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, LogOut } from 'react-feather';

const CreateAccount = () => {
  console.log('coucou');

  return (
    <header className="header">
      <Link
        to="/"
        className="home-button"
      >
        <ArrowLeft />
      </Link>
      <div className="header-infos">
        <h1 className="header-title">
          Crée un compte
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

export default CreateAccount;
