import { useSearchParams } from 'react-router-dom';
import { useRouter } from '@/hooks';
// import { userLogin } from '@/store/userStore';
import { uLogin } from '@/store/userStore';


const Login = () => {
  const { router } = useRouter();
  // const uLogin = userLogin();

  const [params] = useSearchParams();

  const redirect = params.get('redirect');

  const login = async () => {
    await uLogin();
    router.replace(redirect ? redirect : '/home');
  };


  return (
    <div>
      <div onClick={login}>login</div>
    </div>
  );
};

export default Login;
