import { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import * as loginApi from '../../apis/loginApi';
import { registerFormValid } from '../../utils/util';
import { Button } from '../button';
import FormInput from '../input/FormInput';
import Label from '../label/Label';

const RegisterForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_check, setPassword_check] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [validMessage, setIsValidMessage] = useState('');
  useEffect(() => {
    const FormData = {
      email,
      password,
      password_check,
    };

    const { status, message } = registerFormValid(FormData);

    setIsValid(!status);
    setIsValidMessage(message || '');
  }, [email, password, password_check]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const FormData = {
      email,
      password,
      password_check,
    };

    const { status, message } = registerFormValid(FormData);

    if (!status) {
      alert(message);
      return;
    }

    try {
      await loginApi.signUp(FormData);
      navigate('/');
    } catch (error) {
      alert(error);
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
      <FormInput
        inputName='password_check'
        required={true}
        type='password'
        labelProps={{ name: '비밀번호 확인', htmlFor: 'password_check' }}
        value={password_check}
        onChange={(e) => setPassword_check(e.currentTarget.value)}
      />
      <Label name={validMessage} />

      <>{isValid ? '' : validMessage}</>
      <Button name='가입하기' type='submit' disabled={isValid} />
      <Button name='취소' type='button' onClick={() => navigate('/')} />
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

export default RegisterForm;
