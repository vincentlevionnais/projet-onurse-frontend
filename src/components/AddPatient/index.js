import React from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';

import './addPatient.scss';
import Header from 'src/containers/Page/Header';

const validate = (values) => {
  const errors = {};
  if (!values.lastname) {
    errors.lastname = 'Requis';
  } else if (values.lastname.length > 20) {
    errors.lastname = 'Maximum : 20 caractères';
  }
  if (!values.firstname) {
    errors.firstname = 'Requis';
  } else if (values.firstname.length > 15) {
    errors.firstname = 'Maximum : 15 caractères';
  }
  if (!values.birthdate) {
    errors.birthdate = 'Requis';
  } else if (!/^(?:(?:19|20)[0-9][0-9])-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/i.test(values.birthdate)) {
    errors.birthdate = 'Date invalide';
  }
  if (!values.phone) {
    errors.phone = 'Requis';
  } else if (!/^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/i.test(values.phone)) {
    errors.phone = 'Format invalide';
  }
  if (!values.completeAdress) {
    errors.completeAdress = 'Requis';
  } else if (values.completeAdress.length > 40) {
    errors.completeAdress = 'Maximum : 40 caractères';
  }
  if (!values.doctorName) {
    errors.doctorName = 'Requis';
  } else if (values.doctorName.length > 40) {
    errors.docdoctorNametor = 'Maximum : 30 caractères';
  }
  if (!values.nir) {
    errors.nir = 'Requis';
  } else if (!/^[12][0-9]{2}[0-1][0-9](2[AB]|[0-9]{2})[0-9]{3}[0-9]{3}[0-9]{2}$/i.test(values.nir)) {
    errors.nir = 'Format invalide';
  }
  if (!values.trustedPerson) {
    errors.trustedPerson = 'Requis';
  } else if (values.trustedPerson.length > 50) {
    errors.trustedPerson = 'Maximum : 50 caractères';
  }
  return errors;
};

const AddPatient = ({ onNewPatient }) => {
  const formik = useFormik({

    initialValues: {
      firstname: '',
      lastname: '',
      birthdate: '',
      phone: '',
      completeAdress: '',
      informationAdress: '',
      note: '',
      doctorName: '',
      nir: '',
      mutualName: '',
      mutualNumberAmc: '',
      pathology: '',
      trustedPerson: '',
    },

    validate,

    onSubmit: (values, { resetForm }) => {
      //  alert(JSON.stringify(values, null, 2));
      onNewPatient(values);
      resetForm({});
    },
  });

  return (
    <>
      <Header titlePage="Nouveau patient" />

      <main className="main">
        <form onSubmit={formik.handleSubmit}>
          <h2>Coordonnées du nouveau patient</h2>
          <input
            placeholder="Nom"
            id="lastname"
            name="lastname"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastname}
          />
          {formik.errors.lastname ? <div>{formik.errors.lastname}</div> : null}

          <input
            placeholder="Prénom"
            id="firstname"
            name="firstname"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstname}
          />
          {formik.errors.firstname ? <div>{formik.errors.firstname}</div> : null}

          <label htmlFor="birthdate">Date de naissance
            <input
              id="birthdate"
              name="birthdate"
              type="date"
              onChange={formik.handleChange}
              value={formik.values.birthdate}
            />
          </label>
          {formik.errors.birthdate ? <div>{formik.errors.birthdate}</div> : null}

          <input
            placeholder="N° de téléphone"
            id="phone"
            name="phone"
            type="tel"
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
          {formik.errors.phone ? <div>{formik.errors.phone}</div> : null}

          <input
            placeholder="Adresse"
            id="completeAdress"
            name="completeAdress"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.completeAdress}
          />
          {formik.errors.completeAdress ? <div>{formik.errors.completeAdress}</div> : null}

          <input
            placeholder="Complément d'adresse"
            id="informationAdress"
            name="informationAdress"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.informationAdress}
          />
          {formik.errors.informationAdress ? <div>{formik.errors.informationAdress}</div> : null}

          <input
            placeholder="Informations diverses"
            id="note"
            name="note"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.note}
          />
          {formik.errors.note ? <div>{formik.errors.note}</div> : null}

          <h2>Médical</h2>
          <input
            placeholder="Medecin traitant"
            id="doctorName"
            name="doctorName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.doctorName}
          />
          {formik.errors.doctorName ? <div>{formik.errors.doctorName}</div> : null}

          <input
            placeholder="N° de Sécurité Sociale"
            id="nir"
            name="nir"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.nir}
          />
          {formik.errors.nir ? <div>{formik.errors.nir}</div> : null}

          <input
            placeholder="Nom de la mutuelle"
            id="mutualName"
            name="mutualName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.mutualName}
          />
          {formik.errors.mutualName ? <div>{formik.errors.mutmutualNameual}</div> : null}

          <input
            placeholder="N° télétransmission (AMC)"
            id="mutualNumberAmc"
            name="mutualNumberAmc"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.mutualNumberAmc}
          />
          {formik.errors.mutualNumberAmc ? <div>{formik.errors.mutualNumberAmc}</div> : null}

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
            placeholder="Identité et coordonnées"
            id="trustedPerson"
            name="trustedPerson"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.trustedPerson}
          />
          {formik.errors.trustedPerson
            ? <div>{formik.errors.trustedPerson}</div> : null}

          <button type="submit">Valider</button>
        </form>
      </main>
    </>
  );
};

AddPatient.propTypes = {

  onNewPatient: PropTypes.func.isRequired,
};

export default AddPatient;
