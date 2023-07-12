import { AppLink, AppLinkTheme } from 'shared/config/ui/AppLink/AppLink';
import { classNames } from 'shared/config/lib/classNames/ClassNames';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

const Navbar = ({className}: NavbarProps) => {
  return (
    <nav className={classNames(cls.Navbar, {}, [className])}>
      <ul>
        <li>
          <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>About</AppLink>
        </li>
        <li>
         <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>Home</AppLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;