import React from 'react';
import Header from 'src/containers/Page/Header';
import Elise from 'src/assets/images/avatars/Elise.png';
import Thery from 'src/assets/images/avatars/Thery.png';
import Pauline from 'src/assets/images/avatars/Pauline.png';
import Sabrina from 'src/assets/images/avatars/Sabrina.png';
import Vincent from 'src/assets/images/avatars/Vincent.png';
import './about.scss';

const About = () => (
  <>
    <Header titlePage="A propos" />
    <main className='main-about'>
      <h2 className='about-title'>O'nurse</h2>
      <p className='about-content'>
        O’nurse est une application web permettant de <strong>faciliter l’organisation quotidienne</strong> des infirmiers libéraux. Elle permet de gérer des <strong>fiches patients</strong> contenant toutes les informations nécessaires et de <strong>gérer son planning</strong> en fonction des RDV. Ce projet répond à une problématique récurrente pour les infirmiers libéraux (et autres métiers médicaux “itinérant”). L’organisation est un poids face à des journées très denses.
      </p>
      <h2 className='about-title'>Qui sommes nous ?</h2>
      <div className='avatar'>
        <div className='avatar-element'>
          <img className='avatar-pic' src={Elise}/>
          <legend className='avatar-name'>Elise</legend>
          <legend className='avatar-function'>Scrum Master</legend>
        </div>
        <div className='avatar-element'>
          <img className='avatar-pic' src={Thery}/>
          <legend className='avatar-name'>Thery</legend>
          <legend className='avatar-function'>Lead Dev Front</legend>
        </div>
        <div className='avatar-element'>
          <img className='avatar-pic' src={Pauline}/>
          <legend className='avatar-name'>Pauline</legend>
          <legend className='avatar-function'>Product Owner</legend>
        </div>
        <div className='avatar-element'>
          <img className='avatar-pic' src={Sabrina}/>
          <legend className='avatar-name'>Sabrina</legend>
          <legend className='avatar-function'>Git master</legend>
        </div>
        <div className='avatar-element'>
          <img className='avatar-pic' src={Vincent}/>
          <legend className='avatar-name'>Vincent</legend>
          <legend className='avatar-function'>Lead Dev Back</legend>
        </div>
      </div>
    </main>
  </>
);

export default About;
