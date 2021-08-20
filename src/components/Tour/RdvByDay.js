import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const RdvByDay = ({
  lastname,
  firstname,
  reason,
  hour,
  id,
}) => (
  <div className="taskToDo">
    <time className="appointment-hour">
      {hour}
    </time>
    <Link
      to={`/patients/${id}`}
    >
      <div className="appointment-infos">
        <span className="firstname">
          {firstname}
        </span>
        <span className="lastname">
          {lastname}
        </span>
        -
        <span className="appointment-reason">
          {reason}
        </span>
      </div>
    </Link>
  </div>
);

RdvByDay.propTypes = {
  lastname: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  reason: PropTypes.string.isRequired,
  hour: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default RdvByDay;
