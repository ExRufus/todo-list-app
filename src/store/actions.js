import axios from 'axios';

export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const SET_TASKS = 'SET_TASKS';

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const toggleTask = (taskId) => ({
  type: TOGGLE_TASK,
  payload: taskId,
});

export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId,
});

export const setTasks = (tasks) => ({
  type: SET_TASKS,
  payload: tasks,
});

export const fetchTasks = (dispatch) => {
  axios
    .get('https://jsonplaceholder.typicode.com/todos')
    .then((response) => {
      const tasks = response.data;
      dispatch(setTasks(tasks));
    })
    .catch((error) => {
      console.error('Error fetching tasks:', error);
    });
};
