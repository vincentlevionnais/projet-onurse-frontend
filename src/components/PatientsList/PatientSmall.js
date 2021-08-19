import React from 'react';

const PatientSmall = () => (
  <article className="patient-small">

    <div className="patient-small-content">
      <h2>
        <Link
          to="/patients/10"
          className="patient-small-link"
        >
          Mr Richard Denis
        </Link>

      </h2>
      <p>-</p>
      <p>75 ans</p>
    </div>
  </article>
);

export default PatientSmall;
