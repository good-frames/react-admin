import { ReactNode, Suspense } from 'react';
import Loading from './loading';

export function lazyLoad(children: ReactNode): ReactNode {
  return (
    <Suspense fallback={<Loading/>}>
      {children}
    </Suspense>
  );
}