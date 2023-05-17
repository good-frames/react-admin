import { useContext } from 'react';
import { Button } from 'antd';
import { MenuFoldOutlined } from '@ant-design/icons';

import { LayoutContext } from '../layoutContext';

const Nav = () => {
  const { options, toggleExpandSidebar } = useContext(LayoutContext);

  return (
    <div>
      <span>nav</span>

      <Button type="primary" shape="circle" icon={<MenuFoldOutlined />} onClick={toggleExpandSidebar} />
    </div>
  );
};

export default Nav;