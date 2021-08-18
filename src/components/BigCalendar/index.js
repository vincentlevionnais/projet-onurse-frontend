import React, { useState } from 'react';
// import events from 'src/events';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import moment from 'moment';

import Popup from './Popup';

import './bigCalendar.scss';

import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);
// const date = new Date();
const DnDCalendar = withDragAndDrop(Calendar);

const BigCalendar = () => {
  const styled = {
    height: '100vh',
    // backgroundImage: `url(${BackGroundLogo})`,
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: '50%',
    // margin: 0,
    // overflow: 'hidden',
  };

  const [events, setEvents] = useState([]);
  const [displayPopup, setDisplayPopup] = useState(false);
  const [titleEvent, setTitleEvent] = useState('');
  const [startDateEvent, setStartDateEvent] = useState('');
  const [endDateEvent, setEndDateEvent] = useState('');
  const [color, setColor] = useState('');

  const onEventResize = (data) => {
    const { start, end } = data;
    console.log(data);

    const eventToResise = events.find((item) => item.id === events.id);

    console.log(eventToResise);
    console.log(events);

    eventToResise.start.start = start;
    eventToResise.end.end = end;
    // events[0].start = start;
    // events[0].end = end;
    setEvents([...events]);
  };

  const onEventDrop = (data) => {
    const { start, end } = data;
    console.log(data);

    events[0].start = start;
    events[0].end = end;
    setEvents([...events]);
  };

  //* modif du state pour affichage popup ajout event
  const onEventsAdded = () => {
    setDisplayPopup(true);
  };

  const changeBgColor = () => {
    const style = {

      backgroundColor: color,
      borderRadius: '3px',
      opacity: 0.8,
      color: 'black',
      border: '0px',
      display: 'block',
    };
    return {
      style: style,
    };
  };

  const getNextId = (data) => {
    // cas particulier si tableau vide
    let highestId = 0;

    if (data.length > 0) {
      const ids = data.map((item) => item.id);

      highestId = Math.max(...ids);
    }
    return highestId + 1;
  };

  //* ajout d'un event
  const manageSubmit = () => {
    const newEvents = {
      id: getNextId(events),
      title: titleEvent,
      start: startDateEvent,
      end: endDateEvent,
      isAllDay: false,
    };

    console.log(titleEvent);
    console.log(startDateEvent);
    console.log(endDateEvent);
    console.log(color);

    setEvents([...events, newEvents]);
    setDisplayPopup(false);
    setTitleEvent('');
  };
  console.log(events);

  return (
    <div className="calendar">
      {displayPopup
      && (
      <Popup
        manageSubmit={manageSubmit}
        titleEvent={titleEvent}
        setTitleEvent={setTitleEvent}
        startDateEvent={startDateEvent}
        setStartDateEvent={setStartDateEvent}
        endDateEvent={endDateEvent}
        setEndDateEvent={setEndDateEvent}
        color={color}
        setColor={setColor}
      />
      )}
      <DnDCalendar
        style={styled}
        eventPropGetter={changeBgColor}
        defaultDate={moment().toDate()}
        defaultView="month"
        events={events}
        localizer={localizer}
        onEventDrop={onEventDrop}
        onEventResize={onEventResize}
        resizable
        selectable
        onSelectSlot={onEventsAdded}
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
  );
};

export default BigCalendar;
