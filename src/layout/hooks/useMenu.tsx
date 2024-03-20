import SvgIcon from '@/components/SvgIcon';
import useSysStore, { getUserMenus } from '@/store/sysStore';
import { isEmpty } from 'lodash';
import { useEffect, useState } from 'react';
import styles from '../styles/menus.module.scss';

type MenuItem = {
  key: string;
  label: string;
  icon?: React.ReactNode;
  children?: MenuItem[];
}

function getItem(item: MenuItem) {
  return {
    key: item.key,
    label: item.label,
    icon: item.icon ? <SvgIcon name={item.icon as string} className={styles['menu-icon']}></SvgIcon> : <></>,
    children: item.children,
  };
}

// 拼装左侧菜单
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

// 获取父级菜单的path列表
function getAncestorsMenus(menus: MenuItem[], root: string[] = []) {
  return menus.reduce((arr, menu) => {
    if (menu.children && menu.children.length) {
      arr.push(menu.key);
      getAncestorsMenus(menu.children, arr);
    }
    return arr;
  }, root);
}

function getBreadcrumbNameMap(menus: MenuItem[], breadcrumbNameObj: {[key: string]: string} = {}) {
  menus.forEach((item) => {
    //遍历数组项的对象
    const menuPath = item.key;
    breadcrumbNameObj[menuPath] = item.label;
    if (item.children && item.children.length) {
      getBreadcrumbNameMap(item.children, breadcrumbNameObj);
    }
  });

  return breadcrumbNameObj;
}

export function useMenu() {
  const menuss = useSysStore(state => state.menus);
  // 左侧菜单
  const [menus, setMenus] = useState<MenuItem[]>([]);
  // 父级菜单
  const [ancestorsKeys, setAncestorsKeys] = useState<string[]>([]);
  // 扁平菜单
  const [flatMenus, setFlatMenus] = useState<{[key: string]: string}>({});

  useEffect(() => {
    if (isEmpty(menuss)) {
      getUserMenus();
    }
  }, []);

  // 组装菜单，计算哪些是父菜单
  useEffect(() => {
    const m = assemblyMenus(menuss);
    const r = getAncestorsMenus(menuss);
    const f = getBreadcrumbNameMap(menuss);
    setFlatMenus(f);
    setAncestorsKeys(r);
    setMenus(m);
  }, [menuss]);


  return {
    menus,
    ancestorsKeys,
    flatMenus
  };
}