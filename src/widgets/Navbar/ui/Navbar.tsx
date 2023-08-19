import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames/ClassNames';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <nav className={classNames(cls.Navbar, {}, [className])}>
      <ul>
        <li>
          <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main}>{ t('home') }</AppLink>
        </li>
        <li>
          <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about}>{ t('about') }</AppLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
