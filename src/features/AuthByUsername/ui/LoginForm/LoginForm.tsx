import { classNames } from 'shared/lib/classNames/ClassNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton, ButtonSize } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/ui/Input';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { memo, useCallback, useEffect } from 'react';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider/config/StateSchema';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { getLoginUserName } from 'entities/User/model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from 'entities/User/model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from 'entities/User/model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from 'entities/User/model/selectors/getLoginError/getLoginError';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
  className?: string;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
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

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
    <DynamicModuleLoader
      removeAfterUnmount
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
