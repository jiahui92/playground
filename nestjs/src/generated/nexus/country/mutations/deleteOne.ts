import { mutationField, nonNull } from 'nexus';

export const CountryDeleteOneMutation = mutationField('deleteOneCountry', {
  type: 'country',
  args: {
    where: nonNull('countryWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.country.delete({
      where,
      ...select,
    });
  },
});
