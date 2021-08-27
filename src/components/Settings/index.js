import React from 'react';
import PropTypes from 'prop-types';

// other components
import Header from 'src/containers/Page/Header';
import Field from 'src/components/Field';

import './settings.scss';

const Settings = ({ changeField, email, confirmationEmail, confirmationPassword, password }) => (
  <>
    <Header titlePage="Parametres" />

    <div className="settings-container">
      <section className="settings-section-Update">
        <h2 className="settings-title"> Modifier votre identifiant</h2>
        <p className="settings-text"> Votre identifiant ne peut être qu'une adresse mail valide</p>
        <form className="settings-form">
          <Field
            className="settings-input"
            name="email"
            placeholder="Nouvelle adresse mail"
            manageChange={((newValue, name) => {
              changeField(newValue, name);
            })}
            value={email}
          />
          <Field
            className="settings-input"
            name="confirmationEmail"
            placeholder="Confirmer votre adresse mail"
            manageChange={((newValue, name) => {
              changeField(newValue, name);
            })}
            value={confirmationEmail}
          />
          <button
            className="settings-validation-button"
            type="submit"
            onClick={() => console.log('clik sur mail')}
          > Modifier
          </button>

        </form>

      </section>

      <section className="settings-section-Update">
        <h2 className="settings-title"> Modifier votre Mot de passe</h2>
        <p className="settings-text"> Votre mot de passe doit contenir au moins 8 caractères dont :</p>
        <ul className="settings-list">
          <li>- un chiffre </li>
          <li>- une lettre en minuscule</li>
          <li>- une une majuscule </li>
        </ul>

        <form className="settings-form">
          <Field
            className="settings-input"
            name="password"
            placeholder="Nouvelle mot de passe"
            manageChange={((newValue, name) => {
              changeField(newValue, name);
            })}
            value={password}

          />
          <Field
            className="settings-input"
            name="confirmationPassword"
            placeholder="Confirmer votre mot de passe"
            manageChange={((newValue, name) => {
              changeField(newValue, name);
            })}
            value={confirmationPassword}

          />
          <button
            className="settings-validation-button"
            type="submit"
            onClick={() => console.log('clik sur mdp')}
          > Modifier
          </button>

        </form>
      </section>

      <section className="settings-section-Update">
        <h2 className="settings-title"> Supprimer votre compte</h2>

        {/* // todo gerer une popup de confirmation,
      // todo au bouton valider un state passe à true, si true popup?? */}

        <form className="settings-form">
          <button
            className="settings-validation-button"
            type="submit"
            onClick={() => console.log('clik sur delete')}
          > Valider
          </button>
        </form>
      </section>

    </div>
  </>
);

Settings.propTypes = {

  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmationEmail: PropTypes.string.isRequired,
  confirmationPassword: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
};

export default Settings;
