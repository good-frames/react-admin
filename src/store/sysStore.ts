import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import * as api from '@/api/sys/user';

type SysStore = {
  menus: [];
  setMenus: (menus: []) => void
}

const useSysStore = create<SysStore>((set) => ({
  menus: [],
  setMenus: (menus: []) => {
    set({
      menus
    });
  }
}));

// 获取用户菜单
export const getUserMenus = async () => {
  const setMenus = useSysStore.getState().setMenus;

  const res = await api.getMenus();

  setMenus(res);
};

export default useSysStore;