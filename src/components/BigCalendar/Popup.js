import React from 'react';
import PropTypes from 'prop-types';

// import DatePicker from 'react-datepicker';
import DatePicker from 'react-datepicker';
import fr from 'date-fns/esm/locale/fr';
import 'react-datepicker/dist/react-datepicker.css';

const Popup = ({
  setDisplayPopup,
  manageSubmit,
  reason,
  setReason,
  datetimeStart,
  setdatetimeStart,
  datetimeEnd,
  setdatetimeEnd,
  // setColor,
}) => (
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

      {/* <select name="color" onClick={(evt) => setColor(evt.target.value)}>
        <option value="">couleurs</option>
        <option value="red">rouge</option>
        <option value="green">green</option>
      </select> */}
    <div className="buttons">
      <button className="button" type="submit">Valider</button>
      <button className="button" type="button" onClick={() => setDisplayPopup()}>Annuler</button>
      <button className="button" type="">Supprimer</button>
    </div>
    </form>
  </div>
);

Popup.propTypes = {
  /** Function which close the Popup */
  setDisplayPopup: PropTypes.func.isRequired,
  /**Function to send form value to API */
  manageSubmit: PropTypes.func.isRequired,
  /** value for the title event */
  reason: PropTypes.string.isRequired,
  /** value for the start date event */
  // datetimeStart: PropTypes.object.isRequired,
  /** value for the end date event */
  // datetimeEnd: PropTypes.string.isRequired,
  /**Function to update the title value */
  setReason: PropTypes.func.isRequired,
  /**Function to update the start date value */
  setdatetimeStart: PropTypes.func.isRequired,
  /**Function to update the end date value */
  setdatetimeEnd: PropTypes.func.isRequired,
}

export default Popup;
