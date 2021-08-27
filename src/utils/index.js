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
 * @param {strings} lastName input value
 * @param {strings} firstName input value
 * @param {strings} email input value
 * @param {strings} phone input value
 */

export const createAccountValidateValue = (lastName, firstName, email, phone) => {
  const errors = {};

  if (lastName === '') {
    errors.lastName = 'Requis';
    alert('Nom Requis');
  }
  else if (lastName.length > 64) {
    errors.lastName = 'Maximum : 64 caractères';
    alert('Maximum : 64 caractères');
  }
  if (firstName === '') {
    errors.firstName = 'Requis';
    alert('Prénom Requis');
  }
  else if (firstName.length > 64) {
    errors.firstName = 'Maximum : 15 caractères';
    alert('Maximum : 64 caractères');
  }

  if (email === '') {
    errors.email = 'Requis';
    alert('Email Requis');
  }
  else if (email.length > 255) {
    errors.email = 'Maximum : 255 caractères';
    alert('Maximum : 255 caractères');
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

/**
 *
 * @param {string} email
 * @param {string} password
 *
 */
export const loginFormValidateValue = (email, password) => {
  const errors = {};

  if (email === '') {
    errors.email = 'Requis';
    alert('Email Requis');
  }
  else if (email.length > 255) {
    errors.email = 'Maximum : 255 caractères';
    alert('Adresse Mail: Maximum 255 caractères');
  }
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = 'Adresse email invalide';
    alert('Adresse email invalide');
  }

  if (password === '') {
    errors.password = 'Requis';
    alert('Mot de passe Requis');
  }
  else if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/i.test(password)) {
    errors.password = 'Mot de passe invalide';
    alert('Mot de passe invalide, doit contenir au moins 8 caractères, 1 numbre, 1 chiffre, une minuscule une majuscule');
    // Contain at least 8 characters
    // contain at least 1 number
    // contain at least 1 lowercase character (a-z)
    // contain at least 1 uppercase character (A-Z)
    // contains only 0-9a-zA-Z
  }
  else if (password.length < 8) {
    errors.password = 'Minimum : 8 caractères';
    alert('Mot de passe: Minimum 8 caractères');
  }

  return false;
};

// function to select appointment of current day
/**
 * get patient with id
 * @param {Array} events all patients
 * @return appointment of current day
 */

export const searchAppointmentOfTheDay = (events) => {
  // current Date JJ/MM/AAAA
  const currentDay = `${new Date().getDate()} ${new Date().getMonth()} ${new Date().getFullYear()}`;
  // filtered events by datetimeStart
  const appointmentOfTheDay = events.filter((appointment) => {
    const datetimeStart = new Date(appointment.datetimeStart);
    // event datetimeStart JJ/MM/AAA
    const eventDate = `${datetimeStart.getDate()} ${datetimeStart.getMonth()} ${datetimeStart.getFullYear()}`;
    return eventDate === currentDay;
  });

  // build a new table from appointment of the day, but sorted by hour to have a display in order
  const appointmentOfTheDayByHour = appointmentOfTheDay.sort((a, b) => {
    if (a.datetimeStart < b.datetimeStart) {
      return -1;
    }
    if (a.datetimeStart > b.datetimeStart) {
      return 1;
    }
    return 0;
  });

  return appointmentOfTheDayByHour;
};
