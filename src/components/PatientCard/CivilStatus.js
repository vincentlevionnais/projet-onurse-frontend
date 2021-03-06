import React from 'react';
import PropTypes from 'prop-types';

const CivilStatus = ({
  birthdate,
  completeAdress,
  informationAdress,
  phone,
  trustedPerson,
  nir,
  mutualName,
  mutualNumberAmc,
  doctorName,
}) => {
  // convert birthdate props (string) in french date
  const birthdateInDate = new Date(birthdate).toLocaleString('fr-FR', {
    timeZone: 'Europe/Paris',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  return (
  <div className="section civil-status">
    <h2 className="civil-status_title title">
      Etat-civil
    </h2>
    <div className="identity">
      <p>Date de naissance : 
        {birthdateInDate}
      </p>
      <p>Adresse: {completeAdress}  </p>
      <p>Complément d'adresse: {informationAdress}  </p>
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
  birthdate: PropTypes.string,
  completeAdress: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  trustedPerson: PropTypes.string,
  nir: PropTypes.string,
  mutualName: PropTypes.string,
  mutualNumberAmc: PropTypes.string,
  doctorName: PropTypes.string,
  informationAdress: PropTypes.string,
};

CivilStatus.defaultProps = {
  trustedPerson: "",
  birthdate: "",
  doctorName: "",
  mutualNumberAmc: "",
  mutualName: "",
  nir: "",
  informationAdress: "",
};

export default CivilStatus;
