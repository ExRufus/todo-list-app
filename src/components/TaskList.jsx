import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';
import AddTaskForm from './AddTaskForm';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);

  return (
    <div className="container">
      <h1>Todo List</h1>
      <AddTaskForm />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
