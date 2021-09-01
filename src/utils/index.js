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
 * @param {strings} password input value
 * @param {strings} email input value
 * @param {strings} phone input value
 */

export const createAccountValidateValue = (lastName, firstName, email, password, phone) => {
  const errors = {};
  console.log('je suis la fonctione de vérif');

  if (lastName === '') {
    errors.lastName = 'Requis';
    alert('Nom Requis');
    console.log('je passe lastname');
    return false;
  }
  if (lastName.length > 64) {
    errors.lastName = 'Maximum : 64 caractères';
    alert('Maximum : 64 caractères');
    return false;
  }
  if (firstName === '') {
    errors.firstName = 'Requis';
    alert('Prénom Requis');
    console.log('je passe firstname');
    return false;
  }
  if (firstName.length > 64) {
    errors.firstName = 'Maximum : 15 caractères';
    alert('Maximum : 64 caractères');
    return false;
  }

  if (email === '') {
    errors.email = 'Requis';
    alert('Email Requis');
    return false;
  }
  if (email.length > 255) {
    errors.email = 'Maximum : 255 caractères';
    alert('Maximum : 255 caractères');
    return false;
  }

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = 'Adresse email invalide';
    alert('Adresse email invalide');
    console.log('je passe la regex mail');
    return false;
  }
  if (password === '') {
    errors.password = 'Requis';
    alert('Mot de passe Requis');
    return false;
  }
  // todo la regex ci dessous fonctionne en test sur un site (https://regexr.com/3bfsi) mais pas sur notre site
  if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(password)) {
    errors.password = 'Mot de passe invalide';
    console.log(password);
    alert('Mot de passe invalide, doit contenir au moins 8 caractères, 1 chiffre, une minuscule une majuscule');
    return false;
    // Contain at least 8 characters
    // contain at least 1 number
    // contain at least 1 lowercase character (a-z)
    // contain at least 1 uppercase character (A-Z)
    // contains only 0-9a-zA-Z
  }
  if (password.length < 8) {
    errors.password = 'Minimum : 8 caractères';
    alert('Mot de passe: Minimum 8 caractères');
    return false;
  }
  if (phone === '') {
    errors.phone = 'Requis';
    alert('Téléphone Requis');
    return false;
  }
  if (!/^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/i.test(phone)) {
    errors.phone = 'Format invalide';
    alert('Téléphone invalide');
    console.log('je passe la regex phone');
    return false;
  }

  return true;
};

/**
 *Validate the LoginForm components values
 * @param {string} email
 * @param {string} password
 *
 */
export const loginFormValidateValue = (email, password) => {
  const errors = {};

  if (email === '') {
    errors.email = 'Requis';
    alert('Email Requis');
    return false;
  }
  if (email.length > 255) {
    errors.email = 'Maximum : 255 caractères';
    alert('Adresse Mail: Maximum 255 caractères');
    return false;
  }
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = 'Adresse email invalide';
    alert('Adresse email invalide');
    return false;
  }

  if (password === '') {
    errors.password = 'Requis';
    alert('Mot de passe Requis');
    return false;
  }
  if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(password)) {
    errors.password = 'Mot de passe invalide';
    alert('Mot de passe invalide, doit contenir au moins 8 caractères, 1 chiffre, une minuscule une majuscule');
    return false;

    // Contain at least 8 characters
    // contain at least 1 number
    // contain at least 1 lowercase character (a-z)
    // contain at least 1 uppercase character (A-Z)
    // contains only 0-9a-zA-Z
  }
  if (password.length < 8) {
    errors.password = 'Minimum : 8 caractères';
    alert('Mot de passe: Minimum 8 caractères');
    return false;
  }

  return true;
};

/**
 *Validate the resetPassword components values
 * @param {string} password
 *
 */
export const resetPasswordValidateValue = (password) => {
  const errors = {};

  if (password === '') {
    errors.password = 'Requis';
    alert('Mot de passe Requis');
    return false;
  }
  if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(password)) {
    errors.password = 'Mot de passe invalide';
    alert('Mot de passe invalide, doit contenir au moins 8 caractères, 1 chiffre, une minuscule une majuscule');
    return false;

    // Contain at least 8 characters
    // contain at least 1 number
    // contain at least 1 lowercase character (a-z)
    // contain at least 1 uppercase character (A-Z)
    // contains only 0-9a-zA-Z
  }
  if (password.length < 8) {
    errors.password = 'Minimum : 8 caractères';
    alert('Mot de passe: Minimum 8 caractères');
    return false;
  }

  return true;
};

// function to select appointment of current day
/**
 * get patient with id
 * @param {Array} events all patients
 * @return appointment of current day
 */

export const searchAppointmentOfTheDay = (events) => {
  // current Date JJ/MM/AAAA
  const currentDay = `${new Date().getDate()} ${new Date().getMonth() + 1} ${new Date().getFullYear()}`;
  // filtered events by datetimeStart
  const appointmentOfTheDay = events.filter((appointment) => {
    const datetimeStart = new Date(appointment.start);
    // event datetimeStart JJ/MM/AAA
    const eventDate = `${datetimeStart.getDate()} ${datetimeStart.getMonth() + 1} ${datetimeStart.getFullYear()}`;
    return eventDate === currentDay;
  });

  // build a new table from appointment of the day, but sorted by hour to have a display in order
  const appointmentOfTheDayByHour = appointmentOfTheDay.sort((a, b) => {
    if (a.start < b.start) {
      return -1;
    }
    if (a.start > b.start) {
      return 1;
    }
    return 0;
  });
  return appointmentOfTheDayByHour;
};

export const searchAppointmentOfPatient = (events, patient_id) => {
  // filtered events by patient id
  const appointmentOfPatient = events.filter((appointment) => parseInt(appointment.patient.id) === parseInt(patient_id));
  // build a new table from appointment of the day, but sorted by hour to have a display in order
  const appointmentOfPatientByDate = appointmentOfPatient.sort((a, b) => {
    if (a.start < b.start) {
      return -1;
    }
    if (a.start > b.start) {
      return 1;
    }
    return 0;
  });
  return appointmentOfPatientByDate;
};

export const searchNextappointments = (appointmentOfPatient) => {
  const currentDate = new Date();
  const nextAppointments = appointmentOfPatient.filter((appointment) => new Date(appointment.start) >= currentDate);
  const nextAppointmentsByDate = nextAppointments.sort((a, b) => {
    if (a.start < b.start) {
      return -1;
    }
    if (a.start > b.start) {
      return 1;
    }
    return 0;
  });
  return nextAppointmentsByDate;
};
