import React from 'react';
import PropTypes from 'prop-types';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';

import moment from 'moment';

import Popup from 'src/containers/BigCalendar/Popup';

import './bigCalendar.scss';

import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

const BigCalendar = ({ events, displayPopup, setDisplayPopup, onEventDrop }) => {
  const styled = {
    height: '100vh',
    // backgroundImage: `url(${BackGroundLogo})`,
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: '50%',
    // margin: 0,
    // overflow: 'hidden',
  };

  // const onEventResize = (data) => {
  //   const { start, end } = data;
  //   console.log(data);

  //   const eventToResise = events.find((item) => item.id === events.id);

  //   console.log(eventToResise);
  //   console.log(events);

  //   eventToResise.start.start = start;
  //   eventToResise.end.end = end;
  //   // events[0].start = start;
  //   // events[0].end = end;
  //   setEvents([...events]);
  // };

  // const onEventDrop = (data) => {
  //   const { start, end } = data;
  //   console.log(data);

  //   events[0].start = start;
  //   events[0].end = end;
  //   setEvents([...events]);
  // };

  // const changeBgColor = () => {
  //   const style = {

  //     backgroundColor: color,
  //     borderRadius: '3px',
  //     opacity: 0.8,
  //     color: 'black',
  //     border: '0px',
  //     display: 'block',
  //   };
  //   return {
  //     style: style,
  //   };
  // };

  // console.log(events);

  return (
    <div className="calendar">
      {displayPopup && <Popup />}
      <DnDCalendar
        style={styled}
        // eventPropGetter={changeBgColor}
        defaultDate={moment().toDate()}
        defaultView="month"
        events={events}
        localizer={localizer}
        onEventDrop={(data) => onEventDrop(data)}
        // onEventResize={onEventResize}
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
  );
};

BigCalendar.propTypes = {

  events: PropTypes.array.isRequired,
  displayPopup: PropTypes.bool.isRequired,
  setDisplayPopup: PropTypes.func.isRequired,
  onEventDrop: PropTypes.func.isRequired,
};

export default BigCalendar;
