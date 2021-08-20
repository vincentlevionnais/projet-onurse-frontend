import React from 'react';
import PropTypes from 'prop-types';

const CivilStatus = ({
  birthdate,
  completeAdress,
  phone,
  trustedPerson,
  nir,
  mutualName,
  mutualNumberAmc,
  doctorName,
}) => {
  
  // convert birthdate props (string) in Date Object
  const birthdateInDate = new Date(birthdate);

  return (
  <div className="section civil-status">
    <h2 className="civil-status_title title">
      Etat-civil
    </h2>
    <div className="identity">
      <p>Date de naissance : 
        {
          `${birthdateInDate.getDate()}
          /${birthdateInDate.getMonth()}
          /${birthdateInDate.getFullYear()}`
        }
      </p>
      <p>Adresse: {completeAdress}</p>
      <p>Téléphone: {phone}</p>
    </div>
    <div className="trusted-person">
      <h3>Personne de confiance</h3>
      <p>{trustedPerson}</p>
    </div>
    <div className="teletransmission-infos">
      <h3>Informations télétransmission</h3>
      <p>N° SS: {nir}</p>
      <p>Mutuelle : {mutualName}</p>
      <p>N° télétransmission: {mutualNumberAmc}</p>
    </div>
    <div className="doctor">
      <h3>Médecin traitant</h3>
      <p>Dr {doctorName}</p>
    </div>
  </div>
)};

CivilStatus.propTypes = {
  birthdate: PropTypes.string.isRequired,
  completeAdress: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  trustedPerson: PropTypes.string,
  nir: PropTypes.string.isRequired,
  mutualName: PropTypes.string.isRequired,
  mutualNumberAmc: PropTypes.string.isRequired,
  doctorName: PropTypes.string.isRequired,
};

CivilStatus.defaultProps = {
  trustedPerson: "",
}

export default CivilStatus;
