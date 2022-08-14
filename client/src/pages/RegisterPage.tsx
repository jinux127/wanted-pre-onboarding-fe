import styled from 'styled-components';

import RegisterForm from '../components/form/RegisterForm';
import useTodo from '../hooks/useTodos';

const RegisterPage = () => {
  const { data } = useTodo();

  return (
    <StyledContainer>
      <RegisterForm />
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
export default RegisterPage;
