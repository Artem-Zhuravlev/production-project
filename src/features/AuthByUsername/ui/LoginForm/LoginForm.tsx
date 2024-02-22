import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/ClassNames';
import { Button, ThemeButton, ButtonSize } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Text, TextTheme } from '@/shared/ui/Text';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { getLoginUserName } from '@/entities/User/model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '@/entities/User/model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '@/entities/User/model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '@/entities/User/model/selectors/getLoginError/getLoginError';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const username = useSelector(getLoginUserName);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [dispatch, onSuccess, password, username]);

  return (
    <DynamicModuleLoader
      reducers={initialReducers}
    >
      <div className={classNames(cls.LoginForm, {}, [className])}>
        <Text title={t('auth_form')} />
        { error && <Text text={error} theme={TextTheme.ERROR} /> }
        <Input
          autofocus
          type="text"
          className={cls.input}
          placeholder={t('username')}
          onChange={onChangeUsername}
          value={username}
        />
        <Input
          type="text"
          className={cls.input}
          placeholder={t('password')}
          onChange={onChangePassword}
          value={password}
        />
        <Button
          theme={ThemeButton.OUTLINE}
          size={ButtonSize.M}
          className={cls.loginBtn}
          onClick={onLoginClick}
          disabled={isLoading}
        >
          {t('enter')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
