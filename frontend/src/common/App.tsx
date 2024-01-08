import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Placeholder from './Placeholder';

import original from 'react95/dist/themes/original';
import { ClippyProvider } from '@react95/clippy';
import VPayWnd from 'src/payments/views/VPayWnd';
import { InnerApp } from 'src/events/InnerApp';
import VPayResultWnd from '../payments/views/VPayResultWnd';
import { VQrScannerWnd } from 'src/qr-scanner/VQrScannerWnd';
import { MagicPanelForDevelopment } from '../events/interfaces/MagicPanelForDevelopment';

// zmiencie sobie routy jak będzie trzeba B)
export const routes = [
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
    element: <InnerApp />,
  },
  {
    path: '/panel',
    element: <InnerApp />,
  },
  {
    path: '/payments',
    element: <VPayWnd />,
  },
  {
    path: '/payments',
    element: <VPayWnd />,
  },
  {
    path: '/qr-code',
    element: <VQrScannerWnd />,
  },
  {
    path: '/payments/result',
    element: <VPayResultWnd />,
  },
  {
    path: '/panelActiveStarted/:gameName',
    element: <MagicPanelForDevelopment />,
  },
];

export const routePaths = routes.map((route) => route.path);

const router = createBrowserRouter(routes);

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
