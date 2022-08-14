import { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import * as loginApi from '../../apis/loginApi';
import { IAuthForm, IAuthResponse } from '../../types/auth';
import { LOGIN_ERROR_MESSAGE } from '../../utils/constants';
import { checkEmailValid, checkShortPassword, loginTodo } from '../../utils/util';
import { Button } from '../button';
import FormInput from '../input/FormInput';

const LoginForm = () => {
  const navigate = useNavigate();
  // const [data, setData] = useState<IAuthForm>({ email: '', password: '' });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(!(checkShortPassword(password) && checkEmailValid(email)));
  }, [email, password]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const FormData = {
      email,
      password,
    };

    try {
      const res = await loginApi.signIn(FormData);
      loginTodo(res.access_token);
      navigate('/todo');
    } catch (error) {
      error === LOGIN_ERROR_MESSAGE ? alert('잘못된 비밀번호입니다.') : alert(error);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <FormInput
        inputName='email'
        required={true}
        labelProps={{ name: '이메일', htmlFor: 'email' }}
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
      />
      <FormInput
        inputName='password'
        required={true}
        type='password'
        labelProps={{ name: '비밀번호', htmlFor: 'password' }}
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
      />
      <Button name='로그인' type='submit' disabled={isValid} />
      <Button name='회원가입' type='button' onClick={() => navigate('/register')} />
    </StyledForm>
  );
};
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border: 1px solid;
`;
export default LoginForm;
