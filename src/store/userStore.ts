import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import * as api from '@/api/sys/user';
import { immer } from 'zustand/middleware/immer';

type UserStore = {
  accessToken: string;
  userInfo: api.UserInfo;
  setAccessToken: (token: string) => void;
  setUserInfo: (userInfo: api.UserInfo) => void;
}

const useUserStore = create<UserStore>()(
  immer(
    persist(
      (set) => ({
        accessToken: '',
        userInfo: {},
        setAccessToken: (token: string) => {
          set(state => state.accessToken = token);
        },
        setUserInfo: (userInfo: api.UserInfo) => {
          set(state => state.userInfo = userInfo);
        }
      }),
      {
        name: 'user',
        partialize: (state) =>
          Object.fromEntries(
            Object.entries(state).filter(([key]) => !['userInfo'].includes(key)),
          ),
      }
    )
  )
);

// 用户登录
export const login = async () => {
  const setAccessToken = useUserStore.getState().setAccessToken;

  const res = await api.login();

  setAccessToken(res.token);
};

// 获取用户信息
export const getUserInfo = async () => {
  const setUserInfo = useUserStore.getState().setUserInfo;

  const userinfo = await api.getUserInfo();

  setUserInfo(userinfo);

  return userinfo;
};

export default useUserStore;
