import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ArrowLeft, LogOut, Search } from 'react-feather';

// sub component PatientSmall
import PatientSmall from './PatientSmall';
// function to search patient by name
import { searchPatientByName } from '../../utils';
import './patientsList.scss';

const PatientsList = ({
  fetchPatients,
  patients,
  setSearch,
  search,
}) => {

  // search patients to display in terms of the search of user
  let patientToDisplay;
  if (search.length === 0) {
    patientToDisplay = patients;
  } else {
    patientToDisplay=searchPatientByName(search, patients);
  };

  // load patients list
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
        {/* <form
          className="searchPatient"
          onSubmit={(event) => {
            event.preventDefault();
            patientToDisplay = searchPatientByName(search, patients);
          }}
        >  */}
        <input className="input-search"
          type="text"
          placeholder="Recherche un patient"
          onChange={(event) => {
            setSearch(event.currentTarget.value);
          }}
          value={search}
        />
         {/*  <button type="submit">
            <Search />
          </button>
        </form> */}
        <hr />
        <div className="patients-small">
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
          to="/patients/add"
          className="addPatient-button"
        >"Ajouter un patient"
        </Link>
      </div>
    </main>
    </>
  );
};

PatientsList.propTypes = {
  fetchPatients: PropTypes.func.isRequired,
  patients: PropTypes.array.isRequired,
  setSearch: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
};

export default PatientsList;
