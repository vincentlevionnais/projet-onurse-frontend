import React from 'react';
import PropTypes from 'prop-types';

const Popup = ({
  togglePopup, popupEmail, changeField, manageSubmit,
}) => (
  <div className="popup">
    <form
      className="password-popup"
      onSubmit={(evt) => {
        evt.preventDefault();
        manageSubmit();
      }}
    >
      <h2 className="password-popup-title">Mot de passe oublié ?</h2>
      <p className="password-popup-text">Entrez votre e-mail et recevez un lien pour réinitialiser votre mot de passe.</p>
      <input className="password-popup-input" type="email" placeholder="Adresse mail" value={popupEmail} id="email" name="popupEmail" onChange={(evt) => changeField(evt.target.value, evt.target.name)} />

      <div className="buttons">
        <button className="password-button" type="submit">Valider</button>
        <button className="password-button" type="button" onClick={() => togglePopup()}>Annuler</button>
      </div>
    </form>
  </div>
);

Popup.propTypes = {
  /** function to close popup */
  togglePopup: PropTypes.func.isRequired,
  /** email input value */
  popupEmail: PropTypes.string.isRequired,
  /** function to update the email input value */
  changeField: PropTypes.func.isRequired,
  /** function to submit the form */
  manageSubmit: PropTypes.func.isRequired,
};

export default Popup;
