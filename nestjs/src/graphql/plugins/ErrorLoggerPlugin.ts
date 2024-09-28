import { ApolloServerPlugin } from '@apollo/server';
import { BaseContext } from 'apollo-server-plugin-base';
import { logError } from 'src/common/utils';

export const ErrorLoggerPlugin: ApolloServerPlugin<BaseContext> = {
  async requestDidStart() {
    return {
      async didEncounterErrors(requestContext) {
        logError({
          method: 'POST',
          url: `/graphql`,
          body: requestContext.request.query,
          userId: requestContext.contextValue?.user?.id,
          error: requestContext.errors,
        });
      },
    };
  },
};
