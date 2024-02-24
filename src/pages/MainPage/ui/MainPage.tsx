import { useTranslation } from 'react-i18next';
import { Counter } from '@/entities/Counter';
import { ListBox } from '@/shared/ui/Popups';
import { Page } from '@/widgets/Page/Page';

export const MainPage = () => {
  const { t } = useTranslation('home');

  return (
    <Page data-testid="MainPage">
      {t('home_page')}
      <Counter />
      <ListBox
        defaultValue="Choose value"
        onChange={(value: string) => {}}
        value={undefined}
        items={[
          { value: '1', content: '123' },
          { value: '23', content: '234', disabled: true },
          { value: '43', content: '345' },
          { value: '45', content: '3455' },
        ]}
      />
    </Page>
  );
};
