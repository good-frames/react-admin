import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import * as api from '@/api/sys/user';

type UserStore = {
  accessToken: string;
  userInfo: api.UserInfo;
  setAccessToken: (token: string) => void;
  setUserInfo: (userInfo: api.UserInfo) => void;
}

const useUserStore = create(persist<UserStore>(
  (set) => ({
    accessToken: '',
    userInfo: {},
    setAccessToken: (token: string) => {
      set({
        accessToken: token
      });
    },
    setUserInfo: (userInfo: api.UserInfo) => {
      set({
        userInfo
      });
    }
  }),
  {
    name: 'user'
  }
));

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
};

export default useUserStore;
