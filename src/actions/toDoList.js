
export const SET_LABEL = 'SET_LABEL';
export const FETCH_TASKS = 'FETCH_TASKS';
export const SAVE_TASKS = 'SAVE_TASKS';
export const SET_TASKS_LOADED = 'SET_TASKS_LOADED';
export const SUBMIT_TASK = 'SUBMIT_TASK';
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';

export const setLabel = (newValue, name) => ({
  type: SET_LABEL,
  value: newValue,
  name: name,
});

export const fetchTasks = () => ({
  type: FETCH_TASKS,
});

export const saveTasks = (tasks) => ({
  type: SAVE_TASKS,
  tasks: tasks,
});

export const setTasksLoaded = () => ({
  type: SET_TASKS_LOADED,
});

export const submitTask = (id) => ({
  type: SUBMIT_TASK,
  id: id,
});

export const addTask = (id /* ajout des autres propriétés */) => ({
  type: ADD_TASK,
  id: id,
 // ajout des autres propriétés
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  id: id, 
});

export const removeTask = (id) => ({
  type: REMOVE_TASK,
  id: id,
});

