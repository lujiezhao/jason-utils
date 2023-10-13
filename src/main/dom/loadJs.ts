import { noop } from '../main';
/**
 * @description 在页面添加 script 标签加载 js
 * @param url 资源链接
 * @param onload onload 会调
 */
export const loadJs = async (params: { url: string; onload?: () => void }) => {
  const { url = '', onload = noop } = params;
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.onload = () => {
    onload();
  };
  script.src = url;
  const node = document.getElementsByTagName('script')[0];
  node?.parentNode?.insertBefore(script, node);
};

