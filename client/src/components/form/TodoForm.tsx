import { FormEvent, useState } from 'react';
import styled from 'styled-components';
import { createTodo } from '../../apis/todoApi';
import { ITodo } from '../../types/todo';
import { Button } from '../button';
import FormInput from '../input/FormInput';
interface Props {
  setData: React.Dispatch<React.SetStateAction<ITodo[]>>;
}
const TodoForm = ({ setData }: Props) => {
  const [todo, setTodo] = useState('');
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const FormData = {
      todo,
    };

    try {
      const res = await createTodo(FormData);
      setData((cur) => [...cur, res]);
      setTodo('');
    } catch (error) {
      alert(error);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <FormInput
        inputName='todo'
        required={true}
        labelProps={{ name: '할 일', htmlFor: 'todo' }}
        value={todo}
        onChange={(e) => {
          setTodo(e.currentTarget.value);
        }}
      />
      <Button width={6} name='추가' type='submit' />
    </StyledForm>
  );
};
const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border: 1px solid;
  margin: 3rem;
`;

export default TodoForm;
