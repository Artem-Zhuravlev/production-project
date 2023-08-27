import { useState, useCallback } from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames/ClassNames';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Modal } from 'shared/ui/Modal';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
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
            onClick={onToggleModal}
          >
            { t('enter') }
          </Button>
        </li>
      </ul>
      <Modal
        isOpen={isAuthModal}
        onClose={onToggleModal}
      // eslint-disable-next-line i18next/no-literal-string
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ipsam esse facere magni voluptatibus doloremque tempora
        eveniet sunt voluptate quia inventore totam maiores,
        eligendi doloribus similique harum, praesentium autem ab iure!
      </Modal>
    </nav>
  );
};

export default Navbar;
