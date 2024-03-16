import { ReactNode, Suspense } from 'react';

const Loading = () => {
  return <div>loading...</div>;
};

export function lazyLoad(children: ReactNode): ReactNode {
  return (
    <Suspense fallback={<Loading/>}>
      {children}
    </Suspense>
  );
}