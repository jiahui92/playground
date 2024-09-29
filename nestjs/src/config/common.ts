// 请求和gql超过2秒记录日志
export const SLOW_REQUEST_THRESHOLD = 2000;

export const jwtConstants = {
  // TODO 更换密钥
  secret: 'DO NOT USE THIS VALUE.', // jwt 密钥
  expiresIn: '7d', // jwt token 过期时间
};
