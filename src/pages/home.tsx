import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    console.log('home');
  }, []);


  return (
    <>
      <div style={{background: 'green'}}>home</div>
      <div style={{margin: '100px 0'}}>123</div>
      <div style={{margin: '100px 0'}}>123</div>
      <div style={{margin: '100px 0'}}>123</div>
      <div style={{margin: '100px 0'}}>123</div>
      <div style={{margin: '100px 0'}}>123</div>
      <div style={{margin: '100px 0'}}>123</div>
      <div style={{margin: '100px 0'}}>123</div>
      <div style={{margin: '100px 0'}}>123</div>
      <div style={{margin: '100px 0'}}>123</div>
      <div style={{margin: '100px 0'}}>123</div>
      <div style={{margin: '100px 0'}}>456</div>
    </>
  );
};

export default Home;
