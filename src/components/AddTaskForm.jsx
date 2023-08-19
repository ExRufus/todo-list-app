import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/actions';
import styles from './AddTaskForm.module.css'; 

const AddTaskForm = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskTitle.trim() !== '') {
      dispatch(addTask({ userId: 1, id: Date.now(), title: taskTitle, completed: false }));
      setTaskTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.addTaskForm}>
      <input
        type="text"
        placeholder="Enter task title..."
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        className={styles.inputField}
      />
      <button type="submit" className={styles.addButton}>Add Task</button>
    </form>
  );
};

export default AddTaskForm;
