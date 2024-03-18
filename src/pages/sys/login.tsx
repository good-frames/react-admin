import { useSearchParams } from 'react-router-dom';
import { useRouter, useMessage } from '@/hooks';
import { login as uLogin } from '@/store/userStore';


const Login = () => {
  const { router } = useRouter();
  const { contextHolder, showMessage, hideMessage } = useMessage();

  const [params] = useSearchParams();

  const redirect = params.get('redirect');

  const login = async () => {
    showMessage({
      content: '登录中...'
    });
    await uLogin();
    await hideMessage(true, {
      content: '登录成功'
    });
    router.replace(redirect ? redirect : '/home');
  };


  return (
    <div>
      {contextHolder}
      <div onClick={login}>login</div>
    </div>
  );
};

export default Login;
