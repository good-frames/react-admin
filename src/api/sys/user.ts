import Http from '@/api/request';

const http = new Http('', false);

export type SignInRes = {
  token: string
};

export function login(data?: any) {
  return http.post<SignInRes>({
    url: '/login',
    isMock: true,
    data
  });
}