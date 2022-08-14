import { ITodo, ITodoForm } from '../types/todo';
import { customAxios } from './customApi';

export const createTodo = async (postData: ITodoForm): Promise<ITodo> => {
  const res = await customAxios.post('/todos', postData);
  return res.data;
};

export const getTodos = async (): Promise<ITodo[]> => {
  const res = await customAxios.get('/todos');
  return res.data;
};
export const updateTodo = async (postData: ITodo): Promise<ITodo> => {
  const res = await customAxios.put(`/todos/${postData.id}`, postData);
  console.log(res);
  return res.data;
};

export const deleteTodo = async (postData: ITodo) => {
  const res = await customAxios.delete(`/todos/${postData.id}`);
  return res;
};
