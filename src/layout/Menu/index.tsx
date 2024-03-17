import { Menu, MenuProps } from 'antd';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined
} from '@ant-design/icons';
import { useRouter } from '@/hooks';
import { useEffect, useState } from 'react';

const menus = [
  {
    key: '/home',
    icon: <DesktopOutlined />,
    label: 'home',
    children: [
      {
        key: '/home/subhome1',
        icon: <PieChartOutlined/>,
        label: 'subhome'
      },
      {
        key: '/home/subhome2',
        icon: <PieChartOutlined/>,
        label: 'subhome'
      }
    ]
  },
  {
    key: '/home2',
    icon: <DesktopOutlined />,
    label: 'home2',
    children: [
      {
        key: '/home2/subhome21',
        icon: <PieChartOutlined/>,
        label: 'subhome'
      },
      {
        key: '/home2/subhome22',
        icon: <PieChartOutlined/>,
        label: 'subhome'
      }
    ]
  },
  {
    key: '/test',
    icon: <FileOutlined />,
    label: 'test',
  },
  // {
  //   key: '3',
  //   icon: <PieChartOutlined />,
  //   label: 'nav 3',
  // },
];

const Menus = () => {

  const { router, location, matches } = useRouter();
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  useEffect(() => {
    setSelectedKeys([location.pathname]);
  }, [location.pathname, matches]);

  const onClick: MenuProps['onClick'] = ({key}) => {
    router.push(key);
  };

  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey) {
      setOpenKeys(keys);
    } else {
      setOpenKeys([]);
    }
  };

  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={selectedKeys}
      selectedKeys={selectedKeys}
      defaultOpenKeys={openKeys}
      openKeys={openKeys}
      items={menus}
      onOpenChange={onOpenChange}
      onClick={onClick}
    />
  );
};

export default Menus;