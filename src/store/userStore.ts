import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { login } from '@/api/sys/user';

type UserStore = {
  accessToken: string;
  userInfo: object;
  setAccessToken: (token: string) => void
}

const useUserStore = create(persist<UserStore>(
  (set) => ({
    accessToken: '',
    userInfo: {},
    setAccessToken: (token: string) => {
      set({
        accessToken: token
      });
    }
  }),
  {
    name: 'user'
  }
));

// 用户登录
export const uLogin = async () => {
  const setAccessToken = useUserStore.getState().setAccessToken;

  const res = await login();

  setAccessToken(res.token);
};

export default useUserStore;
