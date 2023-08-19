import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/store';
import TaskList from '../components/TaskList';
import ApiTasks from '../components/ApiTasks';

const Home = () => {
  return (
    <Provider store={store}>
      <div>
        <ApiTasks />
        <TaskList />
      </div>
    </Provider>
  );
};

export default Home;
