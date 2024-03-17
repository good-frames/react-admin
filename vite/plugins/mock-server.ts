import { viteMockServe } from 'vite-plugin-mock';

export default function createMockServer(command: string) {
  return command === 'serve' && viteMockServe({
    mockPath: 'mocks', //mock文件地址
    enable: true,
    watchFiles: true,
    logger: true, //是否在控制台显示请求日志
  });
}
