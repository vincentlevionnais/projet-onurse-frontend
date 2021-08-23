import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ArrowLeft, LogOut } from 'react-feather';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';

import moment from 'moment';

import Popup from 'src/containers/BigCalendar/Popup';

import './bigCalendar.scss';

import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

const BigCalendar = ({
  events,
  displayPopup,
  setDisplayPopup,
  onEventDrop,
  onEventResize,
  updateValueinPopup,
}) => {
  const styled = {
    height: '100vh',
    // backgroundImage: `url(${BackGroundLogo})`,
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: '50%',
    // margin: 0,
    // overflow: 'hidden',
  };

  const changeBgColor = () => {
    const style = {

      backgroundColor: '#00A79D',
      color: '#fff',
      borderRadius: '3px',
      opacity: 0.8,
      border: '0px',
      display: 'block',
    };
    return {
      style: style,
    };
  };

  return (
    <>
      <header className="header">
        <Link
          to="/"
          className="home-button"
        >
          <ArrowLeft />
        </Link>
        <div className="header-infos">
          <h1 className="header-title">
            Mon Calendrier
          </h1>
        </div>
        <Link
          to="/login"
          className="logout-button"
        >
          <LogOut />
        </Link>
      </header>
      <div className="calendar">
        {displayPopup && <Popup />}
        <DnDCalendar
          style={styled}
          eventPropGetter={changeBgColor}
          defaultDate={moment().toDate()}
          defaultView="month"
          events={events}
          localizer={localizer}
          onEventDrop={(data) => onEventDrop(data)}
          onEventResize={(data) => onEventResize(data)}
          onSelectEvent={(evt) => {
            setDisplayPopup();
            updateValueinPopup(evt);
          }}
          resizable
          selectable
          onSelectSlot={() => setDisplayPopup()}
          startAccessor="start"
          endAccessor="end"
          culture="fr"
          messages={{
            next: '>',
            previous: '<',
            today: 'Auj.',
            month: 'Mois',
            week: 'Semaine',
            day: 'Jour',
            monday: 'Lun.',
          }}
        />
      </div>
    </>
  );
};

BigCalendar.propTypes = {

  events: PropTypes.array.isRequired,
  displayPopup: PropTypes.bool.isRequired,
  setDisplayPopup: PropTypes.func.isRequired,
  onEventDrop: PropTypes.func.isRequired,
  onEventResize: PropTypes.func.isRequired,
  updateValueinPopup: PropTypes.func.isRequired,
};

export default BigCalendar;
