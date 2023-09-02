import { useState, useCallback } from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames/ClassNames';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { LoginModal } from 'features/AuthByUsername';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  return (
    <nav className={classNames(cls.Navbar, {}, [className])}>
      <ul>
        <li>
          <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main}>{ t('home') }</AppLink>
        </li>
        <li>
          <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about}>{ t('about') }</AppLink>
        </li>
        <li
          className={cls['ml-auto']}
        >
          <Button
            theme={ThemeButton.CLEAR_INVERTED}
            className={cls.links}
            onClick={onShowModal}
          >
            { t('enter') }
          </Button>
        </li>
      </ul>
      <LoginModal
        isOpen={isAuthModal}
        onClose={onCloseModal}
      />
    </nav>
  );
};

export default Navbar;
