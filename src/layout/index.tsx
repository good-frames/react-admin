import { useImmerReducer } from 'use-immer';
import { Layout } from 'antd';
import { LayoutOptions, LayoutAction, defaultOptions, LayoutContext } from './layoutContext';

import Nav from './component/Nav';
import Menus from './component/Menus';
import Main from './component/Main';

import styles from './styles/index.module.less';
import Logo from '@/assets/images/logo.jpg';

const { Header, Sider, Content } = Layout;

const layoutReducer = (state: LayoutOptions, action: LayoutAction) => {
  switch (action.type) {
  case 'toggleExpand': {
    if (action.expandSidebar !== undefined) {
      state.expandSidebar = action.expandSidebar;
    } else {
      state.expandSidebar = !state.expandSidebar;
    }
  }
    break;
  default: break;
  }

  return state;
};


const DashboardLayout = () => {
  const [ layoutOptions, layoutDispatch ] = useImmerReducer(layoutReducer, defaultOptions);

  const toggleExpandSidebar = () => {
    console.log('toggleExpandSidebar');
    layoutDispatch({ type: 'toggleExpand' });
  };

  return (
    <LayoutContext.Provider value={{options: layoutOptions, toggleExpandSidebar}}>
      <Layout className={styles.app}>
        <Sider 
          trigger={null}
          // theme="light"
          collapsedWidth="64"
          collapsible
          collapsed={layoutOptions.expandSidebar}
        >
          <div className={styles.logo}>
            <img src={Logo}/>
          </div>
          <Menus></Menus>
        </Sider>
        <Layout>
          <Header className={styles.header}>
            <Nav></Nav>
          </Header>
          <Content>
            <Main></Main>
          </Content>
        </Layout>
      </Layout>
    </LayoutContext.Provider>
  );
};

export default DashboardLayout;