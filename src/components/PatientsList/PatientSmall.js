import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PatientsList from '.';

const PatientSmall = ({
  firstname,
  lastname,
}) => (
  <article className="patient-small">

    <div className="patient-small-content">
      <h2>
        <Link
          to="/patients/10"
          className="patient-small-link"
        >
          {`${firstname} ${lastname}`}
        </Link>

      </h2>
    </div>
  </article>
);

PatientSmall.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
};

export default PatientSmall;
