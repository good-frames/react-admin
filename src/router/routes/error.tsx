import Page403 from '@/pages/sys/error/403';
import Page404 from '@/pages/sys/error/404';
import Page500 from '@/pages/sys/error/500';

export default [
  {
    path: '/403',
    element: <Page403></Page403>
  },
  {
    path: '/404',
    element: <Page404></Page404>
  },
  {
    path: '/500',
    element: <Page500></Page500>
  }
];