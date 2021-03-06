import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Header from 'src/containers/Page/Header';

// sub component PatientSmall
import PatientSmall from './PatientSmall';
// function to search patient by name
import { searchPatientByName } from '../../utils';
import './patientsList.scss';

const PatientsList = ({
  patients,
  setSearch,
  search,
}) => {
  // search patients to display in terms of the search of user
  let patientToDisplay;
  if (search.length === 0) {
    patientToDisplay = patients;
  }
  else {
    patientToDisplay = searchPatientByName(search, patients);
  }

  return (
    <>
      <Header titlePage="Liste des Patients" />

      <main className="main">
        <input
          className="input-search"
          type="text"
          placeholder="Recherche un patient"
          onChange={(event) => {
            setSearch(event.currentTarget.value);
          }}
          value={search}
        />
        <hr />
        <div className="patients-small-content">
          {patientToDisplay.map((patient) => (
            <PatientSmall
              {...patient}
              key={patient.id}
            />
          ))}
        </div>

        <hr />

        <div className="addPatient-element">
          <Link
            to="/addPatient"
            className="addPatient-button"
          >Ajouter un patient
          </Link>
        </div>
      </main>
    </>
  );
};

PatientsList.propTypes = {
  patients: PropTypes.array.isRequired,
  setSearch: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
};

export default PatientsList;
