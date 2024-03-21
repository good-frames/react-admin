import { useEffect } from 'react';

const SubHome = () => {
  useEffect(() => {
    console.log('home');
  }, []);


  return <div>SubHome</div>;
};

export default SubHome;
