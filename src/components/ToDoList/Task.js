import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { X } from 'react-feather';

const Task = ({ id, status, taskName }) => {

  const cssClass = classNames(
    'task-container',
    { 'task-container--done': status===1 },
  );

  return (
    <li className={cssClass}>
      <label className="label" htmlFor={id}>
        <input
          type="checkbox"
          className="checkbox"
          id={id}
          //checked={done}
          onChange={(event) => {
            console.log("on change le statut de la tâche");
          }}
        />
        {taskName}
      </label>
      <div className="delete-task">
        <X 
          onClick={() => {
            console.log('suppression de la tâche');
          }}
        />
      </div>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  taskName: PropTypes.string.isRequired,
  status: PropTypes.number.isRequired,
};

export default Task;
