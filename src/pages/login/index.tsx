import { Button, Space } from 'antd';
import { Link, Navigate } from 'react-router-dom';
import { useSuerStore } from '@/store';
import style from './index.module.less'

function App() {
  const [token, login] = useSuerStore((state) => [state.token, state.login],)
  if (token) {
    return <Navigate to="/dashboard" replace />
  }
  return (
    <>
      <Space className={style.login}>
        <Link to="/dashboard">
          <Button>Go</Button>
        </Link>
        <Button onClick={login}>login</Button>
      </Space>
    </>
  )
}

export default App
