// === import npm
import React from 'react';
import { useParams, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
// === import local
// import function for search patient by id
import Header from 'src/containers/Page/Header';
import { getPatientById } from 'src/utils';
// import function for seachr events of patient
import { searchAppointmentOfPatient } from '../../utils';
import CivilStatus from './CivilStatus';
import Pathologies from './Pathologies';
import Visit from './Visit';
import Informations from './Informations';
import DeletePopUp from 'src/containers/PatientCard/DeletePopUp';
import './patientCard.scss';


const PatientCard = ({ patients, events, popupIsOpen, openPopUp }) => {
  // get the id in params of URL
  const { id } = useParams();
  // search patient by id
  const patientToDisplay = getPatientById(id, patients);
  // const eventsOfPatient = searchAppointmentOfPatient(events, id);

  return (
    <>
      <Header titlePage="Fiche Patient" />

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
        <button 
          className="delete-patient"
          onClick={() => {
            openPopUp();
            
          }}
        >
          Supprimer le patient
        </button>
        {popupIsOpen && <DeletePopUp id={id} />}
      </main>
    </>
  );
};

PatientCard.propTypes = {
  patients: PropTypes.array.isRequired,
  events: PropTypes.array.isRequired,
  popupIsOpen: PropTypes.bool.isRequired, 
  openPopUp: PropTypes.func.isRequired,
};

export default PatientCard;
