import cls from './LangSwitcher.module.scss';
import { classNames } from 'shared/config/lib/classNames/ClassNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/config/ui/Button/Button';

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(cls.LangSwitcher, {}, [className])}
      onClick={toggleLanguage}
    >
      { t('language') }
    </Button>
  )
}
