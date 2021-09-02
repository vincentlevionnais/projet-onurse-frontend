import React from 'react';
import PropTypes from 'prop-types';
import { Check, X, CornerDownLeft } from 'react-feather';
import Header from 'src/containers/Page/Header';
import RdvByDay from 'src/containers/Tour/RdvByDay';

import { searchAppointmentOfTheDay } from '../../utils';
import './tour.scss';

const Tour = ({ events }) => {
  const appointmentOfTheDay = searchAppointmentOfTheDay(events);

  return (
    <>
      <Header titlePage="Ma Tournée" />

      <main className="main">
        <div className="legend">
          <div className="legend-button">
            <button type="button">
              <Check size="12" />
            </button>
            <legend>RDV fait</legend>
          </div>
          <div className="legend-button">
            <button type="button">
              <X size="12" />
            </button>
            <legend>RDV annulé</legend>
          </div>
          <div className="legend-button">
            <button type="button">
              <CornerDownLeft size="12" />
            </button>
            <legend>Annuler</legend>
          </div>
        </div>
        {appointmentOfTheDay.map((appointment) => (
          <RdvByDay
            {...appointment}
            key={appointment.id}
            patient_id={parseInt(appointment.patient.id)}
          />
        ))}
      </main>
    </>
  );
};

Tour.propTypes = {
  events: PropTypes.array.isRequired,
};

export default Tour;
