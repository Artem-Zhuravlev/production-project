import { FC, lazy } from 'react';
import { LoginFormProps } from './LoginForm';

export const LoginFormAsync = lazy <FC<LoginFormProps>>(() => new Promise((resolve) => {
  // @ts-ignore
  // mock file for education
  setTimeout(() => resolve(import('./LoginForm')), 1500);
}));
