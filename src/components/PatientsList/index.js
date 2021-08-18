import React from 'react';

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

    <button type="button">Ajouter un nouveau patient</button>
  </div>
);

export default PatientsList;
