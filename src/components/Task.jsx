// src/components/Task.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../store/actions';
import styles from './Task.module.css';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <tr className={`${styles.task} ${task.completed ? styles.completed : ''}`}>
      <td>{task.id}</td>
      <td>{task.title}</td>
      <td>{task.completed ? 'Completed' : 'Not Completed'}</td>
      <td className={styles.actions}>
        <label>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={handleToggle}
          />
          Read
        </label>
        <button onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
};

export default Task;
