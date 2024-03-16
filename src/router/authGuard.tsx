import { useCallback, useEffect } from 'react';
import { useRouter } from '@/hooks';

type Props = {
  children: React.ReactNode;
};

const whitePath: string[] = ['/login'];

const PrivateRoute = ({children}: Props) => {
  const { router, location } = useRouter();

  const check = useCallback(() => {
    if (!whitePath.includes(location.pathname)) {
      router.replace('/login');
    }
    // if (!accessToken) {
    //   router.replace('/login');
    // }
  }, [router]);

  useEffect(() => {
    check();
  }, [check]);

  return <>{children}</>;
};

export default PrivateRoute;