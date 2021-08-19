import React from 'react';

const CivilStatus = () => (
  <div className="section civil-status">
    <h2 className="civil-status_title title">
      Etat-civil
    </h2>
    <div className="identity">
      <p>Date de naissance : 11/12/1960</p>
      <p>Adresse: 11 rue des pâquerettes 91000 Evry</p>
      <p>Téléphone: 06.05.03.05.36</p>
    </div>
    <div className="trusted-person">
      <h3>Personne de confiance</h3>
      <p>Mme YYY Bernadette (voisine)
        <br/>
        12 rue des pâquerettes 91000 Evry
        <br/>
        06.07.04.25.52
      </p>
    </div>
    <div className="teletransmission-infos">
      <h3>Informations télétransmission</h3>
      <p>N° SS: 01 60 02 91 185 275 56</p>
      <p>Mutuelle : AXA</p>
      <p>N° télétransmission: 1589758</p>
    </div>
    <div className="doctor">
      <h3>Médecin traitant</h3>
      <p>Dr Yves MARTIN</p>
    </div>
    
  </div>
);

export default CivilStatus;
