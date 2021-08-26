import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, LogOut } from 'react-feather';
import PropTypes from 'prop-types';
// import function for search patient by id
import { getPatientById } from 'src/utils';
import CivilStatus from './CivilStatus';
import Pathologies from './Pathologies';
import Visit from './Visit';
import Informations from './Informations';
import './patientCard.scss';

const PatientCard = ({ patients }) => {
  console.log(patients);
  // get the id in params of URL
  const { id } = useParams();
  // search patient by id
  const patientToDisplay = getPatientById(id, patients);
  console.log(patientToDisplay);
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
          {`${patientToDisplay.firstname} ${patientToDisplay.lastname}`}
        </h2>
        <CivilStatus
          {...patientToDisplay}
        />
        <Pathologies
          {...patientToDisplay}
        />
        <Visit />
        <Informations
          {...patientToDisplay}
        />
      </main>
    </>
  );
};

PatientCard.propTypes = {
  patients: PropTypes.array.isRequired,
};

export default PatientCard;
