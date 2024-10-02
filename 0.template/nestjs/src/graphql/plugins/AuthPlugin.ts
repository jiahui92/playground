import { ApolloServerPlugin } from '@apollo/server';
import { ForbiddenException } from '@nestjs/common';
import { JwtPayload } from 'src/middlewares/req.middleware';

export const AuthPlugin: ApolloServerPlugin = {
  async requestDidStart(ctx) {
    const user: JwtPayload = (ctx.contextValue as any).user;
    if (!user) {
      throw new ForbiddenException('Unauthorized');
    }
  },
};
