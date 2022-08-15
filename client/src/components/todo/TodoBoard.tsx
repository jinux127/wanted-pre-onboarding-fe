import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useTodo from '../../hooks/useTodos';
import { ITodo } from '../../types/todo';

import TodoCard from './TodoCard';
interface Props {
  data: ITodo[];
  getTodos: () => Promise<void>;
}
const TodoBoard = ({ data, getTodos }: Props) => {
  return (
    <StyledContainer>
      {data ? data?.map((todo) => <TodoCard data={todo} key={todo.id} getTodos={getTodos} />) : <>로딩중...</>}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid;
  height: 100%;
  width: 44.5rem;
  overflow: auto;
`;

export default TodoBoard;
