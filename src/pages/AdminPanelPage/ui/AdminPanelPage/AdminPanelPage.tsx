import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/ClassNames';

interface AdminPanelPageProps {
  className?: string;
}

const AdminPanelPage = memo((props: AdminPanelPageProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div
      className={classNames('', {}, [className])}
      data-testid="AdminPanelPage"
    >
      {t('admin_panel')}
    </div>
  );
});

export default AdminPanelPage;
