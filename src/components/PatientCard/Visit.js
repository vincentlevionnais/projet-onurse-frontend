import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Calendar } from 'react-feather';
import { searchNextappointments } from '../../utils';

const Visit = ({ appointmentOfPatient }) => {
  const nextAppointments = searchNextappointments(appointmentOfPatient);
  return (
    <div className="section visit">
      <h2 className="visit-title title">
        Visites
      </h2>
      <div className="visit-content">
        <div className="visit-content_infos">
          <div className="next-visit">
            <span>Prochaine(s) visite(s):</span> 
            <ul>
              {nextAppointments.map((item) => {
                const datetimeStart = new Date(item.start);
                const date = datetimeStart.toLocaleString('fr-FR', {
                  timeZone: 'Europe/Paris',
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                });
                return (
                  <li key={item.id}> {date} - {item.reason} </li>
                )
              })}
            </ul>
            
          </div>
        </div>
        <div className="visit-content_calendarLogo">
          <Link
            to="/calendar"
          >
            <Calendar />
          </Link>
        </div>
      </div>
      
    </div>
  );
};

Visit.propTypes = {
  appointmentOfPatient: PropTypes.array.isRequired,
};

export default Visit;
