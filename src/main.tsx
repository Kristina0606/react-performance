import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from './pages/Layout.tsx';
import MainPage from './pages/MainPage.tsx';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import TablePage from './pages/TablePage.tsx';
import { ClipLoader } from 'react-spinners';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    HydrateFallback: () => (
      <div className="h-screen flex items-center justify-center">
        <ClipLoader
          color="#57729dff"
          loading={true}
          size={48}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    ),
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: '/:country',
        element: <TablePage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>
);
