
/**
 * @description setTimeout封装
 * @param timeout 延迟的时间
 * @returns promist
 */
export const sleep = (timeout: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};