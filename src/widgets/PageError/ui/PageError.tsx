import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/config/lib/classNames/ClassNames';
import { Button } from 'shared/config/ui/Button/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <p>{ t('error_message') }</p>
      <Button onClick={reloadPage}>{ t('reload_page') }</Button>
    </div>
  );
};
