import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import function for search patient by id
import Header from 'src/containers/Page/Header';
import { Edit } from 'react-feather';
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
      <Header titlePage="Fiche Patient" />

      <main className="main">
        <h2 className="patient-name">
          {`${patientToDisplay.firstname} ${patientToDisplay.lastname}`}

          <Link
            to={`/patients/${id}/edit`}
            className="editPatient"
          >
            <Edit />
          </Link>
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
