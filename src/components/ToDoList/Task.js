import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { X } from 'react-feather';

const Task = ({ id, status, taskName, deleteTask, setTaskStatus }) => {

  const cssClass = classNames(
    'task-container',
    { 'task-container--done': status===1 },
  );

  let statusToChange;
  if(status===0) {
    statusToChange=1;
  } else if(status===1) {
    statusToChange===0;
  };

  return (
    <li className={cssClass}>
      <label className="label" htmlFor={id}>
        <input
          type="checkbox"
          className="checkbox"
          id={id}
          checked={status===1}
          onChange={() => {
            setTaskStatus(id, statusToChange);
          }}
        />
        {taskName}
      </label>
      <div className="delete-task">
        <X 
          onClick={() => {
            deleteTask(id);
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
  deleteTask: PropTypes.func.isRequired,
  setTaskStatus: PropTypes.func.isRequired,
};

export default Task;
