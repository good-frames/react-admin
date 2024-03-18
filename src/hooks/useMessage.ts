import { message } from 'antd';
import { NoticeType } from 'antd/es/message/interface';

type Option = {
  type?: NoticeType | undefined;
  content?: string;
  duration?: number;
}

function generateUniqueId(): string {
  // 获取随机数生成器
  const rng = Math.random().toString().substring(2) + Date.now().toString();
  // 将随机数生成器和当前时间戳拼接成32位长度的字符串
  const uniqueId = `${rng}${Date.now()}`;
  return uniqueId;
}

export function useMessage() {
  const [messageApi, contextHolder] = message.useMessage();
  const key = generateUniqueId();

  // 显示message
  const showMessage = (options: Option): Promise<void> => {
    const { type, content, duration } = Object.assign({}, {type: 'loading', content: '加载中', duration: 0} , options);
    return new Promise((resolve) => {
      messageApi.open({
        key: key,
        type,
        content,
        duration,
      })
        .then(() => {
          resolve();
        });
    });
  };

  // 隐藏message
  const hideMessage = (update = false, options: Option): Promise<void> => {
    const { type, content, duration } = Object.assign({}, {type: 'success', content: '加载成功', duration: 1} , options);
    return new Promise((resolve) => {
      if (update) {
        messageApi.open({
          key: key,
          type,
          content,
          duration,
        })
          .then(() => {
            resolve();
          });
        if (!duration) {
          messageApi.destroy;
        }
      } else {
        messageApi.destroy;
      }

    });
  };

  return {
    contextHolder,
    showMessage,
    hideMessage
  };
}