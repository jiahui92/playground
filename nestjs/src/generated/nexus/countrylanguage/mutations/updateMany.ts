import { mutationField, nonNull } from 'nexus';

export const CountrylanguageUpdateManyMutation = mutationField(
  'updateManyCountrylanguage',
  {
    type: nonNull('BatchPayload'),
    args: {
      data: nonNull('countrylanguageUpdateManyMutationInput'),
      where: 'countrylanguageWhereInput',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.countrylanguage.updateMany(args as any);
    },
  },
);
