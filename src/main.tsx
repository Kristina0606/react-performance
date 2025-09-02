import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from './pages/Layout.tsx';
import MainPage from './pages/MainPage.tsx';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    HydrateFallback: () => (
      <div className="flex items-center justify-center h-screen">
        loading....
      </div>
    ),
    children: [
      {
        index: true,
        element: <MainPage />,
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
