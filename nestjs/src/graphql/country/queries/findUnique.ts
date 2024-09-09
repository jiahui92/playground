import { queryField, nonNull } from 'nexus';

export const CountryFindUniqueQuery = queryField('findUniqueCountry', {
  type: 'country',
  args: {
    where: nonNull('countryWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.country.findUnique({
      where,
      ...select,
    });
  },
});
