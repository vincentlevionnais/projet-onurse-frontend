import React from 'react';
import PropTypes from 'prop-types';

import { resetPasswordValidateValue } from 'src/utils';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'react-feather';

const ResetPassword = ({
  password, confirmationPassword, manageSubmit, changeField, redirectToLogin,
}) => {
  const onSubmit = (evt) => {
    evt.preventDefault();
    // const errors = resetPasswordValidateValue(password);
    // console.log(errors);
    // console.log('je click');

    manageSubmit();
    // if (errors && password === confirmationPassword) {
    // }
    // else if (password !== confirmationPassword) {
    //   alert('Les mots de passe ne correspondent pas');
    // }
};

  return (

    <>
      <header className="header">
        <Link
          to=""
          className="home-button"
          onClick={() => redirectToLogin()}
        >
          <ArrowLeft />
        </Link>
        <div className="header-infos">
          <h1 className="header-title">
            Nouveau mot de passe
          </h1>
        </div>
      </header>

      <section className="reset-password-section-Update">
        <h2 className="reset-password-title"> Définissez un nouveau mot de passe</h2>
        <p className="reset-password-text"> Votre mot de passe doit contenir au moins 8 caractères dont :</p>
        <ul className="reset-password-list">
          <li>- un chiffre </li>
          <li>- une lettre en minuscule</li>
          <li>- une une majuscule </li>
        </ul>

        <form
          className="reset-password-container"
          onSubmit={(evt) => {
            onSubmit(evt);
          }}
        >
          {/* <input
        className="create-account-input"
        placeholder="Email"
        id="email"
        name="email"
        type="email"
        onChange={((evt) => {
          changeField(evt.target.value, evt.target.name);
        })}
        value={email}
      /> */}

          <input
            className="reset-password-input"
            placeholder="Mot de passe"
            id="password"
            name="password"
            type="password"
            onChange={((evt) => {
              changeField(evt.target.value, evt.target.name);
            })}
            value={password}
          />

          <input
            className="reset-password-input"
            placeholder="Confirmer votre mot de passe"
            id="confirmationPassword"
            name="confirmationPassword"
            type="password"
            onChange={((evt) => {
              changeField(evt.target.value, evt.target.name);
            })}
            value={confirmationPassword}
          />

          <div className="reset-password-buttons">
            <button className="reset-password-button" type="submit">Valider</button>
            <button
              className="reset-password-button"
              type="button"
              onClick={() => redirectToLogin()}
            >
              Annuler
            </button>
          </div>

        </form>
      </section>

    </>

  );
};

ResetPassword.propTypes = {

  password: PropTypes.string.isRequired,
  confirmationPassword: PropTypes.string.isRequired,
  manageSubmit: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
  redirectToLogin: PropTypes.func.isRequired,
};

export default ResetPassword;
