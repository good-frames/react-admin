import { ReactNode, Suspense } from 'react';
import Loading from './components/loading';

export function lazyLoad(children: ReactNode): ReactNode {
  return (
    <Suspense fallback={<Loading/>}>
      {children}
    </Suspense>
  );
}