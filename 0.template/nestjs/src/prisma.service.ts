import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { validationMiddleware } from './middlewares/validation.middleware';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  constructor() {
    super({
      log: ['query', 'info', 'warn', 'error'],
    });
    /***
     * nestjs与prisma.$extends结合不是很好，下面这段代码无效，暂时还是先用$use
     *  https://github.com/prisma/prisma/issues/18628
     * **/
    // this.$extends({
    //   name: 'permission: city.name',
    //   model: {
    //     city: {
    //       $allOperations(originalMethod, args) {
    //         const result: city = originalMethod(args);
    //         console.log(JSON.stringify(args));
    //         // 例如：移除敏感字段
    //         if (result.Name !== undefined) {
    //           // delete result.population;
    //           throw new Error(`You do not have permission to access city.name`);
    //         }
    //         return result;
    //       },
    //     },
    //   },
    // });
    [validationMiddleware].forEach((middleware) => {
      this.$use(middleware);
    });
  }
}
