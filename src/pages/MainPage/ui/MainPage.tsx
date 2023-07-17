import { useTranslation } from 'react-i18next';

export const MainPage = () => {
  const { t } = useTranslation('home');

  return (
    <div>
      { t('home_page') }
    </div>
  );
};
