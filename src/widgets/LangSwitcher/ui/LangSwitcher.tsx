import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/ClassNames';
import { Button, ThemeButton } from '@/shared/ui/Button';

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames('', {}, [className])}
      onClick={toggleLanguage}
    >
      {t(short ? 'short_language' : 'language')}
    </Button>
  );
});
