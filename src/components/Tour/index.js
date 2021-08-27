import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from 'src/containers/Page/Header';
import RdvByDay from 'src/containers/Tour/RdvByDay';

import { searchAppointmentOfTheDay } from '../../utils';
import './tour.scss';

const Tour = ({ events }) => {
  console.log(events);

  const appointmentOfTheDay = searchAppointmentOfTheDay(events);

  console.log(appointmentOfTheDay);
  /*  useEffect(() => {
    loadEvents();
  }, [appointmentOfTheDay]); */

  /*   useEffect(() => {
    window.location.reload();
  }, []); */
  return (
    <>
      <Header titlePage="Ma Tournée" />

      <main className="main">
        {appointmentOfTheDay.map((appointment) => {
          console.log(appointment);
          return (
            <RdvByDay
              {...appointment}
              key={appointment.id}
            />
          );
        })}
      </main>
    </>
  );
};

Tour.propTypes = {
  events: PropTypes.array.isRequired,
};

export default Tour;
