import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Calendar } from 'react-feather';
import { searchNextappointments } from '../../utils';

const Visit = ({ appointmentOfPatient }) => {
  const nextAppointments = searchNextappointments(appointmentOfPatient);
  console.log(nextAppointments);
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
                const datetimeStart = new Date(item.datetimeStart);
                const date =`${datetimeStart.getDate()}/${datetimeStart.getMonth()+1}/${datetimeStart.getFullYear()}`;
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
