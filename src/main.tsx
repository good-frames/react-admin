import ReactDOM from 'react-dom/client';
// 注入svg图标
import 'virtual:svg-icons-register';
import App from './App';
import '@/assets/styles/index.less';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App></App>
);
