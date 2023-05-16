import { Outlet } from 'react-router-dom';
import { useImmerReducer } from 'use-immer';

import { LayoutOptions, LayoutAction, defaultOptions, LayoutContext } from './layoutContext';
import Nav from './Nav';

import styles from './index.module.less';

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


const Layout = () => {
  const [ layoutOptions, layoutDispatch ] = useImmerReducer(layoutReducer, defaultOptions);

  const toggleExpandSidebar = () => {
    console.log('toggleExpandSidebar');
    layoutDispatch({ type: 'toggleExpand' });
  };

  return (
    <LayoutContext.Provider value={{options: layoutOptions, toggleExpandSidebar}}>
      <div className={styles.app}>
        <div className={`${styles.sidebar} ${layoutOptions.expandSidebar ? styles.expand : ''}`}>
          <span>bar</span>
        </div>
        <div className={styles.main}>
          <div className="nav">
            <Nav></Nav>
          </div>
          <Outlet />
        </div>
      </div>
    </LayoutContext.Provider>
  );
};

export default Layout;