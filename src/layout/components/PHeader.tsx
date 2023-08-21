import { FC } from 'react';
import { Layout } from 'antd';
import style from '../index.module.less'
const { Header } = Layout;
const { VITE_APP_NAME } = import.meta.env

const App: FC = () => {
  return (
    <Header style={{ background: '#657DFF', padding: '0 20px' }}>
      <div className={style.header}>
        <div className={style.systemName}>
          <h1 className={style.name}>{VITE_APP_NAME}</h1>
        </div>
      </div>
    </Header>
  );
}

export default App;
