import React from 'react';

// other components
import Header from 'src/containers/Page/Header';
import Field from 'src/components/Field';

import './settings.scss';

const Settings = ({ manageChange, email }) => (
  <>
    <Header titlePage="Parametres" />

    <div className="settings-container">
      <section className="settings-section-Update">
        <h2 className="settings-title"> Modifier votre identifiant</h2>
        <p> Votre identifiant ne peut être qu'une adresse mail valide</p>
        <form className="settings-form">
          <Field
            className="settings-input"
            name="email"
            placeholder="Nouvelle adresse mail"
          />
          <Field
            className="settings-input"
            name="email"
            placeholder="Confirmer votre adresse mail"
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
        <h2 className="settings--title"> Modifier votre Mot de passe</h2>
        <p> Votre mot de passe doit contenir au moins 8 caractères dont :
          <ul>
            <li>- un chiffre </li>
            <li>- une lettre en minuscule</li>
            <li>- une une majuscule </li>
          </ul>
        </p>

        <form className="settings-form">
          <Field
            className="settings-input"
            name="password"
            placeholder="Nouvelle mot de passe"
          />
          <Field
            className="settings-input"
            name="password"
            placeholder="Confirmer votre mot de passe"
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
        <h2 className="settings--title"> Supprimer votre compte</h2>

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

export default Settings;
