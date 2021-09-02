import React from 'react';
import Header from 'src/containers/Page/Header';
import Task from './Task';
import Form from 'src/containers/ToDoList/Form';
import './toDoList.scss';

const ToDoList = () => (
  <>
    <Header titlePage="TO-DO-LIST" />
    <main className="main-toDoList">
      <Form />
      <ul className="tasks">
        <Task
          id={1}
          done={true}
          label="acheter du pain"
        />
        <Task
          id={2}
          done={false}
          label="acheter du pain"
        />
        <Task
          id={3}
          done={false}
          label="acheter du pain"
        />
      </ul>
    </main>
  </>
);


export default ToDoList;
