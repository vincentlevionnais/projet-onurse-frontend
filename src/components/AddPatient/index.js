import React from 'react';
import { useFormik } from 'formik';

import './addPatient.scss';

const validate = values => {
  const errors = {};
  if (!values.lastName) {
    errors.lastName = 'Requis';
  } else if (values.lastName.length > 20) {
    errors.lastName = 'Maximum : 20 caractères';
  }
  if (!values.firstName) {
    errors.firstName = 'Requis';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Maximum : 15 caractères';
  }

  if (!values.dateOfBirth) {
    errors.dateOfBirth = 'Requis';
  } else if (!/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i.test(values.dateOfBirth)) {
    errors.dateOfBirth = 'Date invalide';
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = 'Requis';
  } else if (!/^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/i.test(values.dateOfBirth)) {
    errors.phoneNumber = 'Format invalide';
  }

  if (!values.adress) {
    errors.adress = 'Requis';
  } else if (values.adress.length > 40) {
    errors.adress = 'Maximum : 40 caractères';
  }

  return errors;
};

const AddPatient = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      phoneNumber: '',
      adress: '',
      doctor: '',
      NIR: {},
      trustedPersonLastName: '',
      trustedPersonFirstName: '',
      relation: '',
      TrustedPersonPhoneNumber: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (

    <div className="home">
      <div className="header">
        <a href="javascript:history.go(-1)">&larr;</a>
        <p>Nouveau patient</p>
      </div>

      <form onSubmit={formik.handleSubmit}>
        <h2>Coordonnées du nouveau patient</h2>
        <input
          placeholder="Nom"
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}

        <input
          placeholder="Prénom"
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}

        <label htmlFor="dateOfBirth">Date de naissance
          <input
            id="dateOfBirth"
            name="dateOfBirth"
            type="date"
            onChange={formik.handleChange}
            value={formik.values.dateOfBirth}
          />
        </label>
        {formik.errors.dateOfBirth ? <div>{formik.errors.dateOfBirth}</div> : null}

        <input
          placeholder="N° de téléphone"
          id="phoneNumber"
          name="phoneNumber"
          type="tel"
          onChange={formik.handleChange}
          value={formik.values.phoneNumber}
        />
        {formik.errors.phoneNumber ? <div>{formik.errors.phoneNumber}</div> : null}

        <input
          placeholder="Adresse"
          id="adress"
          name="adress"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.adress}
        />
        {formik.errors.adress ? <div>{formik.errors.adress}</div> : null}

        <input
          placeholder="Complément d'adresse"
          id="complement"
          name="complement"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.complement}
        />
        {formik.errors.complement ? <div>{formik.errors.complement}</div> : null}

        <input
          placeholder="Informations diverses"
          id="information"
          name="information"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.information}
        />
        {formik.errors.information ? <div>{formik.errors.information}</div> : null}

        <h2>Médical</h2>
        <input
          placeholder="Medecin traitant"
          id="doctor"
          name="doctor"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.doctor}
        />
        {formik.errors.doctor ? <div>{formik.errors.doctor}</div> : null}

        <input
          placeholder="N° de Sécurité Sociale"
          id="NIR"
          name="NIR"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.NIR}
        />
        {formik.errors.NIR ? <div>{formik.errors.NIR}</div> : null}

        <input
          placeholder="Nom de la mutuelle"
          id="mutual"
          name="mutual"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.mutual}
        />
        {formik.errors.mutual ? <div>{formik.errors.mutual}</div> : null}

        <input
          placeholder="N° télétransmission (AMC)"
          id="AMC"
          name="AMC"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.AMC}
        />
        {formik.errors.AMC ? <div>{formik.errors.AMC}</div> : null}

        <input
          placeholder="Pathologie"
          id="pathology"
          name="pathology"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.pathology}
        />
        {formik.errors.pathology ? <div>{formik.errors.pathology}</div> : null}

        <h2>Personne de confiance</h2>

        <input
          placeholder="Nom"
          id="trustedPersonLastName"
          name="trustedPersonLastName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.trustedPersonLastName}
        />
        {formik.errors.trustedPersonLastName ? <div>{formik.errors.trustedPersonLastName}</div> : null}

        <input
          placeholder="Prénom"
          id="trustedPersonFirstName"
          name="trustedPersonFirstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.trustedPersonFirstName}
        />
        {formik.errors.trustedPersonFirstName ? <div>{formik.errors.trustedPersonFirstName}</div> : null}

        <input
          placeholder="Relation (père, soeur, voisin...)"
          id="relation"
          name="relation"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.relation}
        />
        {formik.errors.relation ? <div>{formik.errors.relation}</div> : null}

        <input
          placeholder="N° de téléphone"
          id="TrustedPersonPhoneNumber"
          name="TrustedPersonPhoneNumber"
          type="tel"
          onChange={formik.handleChange}
          value={formik.values.TrustedPersonPhoneNumber}
        />
        {formik.errors.TrustedPersonPhoneNumber ? <div>{formik.errors.TrustedPersonPhoneNumber}</div> : null}

        <input
          placeholder="Adresse"
          id="TrustedPersonAdress"
          name="TrustedPersonAdress"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.TrustedPersonAdress}
        />
        {formik.errors.TrustedPersonAdress ? <div>{formik.errors.TrustedPersonAdress}</div> : null}


        <button type="submit">Valider</button>
      </form>

    </div>
  );
};

export default AddPatient;
