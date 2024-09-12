import { resolve } from 'path';

// 是否为开发环境
export function isDev() {
  return process.env.NODE_ENV !== 'production';
}

// 获取相对于项目根目录的路径
export function getPath(relativePath: string) {
  return resolve(process.cwd(), relativePath);
}

// 模拟一个认证函数
export function getUserFromToken(token: string) {
  // 在这里从 token 中获取用户
  return token ? { id: 1, name: 'admin', isAdmin: false } : null;
}

export function isAdmin(ctx): boolean {
  return ctx.user?.isAdmin === true;
}
