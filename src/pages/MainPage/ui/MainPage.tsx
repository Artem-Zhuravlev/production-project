import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';

export const MainPage = () => {
  const { t } = useTranslation('home');

  return (
    <div>
      { t('home_page') }
      <Counter />
    </div>
  );
};
