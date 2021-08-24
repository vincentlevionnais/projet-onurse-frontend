import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ArrowLeft, LogOut } from 'react-feather';
import RdvByDay from './RdvByDay';
import { searchAppointmentOfTheDay } from '../../utils';
import './tour.scss';


const Tour = ( {events} ) => {

  useEffect (() => {
    //location.reload();
  }, [events]);
  const appointmentOfTheDay=searchAppointmentOfTheDay(events);
  
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
      {appointmentOfTheDay.map((appointment) => (
        <RdvByDay
          {...appointment}
          key={appointment.id}
        />
      ))}
      </main>
    </>
  )
};

Tour.propTypes = {
  events: PropTypes.array.isRequired,
  loadEvents: PropTypes.func.isRequired,
};

export default Tour;
