import React from 'react';
import { Link } from 'react-router-dom';

import PatientSmall from './PatientSmall';

import './patientsList.scss';

const PatientsList = () => (
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
);

export default PatientsList;
