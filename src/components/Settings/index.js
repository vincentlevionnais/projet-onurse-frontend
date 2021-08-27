import React from 'react';

// other components
import Header from 'src/containers/Page/Header';
import Field from 'src/components/Field';

import './settings.scss';

const Settings = ({ manageChange, email }) => (
  <>
    <Header titlePage="Parametres" />

    <div className="settings-container">
      <section className="settings-mailUpdate">
        <h2 className="settings-title"> Modifier votre identifiant</h2>
        <p> Votre identifiant ne peut être qu'une adresse mail valide</p>
        <form>
          <Field
            className="login-form-input"
            name="email"
            placeholder="Nouvelle adresse mail"
          />
          <Field
            className="login-form-input"
            name="email"
            placeholder="Confirmer votre adresse mail"
          />
          <button
            className="login-form-button"
            type="submit"
            onClick={() => console.log('clik sur mail')}
          > Modifier
          </button>

        </form>

      </section>

      <section className="settings-passwordUpdate">
        <h2 className="settings--title"> Modifier votre Mot de passe</h2>
        <p> Votre mot de passe doit contenir au moins 8 caractères dont:
          <ul>
            <li>- un chiffre </li>
            <li>- une lettre en minuscule</li>
            <li>- une une majuscule </li>
          </ul>
        </p>

        <form>
          <Field
            className="login-form-input"
            name="password"
            placeholder="Nouvelle mot de passe"
          />
          <Field
            className="login-form-input"
            name="password"
            placeholder="Confirmer votre mot de passe"
          />
          <button
            className="login-form-button"
            type="submit"
            onClick={() => console.log('clik sur mdp')}
          > Modifier
          </button>

        </form>
      </section>

      <section className="settings-deleteAccount">
        <h2 className="settings--title"> Supprimer votre compte</h2>
        {/* // todo gerer une popup de confirmation,
      // todo au bouton valider un state passe à true, si true popup?? */}
        <button
          className="login-form-button"
          type="submit"
          onClick={() => console.log('clik sur delete')}
        > Modifier
        </button>
      </section>

    </div>
  </>
);

export default Settings;
