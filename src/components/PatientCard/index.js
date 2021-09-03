// === import npm
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// === import local
// import function for search patient by id
import Header from 'src/containers/Page/Header';
import { Edit } from 'react-feather';
import { getPatientById, searchAppointmentOfPatient } from 'src/utils';
// import function for seachr events of patient
import DeletePopUp from 'src/containers/PatientCard/DeletePopUp';
import CivilStatus from './CivilStatus';
import Pathologies from './Pathologies';
import Visit from './Visit';
import Informations from './Informations';
import maps from '../../assets/images/maps.png';
import './patientCard.scss';


const PatientCard = ({ patients, events, popupIsOpen, openPopUp }) => {
  // get the id in params of URL
  const { id } = useParams();
  // search patient by id
  const patientToDisplay = getPatientById(id, patients);
  // const eventsOfPatient = searchAppointmentOfPatient(events, id);
  const appointmentOfPatient = searchAppointmentOfPatient(events, id);

  const road = patientToDisplay.completeAdress.replace(/ /g, '+');

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
        <a className="road" href={`https://www.google.com/maps/search/?api=1&query=${road}`}>
          <img src={maps}/>
          Itinéraire
        </a>
        <CivilStatus
          {...patientToDisplay}
        />
        <Pathologies
          {...patientToDisplay}
        />
        <Visit appointmentOfPatient={appointmentOfPatient} />
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
