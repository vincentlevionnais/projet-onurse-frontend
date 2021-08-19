import React from 'react';
import { Link, MemoryRouter } from 'react-router-dom';
import { ArrowLeft, LogOut } from 'react-feather';
import CivilStatus from './CivilStatus';
import Pathologies from './Pathologies';
import Visit from './Visit';
import Informations from './Informations';
import './patientCard.scss';

const PatientCard = () => (
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
          Mr DUPONT Jean-Yves - 75 ans
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
      <CivilStatus />
      <Pathologies />
      <Visit />
      <Informations />
    </main>
  </>
  
);

export default PatientCard;
