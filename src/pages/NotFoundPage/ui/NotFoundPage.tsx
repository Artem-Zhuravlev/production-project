import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/ClassNames';
import { Page } from '@/widgets/Page/Page';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation();
  return (
    <Page
      data-testid="NotFoundPage"
      className={classNames(cls.NotFoundPage, {}, [className])}
    >
      {t('not_found')}
    </Page>
  );
};
