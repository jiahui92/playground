import { InternalServerErrorException } from '@nestjs/common';
import { City } from '@prisma/client';

const cityMiddleware = async (params, next) => {
  if (params.model === 'city' && params.action === 'findFirst') {
    const result: City = await next(params);
    if (result.name !== undefined) {
      // delete result.population;
      throw new InternalServerErrorException(
        `You do not have permission to access city.name.`,
      );
    }

    return result;
  }
  return next(params);
};

export const prismaMiddlewares = [cityMiddleware];
