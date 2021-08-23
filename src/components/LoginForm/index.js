import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import Field from 'src/components/Field';

import logo from 'src/assets/images/LOGO-V3.png';

import './loginForm.scss';
/**
 * Affichage d'un formulaire d'authentification (email, mot de passe)
 * Deux modes d'affichage :
 * - non connecté => formulaire affiché
 * - connecté => message et bouton de déconnexion
 */
const LoginForm = ({
  email,
  password,
  changeField,
  handleLogin,
  handleLogout,
  isLogged,
  loggedMessage,

}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  return (
    <div className="login-form">
      {isLogged && (
        <div className="login-form-logged">
          <p className="login-form-message">
            {loggedMessage}
          </p>
          <button
            type="button"
            className="login-form-button"
            onClick={handleLogout}
          >
            Déconnexion
          </button>
        </div>
      )}
      {!isLogged && (

        <form autoComplete="off" className="login-form-element" onSubmit={handleSubmit}>
          <Field
            name="email"
            placeholder="Email"
            manageChange={((newValue, name) => {
              changeField(newValue, name);
            })}
            value={email}
          />
          <Field
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
      )}

      <div className="log-create-account">
        <Link
          to="/account/create/account"
          className="nav-link"
        >
          Créer un compte
        </Link>
      </div>
      <div className="logo">
        <img className="logo-pic" src={logo} alt="logo o'nurse" />
      </div>
    </div>
  );
};

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
  /** called when the "Déconnexion" button is clicked */
  handleLogout: PropTypes.func.isRequired,
  /** toggle between "connected" or "not connected" */
  isLogged: PropTypes.bool,
  /** message displayed when "connected" */
  loggedMessage: PropTypes.string,
};

LoginForm.defaultProps = {
  isLogged: false,
  loggedMessage: 'Connecté',
};

export default LoginForm;
