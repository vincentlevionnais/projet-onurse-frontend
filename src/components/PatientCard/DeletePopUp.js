import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const DeletePopUp = ({ closePopUp, deletePatient, id }) => {

  

  return (
  <div className="delete-popup">
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
          deletePatient(id);
        }}
      >
        Oui
      </button>
    </div>
  </div>
)};

DeletePopUp.propTypes = {
  closePopUp: PropTypes.func.isRequired,
  deletePatient: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default DeletePopUp;
