import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export function useRouter() {
  const navigate = useNavigate();
  const location = useLocation();

  console.log('location',location);

  const router = useMemo(
    () => ({
      back: () => navigate(-1),
      forward: () => navigate(1),
      reload: () => window.location.reload(),
      push: (href: string) => navigate(href),
      replace: (href: string) => navigate(href, { replace: true }),
    }),
    [navigate],
  );

  return {
    router,
    location
  };
}