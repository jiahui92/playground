import { resolve } from 'path';
import winston = require('winston');

// 是否为开发环境
export function isProd() {
  return process.env.NODE_ENV === 'production';
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

export function createResponse(data, message = 'Success', statusCode = 200) {
  return { data, message, statusCode, success: true };
}

const { combine, timestamp, label, printf } = winston.format;
export const logger = winston.createLogger({
  format: combine(
    label({ label: 'Nestjs' }),
    timestamp(),
    printf(({ level, message, label, timestamp }) => {
      let str;
      try {
        str = message instanceof Object ? JSON.stringify(message) : message;
      } catch (error) {
        str = message;
      }
      return `${timestamp} [${label}] ${level}: ${str}`;
    }),
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs/winston.log' }),
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
  ],
});
