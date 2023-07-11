
import { Link } from 'react-router-dom';
import './styles/index.scss';
import { AppRouter } from './providers/router';
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { classNames } from 'shared/config/lib/classNames/ClassNames';


const App = () => {
  const {theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Switch theme</button>
      <Link to={'/about'}>About</Link>
      <Link to={'/'}>Home</Link>
      <AppRouter />
    </div>
  )
}

export default App;