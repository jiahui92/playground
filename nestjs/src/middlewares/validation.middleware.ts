import { Prisma } from '@prisma/client';
import { validate, validatorMap } from 'src/validators';

export const validationMiddleware: Prisma.Middleware = async (params, next) => {
  const validator = validatorMap[params.model];
  const isCreate = params.action.startsWith('create');
  const isUpdate = params.action.startsWith('update');
  if (validator && (isCreate || isUpdate)) {
    // TODO 兼容upsert
    const isArrayData = Array.isArray(params.args.data);
    let data: any[] = isArrayData ? params.args.data : [params.args.data];
    if (isCreate && validator.initCreateData) {
      data = data.map((item) => {
        return validator.initCreateData(item);
      });
    }
    if (isUpdate && validator.initUpdateData) {
      data = data.map((item) => {
        return validator.initUpdateData(item);
      });
    }

    params.args.data = validate(params.model, data, (schema) => {
      return isCreate ? schema : schema.partial();
    });
  }
  return next(params);
};
