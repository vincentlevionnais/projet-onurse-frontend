import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PatientSmall = ({
  id,
  firstname,
  lastname,
}) => (
  <div className="patient-small">

    <div className="patient-small-content">
      <h2>
        <Link
          to={`/patients/${id}`}
          className="patient-small-link"
        >
          {`${firstname} ${lastname}`}
        </Link>

      </h2>
    </div>
  </div>
);

PatientSmall.propTypes = {
  id: PropTypes.number.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
};

export default PatientSmall;
