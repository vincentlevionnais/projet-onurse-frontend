import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import Field from 'src/components/Field';

import logo from 'src/assets/images/LOGO-V3.png';

import './loginForm.scss';

/**
 * Affichage d'un formulaire d'authentification (email, mot de passe)
 */
const LoginForm = ({
  email,
  password,
  changeField,
  handleLogin,

}) => (

  <div className="login-form">

    <form
      autoComplete="off"
      className="login-form-element"
      onSubmit={(evt) => {
        evt.preventDefault();
        console.log('je soumet la connexion');
        handleLogin();
      }}
    >
      <Field
        className="login-form-input"
        name="email"
        placeholder="Email"
        manageChange={((newValue, name) => {
          changeField(newValue, name);
        })}
        value={email}
      />
      <Field
        className="login-form-input"
        name="password"
        type="password"
        placeholder="Mot de passe"
        manageChange={((newValue, name) => {
          changeField(newValue, name);
        })}
        value={password}
      />
      <button
        type="submit"
        className="login-form-button"
      >
        Se connecter
      </button>
    </form>

    <div className="log-create-account">
      <Link
        to="/account/create/account"
        className="log-create-account-link"
      >
        Créer un compte
      </Link>
    </div>
    <div className="logo">
      <img className="logo-pic" src={logo} alt="logo o'nurse" />
    </div>
  </div>

);

LoginForm.propTypes = {
  /** value for the email */
  email: PropTypes.string.isRequired,
  /** value for the password */
  password: PropTypes.string.isRequired,
  /** called when onChange event is received by an input, two parameters :
   * - new value
   * - name
   */
  changeField: PropTypes.func.isRequired,
  /** called when the form is submitted */
  handleLogin: PropTypes.func.isRequired,
};

export default LoginForm;
