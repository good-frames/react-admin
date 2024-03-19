import { SwitchTransition, CSSTransition } from 'react-transition-group';

import styles from '../styles/main.module.less';
import { useRouter } from '@/hooks';
import { useOutlet } from 'react-router-dom';

const Main = () => {
  const { location } = useRouter();
  const outlet = useOutlet();

  return (
    <SwitchTransition mode="out-in">
      <CSSTransition
        key={location.pathname}
        timeout={200}
        addEndListener={() => {}}
        appear={true}
        classNames={{
          enter: styles['fade-enter'],
          enterActive: styles['fade-enter-active'],
          exit: styles['fade-exit'],
          exitActive: styles['fade-exit-active'],
        }}
      >
        <div className={styles.main}>
          <div className={styles['main-content']}>
            {outlet}
          </div>
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
};

export default Main;