import { FC } from 'react';
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';

const App: FC = () => {
  return (
    <Result
      status="403"
      title="403"
      subTitle="抱歉，您没有权限访问当前页面"
      extra={
        <Link to='/login'>
          <Button type="primary">重新登录</Button>
        </Link>
      }
    />
  );
}

export default App;
