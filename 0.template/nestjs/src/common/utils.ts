import { HttpStatus } from '@nestjs/common';
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

interface ResponseData {
  success: boolean;
  statusCode?: number; // 默认 200 || 500
  data?: any;
  message?: string;
}
export function createResponse(d: ResponseData) {
  const defaultMessage = d.success ? 'Success' : 'Failed';
  const defaultStatusCode = d.success
    ? HttpStatus.OK
    : HttpStatus.INTERNAL_SERVER_ERROR;
  return {
    data: d.data,
    message: d.message || defaultMessage,
    statusCode: d.statusCode || defaultStatusCode,
    success: d.success,
  };
}

const { combine, timestamp, label, printf } = winston.format;
const logger = winston.createLogger({
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

interface LogData {
  method: string;
  url: string;
  body: any;
  userId: string;
  msg?: any; // 不能叫message，不然log.warn会只有message的输出
}

interface LogErrorData extends LogData {
  error: any;
  stacktrace?: any;
  extraData?: any;
}
export function logError(data: LogErrorData) {
  logger.error(data);
}

export function logWarn(data: LogData) {
  logger.warn(data);
}
