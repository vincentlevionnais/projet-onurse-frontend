import React from 'react';
import PropTypes from 'prop-types';

const Informations = ({ note }) => (
  <div className="section informations">
    <h2 className="informations-title title">
      Informations
    </h2>
    <div className="note">
      {note}
    </div>
    
  </div>
);

Informations.propTypes = {
  note: PropTypes.string,
}

Informations.defaultProps = {
  note: "",
}

export default Informations;
