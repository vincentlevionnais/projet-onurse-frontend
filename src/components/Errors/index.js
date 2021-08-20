// == Import npm
import React from 'react';
import { ArrowLeftCircle } from 'react-feather';
import 'animate.css';
import { Link } from 'react-router-dom';
// == Import
import pansement from '../../assets/images/pansement.png';
import './errors.scss';

// == Composant
const Errors = () => {

  return (
  <div className="error">
    <div className="pansement">
      <p>Oups !</p>
      <img 
        className="animate__animated animate__bounceInDown" 
        src={pansement} 
        alt="pansement" 
      />
      <p>Page non trouvée</p>
    </div>
    <div className="return">
      <Link 
        to="/"
        className="home-link">
        <ArrowLeftCircle />
        Retour à l'accueil
      </Link>
      
    </div>
  </div>
  )
};

// == Export
export default Errors;
