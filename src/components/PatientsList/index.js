import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ArrowLeft, LogOut, Search } from 'react-feather';
import PatientSmall from './PatientSmall';

import './patientsList.scss';

const PatientsList = ({ fetchPatients, patients }) => {
  useEffect(() => {
    fetchPatients();
  }, []);
  return (
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
          {patients.map((patient) => (
            <PatientSmall
              {...patient}
              key={patient.id}
            />
          ))}
        </div>

        <hr />

        <button type="button">Ajouter un nouveau patient</button>
      </main>
    </>
  );
};

PatientsList.propTypes = {
  fetchPatients: PropTypes.func.isRequired,
  patients: PropTypes.array.isRequired,
};

export default PatientsList;
