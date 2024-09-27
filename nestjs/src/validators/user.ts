import { z } from 'zod';
import { v4 as uuidv4 } from 'uuid';
import { Prisma } from '@prisma/client';
import { Role } from '../common/const';
import { MakeCreateType, ModelValidator } from './index';
import { NexusGenInputs } from 'src/generated/nexus-typings';

const userSchema = z
  .object({
    id: z.string().uuid(),
    email: z.string().email(),
    username: z.string().max(50),
    password: z.string().min(8),
    roles: z.array(z.nativeEnum(Role)),
    isActive: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date(),
  })
  // 按数据库中的非必填来定义
  .partial({
    updatedAt: true,
  });

export type UserCreate = MakeCreateType<
  Prisma.UserCreateInput,
  'id' | 'createdAt', // 禁止传入参数
  'roles' | 'isActive' // 可选传入参数
>;
export type UserUpdate = Omit<Prisma.UserCreateInput, 'updatedAt'>;
export const userValidator = {
  schema: userSchema,
  // TODO roles的类型变成any了
  initCreateData: (data: NexusGenInputs['UserCreateInput']) => {
    const result: Prisma.UserCreateInput = {
      ...data,
      id: uuidv4(),
      createdAt: new Date(),
      roles: data.roles || [Role.USER],
      isActive: data.isActive ?? true,
    };
    return result;
  },
  initUpdateData: (data: UserUpdate) => {
    const result: Prisma.UserUpdateInput = {
      ...data,
      updatedAt: new Date(),
    };
    return result;
  },
} satisfies ModelValidator;
