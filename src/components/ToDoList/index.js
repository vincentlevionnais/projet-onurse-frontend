import React from 'react';
import PropTypes from 'prop-types';

import Header from 'src/containers/Page/Header';
import Task from './Task';
import Form from 'src/containers/ToDoList/Form';
import './toDoList.scss';

const ToDoList = ({ tasks }) => {
  return(
  <>
    <Header titlePage="TO-DO-LIST" />
    <main className="main-toDoList">
      <Form />
      <ul className="tasks">
        {tasks.map((task) => (
          <Task
            {...task}
            key={task.id}
          />
        ))}
      </ul>
    </main>
  </>
)};

ToDoList.propTypes = {
  tasks: PropTypes.array.isRequired,
};

export default ToDoList;
