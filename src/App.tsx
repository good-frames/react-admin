import Router from '@/router/index';
import { ConfigProvider } from 'antd';

const App = () => {
  return (
    <ConfigProvider>
      <Router></Router>
    </ConfigProvider>
  );
};

export default App;