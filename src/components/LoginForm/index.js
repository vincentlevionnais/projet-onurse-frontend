import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import Field from 'src/components/Field';

// import { loginFormValidateValue } from 'src/utils';
import logo from 'src/assets/images/LOGO3-rond.png';

import Popup from 'src/containers/LoginForm/Popup';

import './loginForm.scss';

/**
 * Affichage d'un formulaire d'authentification (email, mot de passe)
 */
const LoginForm = ({
  email,
  password,
  changeField,
  handleLogin,
  togglePopup,
  displayPopup,

}) => (
  <>
    {displayPopup && <Popup />}

    <div className="login-form">

      <form
        autoComplete="off"
        className="login-form-element"
        onSubmit={(evt) => {
          evt.preventDefault();
          // TODO ci dessous validation des info email et mdp,
          //  a voir avec l'equipe, pour le moment les mdp en base
          // ne respecte pas la regex et longueur mini
          // if (loginFormValidateValue(email, password)) {
          // }
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

      <div>
        <button
          type="submit"
          onClick={() => togglePopup()}
          className="forgot-password-button"
        >
          Mot de passe oublié
        </button>
      </div>
      <div className="log-create-account">
        <Link
          to="/account/create/account"
          className="log-create-account-link"
        >
          Créer un compte
        </Link>
      </div>
      <div className="logo">
        <img className="logo-pic-login" src={logo} alt="logo o'nurse" />
      </div>
    </div>
  </>

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
  /** called when the lost button is clicked */
  togglePopup: PropTypes.func.isRequired,
  /** default value false */
  displayPopup: PropTypes.bool.isRequired,
};

export default LoginForm;
