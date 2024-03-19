import { Suspense, useCallback, useEffect } from 'react';
import { isEmpty } from 'lodash';
import { useRouter } from '@/hooks';
import useUserStore, { getUserInfo } from '@/store/userStore';
import Loading from './loading';

type Props = {
  children: React.ReactNode;
};

const whitePath: string[] = ['/login'];

const PrivateRoute = ({children}: Props) => {
  const { router, location } = useRouter();
  const accessToken = useUserStore(state => state.accessToken);
  const userInfo = useUserStore(state => state.userInfo);
  // const menus = useSysStore(state => state.menus);

  const check = useCallback(async () => {
    // 如果不是白名单的路由并且没有登录
    if (!whitePath.includes(location.pathname) && !accessToken) {
      if (location.pathname !== '/login') {
        router.replace(`/login?redirect=${location.pathname}`);
      } else {
        router.replace('/login');
      }
      return;
    }

    if (isEmpty(userInfo)) {
      try {
        await getUserInfo();
      } catch (e) {
        return;
      }
    }  
  }, [router]);

  useEffect(() => {
    check();
  }, [check]);
  
  return (
    <Suspense fallback={<Loading/>}>
      {children}
    </Suspense>
  ); 
};

export default PrivateRoute;