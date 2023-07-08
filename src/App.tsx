
import { Routes, Route, Link } from 'react-router-dom';
import './styles/index.scss';
import AboutPage from './pages/AboutPage/AboutPage';
import MainPage from './pages/MainPage/MainPage';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/ClassNames';



const App = () => {
  const {theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Switch theme</button>
      <Link to={'/about'}>About</Link>
      <Link to={'/'}>Home</Link>
      <Routes>
        <Route path={'/about'} element={<AboutPage />}/>
        <Route path={'/'} element={<MainPage />}/>
      </Routes>
    </div>
  )
}

export default App;