import React from 'react';
import PropTypes from 'prop-types';

const Pathologies = ({ pathology }) => (
  <div className="section pathologies">
    <h2 className="pathologies-title title">
      Pathologies
    </h2>
    <div className="pathologies-list">
      <p>
      {pathology}
      </p>
    </div>
  </div>
);

Pathologies.propTypes = {
  pathology: PropTypes.string,
};

Pathologies.defaultProps = {
  pathology: "",
};

export default Pathologies;
