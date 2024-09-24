import { z } from 'zod';
import { BadRequestException } from '@nestjs/common';
import { userValidator } from './user';

export interface ModelValidator {
  /***
   * schema通常要支持三个场景
   * 1. prisma.create  --> 使用默认schema
   * 2. prisma.update  --> schema.partial()
   * 3. 自定义校验      --> schema.partial().required({...})
   */
  schema: z.Schema;
  // prisma.create时默认值 或 其它处理
  onCreate?: (data: any) => void;
  // prisma.update时默认值 或 其它处理
  onUpdate?: (data: any) => void;
}

export const validatorMap: Record<string, ModelValidator> = {
  User: userValidator,
};

export const validate = <T extends Record<string, any>>(
  model: string,
  data: T,
  cb: (schema: z.Schema) => z.Schema,
): T => {
  let schema = validatorMap[model].schema;
  if (schema) {
    if (cb) {
      schema = cb(schema);
    }
    const result = schema.safeParse(data);
    if (result.success) {
      return result.data;
    } else {
      throw new BadRequestException(result);
    }
  }
  return data;
};
