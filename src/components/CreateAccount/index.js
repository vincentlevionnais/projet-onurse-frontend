import React, { useRef } from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'react-feather';
import { useFormik } from 'formik';

import { createAccountValidateValue } from 'src/utils';
import './createAccount.scss';

const CreateAccount = ({
  lastName,
  firstName,
  email,
  password,
  phone,
  manageSubmit,
  handleChange,
}) => {
  const formik = useFormik({
    initialValues: {
      lastName,
      firstName,
      email,
      password,
      phone,
      manageSubmit,

    },
    // createAccountValidateValue,
    // onSubmit: (evt, values) => {
    //   alert(JSON.stringify(values, null, 2));
    //   console.log('soumission ajout ');
    //   evt.preventDefault();
    //   manageSubmit();
    // },
  });

  // const errorsDiv = useRef(null);

  const onSubmit = (evt) => {
    evt.preventDefault();
    const errors = createAccountValidateValue(lastName, firstName, email, phone);

    if (errors) {
      manageSubmit();
    }
    // else {
    //   alert('vérification des infos');
    // }
  };

  return (
    <>
      <header className="header">
        <Link
          to="/"
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
        {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}

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
        {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}

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
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}

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
        {formik.errors.password ? <div>{formik.errors.password}</div> : null}

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
        {formik.errors.phoneNumber ? <div>{formik.errors.phoneNumber}</div> : null}

        <button className="create-account-button" type="submit">Valider</button>
      </form>
    </>

  );
};

CreateAccount.propTypes = {
  lastName: Proptypes.string.isRequired,
  firstName: Proptypes.string.isRequired,
  email: Proptypes.string.isRequired,
  password: Proptypes.string.isRequired,
  phone: Proptypes.string.isRequired,
  manageSubmit: Proptypes.func.isRequired,
  handleChange: Proptypes.func.isRequired,
};
export default CreateAccount;
