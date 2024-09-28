import { InternalServerErrorException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { isProd, logger } from 'src/common/utils';
import { validate, validatorMap } from 'src/validators';

export const validationMiddleware: Prisma.Middleware = async (params, next) => {
  const validator = validatorMap[params.model];
  const isCreate = params.action.startsWith('create');
  const isUpdate = params.action.startsWith('update');
  if (validator && (isCreate || isUpdate)) {
    // TODO 兼容upsert
    const isArrayData = Array.isArray(params.args.data);
    let arr: any[] = isArrayData ? params.args.data : [params.args.data];
    if (isCreate && validator.initCreateData) {
      arr = arr.map((item) => {
        return validator.initCreateData(item);
      });
    }
    if (isUpdate && validator.initUpdateData) {
      arr = arr.map((item) => {
        return validator.initUpdateData(item);
      });
    }

    const data = isArrayData ? arr : arr[0];
    params.args.data = validate(params.model, data, (schema) => {
      return isCreate ? schema : schema.partial();
    });
  }

  return next(params).catch((error) => {
    logger.error({ params, error });
    // 默认的error.message会暴露堆栈信息
    if (isProd()) {
      throw new InternalServerErrorException('', {
        description: `${error.code} ${error.name} ${error.meta?.target}`,
      });
    }
    throw error;
  });
};
