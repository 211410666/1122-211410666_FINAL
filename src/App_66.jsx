import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
import LandingStatic_66 from './pages/open/pages/LandingStatic_66';
import Landing_66 from './pages/open/pages/Landing_66';
import AppLayout from './ui/AppLayout';
import ProtectedRoute from './ui/ProtectedRoute';
import GlobalStyles from './styles/GlobalStyles';

import {
  Account_66,
  Bookings_66,
  Cabins_66,
  Dashboard_66,
  Login_66,
  PageNotFound_66,
  Settings_66,
  NewUsers_66,
} from './pages';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60, // 1 minutes
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing_66 />,
  },
  {
    path: '/landing',
    element: <Landing_66 />,
  },
  {
    path: '/login',
    element: <Login_66 />,
  },
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    )
    ,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard_66 />,
      },
      {
        path: 'bookings',
        element: <Bookings_66 />,
      },
      {
        path: 'bookings/:bookingId',
        element: <Bookings_66 />,
      },
      {
        path: 'cabins',
        element: <Cabins_66 />,
      },
      {
        path: 'users',
        element: <NewUsers_66 />,
      },
      {
        path: 'settings',
        element: <Settings_66 />,
      },
      {
        path: 'account',
        element: <Account_66 />,
      },
    ],
  },
]);

const App_66 = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <RouterProvider router={router} />
      <Toaster
        position='top-center'
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 4000,
          },
          styles: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
            backgroundColor: 'var(--color-grey-0)',
            color: 'var(--color-grey-70)',
          },
        }}
      />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
};

export default App_66;
