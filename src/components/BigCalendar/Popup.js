import React from 'react';
import PropTypes from 'prop-types';

// import DatePicker from 'react-datepicker';
import DatePicker from 'react-datepicker';
import fr from 'date-fns/esm/locale/fr';
import 'react-datepicker/dist/react-datepicker.css';

const Popup = ({
  setDisplayPopup,
  manageSubmit,
  id,
  reason,
  setReason,
  datetimeStart,
  setdatetimeStart,
  datetimeEnd,
  setdatetimeEnd,
  deleteEvent,
  patients,
  setPatientId,
  patientChoosed,
  // setColor,
}) => {
  // console.log(patient.id);

  return (
    <div className="popup">
      <form
        className="form-popup"
        onSubmit={(evt) => {
          evt.preventDefault();
          manageSubmit();
        }}
      >

        <label className="popup-text" htmlFor="title"  />
        <input className="popup-input" type="text" placeholder="Titre de l'evenement" value={reason} id="title" onChange={(evt) => setReason(evt.target.value)} />

      <div className="datepickers">
        <DatePicker className="datepicker" dateFormat="dd/MM/yyyy" locale={fr} placeholderText="Date de début" selected={datetimeStart} onChange={(date) => setdatetimeStart(date)} showTimeSelect shouldCloseOnSelect timeCaption="Heure" />

        <DatePicker className="datepicker" dateFormat="dd/MM/yyyy" locale={fr} placeholderText="Date de fin" selected={datetimeEnd} onChange={(date) => setdatetimeEnd(date)} showTimeSelect shouldCloseOnSelect timeCaption="Heure" />
      </div>

        <select name="patients" onChange={(evt) => setPatientId(evt.target.value)} defaultValue={patientChoosed}>
        <option value="">--Choisir un patient--</option>
          {patients.map((patient) =>
            <option key={patient.id} value={patient.id} >
              {`${patient.lastname} ${patient.firstname}`}
            </option>
          )}
        </select> 
      <div className="buttons">
        <button className="button" type="submit">Valider</button>
        <button className="button" type="button" onClick={() => setDisplayPopup()}>Annuler</button>
        <button className="button" type="button" onClick={() => {deleteEvent(id)}} >Supprimer</button>
      </div>
      </form>
    </div>
  )
};

Popup.propTypes = {
  /** Function which close the Popup */
  setDisplayPopup: PropTypes.func.isRequired,
  /**Function to send form value to API */
  manageSubmit: PropTypes.func.isRequired,
  /** value for the title event */
  reason: PropTypes.string.isRequired,
  /**Function to update the title value */
  setReason: PropTypes.func.isRequired,
  /**Function to update the start date and time value */
  setdatetimeStart: PropTypes.func.isRequired,
  /**Function to update the end date and time value */
  setdatetimeEnd: PropTypes.func.isRequired,
  /** Function to delete a event in BDD */
  deleteEvent: PropTypes.func.isRequired,
  /**patients list */
  patients: PropTypes.array.isRequired,
  setPatientId: PropTypes.func.isRequired,
}

export default Popup;
