import React from 'react';
import PropTypes from 'prop-types';

// other components
import Header from 'src/containers/Page/Header';
import Field from 'src/components/Field';

import './settings.scss';

const Settings = ({
  changeField, email, confirmationEmail, confirmationPassword,
  password, manageSubmit, manageDeleteSubmit,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    // todo mieux gerer les validations utiliser la fonction utils
    if (email !== '') {
      if (email === confirmationEmail) {
        console.log('je soumet dans le mail');
        manageSubmit();
      }
      else {
        alert('champs requis non identique');
      }
    }
    if (password !== '') {
      if (password === confirmationPassword) {
        console.log('je soumet dans le pasword');
        manageSubmit();
      }
      else {
        alert('champs requis non identique');
      }
    }
  };

  const handleDelete = (evt) => {
    if (confirm('Etes vous sur de vouloir supprmier votre compte?')) {
      evt.preventDefault();
      manageDeleteSubmit();
    }
  };

  return (
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
              onClick={(evt) => handleSubmit(evt)}
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
              type="password"
              placeholder="Nouvelle mot de passe"
              manageChange={((newValue, name) => {
                changeField(newValue, name);
              })}
              value={password}
            />
            <Field
              className="settings-input"
              name="confirmationPassword"
              type="password"
              placeholder="Confirmer votre mot de passe"
              manageChange={((newValue, name) => {
                changeField(newValue, name);
              })}
              value={confirmationPassword}
            />
            <button
              className="settings-validation-button"
              type="submit"
              onClick={(evt) => handleSubmit(evt)}
            > Modifier
            </button>

          </form>
        </section>

        <section className="settings-section-Update">
          <h2 className="settings-title"> Supprimer votre compte</h2>
          <p className="settings-text"> Attention, la suppression de votre compte entraine
            la suppression de toutes vos données.
          </p>

          {/* // todo mieux gerer la confirm de supp,
              // TODO une popup de confirmation,
              // todo au bouton valider un state passe à true, si true popup?? */}

          <form className="settings-form">
            <button
              className="settings-validation-button"
              type="submit"
              onClick={(evt) => handleDelete(evt)}
            > Valider
            </button>
          </form>
        </section>

      </div>
    </>
  );
};

Settings.propTypes = {

  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmationEmail: PropTypes.string.isRequired,
  confirmationPassword: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  manageSubmit: PropTypes.func.isRequired,
  manageDeleteSubmit: PropTypes.func.isRequired,
};

export default Settings;
