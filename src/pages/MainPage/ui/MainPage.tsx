import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';
import { Page } from 'shared/ui/Page/Page';

export const MainPage = () => {
  const { t } = useTranslation('home');

  return (
    <Page>
      { t('home_page') }
      <Counter />
    </Page>
  );
};
