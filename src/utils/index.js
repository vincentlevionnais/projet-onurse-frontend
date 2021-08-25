// function to get patient whith id
/**
 * get patient with id
 * @param {Number} id id of patient to search
 * @param {Array} patients all patients
 * @return patient to display
 */
export const getPatientById = (id, patients) => {
  const patientToDisplay = patients.find((item) => item.id === parseInt(id, 10));
  return patientToDisplay;
};

// function to search patient by name
/**
 * get patient with id
 * @param {string} search search of patient by name
 * @param {Array} patients all patients
 * @return patient to display
 */

export const searchPatientByName = (search, patients) => {
  const patientToDisplay = patients.filter((item) => {
    // transform search result in lower case
    const searchLowered = search.toLowerCase();
    // transforme patient's lastname in lower case
    const patientNameLowered = (`${item.lastname} ${item.firstname}`).toLowerCase();
    // return result if there is a connection between patient name and search
    return patientNameLowered.includes(searchLowered);
  });
  return patientToDisplay;
};

/**
 * Validate the CreateAccount components values
 * @param {strings} values input value
 */

export const createAccountValidateValue = (lastName, firstName, email, phone) => {
  const errors = {};

  if (lastName === '') {
    errors.lastName = 'Requis';
    alert('Nom Requis');
  }
  else if (lastName.length > 64) {
    errors.lastName = 'Maximum : 64 caractères';
    alert('Maximum : 64 caractères')
  }
  if (firstName === '') {
    errors.firstName = 'Requis';
    alert('Prénom Requis');
  }
  else if (firstName.length > 64) {
    errors.firstName = 'Maximum : 15 caractères';
    alert('Maximum : 64 caractères')
  }

  if (email === '') {
    errors.email = 'Requis';
    alert('Email Requis');
  }
  else if (email.length > 255) {
    errors.email = 'Maximum : 255 caractères';
    alert('Maximum : 255 caractères')
  }
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = 'Adresse email invalide';
    alert('Adresse email invalide');
  }

  if (phone === '') {
    errors.phone = 'Requis';
    alert('Téléphone Requis');
  }
  else if (!/^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/i.test(phone)) {
    errors.phone = 'Format invalide';
    alert('Format invalide');
  }

  return false;
};
