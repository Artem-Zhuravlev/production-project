import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/config/lib/classNames/ClassNames';
import cls from './NotFoundPage.scss';

interface NotFoundPageProps {
  className?: string
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.NotFoundPage, {}, [className])}>
      { t('not_found') }
    </div>
  );
};
