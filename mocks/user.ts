// import Mock from 'mockjs';

// 接口延迟
const TIMEOUT = 2000;

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
          avatar: 'https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=false&word=%E5%A4%B4%E5%83%8F&hs=0&pn=0&spn=0&di=46137345&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&ie=utf-8&oe=utf-8&cl=2&lm=-1&cs=4018524898%2C339292907&os=210109185%2C59843300&simid=4018524898%2C339292907&adpicid=0&lpn=0&ln=30&fr=ala&fm=&sme=&cg=head&bdtype=11&oriquery=%E5%A4%B4%E5%83%8F&objurl=https%3A%2F%2Fk.sinaimg.cn%2Fn%2Fsinakd20106%2F560%2Fw1080h1080%2F20240302%2F4b5e-6347ebbf001cd7e26a2ab0579c54085b.jpg%2Fw700d1q75cms.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fv3_z%26e3Bftgw_z%26e3Bv54_z%26e3BvgAzdH3Fw6ptvsjfAzdH3FetjoAzdH3Fddmbcmla90AzdH3Frb0n0l110ad0a8wdao&gsm=&islist=&querylist=&dyTabStr=MCwzLDEsMiw0LDYsNSw4LDcsOQ%3D%3D'
        }
      };
    }
  },
];
