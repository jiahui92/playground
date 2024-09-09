import { mutationField, nonNull } from 'nexus';

export const CountrylanguageDeleteManyMutation = mutationField(
  'deleteManyCountrylanguage',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'countrylanguageWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.countrylanguage.deleteMany({ where } as any);
    },
  },
);
