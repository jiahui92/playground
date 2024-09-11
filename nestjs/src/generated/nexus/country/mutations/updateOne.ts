import { mutationField, nonNull } from 'nexus';

export const CountryUpdateOneMutation = mutationField('updateOneCountry', {
  type: nonNull('country'),
  args: {
    data: nonNull('countryUpdateInput'),
    where: nonNull('countryWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.country.update({
      where,
      data,
      ...select,
    });
  },
});
