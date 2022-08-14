import { useEffect, useState } from 'react';
import * as todoApi from '../apis/todoApi';
import { ITodo } from '../types/todo';

const useTodo = () => {
  const [data, setData] = useState<ITodo[]>([]);

  const getTodos = async () => {
    try {
      const res = await todoApi.getTodos();
      if (res) setData(res);
    } catch (error) {}
  };

  useEffect(() => {
    getTodos();
  }, []);

  return {
    data,
    setData,
    getTodos,
  };
};

export default useTodo;
