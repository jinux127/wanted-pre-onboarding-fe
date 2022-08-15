import styled from 'styled-components';
import TodoForm from '../components/form/TodoForm';
import TodoBoard from '../components/todo/TodoBoard';
import useTodo from '../hooks/useTodos';

const TodoPage = () => {
  const { data, setData, getTodos } = useTodo();
  console.log(data);
  return (
    <StyledContainer>
      {/* <LoginForm /> */}
      <TodoForm setData={setData} />
      <TodoBoard data={data || []} getTodos={getTodos} />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 98vw;
  height: 98vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export default TodoPage;
