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
          Fiche patient
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
      <h2 className="patient-name">
        Mr DUPONT Jean-Yves <br/> 75 ans
      </h2>
      <CivilStatus />
      <Pathologies />
      <Visit />
      <Informations />
    </main>
  </>
  
);

export default PatientCard;
