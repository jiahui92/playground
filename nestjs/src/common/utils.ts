import { resolve } from 'path';

// 是否为开发环境
export function isDev() {
  return process.env.NODE_ENV !== 'production';
}

// 获取相对于项目根目录的路径
export function getPath(relativePath: string) {
  return resolve(process.cwd(), relativePath);
}
