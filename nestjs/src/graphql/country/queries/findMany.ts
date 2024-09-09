import { queryField, nonNull, list } from 'nexus';

export const CountryFindManyQuery = queryField('findManyCountry', {
  type: nonNull(list(nonNull('country'))),
  args: {
    where: 'countryWhereInput',
    orderBy: list('countryOrderByWithRelationInput'),
    cursor: 'countryWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('CountryScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.country.findMany({
      ...args,
      ...select,
    });
  },
});
