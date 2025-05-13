// App.jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Fleet from './Pages/Fleet';
import Login from './auth/Login';
import Register from './auth/Register';
import AuthUser from './auth/AuthUser';
import Detailcar from './Pages/Detailcar';
import TypePage from './Pages/TypePage';
import ManufacturePage from './Pages/ManufacturePage';
import ErrorPage from './Pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/fleet',
    element: <Fleet />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/fleet/:type',
    element: <TypePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/car/:id',
    element: <Detailcar />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/brand/:brandName',
    element: <ManufacturePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: (
      <AuthUser>
        <Login />
      </AuthUser>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: '/register',
    element: (
      <AuthUser>
        <Register />
      </AuthUser>
    ),
    errorElement: <ErrorPage />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
