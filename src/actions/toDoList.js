export const SET_LABEL = 'SET_LABEL';
export const FETCH_TASKS = 'FETCH_TASKS';
export const SAVE_TASKS = 'SAVE_TASKS';

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
