import React from 'react';
import PropTypes from 'prop-types';

// import DatePicker from 'react-datepicker';
import DatePicker from 'react-datepicker';
import fr from 'date-fns/esm/locale/fr';
import 'react-datepicker/dist/react-datepicker.css';

const Popup = ({
  setDisplayPopup,
  manageSubmit,
  titleEvent,
  setTitleEvent,
  startDateEvent,
  setStartDateEvent,
  endDateEvent,
  setEndDateEvent,
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
      <label className="popup-text" htmlFor="title" placeholder="Titre de l'evenement" />
      <input type="text" value={titleEvent} id="title" onChange={(evt) => setTitleEvent(evt.target.value)} />

      <DatePicker locale={fr} placeholderText="Date de début" value={startDateEvent} onChange={(date) => setStartDateEvent(date)} shouldCloseOnSelect showTimeSelect timeCaption="Heure" />

      <DatePicker locale={fr} placeholderText="Date de fin" value={endDateEvent} onChange={(date) => setEndDateEvent(date)} shouldCloseOnSelect showTimeSelect timeCaption="Heure" />

      {/* <select name="color" onClick={(evt) => setColor(evt.target.value)}>
        <option value="">couleurs</option>
        <option value="red">rouge</option>
        <option value="green">green</option>
      </select> */}

      <button type="submit">Valider</button>
      <button type="button" onClick={() => setDisplayPopup()}>Annuler</button>
      <button type="">Supprimer</button>
    </form>
  </div>
);

Popup.propTypes = {
  /** Function which close the Popup */
  setDisplayPopup: PropTypes.func.isRequired,
  /**Function to send form value to API */
  manageSubmit: PropTypes.func.isRequired,
  /** value for the title event */
  titleEvent: PropTypes.string.isRequired,
  /** value for the start date event */
  startDateEvent: PropTypes.string.isRequired,
  /** value for the end date event */
  endDateEvent: PropTypes.string.isRequired,
  /**Function to update the title value */
  setTitleEvent: PropTypes.func.isRequired,
  /**Function to update the start date value */
  setStartDateEvent: PropTypes.func.isRequired,
  /**Function to update the end date value */
  setEndDateEvent: PropTypes.func.isRequired,
}

export default Popup;
