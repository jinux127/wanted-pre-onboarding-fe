import { IAuthForm, IAuthResponse } from '../types/auth';
import { customAxios } from './customApi';

export const signIn = async (postData: IAuthForm): Promise<IAuthResponse> => {
  const res = await customAxios.post('/auth/signin', postData);
  return res.data;
};

export const signUp = async (postData: IAuthForm): Promise<IAuthResponse> => {
  const res = await customAxios.post('/auth/signup', postData);
  return res.data;
};
