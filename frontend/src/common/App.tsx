import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Placeholder from './Placeholder';

import original from 'react95/dist/themes/original';
import { ClippyProvider } from '@react95/clippy';
import VPayWnd from 'src/payments/views/VPayWnd';
import { InnerApp } from 'src/events/InnerApp';
import VPayResultWnd from '../payments/views/VPayResultWnd';
import { LoginPresenter } from '../login/LoginPresenter';

// zmiencie sobie routy jak będzie trzeba B)
const router = createBrowserRouter([
  {
    path: '/',
    element: <Placeholder title="index" />,
  },
  {
    path: '/login',
    element: <LoginPresenter />,
  },
  {
    path: '/events',
    element: <InnerApp />,
  },
  {
    path: '/payments',
    element: <VPayWnd />,
  },
  {
    path: '/payments/result',
    element: <VPayResultWnd />,
  },
]);

const App = () => {
  return (
    <ClippyProvider>
      <ThemeProvider theme={original}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </ClippyProvider>
  );
};

export default App;
