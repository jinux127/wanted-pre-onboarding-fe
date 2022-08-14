import { EMAIL_ERROR_MESSAGE, PASSWORD_ERROR_MESSAGE, PASSWORD_SHORT_ERROR_MESSAGE } from './constants';

export const checkPassword = (password: string, password_check: string) => password === password_check;
export const checkShortPassword = (password: string) => password.length >= 8;

export const checkEmailValid = (email: string) => {
  // 요구사항 1: 이메일 조건 @ 포함
  const regExp = /@/g;
  return regExp.test(email);
};

export const registerFormValid = ({
  email,
  password,
  password_check,
}: {
  email: string;
  password: string;
  password_check: string;
}) => {
  if (!checkEmailValid(email)) return { status: false, message: EMAIL_ERROR_MESSAGE };
  if (!checkShortPassword(password)) return { status: false, message: PASSWORD_SHORT_ERROR_MESSAGE };
  if (!checkPassword(password, password_check)) return { status: false, message: PASSWORD_ERROR_MESSAGE };
  return { status: true };
};

export const loginTodo = (access_token: string) => localStorage.setItem('token', access_token);
export const logoutTodo = () => localStorage.removeItem('token');
