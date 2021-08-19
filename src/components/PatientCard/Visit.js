import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'react-feather';

const Visit = () => (
  <div className="section visit">
    <h2 className="visit-title title">
      Visites
    </h2>
    <div className="visit-content">
      <div className="visit-content_infos">
        <div className="last-visit">
            <span>Dernière visite:</span> 31/04/2020
          </div>
        <div className="next-visit">
          <span>Prochaine visite:</span> 31/05/2020
        </div>
      </div>
      <div className="visit-content_calendarLogo">
        <Link
          to="/calendar"
        >
          <Calendar />
        </Link>
      </div>
    </div>
    
  </div>
);

export default Visit;
