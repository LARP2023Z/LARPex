import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Placeholder from './Placeholder';

import original from 'react95/dist/themes/original';

// zmiencie sobie routy jak będzie trzeba B)
const router = createBrowserRouter([
  {
    path: '/',
    element: <Placeholder title="index" />,
  },
  {
    path: '/login',
    element: <Placeholder title="login" />,
  },
  {
    path: '/events',
    element: <Placeholder title="events" />,
  },
  {
    path: '/payments',
    element: <Placeholder title="payments" />,
  },
]);

const App = () => {
  return (
    <ThemeProvider theme={original}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
