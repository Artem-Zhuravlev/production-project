import './styles/index.scss';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { classNames } from 'shared/config/lib/classNames/ClassNames';
import { Suspense } from 'react';

const App = () => {
  const {theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense
        fallback=""
      >
        <Navbar />
        <div className='content-page'>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}

export default App;