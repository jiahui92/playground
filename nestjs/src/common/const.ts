export const SLOW_REQUEST_THRESHOLD = 1000; // 请求和gql超过1秒记录日志

export enum Role {
  GUEST = 'guest', // 未登录用户
  USER = 'user',
  ADMIN = 'admin',
}
