import Http from '@/api/request';

const http = new Http('', false);

// 登录
type SignInRes = {
  token: string
};
export function login(data?: any) {
  return http.post<SignInRes>({
    url: '/login',
    isMock: true,
    data
  });
}

// 获取用户信息
export type UserInfo = {
  nickName?: string;
  gender?: number;
  avatar?: string;
  phone?: string;
}
export function getUserInfo() {
  return http.get<UserInfo>({
    url: '/userinfo'
  });
}