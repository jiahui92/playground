import { queryField, list } from 'nexus';

export const CountryFindFirstQuery = queryField('findFirstCountry', {
  type: 'country',
  args: {
    where: 'countryWhereInput',
    orderBy: list('countryOrderByWithRelationInput'),
    cursor: 'countryWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('CountryScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.country.findFirst({
      ...args,
      ...select,
    });
  },
});
