import { MouseEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import * as todoApi from '../../apis/todoApi';
import { ITodo } from '../../types/todo';
import { Button } from '../button';
import Input from '../input/Input';
import Label from '../label/Label';

interface Props {
  data: ITodo;
  getTodos: () => Promise<void>;
}

const TodoCard = ({ data, getTodos }: Props) => {
  const [isModify, setIsModify] = useState(false);
  const [todo, setTodo] = useState(data.todo);
  const [isCompleted, setIsCompleted] = useState(data.isCompleted);
  const handleComplete = async () => {
    (() => setIsCompleted((cur) => !cur))();
    try {
      const res = await todoApi.updateTodo({ ...data, isCompleted: !isCompleted });
    } catch (error) {
      alert(error);
    }
  };

  const handleDelete = async () => {
    try {
      await todoApi.deleteTodo(data);
      await getTodos();
    } catch (error) {
      alert(error);
    }
  };

  const handleModify = (e: React.MouseEvent<HTMLElement>) => {
    setIsModify((cur) => !cur);
  };

  const handleCompleteModify = async () => {
    try {
      const res = await todoApi.updateTodo({ ...data, todo, isCompleted });
      setIsModify(false);
      setTodo(res.todo);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <StyledContainer>
      <StyledLabelDiv onClick={handleModify} isCompleted={isCompleted}>
        {isModify ? (
          <Input
            inputName='todo'
            value={todo}
            onClick={(e) => e.stopPropagation()}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTodo(e.currentTarget.value)}
          />
        ) : (
          <Label name={todo} />
        )}
      </StyledLabelDiv>
      <StyledButtonDiv>
        {isModify ? (
          <>
            <Button name='수정' onClick={handleCompleteModify} width={3} height={5} type='button' />
            <Button
              name='취소'
              onClick={() => setIsModify(false)}
              width={3}
              height={5}
              hoverBackgroundColor='#ff1818e7'
              type='button'
            />
          </>
        ) : (
          <>
            {isCompleted ? (
              <Button name='취소' onClick={handleComplete} width={3} height={5} type='button' />
            ) : (
              <Button name='완료' onClick={handleComplete} width={3} height={5} type='button' />
            )}

            <Button
              name='삭제'
              onClick={handleDelete}
              width={3}
              height={5}
              hoverBackgroundColor='#ff1818e7'
              type='button'
            />
          </>
        )}
      </StyledButtonDiv>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  height: 5rem;
  margin: 0.2rem;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const StyledLabelDiv = styled.div<{ isCompleted: boolean }>`
  display: flex;
  margin: 0.2rem;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  transition: all 200ms linear;
  background-color: ${(props) => (props.isCompleted === true ? '#00ff00b5' : '#fffff')};
  overflow-x: auto;
  cursor: pointer;

  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
const StyledButtonDiv = styled.div`
  display: flex;
  margin: 0.2rem;
  align-items: center;
  justify-content: center;
`;

export default TodoCard;
