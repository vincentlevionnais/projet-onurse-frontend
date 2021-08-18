/* eslint-disable react/prop-types */
import React from 'react';

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
      <button type="button" onClick={() => setDisplayPopup(false)}>Annuler</button>
      <button type="">Supprimer</button>
    </form>
  </div>
);

export default Popup;
// manageSubmit={manageSubmit}
//         titleEvent={titleEvent}
//         setTitleEvent={setTitleEvent}
//         startDateEvent={startDateEvent}
//         setStartDateEvent={setStartDateEvent}
//         endDateEvent={endDateEvent}
//         setEndDateEvent={setEndDateEvent}
//         color={color}
//         setColor={setColor}
