import React from 'react';
import PropTypes from 'prop-types';

const Pathologies = ({ pathology }) => {

  let pathologyToDisplay;
  if (pathology != null) {
    pathologyToDisplay = pathology;
  } else {
    pathologyToDisplay="Pas de pathologie connue pour ce patient";
  };

  return (
    <div className="section pathologies">
      <h2 className="pathologies-title title">
        Pathologies
      </h2>
      <div className="pathologies-list">
        <p>
        {pathologyToDisplay}
        </p>
      </div>
    </div>
  )
};

Pathologies.propTypes = {
  pathology: PropTypes.string,
};

Pathologies.defaultProps = {
  pathology: "",
};

export default Pathologies;
