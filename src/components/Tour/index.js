import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ArrowLeft, LogOut, Check, X, CornerDownLeft  } from 'react-feather';
import Header from 'src/containers/Page/Header';
import RdvByDay from 'src/containers/Tour/RdvByDay';

import { searchAppointmentOfTheDay } from '../../utils';
import './tour.scss';

const Tour = ( {events} ) => {
  const appointmentOfTheDay=searchAppointmentOfTheDay(events);

  return (
    <>
      <Header titlePage="Ma Tournée" />

      <main className="main">
      <div className="legend">
        <div className="legend-button">
          <button>
            <Check />
          </button>
          <legend>RDV fait</legend>
        </div>
        <div className="legend-button">
          <button>
            <X />
          </button>
          <legend>RDV annulé</legend>
        </div>
        <div className="legend-button">
          <button>
            <CornerDownLeft />
          </button>
          <legend>Annuler</legend>
        </div>
      </div>
      {appointmentOfTheDay.map((appointment) => {
        return (
        <RdvByDay
          {...appointment}
          key={appointment.id}
          patient_id={appointment.patient.id}
        />
      )})}
      </main>
    </>
  );
};

Tour.propTypes = {
  events: PropTypes.array.isRequired,
};

export default Tour;
