import React from 'react';
import PropTypes from 'prop-types';

const Informations = ({ note }) => {

  let informationToDisplay;
  if (note != null) {
    informationToDisplay = note;
  } else {
    informationToDisplay="Pas d'information concernant ce patient";
  };

  return (
    <div className="section informations">
      <h2 className="informations-title title">
        Informations
      </h2>
      <div className="note">
        {informationToDisplay}
      </div>
      
    </div>
  )
};

Informations.propTypes = {
  note: PropTypes.string,
}

Informations.defaultProps = {
  note: "",
}

export default Informations;
