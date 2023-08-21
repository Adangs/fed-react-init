import { ConfigProvider } from 'antd';
import { FC, ReactNode } from 'react';

interface ParentProps {
  children: ReactNode;
}

const App: FC = ({ children }: ParentProps) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#536FFF',
        colorLink: '#536FFF',
        colorInfo: '#536FFF',
        colorSuccess: '#22B46B',
        colorWarning: '#FDAA29',
        colorError: '#FD494D',
        colorTextBase: '#1F2225',
        fontFamily: '"Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif'
      },
    }}
  >
    {children}
  </ConfigProvider>
);

export default App;
