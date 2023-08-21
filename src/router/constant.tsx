import { Navigate } from 'react-router-dom';
import Login from '@/pages/login';
import Error from '@/pages/error';
import Error403 from '@/pages/error/403';
export default [
  {
    path: '/',
    element: <Navigate to="/login" />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/403',
    element: <Error403 />
  },
  {
    path: '/*',
    element: <Error />
  },
]
