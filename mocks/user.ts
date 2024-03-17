export default [
  {
    url: '/dev-api/mock/login',
    method: 'post',
    response: () => {
      return {
        code: 200,
        data: {
          token: 'djkafjkldfajklaadfasdf-dafsafas'
        }
      };
    }
  }
];
