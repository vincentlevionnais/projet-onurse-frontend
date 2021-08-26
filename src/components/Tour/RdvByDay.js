import React, { useEffect } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Check, X } from 'react-feather';
import PropTypes from 'prop-types';
import { CornerDownLeft } from 'react-feather';
import { getPatientById } from '../../utils';

const RdvByDay = ({
  id,
  start,
  title,
  status,
  setStatus,
  patient_id,
  patients,
}) => {

  const patient = getPatientById(patient_id, patients);

  useEffect(() => {

  }, [status]);

  const eventDate = start;
  const hour = `${eventDate.getHours()}h${eventDate.getMinutes()}`;
  
  //! Link à dynamiser quand on pourra lier un RDV à un patient + nom et prénom du patient


    const cssClass = classNames(
      'taskTodo',
      {'archive' : status === 2},
      {'canceled' : status === 3},
    );

  return (
    <div className={cssClass}>
      <time className="appointment-hour">
        {hour}
      </time>
      <div className="appointment-patient">
        <Link
          to={`/patients/${patient.id}`}
        >
        <div className="appointment-infos">
           <span className="lastname">
            {patient.lastname}
          </span>
          <span className="firstname">
            {patient.firstname}
          </span>
          - 
          <span className="appointment-reason">
            {title}
          </span>
        </div>
        </Link>
        <div className="checked">
          <button
            onClick={() => {
              setStatus(id, 2);
            }}
          >
            <Check />
          </button>
          <button
            onClick={() => {
              setStatus(id, 3);
            }}
          >
            <X />
          </button>
          <button
            onClick={() => {
              setStatus(id, 1);
            }}
          >
            <CornerDownLeft />
          </button>
        </div>
      </div> 
    </div>
  )
};

RdvByDay.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  setStatus: PropTypes.func.isRequired,
  status: PropTypes.number.isRequired,
  patient_id: PropTypes.number.isRequired,
};

export default RdvByDay;
