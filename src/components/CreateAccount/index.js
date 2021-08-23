import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'react-feather';
import { useFormik } from 'formik';

import './createAccount.scss';

const CreateAccount = ({ manageSubmit }) => {
  const createAccountValidateValue = (values) => {
    const errors = {};

    if (!values.lastName) {
      errors.lastName = 'Requis';
    }
    else if (values.lastName.length > 20) {
      errors.lastName = 'Maximum : 20 caractères';
    }
    if (!values.firstName) {
      errors.firstName = 'Requis';
    }
    else if (values.firstName.length > 15) {
      errors.firstName = 'Maximum : 15 caractères';
    }

    if (!values.email) {
      errors.email = 'Requis';
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Adresse email invalide';
    }

    if (!values.phoneNumber) {
      errors.phoneNumber = 'Requis';
    }
    else if (!/^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/i.test(values.phoneNumber)) {
      errors.phoneNumber = 'Format invalide';
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phoneNumber: '',
    },
    createAccountValidateValue,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      manageSubmit();
    },
  });

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

      <form className="create-account-container" onSubmit={formik.manageSubmit}>
        <input
          className="create-account-input"
          placeholder="Nom"
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}

        <input
          className="create-account-input"
          placeholder="Prénom"
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}

        <input
          className="create-account-input"
          placeholder="Email"
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}

        <input
          className="create-account-input"
          placeholder="Mot de passe"
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password ? <div>{formik.errors.password}</div> : null}

        <input
          className="create-account-input"
          placeholder="N° de téléphone"
          id="phoneNumber"
          name="phoneNumber"
          type="tel"
          onChange={formik.handleChange}
          value={formik.values.phoneNumber}
        />
        {formik.errors.phoneNumber ? <div>{formik.errors.phoneNumber}</div> : null}

        <button className="create-account-button" type="submit">Valider</button>
      </form>
    </>

  );
};

CreateAccount.prototype = {

};
export default CreateAccount;

/*
firstname
lastname
email
password
phone
*/
