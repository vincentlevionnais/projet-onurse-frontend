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
  setPatients,
}) => {

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
        <form
          className="searchPatient"
          onSubmit={(event) => {
            event.preventDefault();
            setPatients(searchPatientByName(search, patients));
          }}
        > 
        <input
          type="text"
          placeholder="Recherche un patient"
          onChange={(event) => {
            setSearch(event.currentTarget.value);
            console.log(search);
            // set patients state with the result of search
            setPatients(searchPatientByName(search, patients));
          }}
          value={search}
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
  setSearch: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  setPatients: PropTypes.func.isRequired,
};

export default PatientsList;
