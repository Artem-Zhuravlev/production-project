import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';

const ForbiddenPage = () => {
  const { t } = useTranslation('');

  return <Page data-testid="ForbiddenPage">{t('access_denied')}</Page>;
};

export default ForbiddenPage;
