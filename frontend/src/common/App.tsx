import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Placeholder from './Placeholder';

import original from 'react95/dist/themes/original';
import { EventsListView } from '../events/EventsListView';
import { ClippyProvider } from '@react95/clippy';
import { PaymentsPage } from 'src/payments/PaymentsPage';
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
    element: <EventsListView />,
  },
  {
    path: '/payments',
    element: <PaymentsPage />,
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
