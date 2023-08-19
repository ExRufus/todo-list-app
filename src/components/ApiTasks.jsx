import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTasks } from '../store/actions';

const ApiTasks = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchTasks(dispatch);
  }, [dispatch]);

  return null;
};

export default ApiTasks;
