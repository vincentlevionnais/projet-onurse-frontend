import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ArrowLeft, LogOut } from 'react-feather';
import RdvByDay from 'src/containers/Tour/RdvByDay';
import { searchAppointmentOfTheDay } from '../../utils';
import './tour.scss';


const Tour = ( {events} ) => {
  console.log(events);
  
  const appointmentOfTheDay=searchAppointmentOfTheDay(events);
 
  console.log(appointmentOfTheDay);
/*  useEffect(() => {
    loadEvents();
  }, [appointmentOfTheDay]); */

/*   useEffect(() => {
    window.location.reload();
  }, []); */
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
            Ma tournée
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
      {appointmentOfTheDay.map((appointment) => {
        console.log(appointment);
        return (
        <RdvByDay
          {...appointment}
          key={appointment.id}
        />
      )})}
      </main>
    </>
  )
};

Tour.propTypes = {
  events: PropTypes.array.isRequired,
};

export default Tour;
