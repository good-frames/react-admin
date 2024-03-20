import userStore from '@/store/userStore';
import styles from '@/layout/styles/nav.module.scss';

const User = () => {
  const userInfo = userStore(state => state.userInfo);

  return (
    <div className={styles.user}>
      <div className={styles['user-nickname']}>{userInfo.nickName}</div>
      <img src={userInfo.avatar} className={styles['user-avatar']} />
    </div>
  );
};

export default User;