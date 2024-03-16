import { Menu } from 'antd';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined
} from '@ant-design/icons';

const menus = [
  {
    key: '1',
    icon: <DesktopOutlined />,
    label: 'nav 1',
  },
  {
    key: '2',
    icon: <FileOutlined />,
    label: 'nav 2',
  },
  {
    key: '3',
    icon: <PieChartOutlined />,
    label: 'nav 3',
  },
];

const Menus = () => {

  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={['1']}
      items={menus}
    />
  );
};

export default Menus;