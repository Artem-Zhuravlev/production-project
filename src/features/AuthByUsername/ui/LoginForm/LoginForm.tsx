import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/ClassNames';
import { Button, ThemeButton, ButtonSize } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/ui/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input
        type="text"
        className={cls.input}
        autofocus
        placeholder={t('username')}
      />
      <Input
        type="text"
        className={cls.input}
        placeholder={t('password')}
      />
      <Button
        theme={ThemeButton.OUTLINE}
        size={ButtonSize.M}
        className={cls.loginBtn}
      >
        {t('enter')}
      </Button>
    </div>
  );
};
