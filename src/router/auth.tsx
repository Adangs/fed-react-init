import { FC, ReactNode } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useSuerStore } from '@/store';
interface ParentProps {
  children: ReactNode;
}

const App: FC = ({ children }: ParentProps) => {
  const router = useLocation();
  console.log(router)
  const [token] = useSuerStore((state) => [state.token],)
  if (!token) return <Navigate to='/login' replace />
  return children;
};

export default App;

