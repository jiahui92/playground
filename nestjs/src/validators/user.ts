import { z } from 'zod';
import { v4 as uuidv4 } from 'uuid';
import { Prisma, User } from '@prisma/client';
import { Role } from '../common/const';
import { ModelValidator } from './index';

const userSchema: z.Schema<Prisma.UserUpdateInput> = z
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

export const userValidator: ModelValidator = {
  schema: userSchema,
  onCreate: (data: User) => {
    data.id = uuidv4();
    data.roles = [Role.USER];
    data.createdAt = new Date();
    data.isActive = true;
  },
  onUpdate: (data: User) => {
    data.updatedAt = new Date();
  },
};
