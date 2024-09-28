import { ApolloServerPlugin } from '@apollo/server';
import { SLOW_REQUEST_THRESHOLD } from 'src/common/const';
import { logWarn } from 'src/common/utils';

export const LoggerPlugin: ApolloServerPlugin = {
  async requestDidStart() {
    const startTime = Date.now(); // 请求开始时间

    return {
      async willSendResponse(requestContext) {
        const endTime = Date.now(); // 请求结束时间
        const duration = endTime - startTime; // 请求耗时
        if (duration < SLOW_REQUEST_THRESHOLD) return;

        // const { errors } = requestContext;
        const req = requestContext.request;
        const context: any = requestContext.contextValue;

        logWarn({
          method: 'POST',
          url: '/graphql',
          body: req.http?.body,
          userId: context.user?.id,
          msg: `GraphQL Slow API: ${duration}ms;`,
          // error: errors,
        });
      },
    };
  },
};
