import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import { XApplication } from '@/components'
import Auth from '@/router/auth'
import PHeader from './components/PHeader'
const { Sider, Content } = Layout;

const App: FC = () => {
  return (
    <Auth>
      <XApplication>
        <Layout>
          <PHeader />
          <Layout>
            <Sider width={208} style={{ background: '#fff' }}>Sider</Sider>
            <Content style={{background: '#EDEFF8'}}>
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </XApplication>
    </Auth>
  );
}

export default App;
