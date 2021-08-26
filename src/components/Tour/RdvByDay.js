import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Check, X } from 'react-feather';
import PropTypes from 'prop-types';
import { className } from 'postcss-selector-parser';

const RdvByDay = ({
  id,
  datetimeStart,
  reason,
  manageEvent,
}) => {
  
  const eventDate = new Date (datetimeStart);
  const hour = `${eventDate.getHours()}h${eventDate.getMinutes()}`;
  
  //! Link à dynamiser quand on pourra lier un RDV à un patient + nom et prénom du patient

  /* classe css quand on pourra changer le status
    const cssClass = classNames(
    'taskTodo',
    {'archive' : status === 2},
    {'cancel' : status === 3},
  ) */
  return (
    <div className="taskToDo">
      <time className="appointment-hour">
        {hour}
      </time>
      <div className="appointment-patient">
        <Link
          to={`/patients/${1}`}
        >
        <div className="appointment-infos">
          {/* <span className="lastname">
            {lastname}
          </span>
          <span className="firstname">
            {firstname}
          </span>
          - */}
          <span className="appointment-reason">
            {reason}
          </span>
        </div>
        </Link>
        <div className="checked">
          <button
            onClick={() => {
              console.log("button checked");
              // appel à la fonction manageEvent
              // transmettre id et status = 2
            }}
          >
            <Check />
          </button>
          <button
            onClick={() => {
              // appel à la fonction manageEvent
              // transmettre id et status =3
            }}
          >
            <X />
          </button>
        </div>
      </div> 
    </div>
  )
};

RdvByDay.propTypes = {
  reason: PropTypes.string.isRequired,
  datetimeStart: PropTypes.string.isRequired,
  //manageEvent: PropTypes.func.isRequired,
  //id: PropTypes.nomber.isRequired,
};

export default RdvByDay;
