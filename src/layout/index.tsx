import { Outlet } from 'react-router-dom';
import { useImmerReducer } from 'use-immer';
import { Layout, Menu } from 'antd';

import { LayoutOptions, LayoutAction, defaultOptions, LayoutContext } from './layoutContext';
import Nav from './Nav';

import styles from './index.module.less';
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
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                // icon: <UserOutlined />,
                label: 'nav 1',
              },
              {
                key: '2',
                // icon: <VideoCameraOutlined />,
                label: 'nav 2',
              },
              {
                key: '3',
                // icon: <UploadOutlined />,
                label: 'nav 3',
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header className={styles.header}>
            <Nav></Nav>
          </Header>
          <Content>
            <Outlet></Outlet>
          </Content>
        </Layout>
      </Layout>
    </LayoutContext.Provider>
  );
};

export default DashboardLayout;