import React from 'react';
import { Link } from 'react-router-dom';
import { Check, X } from 'react-feather';
import PropTypes from 'prop-types';

const RdvByDay = ({
  datetimeStart,
  reason,
}) => {
  
  const eventDate = new Date (datetimeStart);
  const hour = `${eventDate.getHours()}h${eventDate.getMinutes()}`;
  
  //! Link à dynamiser quand on pourra lier un RDV à un patient + nom et prénom du patient

  return (
    <div className="taskToDo">
      <time className="appointment-hour">
        {hour}
      </time>
      <div className="appointment-patient">
        <Link
          to={`/patients/${10}`}
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
            }}
          >
            <Check />
          </button>
          <button>
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
};

export default RdvByDay;
