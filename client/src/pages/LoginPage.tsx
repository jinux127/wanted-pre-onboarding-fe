import styled from 'styled-components';
import LoginForm from '../components/form/LoginForm';
import useTodo from '../hooks/useTodos';

const LoginPage = () => {
  const { data } = useTodo();
  return (
    <StyledContainer>
      <LoginForm />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 98vw;
  height: 98vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default LoginPage;
