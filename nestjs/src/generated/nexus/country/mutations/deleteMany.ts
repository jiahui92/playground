import { mutationField, nonNull } from 'nexus';

export const CountryDeleteManyMutation = mutationField('deleteManyCountry', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'countryWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.country.deleteMany({ where } as any);
  },
});
