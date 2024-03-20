// import Mock from 'mockjs';

// 接口延迟
const TIMEOUT = [100, 500];

export default [
  {
    url: '/dev-api/mock/login',
    method: 'post',
    timeout: TIMEOUT,
    response: () => {
      return {
        code: 200,
        data: {
          token: 'djkafjkldfajklaadfasdf-dafsafas'
        }
      };
    }
  },
  {
    url: '/dev-api/mock/userinfo',
    method: 'get',
    timeout: TIMEOUT,
    response: () => {
      return {
        code: 200,
        data: {
          nickName: '东东杰',
          gender: 1,
          phone: '13243181583',
          avatar: 'https://k.sinaimg.cn/n/sinakd20106/560/w1080h1080/20240302/e96c-eff16e358d67ed2cb20e949766756e56.jpg/w700d1q75cms.jpg'
        }
      };
    }
  },
  {
    url: '/dev-api/mock/menus',
    method: 'get',
    timeout: TIMEOUT,
    response: () => {
      return {
        code: 200,
        data: [
          {
            key: '/home',
            icon: 'react',
            label: 'home-1',
            children: [
              {
                key: '/home/subhome1',
                icon: 'react',
                label: 'subhome1-1'
              },
              {
                key: '/home/subhome2',
                icon: 'react',
                label: 'subhome1-2'
              },
            ]
          },
          {
            key: '/home2',
            icon: 'react',
            label: 'home-2',
            children: [
              {
                key: '/home2/subhome21',
                icon: 'react',
                label: 'subhome2-1'
              },
              {
                key: '/home2/subhome22',
                icon: 'react',
                label: 'subhome2-2'
              },
            ]
          },
          {
            key: '/test',
            icon: 'react',
            label: 'test'
          },
          {
            key: 'http://www.baidu.com',
            icon: 'react',
            label: '百度外部链接'
          }
        ]
      };
    }
  },
];
