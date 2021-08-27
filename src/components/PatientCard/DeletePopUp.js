import React from 'react';
import PropTypes from 'prop-types';

const DeletePopUp = ({ closePopUp }) => (
  <div className="popup">
    <p>Voulez vous vraiment supprimer ce patient ? </p>
    <div className="button-choice">
      <button 
        className="no"
        onClick={() => {
          closePopUp();
        }}
      >
        Non
      </button>
      <button 
        className="yes"
        onClick={() => {
          closePopUp();
        }}
      >
        Oui
      </button>
    </div>
  </div>
);

DeletePopUp.propTypes = {
  closePopUp: PropTypes.func.isRequired,
};

export default DeletePopUp;
