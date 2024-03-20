import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import { useRouter } from '@/hooks';
import { useMenu } from '@/layout/hooks/useMenu';
import styles from '../../styles/nav.module.scss';

const Breadcrumbs = () => {
  const { matches } = useRouter();
  const [items, setItems] = useState<any[]>([]);

  const { flatMenus } = useMenu();
  
  useEffect(() => {
    const arr = matches.reduce((list, match) => {
      if (match.pathname !== '/') {
        list.push({
          title: <Link to={match.pathname}>{flatMenus[match.pathname]}</Link>,
        });
      }

      return list;
    }, [] as any[]);
    setItems(arr);
  }, [matches, flatMenus]);

  return (
    <Breadcrumb
      items={items}
      className={styles.breadcrumb}
    />
  );
};

export default Breadcrumbs;