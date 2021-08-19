import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, LogOut, Search } from 'react-feather';
import PatientSmall from './PatientSmall';

import './patientsList.scss';

const PatientsList = () => (
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

    <main className="main">
      <form className="searchPatient">
        <input
          type="text"
          placeholder="Recherche un patient"
        />
        <button type="submit">
          <Search />
        </button>
      </form>
      <hr />
      <div className="patients-small">

        <PatientSmall />
        <PatientSmall />
        <PatientSmall />
        <PatientSmall />
        <PatientSmall />
        <PatientSmall />
        <PatientSmall />
        <PatientSmall />
        <PatientSmall />
        <PatientSmall />
        <PatientSmall />
        <PatientSmall />

      </div>

      <hr />

      <button type="button">Ajouter un nouveau patient</button>
    </main>
    
  </>
);

export default PatientsList;
