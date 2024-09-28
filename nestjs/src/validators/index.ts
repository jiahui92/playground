import { z } from 'zod';
import { BadRequestException } from '@nestjs/common';
import { userValidator } from './user';

/**
 * 用于把Prisma.{Model}CreateInput部分属性变为禁止传入(Omit)和非必填(Partial)
 * @param T Prisma.{Model}CreateInput
 * @param OmitKeys 设置为禁止传入的key
 * @param PartialKeys 设置为非必填的key
 */
export type MakeCreateType<
  T,
  OmitKeys extends keyof T,
  PartialKeys extends keyof T,
> = Omit<T, OmitKeys | PartialKeys> & Partial<Pick<T, PartialKeys>>;

export type PartialKeys<T, Keys extends keyof T> = Omit<T, Keys> &
  Partial<Pick<T, Keys>>;

export const validatorMap: Record<string, ModelValidator> = {
  User: userValidator,
};
export interface ModelValidator {
  /***
   * schema通常要支持三个场景
   * 1. prisma.create  --> 使用默认schema
   * 2. prisma.update  --> schema.partial()
   * 3. 自定义校验      --> schema.partial().required({...})
   */
  schema: z.ZodObject<any>;
  // prisma.create时默认值 或 其它处理
  initCreateData?: (data) => any;
  // prisma.update时默认值 或 其它处理
  initUpdateData?: (data) => any;
}

type Data = Record<string, any>;
type zObject = z.ZodObject<Data>;
export const validate = (
  model: string,
  data: Data | Array<Data>,
  resolveSchema: (schema: zObject) => zObject,
) => {
  let schema: zObject | z.ZodArray<zObject> = validatorMap[model].schema;
  if (schema) {
    if (resolveSchema) {
      schema = resolveSchema(schema);
    }
    if (Array.isArray(data)) {
      schema = z.array(schema);
    }
    const result = schema.safeParse(data);
    if (result.success) {
      return result.data;
    } else {
      // https://zod.dev/ERROR_HANDLING
      const message = result.error.issues
        .map((error) => `${error.path}: ${error.message}`)
        .join(', ');
      throw new BadRequestException(message, {
        cause: result.error,
        description: result.error.toString(),
      });
    }
  }
  return data;
};
