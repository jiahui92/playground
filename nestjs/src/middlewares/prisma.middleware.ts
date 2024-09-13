import { InternalServerErrorException } from '@nestjs/common';
import { city } from '@prisma/client';

const cityMiddleware = async (params, next) => {
  if (params.model === 'city' && params.action === 'findFirst') {
    const result: city = await next(params);
    if (result.Name !== undefined) {
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
