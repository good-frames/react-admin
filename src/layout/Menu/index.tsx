import { useEffect, useState } from 'react';
import { Menu, MenuProps } from 'antd';
import { isEmpty } from 'lodash';
import { isHttp } from '@/utils/validate';
import { useRouter } from '@/hooks';

import useSysStore, { getUserMenus } from '@/store/sysStore';
import MenuItem from 'antd/es/menu/MenuItem';

type MenuItem = {
  key: string;
  label: string;
  icon?: string;
  children?: MenuItem[];
}

function getItem(item: MenuItem) {
  return {
    key: item.key,
    label: item.label,
    children: item.children,
  };
}

function assemblyMenus(menus: MenuItem[]) {
  return menus.reduce((t, menu) => {
    const mm = getItem(menu);
    if (mm.children && mm.children.length) {
      mm.children = assemblyMenus(mm.children);
    }
    t.push(mm);
    return t;
  }, [] as MenuItem[]);
}

function getAncestorsMenus(menus: MenuItem[], root: string[] = []) {
  return menus.reduce((arr, menu) => {
    if (menu.children && menu.children.length) {
      arr.push(menu.key);
      getAncestorsMenus(menu.children, arr);
    }
    return arr;
  }, root);
}

const Menus = () => {

  const { router, location, matches } = useRouter();
  const [ancestorsKeys, setAncestorsKeys] = useState<string[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  const menuss = useSysStore(state => state.menus);
  const [menus, setMenus] = useState<MenuItem[]>([]);

  useEffect(() => {
    if (isEmpty(menuss)) {
      getUserMenus();
    }
  }, []);

  // 组装菜单，计算哪些是父菜单
  useEffect(() => {
    const m = assemblyMenus(menuss);
    const r = getAncestorsMenus(menuss);
    setAncestorsKeys(r);
    setMenus(m);
  }, [menuss]);

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