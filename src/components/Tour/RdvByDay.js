import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Check, X } from 'react-feather';
import PropTypes from 'prop-types';

const RdvByDay = ({
  id,
  datetimeStart,
  reason,
  setStatus,
}) => {
  
  const eventDate = new Date (datetimeStart);
  const hour = `${eventDate.getHours()}h${eventDate.getMinutes()}`;
  
  //! Link à dynamiser quand on pourra lier un RDV à un patient + nom et prénom du patient

  /* classe css quand on pourra changer le status
    const cssClass = classNames(
    'taskTodo',
    {'todo' : status === 1},
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
        </div>
      </div> 
    </div>
  )
};

RdvByDay.propTypes = {
  reason: PropTypes.string.isRequired,
  datetimeStart: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  setStatus: PropTypes.func.isRequired,
};

export default RdvByDay;
