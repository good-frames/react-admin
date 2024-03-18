import { useCallback, useEffect } from 'react';
import { useRouter } from '@/hooks';
import useUserStore from '@/store/userStore';

type Props = {
  children: React.ReactNode;
};

const whitePath: string[] = ['/login'];

const PrivateRoute = ({children}: Props) => {
  const { router, location } = useRouter();
  const accessToken = useUserStore(state => state.accessToken);

  const check = useCallback(() => {
    // 如果不是白名单的路由并且没有登录
    if (!whitePath.includes(location.pathname) && !accessToken) {
      if (location.pathname !== '/login') {
        router.replace(`/login?redirect=${location.pathname}`);
      } else {
        router.replace('/login');
      }
      return;
    }

    
  }, [router]);

  useEffect(() => {
    check();
  }, [check]);

  return <>{children}</>;
};

export default PrivateRoute;