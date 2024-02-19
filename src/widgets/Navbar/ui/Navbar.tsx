import { useState, useCallback } from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames/ClassNames';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { LoginModal } from 'features/AuthByUsername';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { useSelector, useDispatch } from 'react-redux';
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from 'entities/User';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);
  const dispatch = useDispatch();

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const isAdminPanelAvailable = isAdmin || isManager;

  const renderButton = () => {
    if (authData) {
      return (
        <Dropdown
          direction="bottom left"
          className={cls.dropdown}
          items={[
            ...(isAdminPanelAvailable ? [{
              content: t('admin_panel'),
              href: RoutePath.admin_panel,
            }] : []),
            {
              content: t('profile'),
              href: RoutePath.profile + authData?.id,
            },
            {
              content: t('exit'),
              onClick: onLogout,
            },
          ]}
          trigger={<Avatar size={30} src={authData?.avatar} />}
        />
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
