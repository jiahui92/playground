import { ApolloServerPlugin } from '@apollo/server';
import { SLOW_REQUEST_THRESHOLD } from 'src/common/const';
import { logger } from 'src/common/utils';

export const LoggerPlugin: ApolloServerPlugin = {
  async requestDidStart() {
    const startTime = Date.now(); // 请求开始时间

    return {
      async willSendResponse(requestContext) {
        const endTime = Date.now(); // 请求结束时间
        const duration = endTime - startTime; // 请求耗时
        if (duration < SLOW_REQUEST_THRESHOLD) return;

        const { errors } = requestContext;

        // 构建日志信息
        const log = {
          ...requestContext.request,
          duration, // 请求执行的时间
          status: errors ? 'Error' : 'Success',
          errors,
        };

        const msg = `GraphQL Slow Request: ${JSON.stringify(log)}`;
        logger.warn(msg);
      },
    };
  },
};
