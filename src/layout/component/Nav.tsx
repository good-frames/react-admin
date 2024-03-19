import { useContext } from 'react';
import { Button } from 'antd';
import { MenuFoldOutlined } from '@ant-design/icons';

import { LayoutContext } from '../layoutContext';
import styles from '../styles/nav.module.less';

const Nav = () => {
  const { options, toggleExpandSidebar } = useContext(LayoutContext);

  return (
    <div className={styles.nav}>
      <Button type="primary" shape="circle" icon={<MenuFoldOutlined />} onClick={toggleExpandSidebar} />
    </div>
  );
};

export default Nav;