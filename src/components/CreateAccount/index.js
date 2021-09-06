import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'react-feather';

import { createAccountValidateValue } from 'src/utils';
import './createAccount.scss';

const CreateAccount = ({
  lastName,
  firstName,
  email,
  password,
  confirmationPassword,
  phone,
  manageSubmit,
  handleChange,
}) => {
  const onSubmit = (evt) => {
    evt.preventDefault();
    const errors = createAccountValidateValue(lastName, firstName, email, password, phone);

    if (errors && password === confirmationPassword) {
      manageSubmit();
    }
    else if (password !== confirmationPassword) {
      alert('Les mots de passe ne correspondent pas');
    }
  };

  return (
    <>
      <header className="header-create-account">
        <Link
          to="/login"
          className="home-button"
        >
          <ArrowLeft />
        </Link>
        <div className="header-infos">
          <h1 className="header-title">
            Créer un compte
          </h1>
        </div>
      </header>
      <form
        className="create-account-container"
        onSubmit={(evt) => {
          onSubmit(evt);
        }}
      >
        <input
          className="create-account-input"
          placeholder="Nom"
          id="lastName"
          name="lastName"
          type="text"
          onChange={((evt) => {
            handleChange(evt.target.value, evt.target.name);
          })}
          value={lastName}
        />

        <input
          className="create-account-input"
          placeholder="Prénom"
          id="firstName"
          name="firstName"
          type="text"
          onChange={((evt) => {
            handleChange(evt.target.value, evt.target.name);
          })}
          value={firstName}
        />

        <input
          className="create-account-input"
          placeholder="Email"
          id="email"
          name="email"
          type="email"
          onChange={((evt) => {
            handleChange(evt.target.value, evt.target.name);
          })}
          value={email}
        />

        <input
          className="create-account-input"
          placeholder="Mot de passe"
          id="password"
          name="password"
          type="password"
          onChange={((evt) => {
            handleChange(evt.target.value, evt.target.name);
          })}
          value={password}
        />

        <input
          className="create-account-input"
          placeholder="Confirmer votre mot de passe"
          id="confirmationPassword"
          name="confirmationPassword"
          type="password"
          onChange={((evt) => {
            handleChange(evt.target.value, evt.target.name);
          })}
          value={confirmationPassword}
        />

        <input
          className="create-account-input"
          placeholder="N° de téléphone"
          id="phone"
          name="phone"
          type="tel"
          onChange={((evt) => {
            handleChange(evt.target.value, evt.target.name);
          })}
          value={phone}
        />

        <button className="create-account-button" type="submit">Valider</button>
      </form>
    </>

  );
};

CreateAccount.propTypes = {
  lastName: Proptypes.string.isRequired,
  firstName: Proptypes.string.isRequired,
  email: Proptypes.string.isRequired,
  confirmationPassword: Proptypes.string.isRequired,
  password: Proptypes.string.isRequired,
  phone: Proptypes.string.isRequired,
  manageSubmit: Proptypes.func.isRequired,
  handleChange: Proptypes.func.isRequired,
};
export default CreateAccount;
