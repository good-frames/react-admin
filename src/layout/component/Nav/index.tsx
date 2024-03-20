import { memo, useContext } from 'react';
import { Button } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import Breadcrumbs from './Breadcrumbs';
import User from './User';

import { LayoutContext } from '../../layoutContext';
import styles from '../../styles/nav.module.scss';

const Nav = memo(() => {
  const { options, toggleExpandSidebar } = useContext(LayoutContext);

  return (
    <div className={styles.nav}>
      <div className={styles['nav__left']}>
        <Button type="primary" shape="circle" icon={options.expandSidebar ? <MenuUnfoldOutlined /> : <MenuFoldOutlined /> } onClick={toggleExpandSidebar} />
        <Breadcrumbs></Breadcrumbs>
      </div>
      <div className={styles['nav__right']}>
        <User></User>
      </div>
    </div>
  );
});

export default Nav;