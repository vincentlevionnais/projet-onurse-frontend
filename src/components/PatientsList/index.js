import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD

=======
import { ArrowLeft, LogOut, Search } from 'react-feather';
>>>>>>> develop
import PatientSmall from './PatientSmall';

import './patientsList.scss';

const PatientsList = () => (
<<<<<<< HEAD
  <div className="home">
    <div className="header">
      <a href="javascript:history.go(-1)">&larr;</a>
      <p>Mes patients</p>
    </div>
    <form className="searchPatient">
      <input
        type="text"
        placeholder="Recherche un patient"
      />
      <button type="submit">&#128269;</button>
    </form>
    <hr />
    <div className="patients-small">

      <PatientSmall />
      <PatientSmall />
      <PatientSmall />

    </div>

    <hr />

    <div className="addPatient-element">
      <Link
        to="/patients/add"
        className="addPatient-button"
      >"Ajouter un patient"
      </Link>
    </div>
  </div>
=======
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
>>>>>>> develop
);

export default PatientsList;
