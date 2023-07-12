
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

const AppRouter = () => {
  return (
    <Routes>
      {Object.values(routeConfig).map(({element, path}) => {
        <Route
          path={path}
          element={element}
          key={path}
        />
      })}
    </Routes>
  )
}

export default AppRouter;