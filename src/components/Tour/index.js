import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, LogOut } from 'react-feather';
import RdvByDay from './RdvByDay';

import './tour.scss';

const Tour = () => (
  <>
    <header className="header">
      <Link
        to="/"
        className="home-button"
      >
        <ArrowLeft />
      </Link>
      <div className="header-infos">
        <h1 className="header-title">
          Ma tournée
        </h1>
      </div>
      <Link
        to="/login"
        className="logout-button"
      >
        <LogOut />
      </Link>
    </header>
    <main className="main">
      <RdvByDay
        id={10}
        lastname="Jean-Yves"
        firstname="Dupont"
        reason="Lovenox"
        hour="9h15"
      />
      <RdvByDay
        id={15}
        lastname="Bernadette"
        firstname="Dupont"
        reason="Prise de sang"
        hour="9h30"
      />
      <RdvByDay
        id={37}
        lastname="Josianne"
        firstname="Martin"
        reason="Changement de pansement pied"
        hour="9h45"
      />
    </main>
  </>
);

export default Tour;
