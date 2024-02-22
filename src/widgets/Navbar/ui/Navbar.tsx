import { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { classNames } from '@/shared/lib/classNames/ClassNames';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { LoginModal } from '@/features/AuthByUsername';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { getUserAuthData } from '@/entities/User';
import { Text, TextTheme } from '@/shared/ui/Text';
import cls from './Navbar.module.scss';
import { HStack } from '@/shared/ui/Stack';
import { NotificationButton } from '@/features/notificationButton';
import { AvatarDropdown } from '@/features/avatarDropdown';

interface NavbarProps {
  className?: string
}

const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const renderButton = () => {
    if (authData) {
      return (
        <HStack gap="16" className={cls.actions}>
          <NotificationButton />
          <AvatarDropdown />
        </HStack>
      );
    }

    return (
      <Button
        theme={ThemeButton.CLEAR_INVERTED}
        className={cls.links}
        onClick={onShowModal}
      >
        { t('enter') }
      </Button>
    );
  };

  return (
    <nav className={classNames(cls.Navbar, {}, [className])}>
      <ul>
        <li>
          <Text
            className={cls.appName}
            title={t('Jesm')}
            theme={TextTheme.ERROR}
          />
        </li>
        <li>
          <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main}>{ t('home') }</AppLink>
        </li>
        <li>
          <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about}>{ t('about') }</AppLink>
        </li>
        <li>
          <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={RoutePath.article_create}
          >
            { t('create_article') }
          </AppLink>
        </li>
        <li
          className={cls['ml-auto']}
        >
          {renderButton()}
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
