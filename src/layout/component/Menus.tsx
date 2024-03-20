import { useEffect, useState } from 'react';
import { Menu, MenuProps } from 'antd';
import { isHttp } from '@/utils/validate';
import { useRouter } from '@/hooks';
import { useMenu } from '../hooks/useMenu';


const Menus = () => {

  const { router, location, matches } = useRouter();
  const { menus, ancestorsKeys } = useMenu();
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const [openKeys, setOpenKeys] = useState<string[]>([]);


  useEffect(() => {
    setSelectedKeys([location.pathname]);
    setDefaultOpenKeys(matches);

  }, [location.pathname, matches, ancestorsKeys]);


  // 设置默认打开菜单
  const setDefaultOpenKeys = (matches: any[]) => {
    const latestOpenKey = matches.find(match => ancestorsKeys.includes(match.pathname));

    if (latestOpenKey && !openKeys.includes(latestOpenKey.pathname)) {
      setOpenKeys(state => [...state, latestOpenKey.pathname]);
    }
  };

  // 点击菜单
  const onClick: MenuProps['onClick'] = ({ key }) => {
    if (isHttp(key)) {
      window.open(key);
      return;
    }
    router.push(key);
  };

  // 展开/收起菜单
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