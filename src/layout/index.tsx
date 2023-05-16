import { Outlet } from 'react-router-dom';
import styles from './index.module.less';
import { createContext, useReducer } from 'react';

type LayoutOptions = {
  expandSidebar?: boolean;
}

interface LayoutAction {
  type: string;
  date?: LayoutOptions
}

interface LayoutContextValue {
  options: LayoutOptions;
  toggleExpandSidebar: () => void;
}

const defaultOptions: LayoutOptions = {
  expandSidebar: true
};

const LayoutContext = createContext<LayoutContextValue>({
  options: defaultOptions,
  toggleExpandSidebar: () => {}
});

const layoutReducer = (state: LayoutOptions, action: LayoutAction) => {
  return state;
};


const Layout = () => {
  const [ layoutOptions, layoutDispatch ] = useReducer(layoutReducer, defaultOptions);

  const toggleExpandSidebar = () => {
    console.log('toggleExpandSidebar');
  };

  return (
    <LayoutContext.Provider value={{layoutOptions, toggleExpandSidebar}}>
      <div className={styles.app}>
        <div className={styles.sidebar}>
          bar
        </div>
        <div className={styles.main}>
          <Outlet />
        </div>
      </div>
    </LayoutContext.Provider>
  );
};

export default Layout;