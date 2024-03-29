import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';

export const AboutPage = () => {
  const { t } = useTranslation('about');

  return <Page data-testid="AboutPage">{t('about_us')}</Page>;
};
