export const SUBMIT_NEW_PATIENT = 'SUBMIT_NEW_PATIENT';
export const ADD_PATIENT = 'ADD_PATIENT';

export const submitNewPatient = (data) => ({
  type: SUBMIT_NEW_PATIENT,
  patient: data,
});

export const addPatient = (id, lastName, firstName, dateOfBirth, phoneNumber, adress,
  complement, information, doctor, NIR, mutual, AMC, pathology, trustedPersonLastName,
  trustedPersonFirstName, relation, TrustedPersonPhoneNumber, TrustedPersonAdress) => (
  {
    type: ADD_PATIENT,
    lastName: lastName,
    firstName: firstName,
    dateOfBirth: dateOfBirth,
    phoneNumber: phoneNumber,
    adress: adress,
    complement: complement,
    information: information,
    doctor: doctor,
    NIR: NIR,
    mutual: mutual,
    AMC: AMC,
    pathology: pathology,
    trustedPersonLastName: trustedPersonLastName,
    trustedPersonFirstName: trustedPersonFirstName,
    relation: relation,
    TrustedPersonPhoneNumber: TrustedPersonPhoneNumber,
    TrustedPersonAdress: TrustedPersonAdress,

  });
